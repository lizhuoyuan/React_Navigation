/**
 * Created by 卓原 on 2017/10/31.
 * zhuoyuan93@gmail.com
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Me extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Me</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22
    }
})