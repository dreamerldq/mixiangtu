import React from 'react'
import { Carousel } from 'antd';
import './index.css'
import ContentBlock from '../../components/ContentBlock/index.js'
import LessonBlock from '../../components/LessonBlock/index.js'
import TeachingSystem from '../../components/TeachingSystem/index.js'
export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.handleGetList = this.handleGetList.bind(this)
        this.state={
            lunbos:[]
        }
    }
    componentDidMount(){
        this.handleGetList()
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
                            <LessonBlock
                                lesson={'Scratch图形教学'}    
                                teacher={'jingda'}
                                type={'课堂教学'}
                                age={'6-8岁'}
                            >
                            </LessonBlock>
                            <LessonBlock
                                lesson={'Scratch图形教学'}
                                teacher={'jingda'}
                                type={'课堂教学'}
                                age={'6-8岁'}
                            >
                            </LessonBlock>
                            <LessonBlock
                                lesson={'Scratch图形教学'}
                                teacher={'jingda'}
                                type={'课堂教学'}
                                age={'6-8岁'}
                            >
                            </LessonBlock>
                        </div>
                    </ContentBlock>

                    <ContentBlock title={'成果展览'}>
                        <div className="result_exzbit">
                            {(new Array(8).fill('100')).map((item)=>{
                                return(
                                    <div className="content_image">

                                    </div>
                                )
                            })}
                        </div>
                    </ContentBlock>

                    <ContentBlock title={'我要报名'}>
                        <div style={{height:'200px',backgroundColor:'skyblue'}}>

                        </div>
                    </ContentBlock>
                </div>
            </div>
        )
    }
}