import PublicHeader from '../../components/header/header'
import PublicFooter from '../../components/footer/footer'
import MomentList from '../../components/moments/momentList'
import React from 'react'
//import './movies.scss'

const Movies = () => {
    return (
        <div className='container'>
            <PublicHeader />
            <MomentList category="Movies"/>
            <PublicFooter />
        </div>
    )
}

export default Movies