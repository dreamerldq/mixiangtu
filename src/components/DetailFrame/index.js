import React from 'react'
import './index.css'
export default class DetailFrame extends React.Component{
    render(){
        const { children } = this.props
        return(
            <div className="detail_frame">
                <div className="frame_content">
                    <div className="frame_head">
                        {children[0]}
                    </div>
                    <div className="frame_body">
                        {children[1]}
                    </div>
                </div>

                <div className="frame_side">
                    {children[2]}
                </div>
            </div>
        )
    }
}