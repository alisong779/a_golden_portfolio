import React from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends React.Component {
  render () {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png"
              alt="avatar"
              className="avatar-image"
              />
            <h2 style={{fontSize: '50px', fontFamily: 'Mansalva'}}>Alison Golden</h2>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>HTML/CSS | Bootstrap | Javascript | React | Redux | Ruby | RoR | PHP </p>
              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/alison-golden-5110102b/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>

                {/* Github */}
                <a href="https://github.com/alisong779" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>

                {/* YouTube*/}
                <a href="https://www.youtube.com/channel/UCbFMLcTj5W6HrjS71e4Crog/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true"></i>
                </a>

              </div>
            </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Landing;
