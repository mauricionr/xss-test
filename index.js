const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta property="og:url" content="${req.url}"/>
            <title>${req.method}</title>
        </head>
        <body>
            Hello World
            ${req.url}
            <p>XSS Examples, put this in url</p>
            <p>?mesAno=abril202014&teste/?43b2a%22%25%27%3E%3Cscript%3Ealert(document.cookie)%3C/script%3EEff8f6=1%22/%3E%3Cmeta%20name=%22viewport%22%20content=%22width=device-width,%20initial-scale=1.0%22%20/%3E</p>
            <p>?mesAno=abril202014&teste/?43b2a%22%3E%3Cscript%3Ealert(%22TESTE+XSS%22)%3C/script%3Eff8f6=ff8f6=</p>
            <p>?mesAno=abril202014&teste/?43b2a"><img src="blabla" onerror="alert("TESTE+XSS")">ff8f6=ff8f6=1"/><</p>
        </body>
    </html>
  `);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});