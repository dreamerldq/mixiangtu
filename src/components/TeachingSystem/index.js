import React from 'react'
import './index.css'
export default class TeachingSystem extends React.Component{
    render(){
        const { img, title, describes } = this.props
        return(
            <div className="teaching">
                <img className="teaching_image" src={img||""}/>
                <div className="teaching_info">
                    <span>{title}</span>
                    <p>{describes}</p>
                </div>
            </div>
        )
    }
}