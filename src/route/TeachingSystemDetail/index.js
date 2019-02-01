import React from 'react'
import './index.css'
import DetailSide from '../../components/DetailSide/index.js'
import DetailBody from '../../components/DetailBody/index.js'
import DetailFrame from '../../components/DetailFrame/index.js'


export default class LessonDetail extends React.Component{
    render(){
        console.log("AAAA", this.props)
        return(
            
                <DetailFrame>
                    <div>

                    </div>
                    <DetailBody
                        title={'教学体系说明'}
                        content={''}
                    >

                    </DetailBody>
                </DetailFrame>
            
        )
    }
}