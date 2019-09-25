import React from 'react'
import GoalsContainer from '../../containers/GoalsContainer'
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button } from 'react-mdl'


class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div >
          <GoalsContainer />
        </div>
      )
    }else if(this.state.activeTab === 1){
      return (
        <div className="projects-grid">
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploads.toptal.io/blog/image/125783/toptal-blog-image-1522333595770-14ba14a2f6099482fa9189f8764dd5ad.png) center / cover'}}>JavaScript Project 1</CardTitle>
            <CardText >
              Rails Recipe Keeper app that renders async JavaScript comments section.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/alisong779/golden-recipes-2" colored target="_blank">Github</Button>
            </CardActions>
          </Card>
        </div>
      )
    }else if(this.state.activeTab === 2){
      return (
        <div className="projects-grid">
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/ruby-on-rails.jpg?1565909621) center / cover'}}>Ruby on Rails Project 1</CardTitle>
            <CardText>
              Rails Recipe Keeper App. User can create accounts, store recipes and view other users recipes.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/alisong779/golden_recipes" colored target="_blank" >Github</Button>
            </CardActions>
          </Card>
        </div>
      )
    }else if(this.state.activeTab === 3){
      return (
        <div className="projects-grid">
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>PHP Projects</CardTitle>
            <CardText>
              PHP Projects to come......
            </CardText>
            <CardActions border>
              <Button colored target="_blank">Github</Button>
            </CardActions>
          </Card>
        </div>
      )
    }else if(this.state.activeTab === 4){
      return(
        <div className="projects-grid">
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>HTML/CSS Projects</CardTitle>
            <CardText>
              HTML/CSS Projects to come...
            </CardText>
            <CardActions border>
              <Button colored target="_blank">Github</Button>
            </CardActions>
          </Card>
        </div>
      )
    }
  }

  render () {
    return(
      <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
        <Tab>React / Redux</Tab>
        <Tab>JavaScript</Tab>
        <Tab>Ruby on Rails</Tab>
        <Tab>PHP</Tab>
        <Tab>HTML/CSS</Tab>
      </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content"></div>
          </Cell>
        </Grid>
        {this.toggleCategories()}
      </div>
    )
  }
}


export default Projects
