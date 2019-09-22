import React from 'react'
import { Grid, Cell } from 'react-mdl';

class About extends React.Component {
  render () {
    return(
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2>About Me</h2>
              <img
                src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png"
                alt="avatar"
                style={{height: '250px'}}
                 />
               <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type
                 specimen book. It has survived not only five centuries</p>
          </Cell>
          <Cell col={6}>
            <div></div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
