import Axios from 'axios';

async function getCleatsByValue(width, comfort, lockdown, upper) {
    // TODO store urls somewhere better
    const url = 'https://kkmt2wfxlk.execute-api.us-east-2.amazonaws.com/dev';
    let raw = {
        width: width,
        comfort: comfort,
        lockdown: lockdown,
        upper: upper
    };
    const result = await Axios.post(url, raw);
    return result.data.body;
}

async function getAllCleats() {
    const url = 'https://lchbz8wmg4.execute-api.us-east-2.amazonaws.com/dev';
    const result = await Axios.get(url);
    return result.data.body;
}

async function getCleatByName(name) {
    const url = 'https://kkmt2wfxlk.execute-api.us-east-2.amazonaws.com/dev/name';
    let params = {
        cleatName: name
    };
    const result = await Axios.post(url, params);
    return result.data.body;
}

export const dynamoCleatService = {
    getCleatsByValue,
    getAllCleats,
    getCleatByName
}