import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


  export const Contact = (props) => {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alison Golden</h2>
              <img
                src="https://cdn.pixabay.com/photo/2017/06/09/23/17/people-2388575_1280.png"
                alt="avatar"
                style={{height: '300px'}}
                 />
               <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                 I recently graduated from Flatiron School with a Full Stack Software Engineering Certification.
                 Im currently avaiable and looking for new opportunities. Please reach out to let me know how I
                 can help you succeed on your next project!</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Big Shoulders Display'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (772) 696-2086
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Big Shoulders Display'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      alisong779@yahoo.com
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Big Shoulders Display'}}>
                      <i className="fa fa-skype" aria-hidden="true"/>
                      MySkypeID
                    </ListItemContent>
                  </ListItem>
                </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }

export default Contact;
