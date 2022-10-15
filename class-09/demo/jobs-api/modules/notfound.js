'use strict';

function notFound(request, response) {
  console.log('route not found');
  response.status(404).send('that endpoint does not exists, please try again');
};

module.exports = notFound;
