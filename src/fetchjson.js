const https = require('https');

async function fetchJSON(url) {

    return new Promise((resolve, reject) => {

        https.get(url, (res) => {
            
            var body = '';

            res.on('data', function(chunk) {
                body += chunk;
            });

            res.on('end', function() {
                
                if(res.statusCode === 200) {
                    resolve(JSON.parse(body))
                }
                else {
                    reject(body)
                }
            });

        }).on('error', (e) => {
            reject(e);
        })
    })
}

var API = {
    fetchJSON
}

module.exports = API