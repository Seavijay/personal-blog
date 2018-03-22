import PublicHeader from '../../components/header/header'
import PublicFooter from '../../components/footer/footer'
import MomentList from '../../components/moments/momentList'
import Sidebar from '../../components/sidebar/sidebar'
import React from 'react'
import './photography.module.css'

const Photography = () => {
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

export default Photography