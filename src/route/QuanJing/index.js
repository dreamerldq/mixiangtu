import React from 'react'
import PhotoSphereViewer from 'photo-sphere-viewer'
import '../../..//node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css'
import './index.css'

class QuanJing extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image_url: '',
      id:'',
      image_name: ''
    }
  }
  componentDidMount() {
    const id = window.location.pathname.split('/')[2]
    var query = new window.AV.Query('Qujing');
    query.get(id).then((res) => {
    this.setState({
      id: res.id,
      image_url: res.get('quanjing_image').attributes.url,
      image_name: res.attributes.image_name
    }, () => {
      const navbar = this.getNavBar()
      const viewer = PhotoSphereViewer({
        container: 'view',
        panorama: this.state.image_url,
        navbar
      });
    })
  });
  
  }

  // componentDidUpdate() {
  //   const view = document.getElementById('view')
  //   while (view.hasChildNodes()) {
  //     view.removeChild(view.firstChild);
  //   }
    

  //   const navbar = this.getNavBar()
  //   const viewer = PhotoSphereViewer({
  //     container: 'view',
  //     panorama: this.state.image_url,
  //     navbar
  //   });
  // }
  getNavBar() {

    const navbar = [
      // 'autorotate',
      'zoom',
      'markers',
      'caption',
      'fullscreen'
    ]
    return navbar
  }
  render() {
    return (
      <div>
        <div style={{ width: '1000px', height: '526px', margin: '100px auto' }} id="view" />
      </div>

    )
  }
}
export default QuanJing