import axios from 'axios';

export default axios.create({
    baseURL: 'https://busdeliveryapi.azurewebsites.net/swagger/index.html'
});