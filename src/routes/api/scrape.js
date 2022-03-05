import { useScraper } from '$lib/database/controllers';
import { Hike } from '$lib/database/models';
import dbConnectPromise from "$lib/database";


async function createNewHike(args) {
    const hike = new Hike(args);
    await hike.save();
}

/** @type {import('./scrape').RequestHandler} */
export async function post({ request }) {

    const { urls } = await request.json();

    if (!urls) {
        console.log("no urls found");
        return;
    }

    // @ts-ignore
    const scraperResults = await useScraper(urls);

    await dbConnectPromise()

    for (const entry of scraperResults) {
        await createNewHike(entry);
        console.log('New hike added to DB');
    }

    return {
        status: 200,
        body: scraperResults
    }
};