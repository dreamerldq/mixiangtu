import React from 'react'
import './index.css'
import { Button } from 'antd'
import {Link} from 'react-router-dom'
import Title from 'antd/lib/skeleton/Title';
export default class LessonBlock extends React.Component{
   render(){
       const {teacher,lesson,type,age, img} = this.props
       return(
           <div className="lesson_block">
                <img className="lesson_image" src={img||''}/>
                <div className="lesson_content">
                    <span className="lesson_title">{lesson}</span>
                    <div className="lesson_bottom">
                        <div className="lesson_info">
                            <span>教师:{teacher}</span>
                            <span>授课模式:{type}</span>
                            <span>课程适合学习年龄:{age}</span>
                        </div>
                        <div className="lesson_button">
                            <Link to="/lessondetail">查看列表</Link>
                        </div>
                    </div>
                </div>
           </div>
       )
   }
    
}