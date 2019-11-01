/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Calculator from './srcCalculator/components/Calculator'

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
        <Calculator></Calculator>
    )
  }
}




