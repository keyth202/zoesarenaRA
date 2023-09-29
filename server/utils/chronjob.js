const cron = require('node-cron');
const axios = require('axios');


function convertTimeToCron(time) {

    const [hours, minutes] = time.split(':');

    if(isNaN(hours) || isNaN(minutes)) {
        throw new Error('Invalid time format');
    }
 
    if(hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new Error('Invalid time format');
    }

    return '${minutes} ${hours} * * *';
}

 

export function cronJob(apiURL, requestData, cronTime) {
    const convertedTime = convertTimeToCron(cronTime);

    cron.schedule(convertedTime, () => {
        axios.post(apiURL, requestData)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    });
}