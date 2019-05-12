import React from 'react'
import './index.css'
import DetailSide from '../../components/DetailSide/index.js'
import DetailBody from '../../components/DetailBody/index.js'
import DetailFrame from '../../components/DetailFrame/index.js'
import { Button,Modal,message, Input } from 'antd'
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
                teachers:[],
                visible: false,
                name:'',
                age:'',
                phone:'',
                lessons:[]
            
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        this.handleGetLesson(id)
        this.handleGetTeacher()
        const lessons = JSON.parse(window.localStorage.getItem('lessons'))
        this.setState({
            lessons
        })
    }
    componentWillReceiveProps(nextprops){
        if(nextprops.match.params.id !== this.props.match.params.id){
            this.handleGetLesson(this.props.match.params.id)
        }
    }

    handleOk =() => {
        const {name,age,phone} = this.state
        if(name && age && phone){
            let Baoming = window.AV.Object.extend('Baoming');
            let baoming = new Baoming();
            baoming.set('name',name);
            baoming.set('age',age)
            baoming.set('phone',phone)
            baoming.save().then((res) => {
                message.success('报名成功');
            })
            this.setState({
                visible: false
            })
        }
       
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    handleBaoming = () => {
        this.setState({
            visible:true
        })
        
    }
    handleGetLesson = (id) => {
        const data = new window.AV.Query('Lesson');
        
        data.get(id).then( (res)=> {
            const LessonInfo = {
               
                lesson_image: res.get('lesson_image').attributes.url,
                lesson_name: res.get('lesson_name'),
                lesson_mode_name: res.get('lesson_mode_name'),
                people_count: res.get('people_count'),
                lesson_time: res.get('lesson_time'),
                lesson_detail: res.get('lesson_detail'),
                type: res.get('type')
            }
            this.setState({
                LessonInfo
            })
         })
    }
    handleGetTeacher = () => {
        const { id } = this.props.match.params
        var Lesson = new window.AV.Object.createWithoutData('Lesson', id);
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
        const { LessonInfo,teachers, name,age,phone } = this.state
       
        return(
            
                <DetailFrame>
                    <div className="lesson_detail_head">   
                        <div className="head_left">
                            <div className="head_titles">
                                <div className="head_title">{LessonInfo.lesson_mode_name}</div>
                                <div className="head_subtitle">{LessonInfo.lesson_name}</div> 
                            </div>
                            <div className="leasson_mode">
                                授课模式：{LessonInfo.type} | 课程时长：{LessonInfo.lesson_time}课时
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
                                <Button onClick={this.handleBaoming} type="primary">立即报名</Button>
                        </div>
                        <Modal
                            okText="提交信息"
                            cancelText="取消"
                            title="填写报名信息表"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            >
                            <div className="input-group">
                                <Input value={name} onChange={(e) => this.setState({name: e.target.value})} placeholder="姓名"></Input>
                                <Input value={age} onChange={(e) => this.setState({age: e.target.value})} placeholder="年龄"></Input>
                                <Input value={phone} onChange={(e) => this.setState({phone: e.target.value})} placeholder="电话"></Input>
                                <span>提交信息后,我们的客服会主动联系你哦</span>
                            </div>
                            </Modal>
                    </div>
                    <DetailBody
                        title={'课程详情'}
                        content={LessonInfo.lesson_detail}
                    >

                    </DetailBody>
                    <DetailSide 
                        list={this.state.lessons} 
                    ></DetailSide>
                </DetailFrame>
            
        )
    }
}