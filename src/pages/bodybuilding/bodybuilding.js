import PublicHeader from '../../components/header'
import PublicFooter from '../../components/footer'
import MomentList from '../../components/moments/momentList'
import Sidebar from '../../components/sidebar'
import React from 'react'
//import './home.scss'

const Home = () => {
    return (
        <div className='container'>
            <PublicHeader />
            <MomentList />
            <Sidebar />
            <PublicFooter />
        </div>
    )
}

export default Home