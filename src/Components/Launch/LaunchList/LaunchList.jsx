import React, { Component } from 'react'
import Launch from '../Launch'
import axios from 'axios'

export default class LaunchList extends Component {

    state ={
        launches :[]
    }

    componentDidMount = () =>{
        this.getLaunches()
    }

    getLaunches = () =>{
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((response)=>{
            this.setState({launches:response.data})
            
        })
        .catch((error)=>{
            console.log(error)
     
        })
    }


    launchList = () =>{
    let launchListComponents = this.state.launches.map((launch,index)=>{
        let image = launch.links.flickr_images.length === 0 ? 
        'https://images.pexels.com/photos/41005/rocket-launch-rocket-take-off-soyuz-41005.jpeg?cs=srgb&dl=pexels-pixabay-41005.jpg&fm=jpg' : launch.links.flickr_images[0]
        return <Launch 
        key={"launch_"+index}
        title={launch.mission_name} 
        date={launch.launch_date_local} 
        content={launch.details} 
        image={image}
        />
        })
        
        return launchListComponents;
    }
   
  render() {
    return (
        <div>
            {this.launchList()}
        </div>
    )
  }
}
