import React from "react";
// SafeAreaView has been removed
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    childBox: {
        borderWidth: 2,
        flex: 1,
        justifyContent: 'center',
    },
    childText: {
        textAlign: 'center',
        fontSize: 24,
    }
});

const Exercise3B = () => {
    return (
        <View style={{flex: 1}}>
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

export default Exercise3B;