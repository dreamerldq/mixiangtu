import React from 'react'
import './index.css'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const menu = [
    {
        name: '首页',
        link: 'index'
    },
    {
        name: '教学体系',
        link: 'teachingsystem'
    },
    {
        name: '课程模式',
        link: 'lessonmode'
    },
    {
        name: '成果展览',
        link: 'resultexzbit'
    },
    {
        name: '我要报名',
        link: 'baoming'
    },
    {
        name: '全景展示',
        link: 'quanjing'
    },

]

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentNav: 'index'
        }
    }
    componentDidMount(){
        if(window.location.pathname == '/QuanJingList'){
            this.setState({
                currentNav: 'quanjing'
            })
        }
    }
    handleClick = (nav) => {
       console.log("location", window.location)
        this.setState({
            currentNav: nav,
        });
        if(window.location.pathname !== '/index'){
            window.location.href = `${window.location.origin}/index`
        }else{
            if(nav == 'quanjing'){
                window.location.href = `${window.location.origin}/QuanJingList`
            }else{
            document.querySelector(`#${nav}_top`).scrollIntoView(true);
            }
        }
      
      }
    render() {
        return (
            <div className="app_header">
                <ul className="menu_ul">
                    <li className="logo">
                        <img src={require('../../mixiangtu1.png')}/>
                    </li>
                    {
                        menu.map((item)=>{
                            return(
                                <li key={item.link} onClick={this.handleClick.bind(this,item.link)} 
                                    className={this.state.currentNav === item.link ? "menu_nav_active" : "menu_nav"}
                                >{item.name}</li>
                            )
                        })
                    }
                     {/* <li className="login">登陆</li> */}
                </ul>
            </div>
        )
    }
}