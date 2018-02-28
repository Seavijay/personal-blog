import React from 'react'
import { map, toPairs, compose } from 'ramda'


const MomentItem = ({ information }) => {
    return (
        <div className="momentItem">
            <p className="comment">{information.Comment}</p>
            <div className="pics">
                {
                    compose(toPairs,map(([key, value]) => { 
                        return (<img src={value} alt={`${key}`} className="pic" />)
                    }))(information.Pics)
                }
            </div>
            <div className="picsIntroduction">
                <h3>{information.Name}</h3>
                <ul>
                    {
                        compose(toPairs,map(([key, value]) => {
                            return (<li>{`${key}:${value}`}</li>)
                        }))(information.PicsIntroduction)
                    }
                </ul>
            </div>
        </div>
    )
}

export default MomentItem