import React from 'react'
import { Grid, Cell } from 'react-mdl';

  export const About = (props) => {
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
               <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', align: 'center'}}>
                 To say Im a determined individual is to put it lightly. I started a career in Aerospace at the age of 19
                 as a data entry clerk. I began to learn new skills and grow within the industry. I took the
                 time to focus on real world experience and dedicating myself to continued growth and to learning
                 as much I as could about the process of manufacturing and aircraft. I decided to take my journey
                 on the road and began taking contract work with companies all over the US that include Boeing,
                 Lockheed Martin and Gulfstream Aerospace. I had worked myself into a Manufacturing Engineer position.
                 While I was extremely proud of this accomplishment and highly grateful for all I had learned and
                 experienced, after 20 years I  knew it was time for a change. Web Development is something Ive
                 always had an interest in and took some courses during college so I knew this was what I wanted to
                 pursue. As I take this leap of faith now and focus on my career transition into the tech feild. I
                 know will great passion that I will succeed as greatly as I did in Aerospace. Where there is passion
                 and determination anything is possible. Im excited for this new journey.</p>
          </Cell>
          <Cell col={6}>
            <div></div>
          </Cell>
        </Grid>
      </div>
    )
}

export default About;
