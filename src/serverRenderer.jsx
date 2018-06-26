import { StaticRouter } from 'react-router-dom';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Index from './index';

function renderHTML(html) {
  return (
    `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>EPM-REACT</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
        </head>
        <body>
            <div id="app">${html}</div>
            <script src="js/main.js"></script>
        </body>
        </html>
    `
  );
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};
    const index = (
      <Index location={req.url} context={context} Router={StaticRouter} />
    );
    const htmlString = renderToString(index);
    const { url } = context;

    if (url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    res.send(renderHTML(htmlString));
  };
}
