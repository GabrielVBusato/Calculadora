import React, { Component } from 'react';

import { View, StyleSheet, ToastAndroid } from 'react-native';

import Button from '../components/Button'
import Display from '../components/Display'

const defaultState = {
    displayValue: '0',
    currentValue: '',
    resultShowed: false,
    isClear: true,
    operationSeted: false,
    pointer: 0,
}

export default class Calculator extends Component {
    state = { ...defaultState }

    addDigit = n => {
        if (n === '.' && this.state.currentValue.split('.').length - 1 > this.state.pointer || this.state.isClear && n === '0') {
            return null
        }

        if (this.state.isClear && n === '.') {
            this.setState({
                currentValue: '0' + n,
                displayValue: '0' + n,
            })
            return null;
        }

        if (n.match("[0-9]+") || n === '.') {
            if ((this.state.currentValue.charAt(this.state.currentValue.length - 1) === '/' ||
                this.state.currentValue.charAt(this.state.currentValue.length - 1) === '+' ||
                this.state.currentValue.charAt(this.state.currentValue.length - 1) === '-' ||
                this.state.currentValue.charAt(this.state.currentValue.length - 1) === '*') && n === '.') {
                return null;
            } else {
                this.setState({
                    displayValue: this.state.currentValue + n,
                    currentValue: this.state.currentValue + n,
                    operationSeted: false,
                    isClear: false,
                })
            }
        } else if (!this.state.operationSeted) {
            if (this.state.currentValue.charAt(this.state.currentValue.length - 1) === '.') {
                return null
            } else if (!(this.state.currentValue.length === 0)) {
                this.setState({
                    displayValue: this.state.currentValue + n,
                    currentValue: this.state.currentValue + n,
                    operationSeted: true,
                    pointer: this.state.pointer + 1,
                })
            }
        } else {
            return null
        }
    }

    clearMemory = n => {
        this.setState({
            ...defaultState
        })
    }

    showResult = () => {
        if ((this.state.currentValue.charAt(this.state.currentValue.length - 1) === '/' ||
            this.state.currentValue.charAt(this.state.currentValue.length - 1) === '+' ||
            this.state.currentValue.charAt(this.state.currentValue.length - 1) === '-' ||
            this.state.currentValue.charAt(this.state.currentValue.length - 1) === '*')) {
            ToastAndroid.show('Formato usado inválido.', ToastAndroid.SHORT);
            return null;
        }
        this.clearMemory()
        this.setState({
            displayValue: eval(this.state.displayValue),
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Display value={this.state.displayValue} />
                <View style={styles.buttons}>
                    <Button label='AC' triple onClick={this.clearMemory} />
                    <Button label='/' operation onClick={this.addDigit} />
                    <Button label='7' onClick={this.addDigit} />
                    <Button label='8' onClick={this.addDigit} />
                    <Button label='9' onClick={this.addDigit} />
                    <Button label='*' operation onClick={this.addDigit} />
                    <Button label='4' onClick={this.addDigit} />
                    <Button label='5' onClick={this.addDigit} />
                    <Button label='6' onClick={this.addDigit} />
                    <Button label='-' operation onClick={this.addDigit} />
                    <Button label='1' onClick={this.addDigit} />
                    <Button label='2' onClick={this.addDigit} />
                    <Button label='3' onClick={this.addDigit} />
                    <Button label='+' operation onClick={this.addDigit} />
                    <Button label='0' double onClick={this.addDigit} />
                    <Button label='.' onClick={this.addDigit} />
                    <Button label='=' operation onClick={this.showResult} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})