const https = require('https');

async function fetchStock(url) {

    return new Promise((resolve, reject) => {

        https.get(`https://api.iextrading.com/1.0/stock/${ url }/batch?types=quote&range=1m&last=10`, (res) => {
            
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

module.exports = {
    fetchStock
}