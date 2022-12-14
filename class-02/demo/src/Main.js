import React from 'react';
import Snack from './Snack';
import data from './data.json';

class Main extends React.Component {
  render() {
    return (
      <>
        <Snack
          title={data[0].title}
          description={data[0].description}
          imageURL={data[0].img_url}
        />
        <Snack
          title={data[1].title}
          description={data[1].description}
          imageURL={data[1].img_url}
        />
        <Snack
          title={data[2].title}
          description={data[2].description}
          imageURL={data[2].img_url}
        />
        <Snack
          title={data[3].title}
          description={data[3].description}
          imageURL={data[3].img_url}
        />
        <Snack 
          title={data[4].title}
          description={data[4].description}
          imageURL={data[4].img_url}
        />
      </>
    )
  }
}

export default Main;