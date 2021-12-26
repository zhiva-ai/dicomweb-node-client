[![Build Status](https://travis-ci.com/dcmjs-org/dicomweb-client.svg?branch=master)](https://travis-ci.com/dcmjs-org/dicomweb-client)

# DICOMweb Client

JavaScript client implementation of [DICOMweb](https://www.dicomstandard.org/dicomweb/).

For further details please refer to [PS3.18 of the DICOM standard](http://dicom.nema.org/medical/dicom/current/output/chtml/part18/PS3.18.html).


## Goal

**This is work-in-progress and should not be used in clinical practice.**

The main motivation for this project is:
* Support for storing, quering, retrieving DICOM objects over the web using RESTful services STOW-RS, QIDO-RS and WADO-RS, respectively
* Building a lightweight library to facilitate integration into web applications

## Installation

Install the [dicomweb-node-client](https://www.npmjs.com/package/dicomweb-node-client) package using the `npm` package manager:

```None
npm install dicomweb-node-client
```

## Building and testing

Build and test code locally:

```None
git clone https://github.com/zhiva-ai/dicomweb-node-client ~/dicomweb-node-client
cd ~/dicomweb-node-client
npm install
npm run build
```

## Usage

### NodeJS

```javascript
const DICOMWebNodeClient = require('dicomweb-node-client');

const url = 'http://localhost:8080/dicomweb';
const client = new DICOMwebClient.api.DICOMwebClient({url});
client.searchForStudies().then(studies => {
    console.log(studies)
});
```

### JS Application

Exactly the same as node, you can import it as `DICOMwebClient` to be inline with original repo.
```javascript
import * as DICOMwebClient from 'dicomweb-node-client';

const url = 'http://localhost:8080/dicomweb';
const client = new DICOMwebClient.api.DICOMwebClient({url});
client.searchForStudies().then(studies => {
    console.log(studies)
});
```

### Direct browser import

```html
<script type="text/javascript" src="https://unpkg.com/dicomweb-client"></script>
```

```js
const url = 'http://localhost:8080/dicomweb';
const client = new DICOMwebClient.api.DICOMwebClient({url});
client.searchForStudies().then(studies => {
  console.log(studies)
});
```

## Contributions

We made a for of the original [dicomweb-client](https://www.npmjs.com/package/dicomweb-client) library and extended it with NodeJS support. If you're using this library you don't have to contribute us, but please contribute the amazing people responsible for the original implementation. More details on their GitHub:
[https://github.com/dcmjs-org/dicomweb-client#citation](https://github.com/dcmjs-org/dicomweb-client#citation)