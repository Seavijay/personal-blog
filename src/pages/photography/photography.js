import PublicHeader from '../../components/header/header'
import PublicFooter from '../../components/footer/footer'
import MomentList from '../../components/moments/momentList'
import React from 'react'
//import './photography.scss'

const Photography = () => {
    return (
        <div className='container'>
            <PublicHeader />
            <MomentList />
            <PublicFooter />
        </div>
    )
}

export default Photography