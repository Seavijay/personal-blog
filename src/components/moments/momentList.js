import React from 'react'
import { connect } from 'react-redux'
import MomentItem from './momentItem'
import { FilterTypes } from '../../../constants'
import PropTypes from 'prop-types'
import {has} from 'ramda'
import './momentList.css'

const MomentList =(moments)=>{
    return(
        <div className="momentList">
            {
                moments.map((item)=>{
                    return(
                        <MomentItem
                            className={item.category}
                            tag={item.tag}
                            information ={item.information}
                        ></MomentItem>
                    )
                })
            }
        </div>
    )
}
MomentList.PropTypes ={
    moments:PropTypes.array.isRequired
}
const selectVisibleMoments = (moments, filter) => {
    const hasFiltertype=has(`${filter.tag}`)
    if(hasFiltertype(FilterTypes.tag)){
        if(filter.tag=FilterTypes.tag.ALL){
            return moments
        }else{
            return moments.filter(item=>item.tag===filter.tag)
        }
    }else{
        throw new Error('unsupported tag')
    }
}
const mapStateToProps =(state)=>{
    return{
        moments:selectVisibleMoments(state.moments,state.filter)
    }
}

export default connect(mapStateToProps,null)(MomentList)