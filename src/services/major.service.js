import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/major');
}

const create = data => {
    return httpClient.post("/major", data);
}

const get = id => {
    return httpClient.get(`/major/${id}`);
}

const update = data => {
    return httpClient.put('/major', data);
}

const remove = id => {
    return httpClient.delete(`/major/${id}`);
}
export default { getAll, create, get, update, remove };