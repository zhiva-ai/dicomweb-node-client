const express = require("express");
const fs = require("fs");
const https = require("https");

const DICOMWebNodeClient = require('../../build/dicomweb-node-client');

const app = express();

app.get("/", (req, res) => {
    const url = 'https://localhost/zhiva/pacs';
    const client = new DICOMWebNodeClient.api.DICOMwebClient({url});
    client.searchForStudies().then(studies => {
        res.send(JSON.stringify(studies));
    });
});

https
    .createServer(
        {
            key: fs.readFileSync("./zhiva.key"),
            cert: fs.readFileSync("./zhiva.crt"),
        },
        app
    )
    .listen(3000,  () => {
        console.log(
            "Example app listening on port 3000! Go to https://localhost:3000/"
        );
    });