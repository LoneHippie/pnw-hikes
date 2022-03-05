import { Hike } from '$lib/database/models';

export const getAllHikes = async(filter) => {
    const allHikes = await Hike.find(filter);
    return allHikes;
}