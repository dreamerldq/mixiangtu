import React from 'react'
import './index.css'

export default class DetailBody extends React.Component{
    render(){
        const {title, content} = this.props
        const reg = /^\<a/
        const str = '<a href="https://www.baidu.com">https://www.baidu.com</a>'
        console.log("测试", reg.test(str))
        return(
            <div className="detail_body">
                <div className="body_title">{title}</div>
                <div className="body_content">
                    {(content || '').split('/n').map((item) => {
                        // return <p>{item.replace(reg,'')}</p>
                        console.log(item,reg.test(item), typeof(item))
                        return reg.test(item) ? <a>111</a> : <p>{item}</p>
                    })}
                    {/* {content} */}
                </div>
            </div>
        )
    }
}