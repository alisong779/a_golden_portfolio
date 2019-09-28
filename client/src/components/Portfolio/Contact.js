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
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type
                 specimen book. It has survived not only five centuries</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Big Shoulders Display'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (123) 456-7890
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Big Shoulders Display'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      someone@example.com
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
