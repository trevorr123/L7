import React from "react";
import {View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    childBox: {
        borderWidth: 2,
        flex: 1,
        paddingVertical: 20,
    },
    childText: {
        textAlign: 'center',
        fontSize: 24,
    },
});

const Exercise3A = () => {
    return (
        <View style={styles.container}>
            <View style={styles.parent}>

                <View style={[styles.childBox, {backgroundColor: 'powderblue'}]}>
                    <Text style={styles.childText}>Child One</Text>
                </View>

                <View style={[styles.childBox, {backgroundColor: 'skyblue'}]}>
                    <Text style={styles.childText}>Child Two</Text>
                </View>

                <View style={[styles.childBox, {backgroundColor: 'steelblue'}]}>
                    <Text style={styles.childText}>Child Three</Text>
                </View>

            </View>
        </View>
    );
};

export default Exercise3A;