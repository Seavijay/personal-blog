import React from 'react'
import ReactDOM from 'react-dom'
import Route from './routes/rootRouter'
import {Provider} from 'react-redux'
import store from './store/store'
import 'normalize.css'

const root = document.querySelector('#root')
const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        root
    )
}

render(Route)


if (module.hot) {
    module.hot.accept('./routes/rootRouter', () => {
        requestAnimationFrame(render(Route))
    })
}