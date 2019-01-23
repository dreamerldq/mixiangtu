import React from 'react'
import LessonBlock from '../../components/LessonBlock/index.js'
import './index.css'
const datas = new Array(6).fill( {
    lesson:'Scratch图形教学',
    teacher: 'jingda',
    type: '课堂教学',
    age:'6-8岁'
})

export default class Index extends React.Component{
    // constructor(props){
    //     super(props);
    
    // }
   
    render(){
        return(
            <div className="lesson_page">
                <div className="lesson_name">
                    Scratch
                </div>
                <div className="lesson_list">
                {
                    datas.map((item, index) => {
                        return(
                            <LessonBlock
                                key={index}
                                lesson={item.lesson}    
                                teacher={item.teacher}
                                type={item.type}
                                age={item.age}
                            >
                            </LessonBlock>
                        )
                    })
                } 
            </div>
            </div>
            
        )
    }
}