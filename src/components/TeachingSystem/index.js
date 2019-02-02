import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
export default class TeachingSystem extends React.Component{
    
    render(){
    
        const { img, title, describes,id } = this.props
        console.log("AAAA", id)
        return(
            <Link to={`/TeachingSystemDetail/${id}`}>
                <div className="teaching">
                <img className="teaching_image" src={img||""}/>
                <div className="teaching_info">
                    <span>{title}</span>
                    <p>{describes}</p>
                </div>
            </div>
            </Link>
        )
    }
}