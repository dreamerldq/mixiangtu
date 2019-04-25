import React from 'react'
import axios from 'axios'
import './index.css'
export default class Robet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            question: '',
            answer: ''
        }
    }
    handleInput = (e) => {
        console.log("提出的问题是",e.target.value)
        this.setState({
            question: e.target.value
        })
    }
    handleQuestion = () => {
        axios.post('/openapi/api/v2',
            {
                reqType:0,
                perception:{
                    inputText:{
                        text: this.state.question
                    },
                    selfInfo: {
                        location: {
                            city: "北京",
                            province: "北京",
                            street: "信息路"
                        }
                    }
                },
                userInfo: {
                    apiKey: "a477563e26b049acb22dde86ad00b20b",
                    userId: "344383"
                }
    
            }
        ).then(({data})=>{
            console.log("返回值", data)
            this.setState({
                answer: data.results[0].values.text
            })
        })
    }
    render(){
        return(
            <div className="robet">
                <input onChange={this.handleInput} value={this.state.question}></input>
                <button onClick={this.handleQuestion}>发送</button>
                <div style={{color:'red'}}>
                    {this.state.answer}
                </div>
            </div>
        )
    }
}