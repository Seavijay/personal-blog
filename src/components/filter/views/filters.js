import React from 'react'
import Link from './link'
import { FilterTypes } from '../../../constants'
import { map, toPairs } from 'ramda'
import './filter.css'

const Filters = () => {
    return (
        <div className="filters">
            {
                FilterTypes.tag|> toPairs|> map(([key, value]) => <Link filter={key}>{value}</Link>)
            }
        </div>
    )
}

export default Filters