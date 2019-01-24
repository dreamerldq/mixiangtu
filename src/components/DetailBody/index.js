import React from 'react'
import './index.css'

export default class DetailBody extends React.Component{
    render(){
        const {title, content} = this.props
        return(
            <div className="detail_body">
                <div className="body_title">{title}</div>
                <div className="body_content">
                    {content}
                </div>
            </div>
        )
    }
}