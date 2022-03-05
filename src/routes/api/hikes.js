import { getAllHikes } from "$lib/database/controllers";

//Can use url params like ?hikeType=Loop

/** @type {import('./hikes').RequestHandler} */
export async function get(body) {
    const filter = {};
    const params = String(body.url.searchParams).split('=');
    filter[params[0]] = params[1];

    const allHikes = await getAllHikes(filter);

    return {
        status: 200,
        body: allHikes
    }
};