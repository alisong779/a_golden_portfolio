import React from 'react';
import Goal from './Goal';
import { connect } from 'react-redux'

const Goals = props => {
  // const goalsData = goals.map(goal => <Goal key={goal.id} goal={goal} {...goal}/>)
  return (
      <h4>Goals Component from Goals Container</h4>
  );
};

export default connect()(Goals);
