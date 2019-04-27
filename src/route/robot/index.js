import React from 'react'
import axios from 'axios'
import { Button,Input } from 'antd'
import './index.css'

const { TextArea } = Input;
const question = [
    '你叫啥?',
    '你都有什么课?',
    '多少钱?',
    '报名的人多吗?'
]
export default class Robot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            answer: []
        }
    }
    handleInput = (e) => {
        console.log("提出的问题是", e.target.value)
        this.setState({
            question: e.target.value
        })
    }
    handleSelectQuestion = (question) => {
        return () => {
            this.setState({
                question,
                answer: [...this.state.answer,{type:2, text:question}]
            })
        }
    }
    handleQuestion = () => {
        axios.post('/openapi/api/v2',
            {
                reqType: 0,
                perception: {
                    inputText: {
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
        ).then(({ data }) => {
            this.setState({
                answer: [...this.state.answer,{type:1, text:data.results[0].values.text}],
                question: ''
            })
        })
    }
    render() {
        console.log("qqq", this.state.answer)
        return (
            <div className="robot-container">
                <div className='robot-header'>

                </div>
                <div className="robot-body">

                    <div className="robot-duihua">
                        <div className="robot-display">
                            {
                                this.state.answer.map((item, index) => {
                                    if(item.type === 1){
                                      return  <div key={index} className='answer'><span>{item.text}</span></div>
                                    }else{
                                        return <div key={index} className='question'><span>{item.text}</span></div>
                                    }
                                })
                            }
                        </div>
                        <div className="robot-message">
                        <TextArea style={{height:'100%'}} value={this.state.question} onChange={this.handleInput} value={this.state.question}></TextArea>
                            <Button type="primary" onClick={this.handleQuestion}>发送</Button>
                        </div>
                    </div>

                    <div className="robot-question">
                        <p>Hi~ 有问题随时问我哦!</p>
                        {
                            question.map((item, index) =><p key={index} onClick={this.handleSelectQuestion(item)} key={index}>{item}</p>)
                        }
                    </div>

                </div>
            </div>
        )
    }
}