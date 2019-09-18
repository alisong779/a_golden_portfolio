import React from 'react'
import GoalsContainer from './GoalsContainer'
import { NavLink } from 'react-router-dom';
import { Navigation } from 'react-mdl'

class ReactContainer extends React.Component {
  render () {
    return(
      <div>
        <Navigation>
            <NavLink to="/Goals">View Your Goals</NavLink>
        </Navigation>
      <GoalsContainer />
      </div>
    )
  }
}

export default ReactContainer;
