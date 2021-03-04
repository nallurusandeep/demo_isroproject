import React from 'react';
import { Launch } from '../Launch/Launch';
import './styles.css';
import axios from 'axios'
export class LaunchList extends React.Component{
  state={
    launches:[]
  }
componentDidMount=()=>{
  this.getLaunches();
}
getLaunches=()=>{
  axios.get('https://api.spacexdata.com/v3/launches').then((response) => {
  this.setState({
    //console.log(response);
    launches:response.data
  })  
  //console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}
 launchList=()=>{
     const launchListComponents= this.state.launches.map((launch,index) => {
      const default_image=launch.links.flickr_images.length===0 ? 
      "https://c.ndtvimg.com/2021-02/gq3kaabg_isro-launch-generic-pslv-launch-generic-ndtv-file-photo_625x300_05_February_21.jpg" 
      : launch.links.flickr_images[0];
      //console.log(launch.links.flickr_images[0]);
    return <Launch 
    key={"Launch_"+index}
    banner_image={default_image}
    title_name={launch.mission_name}
    launch_date={launch.launch_date_local}
    description={launch.details}/>   
   })
  return launchListComponents;
 }
  render(){
    return(
    <div className="launch-list">
      {this.launchList()}
    </div>
    )
} 
}