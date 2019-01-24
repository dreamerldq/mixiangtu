import React from 'react'
import './index.css'
export default class DetailSide extends React.Component{
    render(){
        const { list } = this.props
        return(
            <div className="detail_side">
                {
                    (list || []).map((item,key) => {
                        return(
                            <div className="detail_side_item">
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}