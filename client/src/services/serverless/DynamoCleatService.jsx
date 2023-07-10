import Axios from 'axios';

async function axiosGetCleats(width, comfort, lockdown, upper) {
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

async function getBestCleat(aspect) {
    // TODO store urls somewhere better
    const url = 'https://wh3ke50kv4.execute-api.us-east-2.amazonaws.com/dev';
    let raw = {
        aspect: aspect
    }
    const result = await Axios.post(url, raw);
    return result.data.body;
}

export const dynamoCleatService = {
    axiosGetCleats,
    getBestCleat
}