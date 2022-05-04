const API_BASE = "https://free.currconv.com/api/v7/";
const API_KEY = "7c30426bc5cb94a76e9a";

async function getRequest(url) {
  const response = await fetch(`${API_BASE}${url}&apiKey=${API_KEY}`);

  return await response.json();
}

export async function getCurrencies() {
  return await getRequest("convert?q=USD_UAH,EUR_UAH&compact=ultra");
}

export async function getCurrency(from, to) {
  return await getRequest(`convert?q=${from}_${to}&compact=ultra`);
}
