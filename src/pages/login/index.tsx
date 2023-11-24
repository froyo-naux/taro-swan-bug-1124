/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
import { View, Image, Text, Navigator, Button } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

import './index.scss';
import test from '../../store/test'

const Login = observer(class Login extends Component {
  render() {
    return (
      <View className='p-login bg'>
        <Image className='logo' src='https://media-image1.baydn.com/storage_media_image/buteka/4380bd538806bc019f681a8ae029203a.10469b9f28e412eee38c9798d8a3d33f.png' mode='scaleToFill' />
        <View className='desc'>是时候制定你的英语备考计划了</View>
        <Image className='main' src='https://media-image1.baydn.com/storage_media_image/buteka/9e02a039f6bccfce960fb1fe865a158e.bdc7d20537e8c868ec468160bd1e9d56.png' mode='scaleToFill' />
        <View className='text-center'>
          <View>
            <View>
              <Button className='btn btn--primary' onClick={() => test.toggle()}>test</Button>
              <View>
                结果： {test.finished ? 'true' : 'false'}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
})


export default Login;
