import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export default class DetailSide extends React.Component{
    render(){
        const { list } = this.props
        return(
            <div className="detail_side">
                {
                    (list || []).map((item,key) => {
                        return(
                            <div key={item.id} className="detail_side_item">
                               <Link to={`/LessonDetail/${item.id}`}>{item.lesson_name}</Link> 
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}