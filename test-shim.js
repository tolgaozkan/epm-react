global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
};

const fetchPolifill = require('whatwg-fetch');
global.fetch = fetchPolifill.fetch;
global.Request = fetchPolifill.Request;
global.Headers = fetchPolifill.Headers;
global.Response = fetchPolifill.Response;
