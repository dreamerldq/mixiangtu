import React from 'react'
import { Carousel,Input, Button } from 'antd';
import './index.css'
import ContentBlock from '../../components/ContentBlock/index.js'
import LessonBlock from '../../components/LessonBlock/index.js'
import TeachingSystem from '../../components/TeachingSystem/index.js'
import { Link } from 'react-router-dom'

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.handleGetList = this.handleGetList.bind(this)
        this.state={
            lunbos:[],
            results:[],
            LessonMode:[],
            teacherSystem:[]
        }
    }
    componentDidMount(){
        this.handleGetList()
        this.handleGetExhibition()
        this.handleGetLessonMode()
        this.handleTeachingSystem()
    }
    handleGetExhibition = () => {
        const lunboList = new window.AV.Query('ResultExhibition');
        lunboList.find().then( (result)=> {
           
           const images = result.map((item)=>{
            return item.attributes.result_image.attributes.url
        })
        this.setState({
            results:images
        })
       }).catch(function(error) {
         console.log("成果展示请求错误", error)
       });
    }
    handleGetLessonMode = () => { 
        const lunboList = new window.AV.Query('LessonMode');
        lunboList.find().then( (result)=> {
            
           
           const LessonMode = result.map((item)=>{
               const obj = item.attributes
            return {
                age: obj.age,
                id: item.id,
                lesson_mode_name: obj.lesson_mode_name,
                mode: obj.mode,
                teachers: obj.teachers,
                mode_image:obj.mode_image.attributes.url

            }
        
        })
        this.setState({
            LessonMode
        })
       }).catch(function(error) {
         console.log("课程模式请求失败", error)
       });
    }
    handleTeachingSystem = () => {
        const lunboList = new window.AV.Query('TeachingSystem');
        lunboList.find().then( (teacher)=> {
            const teacherSystem = teacher.map((item) => {
                const obj = item.attributes
               
                return{
                    id: item.id,
                    system_describe: obj.system_describe,
                    system_name: obj.system_name,
                    system_subtitle: obj.system_subtitle,
                    system_image: obj.system_image.attributes.url
                }
            })
           
            this.setState({
                teacherSystem
            })
            
       }).catch(function(error) {
         console.log("教师系统请求错误", error)
       });
    }
    handleGetList(){
        const lunboList = new window.AV.Query('Lunbo');
        lunboList.find().then( (lunbos)=> {
            const images = lunbos.map((item)=>{
                console.log(item)
                return {src:item._serverData.image.attributes.url, lesson:item._serverData.LessonDetail}
            })
            this.setState({
                lunbos:images
            })
           
       }).catch(function(error) {
         console.log("轮播图请求错误", error)
       });
    }
    render(){
        const { lunbos } = this.state
        
        return(
            <div id="index_top">
                <Carousel autoplay>
                    {
                      lunbos.map((img)=>{
                          return(
                            <div className="carousel_image">
                               <Link to={`/LessonDetail/${img.lesson}`}> <img src={img.src}/></Link>
                            </div>
                          )
                      }) 
                    }
                </Carousel>
                <div  id="teachingsystem_top"  className="index_content">
                    <ContentBlock title={'教学体系'}>
                   
                        <div className="teaching_system">
                            
                        {
                        this.state.teacherSystem.map((teacher) => {
                            return(
                                <TeachingSystem
                                    key={teacher.id}
                                    id={teacher.id}
                                    img={teacher.system_image}
                                    title={teacher.system_name}
                                    describes={teacher.system_describe}
                            />
                            )
                        })
                    }
                        </div>
                    </ContentBlock>

                    <ContentBlock title={'课程模式'}>
                        <div id="lessonmode_top" className="lesson_mode">
                        {
                            this.state.LessonMode.map((lesson) => {
                                return(
                                    <LessonBlock
                                    id={lesson.id}
                                    key={lesson.id}
                                    img={lesson.mode_image}
                                    lesson={lesson.lesson_mode_name}    
                                    teacher={lesson.teachers}
                                    type={lesson.mode}
                                    age={lesson.age}
                                >
                                </LessonBlock>
                                )
                            })
                        }
                        </div>
                    </ContentBlock>

                    <ContentBlock title={'成果展览'}>
                        <div id="resultexzbit_top" className="result_exzbit">
                            {this.state.results.map((item)=>{
                                return(
                                    <div className="content_image">
                                        <img src={item}/>
                                    </div>
                                )
                            })}
                        </div>
                    </ContentBlock>

                    <ContentBlock title={'我要报名'}>
                        <div id="baoming_top" className="index_baoming">
                            <div className="qrcode">
                                <span>扫码进群了解详情</span>
                                <img/>
                            </div>
                            <div className="field">
                                <span className="field_title">填写报名信息表</span>
                                <Input className="field_input" placeholder="姓名"/>
                                <Input  className="field_input" placeholder="年龄"/>
                                <Input className="field_input" placeholder="电话"/>
                                <span className="field_warn">*提交后我们的客服会主动联系你哦~</span>
                                <Button className="field_button" type="primary">提交信息</Button>
                            </div>
                          
                        </div>
                    </ContentBlock>
                </div>
            </div>
        )
    }
}