import React from 'react'
import './index.css'
export default class ContentBlock extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render(){
        const {title, children} = this.props
        return(
            <div className="content_block">
                <div className="block_title">
                    {title}
                </div>
                <div className="block_body">
                    {children}
                </div>
            </div>
        )
    }
    
}