import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import { NavLink } from 'react-router-dom';
import { Layout, Header, Navigation, Content } from 'react-mdl'
import { connect } from 'react-redux'

class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
        <Layout>
        <Header className="header-color" title="A. Golden Portfolio" scroll>
            <Navigation>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </Navigation>
        </Header>
        <Content>
            <Main />
        </Content>
    </Layout>
      </div>
    );
  }
  }

export default connect()(App)
