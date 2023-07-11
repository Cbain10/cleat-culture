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

export const dynamoCleatService = {
    getCleatsByValue
}