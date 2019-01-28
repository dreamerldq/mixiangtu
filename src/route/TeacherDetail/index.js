import React from 'react'
import './index.css'
import DetailSide from '../../components/DetailSide/index.js'
import DetailBody from '../../components/DetailBody/index.js'
import DetailFrame from '../../components/DetailFrame/index.js'

const sideList = [
    '课程1',
    '课程1',
    '课程1',
    '课程1',
    '课程1'
]

export default class LessonDetail extends React.Component{
    render(){
        return(
            
                <DetailFrame>
                    <div className="teacher_detail_head">
                        <img/>
                        <div className="teacher_head_info">
                            <div>张哒哒</div>
                            <span>5年教龄|Scratch资深教师</span>
                        </div>
                    </div>
                    <DetailBody
                        title={'教师详情'}
                        content={''}
                    >

                    </DetailBody>
                    <DetailSide 
                        list={sideList} 
                    ></DetailSide>
                </DetailFrame>
            
        )
    }
}