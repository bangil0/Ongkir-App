import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history, store } from './redux/store/store'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

const RootComponent = (Component) =>
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
RootComponent(hot(App))

/**
@description on serviceWorker if environment is production mode
*/
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in window.navigator) {
  window.onload = () => window.navigator.serviceWorker.register(`/service-worker.js`)
}
