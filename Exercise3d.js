import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        height: 150,
    },
    childBox: {
        borderWidth: 2,
        justifyContent: 'center',
    },
    childText: {
        textAlign: 'center',
        fontSize: 24,
    }
});

const Exercise3D = () => {
    return (
        <View style={{flex: 1, paddingTop: 50}}>
            <View style={styles.parent}>

                <View style={[
                    styles.childBox,
                    {backgroundColor: 'powderblue', flex: 1}
                ]}>
                    <Text style={styles.childText}>Child One</Text>
                </View>

                <View style={[
                    styles.childBox,
                    {backgroundColor: 'skyblue', flex: 2}
                ]}>
                    <Text style={styles.childText}>Child Two</Text>
                </View>

                <View style={[
                    styles.childBox,
                    {backgroundColor: 'steelblue', flex: 3}
                ]}>
                    <Text style={styles.childText}>Child Three</Text>
                </View>

            </View>
        </View>
    );
};

export default Exercise3D;