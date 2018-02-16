import PropTypes from 'prop-types'
import React from 'react'
import { map, toPairs } from 'ramda'


const MomentItem = ({ information }) => {
    return (
        <div className="momentItem">
            <p className="comment">{information.Comment}</p>
            <div className="pics">
                {
                    information.Pics |> toPairs |> map(([key, value]) => {<img src={value} className="pic" />})
                }
            </div>
            <div className="picsIntroduction">
                <h3>{information.Name}</h3>
                <ul>
                    {
                        information.PicsIntroduction |> toPairs |> map(([key, value]) => {<li>{`${key}:${value}`}</li>})
                    }
                </ul>
            </div>
        </div>
    )
}

export default MomentItem