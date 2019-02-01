import React from 'react'
import { Carousel,Input, Button } from 'antd';
import './index.css'
import ContentBlock from '../../components/ContentBlock/index.js'
import LessonBlock from '../../components/LessonBlock/index.js'
import TeachingSystem from '../../components/TeachingSystem/index.js'
export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.handleGetList = this.handleGetList.bind(this)
        this.state={
            lunbos:[],
            results:[],
            LessonMode:[]
        }
    }
    componentDidMount(){
        this.handleGetList()
        this.handleGetExhibition()
        this.handleGetLessonMode()
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
            
           console.log("BBBB", result)
           const LessonMode = result.map((item)=>{
               const obj = item.attributes
            return {
                age: obj.age,
                id: obj.id,
                lesson_mode_name: obj.lesson_mode_name,
                mode: obj.mode,
                teachers: obj.teachers,
                mode_image:obj.mode_image.attributes.url

            }
        
        })
        console.log("q1111",LessonMode)
        this.setState({
            LessonMode
        })
       }).catch(function(error) {
         console.log("课程模式请求失败", error)
       });
    }
    handleGetList(){
        const lunboList = new window.AV.Query('Lunbo');
        lunboList.find().then( (lunbos)=> {
            const images = lunbos.map((item)=>{
                return item._serverData.image.attributes.url
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
        console.log("img", lunbos)
        return(
            <div>
                <Carousel autoplay>
                    {
                      lunbos.map((img)=>{
                          return(
                            <div className="carousel_image">
                                <img src={img}/>
                            </div>
                          )
                      }) 
                    }
                </Carousel>
                <div className="index_content">
                    <ContentBlock title={'教学体系'}>
                        <div className="teaching_system">
                            <TeachingSystem
                                title={'图形化编程教育'}
                                describes={[
                                    '这里是简介，这里是简介',
                                    '这里是简介，这里是简介',
                                    '这里是简介，这里是简介',
                                    '这里是简介，这里是简介',
                                    '这里是简介，这里是简介'
                                ]}
                            />

                             <TeachingSystem
                                title={'图形化编程教育'}
                                describes={[
                                    '这里是简介，这里是简介',
                                    '这里是简介，这里是简介',
                                    '这里是简介，这里是简介',
                                    '这里是简介，这里是简介',
                                    '这里是简介，这里是简介'
                                ]}
                            />
                        </div>
                    </ContentBlock>

                    <ContentBlock title={'课程模式'}>
                        <div className="lesson_mode">
                        {
                            this.state.LessonMode.map((lesson) => {
                                return(
                                    <LessonBlock
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
                        <div className="result_exzbit">
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
                        <div className="index_baoming">
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