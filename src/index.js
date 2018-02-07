import React from 'react';
import ReactDOM from 'react-dom';
import Route from './routes/rootRouter';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './store/store';
import './style/base.css';
import 'normalize.css'

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);


if (module.hot) {
  module.hot.accept('./router/rootRouter', () => {
    render(Route);
  })
}