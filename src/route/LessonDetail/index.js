import React from 'react'
import './index.css'
import DetailSide from '../../components/DetailSide/index.js'
import DetailBody from '../../components/DetailBody/index.js'
import DetailFrame from '../../components/DetailFrame/index.js'
import { Button } from 'antd'

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
                    <div className="lesson_detail_head">   
                        <div className="head_left">
                            <div className="head_titles">
                                <div className="head_title">Scratch图形教学</div>
                                <div className="head_subtitle">Scratch图形教学小猫钓鱼1</div> 
                            </div>
                            <div className="leasson_mode">
                                授课模式：课堂教学 | 课程时长：2课时
                            </div>
                            <div className="teacher_info">
                                <img/>
                                <span>张哒哒</span>
                            </div>
                        </div>

                        <div className="head_right">
                                <div className="baoming">已报名<span>5</span>人</div>
                                <Button type="primary">立即报名</Button>
                        </div>
                    </div>
                    <DetailBody
                        title={'课程详情'}
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