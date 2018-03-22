import React from 'react'
import Link from './link'
import { FilterTypes } from '../../../constants'
import { map, toPairs, compose} from 'ramda'
import './filters.module.css'

const Filters = () => {
    return (
        <div className="filters">
            <p>FEATURED TAGS</p>
            {
                compose(toPairs,map(([key, value]) => <Link filter={value}>{value}</Link>))(FilterTypes.tag)
            }
        </div>
    )
}

export default Filters