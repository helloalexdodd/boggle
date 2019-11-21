export const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const DICTIONARY_URL = word => `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`;

export default { PROXY_URL, DICTIONARY_URL }