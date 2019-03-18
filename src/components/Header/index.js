import React from 'react'
import './index.css'

const menu = [
    {
        name:'首页',
        link:'/'
    },
    {
        name:'教学体系',
        link:'/'
    },
    {
        name:'课程模式',
        link:'/'
    },
    {
        name:'成果展览',
        link:'/'
    },
    {
        name:'我要报名',
        link:'/'
    },
    {
        name:'全景展示',
        link:'/'
    },

]

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentNav:''
        }
    }
    render(){
        return(
            <div className="app_header">
                <ul className="menu_ul">
                    <li className="logo">
                        <img src={require('../../mixiangtu1.png')}/>
                    </li>
                    {
                        menu.map((item)=>{
                            return(
                                <li className="menu_nav">{item.name}</li>
                            )
                        })
                    }
                     <li className="login">登陆</li>
                </ul>
            </div>
        )
    }
}