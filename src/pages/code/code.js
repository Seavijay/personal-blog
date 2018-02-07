import PublicHeader from '../../components/header'
import PublicFooter from '../../components/footer'
import MomentList from '../../components/moments/momentList'
import React from 'react'
import './code.css'

const Code = () => {
    return (
        <div className='container'>
            <PublicHeader />
            <MomentList />
            <PublicFooter />
        </div>
    )
}

export default Code