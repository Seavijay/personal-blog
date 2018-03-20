import PublicHeader from '../../components/header/header'
import PublicFooter from '../../components/footer/footer'
import MomentList from '../../components/moments/momentList'
import React from 'react'
//import './musics.module.css'

const Musics = () => {
    return (
        <div className='container'>
            <PublicHeader />
            <MomentList />
            <PublicFooter />
        </div>
    )
}

export default Musics