import React from 'react'
import Link from './link'
import { FilterTypes } from '../../../constants'
import { map, toPairs } from 'ramda'
import './filter.css'

const Filters = () => {
    return (
        <div className="filters">
            <p>FEATURED TAGS</p>
            {
                FilterTypes.tag|> toPairs|> map(([key, value]) => <Link filter={value}>{value}</Link>)
            }
        </div>
    )
}

export default Filters