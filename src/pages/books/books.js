import PublicHeader from '../../components/header'
import PublicFooter from '../../components/footer'
import MomentList from '../../components/moments/momentList'
import React from 'react'
//import './books.module.css'

const Books = () => {
    return (
        <div className='container'>
            <PublicHeader />
            <MomentList />
            <PublicFooter />
        </div>
    )
}

export default Books