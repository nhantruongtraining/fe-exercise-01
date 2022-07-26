import axios from "axios";

export default axios.create({
    baseURL: 'http://103.48.192.239:8085/api/r2s/admin/',
    headers: {
        'Content-Type': 'application/json'
    }
});