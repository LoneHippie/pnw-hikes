import axios from 'axios';
import cheerio from 'cheerio';

const baseUrl = "https://www.oregonhikers.org";

const camelize = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
};

async function getPage(url) {
    const selector = await axios.get(url)
        .then((response) => {
            return cheerio.load(response.data)
        })
    return selector;
};

const parser = {
    getTitle: (head) => {
        return head.find('h1').text();
    },
    getCoverImage: (selector, body) => {
        const cover = Array.from(body.find('.thumbimage')).filter((_, index) => index === 0);
        return `${baseUrl}${selector(cover).attr('src')}`;
    },
    getSummary: (selector, body) => {
        const paragraphs = Array.from(body.find('p'));

        let summary = [];

        paragraphs.forEach(el => {
            const p = String(selector(el).text().trim());

            if (p.length) {
                summary.push(p)
            }
        });

        return summary;
    },
    getAndSetDetails: (selector, body, target) => {
        const details = Array.from(body.find('ul').first().children('li'));

        details.forEach(el => {
            const keyAndValue = selector(el).text().trim().split(':');
            if (camelize(keyAndValue[0].trim()) !== "endPoint") {
                target[camelize(keyAndValue[0])] = keyAndValue[1].trim();
            } else {
                target["endingPoint"] = keyAndValue[1].trim();
            }
        });
    }
};

const setData = async(url) => {
    const pageData = {}

    const selector = await getPage(url)

    const head = selector('#mainContent');
    const body = selector('#mw-content-text');
    
    pageData.url = url;
    pageData.name = parser.getTitle(head);
    pageData.coverImage = parser.getCoverImage(selector, body);
    parser.getAndSetDetails(selector, body, pageData);
    pageData.summary = parser.getSummary(selector, body);

    return pageData;
};

const useScraper = async(urls) => {
    const scrappedData = [];

    try {
        let promises = [];

        for (let i = 0; i < urls.length; i++) {
            promises.push(setData(urls[i]));
        }

        await Promise.all(promises)
            .then(res => {
                scrappedData.push(res);
            })    
        return scrappedData.flat(1);
    } catch(err) {
        console.log(console.log(err));
    }
};

export default useScraper;