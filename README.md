# BaHuesic Api

This is a basic nodejs REST API that can be used to control the philips hue bridge. This API uses the express framework to handle requests.

## Getting Started

The preferred way to run this API is using Docker. After running
```make build```, you will have a local image available to run. An example run configuration would look like this:

```docker
//TODO
docker run ...
```

### Prerequisites

npm, nodejs

OR

docker, docker-compose

### Installing

1. Clone the repo
2. npm install
3. npm run

## Running the tests

```bash
npm test # if running locally
OR
make integration-test # if running in docker-compose
```

### Break down into end to end tests

Running the integration tests either locally or in docker-compose will test the same functionality. Running in docker-compose is preffered as external dependencies will be available.

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

There is a Kubernetes deployment file available with an example deployment. This is not exhaustive and is not optimised, but can be used as a baseline deployment.

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [NodeJs](https://nodejs.org/en/) 
* [Docker](https://www.docker.com/) - Containerisation

## Contributing

Please read [CONTRIBUTING.md](TODO) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](TODO). 

## Authors

* **Kieran O'Sullivan** - *Design and Implementation* - [kidsan](http://kidsan.com)

See also the list of [contributors](TODO) who participated in this project.

## License

UNLICENSED

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
