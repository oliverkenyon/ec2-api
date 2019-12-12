# ec2-api

Api serving a fake list of EC2 instances

## Running locally

```
npm install
node api.js
```

## Running the tests

The tests use Jest and can be run via the following command:

```
npm test
```

## Access the API

The default url is http://localhost:3000/api/v1/

The only available route is currently a GET to /instances, which supports a searchValue query parameter