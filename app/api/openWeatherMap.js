const axios = require('axios');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?units=Imperial&APPID=3257dbd6494e085645d3cafedb1247d3';

module.exports = {
    getTemp: function(location) {
        return axios.get(`${BASE_URL}&q=${encodeURIComponent(location)}`)
        .then(
            response => {
                if (response.data.cod && response.data.message) {
                    throw new Error(res.data.message);
                }
                return response.data.main.temp;
            },
            errResp => { throw new Error(errResp.message); }
        );
    }
};