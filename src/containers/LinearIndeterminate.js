
import React from 'react'
import './Home.css';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleLoader = () => (
  <div className="loader-div">
  <Segment>
    <Dimmer active>
      <Loader inverted />
    </Dimmer>

    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
  </div>
)


export default LoaderExampleLoader