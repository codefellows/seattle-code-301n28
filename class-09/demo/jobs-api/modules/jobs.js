'use strict';

const axios = require('axios');

function getJobs(request, response) {
  const url = `https://boards-api.greenhouse.io/v1/boards/vaulttec/jobs?content=true`;
  axios
    .get(url)
    .then(res => {
      console.log(res.data);
      const finalJobArray = res.data.jobs.map(job => new Job(job));
      response.status(200).send(finalJobArray);
    })
    .catch(err => {
      console.error('error from axios: ', err);
      response.status(500).send(`server error: ${err}`);
    });
};

class Job {
  constructor(job) {
    this.name = job.title;
    this.description = job.content;
    this.departments = this.getNames(job.departments);
    this.offices = this.getNames(job.offices);
    this.location = job.location.name;
    this.url = job.absolute_url;
  };

  getNames(departments) {
    return departments.map(object => object.name);
  }
};

module.exports = getJobs;