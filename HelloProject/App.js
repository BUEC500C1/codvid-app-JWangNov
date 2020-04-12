import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }
})

function Greeting(props) {
    return (
        <View style={styles.center}>
            <Text>Hello {props.name}!</Text>
        </View>
    );
}

function LotsOfGreetings() {
    return (
        <View style={[styles.center, {top: 50}]}>
            <Greeting name='0123'/>
            <Greeting name='4567'/>
            <Greeting name='890a'/>
        </View>
    );
}

export default LotsOfGreetings;
