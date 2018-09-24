const { fetchStock } = require('./fetch');

async function getStockLatestPrice(symbol) {

    const response = await fetchStock(symbol)
    
    return response.quote.latestPrice
}

async function getStockLatestPriceDifferences(symbolA, symbolB) {

    const responseA = await fetchStock(symbolA)
    const responseB = await fetchStock(symbolB)

    const latestUpdateA = responseA.quote.latestPrice
    const latestUpdateB = responseB.quote.latestPrice

    return Math.abs(latestUpdateA - latestUpdateB)
}

module.exports = {
    getStockLatestPrice,
    getStockLatestPriceDifferences
}