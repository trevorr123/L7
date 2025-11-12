import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        marginTop: 30,
    },
    child: {
        width: 80,
        height: 80,

        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>

            <View style={[styles.child, {backgroundColor: 'skyblue'}]}>
                <Text>Square 1</Text>
            </View>

            <View style={[styles.child, {backgroundColor: 'lightgreen'}]}>
                <Text>Square 2</Text>
            </View>

            <View style={[styles.child, {backgroundColor: 'crimson'}]}>
                <Text>Square 3</Text>
            </View>

        </View>
    );
};

export default Exercise4;