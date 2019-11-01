import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'flex-end',
        padding: 20
    },
    displayValue: {
        color: 'black',
    },
})

export default props => {
    const tamanhoa = props.value.length || 0
    return (
        <View style={styles.display}>
            <Text allowFontScaling = {false} numberOfLines={1} style={[styles.displayValue, { fontSize: (60 - tamanhoa*2) > 30? 60 - tamanhoa*2: 30 }]}>
                {props.value}
            </Text>
        </View>
    )
}
