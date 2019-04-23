import React from 'react'
import axios from 'axios'
import './index.css'
export default class Robet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            question: ''
        }
    }
    handleInput = (e) => {
        console.log("提出的问题是",e.target.value)
        this.setState({
            question: e.target.value
        })
    }
    handleQuestion = () => {
        axios.post('http://openapi.tuling123.com/openapi/api/v2',{
            reqType:0,
            perception:{
                inputText:{
                    text: this.state.question
                }
            },
            userInfo: {
                apiKey: "a477563e26b049acb22dde86ad00b20b",
                // userId: "1299202444@qq.com"
            }

        }).then((res)=>{
            console.log("返回值", res)
        })
    }
    render(){
        return(
            <div className="robet">
                <input onChange={this.handleInput} value={this.state.question}></input>
                <button onClick={this.handleQuestion}>发送</button>
            </div>
        )
    }
}