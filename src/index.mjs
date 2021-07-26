import axios from 'axios';

const url = "https://database-driver-ifhogzjzbq-uc.a.run.app";

export default async function getRecord(accessKey) {
    try {
        const response = await axios.get(`${url}/${accessKey}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function update(accessKey, record) {
    try {
        await axios.put(`${url}/${accessKey}`, record);
    } catch (error) {
        throw error;
    }
}