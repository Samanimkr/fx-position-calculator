const API_KEY = 'K8SVFGG987OJSE6W';

const calculate = () => {
    const accountSize = document.getElementsByName('accountsize')[0].value;
    const pips = document.getElementsByName('pips')[0].value;
    const currency1 = document.getElementsByName('currency1')[0].value.toUpperCase();
    const currency2 = document.getElementsByName('currency2')[0].value.toUpperCase();
    const riskPercentage = document.getElementsByName('riskpercentage')[0].value;

    const baseURL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE`;
    const symbol = `from_currency=${currency1}&to_currency=${currency2}`;
    const apikey = `apikey=${API_KEY}`;
    
    axios
    .get(`${baseURL}&${symbol}&${apikey}`)
    .then(({ data }) => {
        console.log('data: ', data['Realtime Currency Exchange Rate']);
        
    })
    .catch(e => console.log('e: ', e))
}