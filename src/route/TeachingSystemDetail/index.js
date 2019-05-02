import React from 'react'
import './index.css'
import DetailSide from '../../components/DetailSide/index.js'
import DetailBody from '../../components/DetailBody/index.js'
import DetailFrame from '../../components/DetailFrame/index.js'


export default class LessonDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            teacherInfo: {}
        }
    }
    componentDidMount(){
        const { id } = this.props.match.params
        const data = new window.AV.Query('TeachingSystem');
        data.get(id).then( (res)=> {
            const obj = res.attributes
            const teacherInfo = {
               
                system_describe: obj.system_describe,
                system_name: obj.system_name,
                system_subtitle: obj.system_subtitle,
                system_image: obj.system_image.attributes.url
            }
            this.setState({
                teacherInfo
            })
         })
    }
    render(){
    const {teacherInfo} = this.state
        return(
            
                <DetailFrame>
                    <div className="two_block">
                        <img src={teacherInfo.system_image}/>
                        <div className="teacherinfo">
                            <span>{teacherInfo.system_name}</span>
                            <span>{teacherInfo.system_subtitle}</span>
                        </div>
                    </div>
                    <DetailBody
                        title={teacherInfo.system_name}
                        content={teacherInfo.system_describe}
                    >

                    </DetailBody>
                </DetailFrame>
            
        )
    }
}