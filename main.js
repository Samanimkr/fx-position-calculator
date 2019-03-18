

const calculate = () => {
    const accountSize = document.getElementsByName('accountsize')[0].value;
    const riskPercentage = document.getElementsByName('riskpercentage')[0].value;
    const pips = document.getElementsByName('pips')[0].value;
    const currency1 = document.getElementsByName('currency1')[0].value.toUpperCase();
    const currency2 = document.getElementsByName('currency2')[0].value.toUpperCase();

    const baseURL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE`;
    const symbol = `from_currency=${currency1}&to_currency=${currency2}`;
    const apikey = `apikey=${API_KEY}`;
    
    axios
    .get(`${baseURL}&${symbol}&${apikey}`)
    .then(({ data }) => {
        const exchangeRate = data['Realtime Currency Exchange Rate']['5. Exchange Rate'];

        const willingToRisk = (accountSize / 100) * riskPercentage;
        const pipsInCurrency2 = pips / 10000;
        const amountInGBP = pipsInCurrency2 / exchangeRate;

        const units = Math.floor(willingToRisk / amountInGBP);
        const lotSize = units / 100000;

        console.log('units', units);
        console.log('lotSize', lotSize);
    })
    .catch(e => console.log('e: ', e))
}