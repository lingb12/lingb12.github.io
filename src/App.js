import React      from 'react'
import {Provider} from 'react-redux'
import store      from './store'
import Root       from './components'

import './App.css'


export default class App extends React.Component {

  componentDidMount() {
    store.dispatch({ type: 'SET FIRST VISIT' })
  }

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
