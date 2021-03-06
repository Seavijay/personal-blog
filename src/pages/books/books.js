import PublicHeader from '../../components/header/header'
import PublicFooter from '../../components/footer/footer'
import MomentList from '../../components/moments/momentList'
import Sidebar from '../../components/sidebar/sidebar'
import React from 'react'
import './books.module.css'

const Books = () => {
    return (
        <div className="container">
            <PublicHeader />
            <div class="main" >
                <MomentList />
                <Sidebar />
            </div>
            <PublicFooter />
        </div>
    )
}

export default Books