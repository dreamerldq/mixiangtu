import React from 'react'
import './index.css'
import DetailSide from '../../components/DetailSide/index.js'
import DetailBody from '../../components/DetailBody/index.js'
import DetailFrame from '../../components/DetailFrame/index.js'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
const sideList = [
    '课程1',
    '课程1',
    '课程1',
    '课程1',
    '课程1'
]

export default class LessonDetail extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                LessonInfo:{},
                teachers:[]
            
        }
    }
    componentDidMount(){
        this.handleGetLesson()
        this.handleGetTeacher()
    }
    handleGetLesson = () => {
        const data = new window.AV.Query('Lesson');
       
        data.get('5c5539e30b6160004b1e1788').then( (res)=> {
           
            // const obj = res.attributes
            const LessonInfo = {
               
                lesson_image: res.get('lesson_image').attributes.url,
                lesson_name: res.get('lesson_name'),
                people_count: res.get('people_count'),
                lesson_time: res.get('lesson_time'),
                lesson_detail: res.get('lesson_detail')
            }
            console.log("AAA", LessonInfo)
            this.setState({
                LessonInfo
            })
         })
    }
    handleGetTeacher = () => {
        var Lesson = new window.AV.Object.createWithoutData('Lesson', '5c5539e30b6160004b1e1788');
        var teacher = new window.AV.Query('Teacher');
        teacher.equalTo('lesson', Lesson);
        teacher.find().then((res) => {
           
            const teachers = res.map((item) => {
                return{
                    name:item.get('name'),
                    id: item.id
                }
            })
            this.setState({
                teachers
            })
});
    }
    render(){
        const { LessonInfo,teachers } = this.state
        var path_params = this.props.location.query || {};
        console.log("path_params", path_params)
        return(
            
                <DetailFrame>
                    <div className="lesson_detail_head">   
                        <div className="head_left">
                            <div className="head_titles">
                                <div className="head_title">{path_params.lesson}</div>
                                <div className="head_subtitle">{LessonInfo.lesson_name}</div> 
                            </div>
                            <div className="leasson_mode">
                                授课模式：{path_params.type} | 课程时长：{LessonInfo.lesson_time}课时
                            </div>
                            <div className="teacher_info">
                                <img src={LessonInfo.lesson_image}/>
                                <div className="teacher_list">
                                {
                                    teachers.map((item) => {
                                        return(
                                            <Link to={`/TeacherDetail/${item.id}`}>
                                                <span>{item.name}</span>
                                            </Link>
                                            
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>

                        <div className="head_right">
                                <div className="baoming">已报名<span>{LessonInfo.people_count}</span>人</div>
                                <Button type="primary">立即报名</Button>
                        </div>
                    </div>
                    <DetailBody
                        title={'课程详情'}
                        content={LessonInfo.lesson_detail}
                    >

                    </DetailBody>
                    <DetailSide 
                        list={sideList} 
                    ></DetailSide>
                </DetailFrame>
            
        )
    }
}