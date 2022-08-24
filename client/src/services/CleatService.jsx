import Axios from 'axios';

async function getAllCleats() {
    const result = await Axios.get('http://localhost:3001/api/get');
    return result || [];
}

async function getCleat(id) {
    const url = `http://localhost:3001/api/get/${id}`;
    const result = await Axios.get(url);
    console.log(result);
    return result || null;
}

async function addCleat(cleat) {
    Axios.post("http://localhost:3001/api/insert",
        {
            cleatName: cleat.name,
            brand: cleat.brand,
            releaseYear: cleat.year,
            rating: cleat.rating,
            imageURL: cleat.photo,
        },
    );
}

export const cleatService = {
    getAllCleats,
    getCleat,
    addCleat
}