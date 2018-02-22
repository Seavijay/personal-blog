import React from 'react'
import ReactDOM from 'react-dom'
import Route from './routes/rootRouter'
import {Provider} from 'react-redux'
import store from './store/store'
import 'normalize.css'

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root'),
    )
}

render(Route)


if (module.hot) {
    module.hot.accept('./router/rootRouter', () => {
        requestAnimationFrame(render(Route))
    })
}