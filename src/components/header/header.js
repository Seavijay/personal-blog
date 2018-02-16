import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const PublicHeader = () => {
    return (
        <header>
            <div>
                <NavLink to="/" exact className="logo">Vijay's Blog</NavLink>
                <nav>
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                    <NavLink to="/code" exact className="nav-link">Code</NavLink>
                    <NavLink to="/books" exact className="nav-link">Books</NavLink>
                    <NavLink to="/movies" exact className="nav-link">Movies</NavLink>
                    <NavLink to="/musics" exact className="nav-link">Musics</NavLink>
                    <NavLink to="/photography" exact className="nav-link">Photography</NavLink>
                    <NavLink to="/bodybuilding" exact className="nav-link">Bodybuilding</NavLink>
                </nav>
            </div>
            <h1>Vijay's Blog</h1>
            <h3>saying</h3>
        </header>
    )
}

export default PublicHeader