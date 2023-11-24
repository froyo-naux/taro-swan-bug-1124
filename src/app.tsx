import { PropsWithChildren } from 'react'
import { useLaunch, useError } from '@tarojs/taro'
import { Provider } from 'mobx-react';
import './app.scss'
import store from './store';
import test from './store/test'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('------------useLaunch----------------')
    console.log('App launched.')
  })

  useError((error) => {
    console.log('-------------------------');
    console.log(error)
  })

  // children 是将要会渲染的页面
  return children
}

export default App
