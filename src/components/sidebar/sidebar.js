import { view as Filter } from '../filter'
import React from 'react'
import './sidebar.module.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Filter />
        </div>
    )
}

export default Sidebar