import PublicHeader from '../../components/header'
import PublicFooter from '../../components/footer'
import MomentList from '../../components/moments/momentList'
import Sidebar from '../../components/sidebar'
import React from 'react'
import './home.module.css'
import 'normalize.css'

const Home = () => {
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

export default Home