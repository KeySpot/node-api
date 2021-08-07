const axios = require('axios');

const url = "https://database-driver-ifhogzjzbq-uc.a.run.app";

async function getRecord(accessKey) {
    try {
        const response = await axios.get(`${url}/${accessKey}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function update(accessKey, record) {
    try {
        await axios.patch(`${url}/${accessKey}`, record);
    } catch (error) {
        throw error;
    }
}

async function keyspot(accessKey, record=null) {
    if (record) {
        return await update(accessKey, record);
    } else {
        return await getRecord(accessKey);
    }
}

module.exports = keyspot;