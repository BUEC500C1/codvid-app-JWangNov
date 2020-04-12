import React from 'react';
import {Text, View} from 'react-native';

function HelloWorldApp() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>Hello, world!</Text>
            <Text>- JW -</Text>
        </View>
    )
}

export default HelloWorldApp;
