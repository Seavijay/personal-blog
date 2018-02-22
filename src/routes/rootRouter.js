import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'

import home from '/pages/home/home'
const code = asyncComponent(() => import('../pages/code/code'))
const books = asyncComponent(() => import('../pages/books/books'))
const movies = asyncComponent(() => import('../pages/movies/movies'))
const musices = asyncComponent(() => import('../pages/musices/musices'))
const photography = asyncComponent(() => import('../pages/photography/photography'))
const bodybuilding = asyncComponent(() => import('../pages/bodybuilding/bodybuilding'))

export default class RouteConfig extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/code" component={code} />
                    <Route path="/books" component={books} />
                    <Route path="/movies" component={movies} />
                    <Route path="/musices" component={musices} />
                    <Route path="/photography" component={photography} />
                    <Route path="/bodybuilding" component={bodybuilding} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}