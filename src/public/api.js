import HTTPUtil from './request';

//所有交易行情api
const tradingDetails = 'https://data.gateapi.io/api2/1/tickers';

//所有市场行情api
const marketDetails = 'https://data.gateapi.io/api2/1/marketlist';

//所有交易行情
export function getTradingDetails() {
  return HTTPUtil.get(tradingDetails);
}

//所有市场行情api
export function getMarketDetails() {
  return HTTPUtil.get(marketDetails);
}
