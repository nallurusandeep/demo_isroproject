import React from 'react';
import './styles.css';
export class Launch extends React.Component{
    render(){
        return(
            <div className='launch'>
                <img alt="launch" src={this.props.banner_image}/>
                <div className="content">
                    <div className="info">
                        <h1>{this.props.title_name}</h1>
                        <h1>{this.props.launch_date}</h1>
                    </div>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}