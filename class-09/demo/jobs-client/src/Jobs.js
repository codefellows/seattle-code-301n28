import React from 'react';

class Jobs extends React.Component {
  render() {
    return (
      <>
        {this.props.jobs.map((job, idx) => (
          <Job 
            idx={idx}
            job={job}
          />
        ))}
      </>
    )
  }
}

class Job extends React.Component {
  render() {
    const job = this.props.job;
    return (
      <div key={this.props.idx}>
        <h3>Vault Tec</h3>
        <h2>{job.name}</h2>
        <p>{job.description}</p>
        <p>{job.location}</p>
      </div>
    )
  }
}

export default Jobs;
