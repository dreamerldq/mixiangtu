
import React from 'react'
import { Row, Col } from 'antd'
import Data from '../../QuanJingData'
import { Link } from 'react-router-dom'

import './index.css'

class QuanJingList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quanjingList: []
    }
  }
  componentDidMount(){
    this.handleGetLessonList()
}

handleGetLessonList = () => {
    const { id } = this.props.match.params
    
    var lesson = new window.AV.Query('Qujing');

    lesson.find().then((obj) => {
        const quanjingList = obj.map((res) => {
          console.log("res",res)
            return{
            id: res.id,
            image_url: res.get('quanjing_image').attributes.url,
            image_name: res.attributes.image_name
            }
        })
        this.setState({
            quanjingList
        })
});
}
  render(){
    const {quanjingList} = this.state;
    console.log("qqq",quanjingList)
    return (
      <div className="QuanJingListContainer">
        <Row type="flex" justify="space-around">
          {quanjingList.map((item) => {
            return (
              <Col key={item.id}>
                <Link to={`/quanjing/${item.id}`}><img className="image" src={item.image_url}/></Link>
                <h3>{item.image_name}</h3>
              </Col>
            )
          })}
        </Row>
  
      </div>
    )
  }
  
}
export default QuanJingList