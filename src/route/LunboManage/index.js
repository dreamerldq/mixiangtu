import React from 'react'
import './index.css'
import { Table, Button, Modal } from 'antd'


export default class LunboManage extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
        this.handleGetList = this.handleGetList.bind(this)
        this.state = {
             columns: [{
                title: 'id',
                dataIndex: 'id',
                key: 'id',
              }, {
                title: '图片',
                dataIndex: 'image',
                key: 'image',
              },
              {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render:(text, record, index) => (
                    <Button onClick={this.handleDelete}>删除</Button>
                  )
              }],
            
              dataSource: [],
              visible: false,
              url:'',
              file:null
        }
    }
    componentDidMount(){
        this.handleGetList()
    }
    handleDelete(){
        console.log('shanchu')
    }
    handleUpload(e){
        const file = e.target.files[0]
        const fileSize = (file.size / 1024).toFixed(0)
       const url = URL.createObjectURL(file);
       this.setState({
           url,
           file
       })
    }
    handleAdd(){
        this.setState({
            visible: true,
            url:'',
            file:null
        })
    }
    handleOk(){
        const image = new window.AV.File('first', this.state.file);
        var Lunbo = window.AV.Object.extend('Lunbo')
        const lunbo = new Lunbo();
        lunbo.set('image', image);
        lunbo.save().then(function() {
            //  发布成功，跳转到商品 list 页面
            console.log('图片上传成功')
            this.setState({
                visible: false,
                url: '',
                file:null
            })
          }, function(error) {
              
            console.log("err",error)
          });
      
    }
    handleCancel(){
        this.setState({
            visible: false
        })
    }

    render(){
        const { visible, columns, dataSource} = this.state
        return(
            <div className="lunbo_manage">
             <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                添加图片
            </Button>
                <Table
                 columns={columns}
                 dataSource={dataSource}
                >

                </Table>

                <Modal
                    visible={visible}
                    bodyStyle={{width:'500px'}}
                    title="添加图片"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText='上传图片'
                    cancelText='取消'
                    >
                    <div className="image_model">
                        <label htmlFor="upload"><span className="add_image">添加图片</span></label>
                        <input
                         id="upload"
                         style={{display:'none'}}
                         onChange={this.handleUpload}
                         accept="image/gif, image/jpeg, image/png, audio/*" 
                         type="file"/>
                         <img src={this.state.url}/>
                    </div>
                    </Modal>
            </div>
        )
    }
}