const { fetchJSON } = require('./fetchjson');

async function getStockLatestPrice(symbol) {

    const response = await fetchJSON(`https://api.iextrading.com/1.0/stock/${ symbol }/batch?types=quote&range=1m&last=10`)
    
    return response.quote.latestPrice
}

async function getStockLatestPriceDifferences(symbolA, symbolB) {

    const responseA = await fetchJSON(`https://api.iextrading.com/1.0/stock/${ symbolA }/batch?types=quote&range=1m&last=10`)
    const responseB = await fetchJSON(`https://api.iextrading.com/1.0/stock/${ symbolB }/batch?types=quote&range=1m&last=10`)

    const latestUpdateA = responseA.quote.latestPrice
    const latestUpdateB = responseB.quote.latestPrice

    return Math.abs(latestUpdateA - latestUpdateB)
}

module.exports = {
    getStockLatestPrice,
    getStockLatestPriceDifferences
}