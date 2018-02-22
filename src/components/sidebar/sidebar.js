import { view as Filter } from '../filter'
import React from 'react'
import 'sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Filter />
        </div>
    )
}

export default Sidebar