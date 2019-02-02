import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
export default class LessonBlock extends React.Component{
   render(){
       const {teacher,lesson,type,age, img,lesson_mode_name, id} = this.props
       const path = {
        pathname:`/LessonDetail/${id}`,
        query:{
            lesson_mode_name, type
        }
       }
       return(
           <div className="lesson_block">
                <img className="lesson_image" src={img}/>
                <div className="lesson_content">
                    <span className="lesson_title">{lesson}</span>
                    <div className="lesson_bottom">
                        <div className="lesson_info">
                            <span>教师:{teacher}</span>
                            <span>授课模式:{type}</span>
                            <span>课程适合学习年龄:{age}</span>
                        </div>
                        <div className="lesson_button">
                            <Link to={path}>查看详细</Link>
                        </div>
                    </div>
                </div>
           </div>
       )
   }
    
}