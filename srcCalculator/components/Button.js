import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
    View
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#888',
        justifyContent: 'center',
        alignItems: 'center',
    },
    operationButton: {
        backgroundColor: '#fa8231'
    },
    buttonDouble:{
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4) * 3,
    },
    buttonText: {
        fontSize: 30,
    }
})

export default props => {
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <View style = {[styles.button, props.operation && styles.operationButton, props.double && styles.buttonDouble, props.triple && styles.buttonTriple ]}>
                <Text style={styles.buttonText}> {props.label} </Text>
            </View>
        </TouchableHighlight>
    )
}