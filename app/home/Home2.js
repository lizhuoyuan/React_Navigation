/**
 * Created by 卓原 on 2017/10/31.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NativeModules,
    Platform,

    ToastAndroid
} from 'react-native';

export default class Home2 extends React.Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: ` ${navigation.state.params.name}`,       //前一个页面传来的对象的name属性
        headerRight: <TouchableOpacity onPress={() => {
            alert(navigation.state.params.name)
        }}>
            <View>
                <Text>2右</Text>
            </View>
        </TouchableOpacity>,
        /*headerLeft: <TouchableOpacity onPress={() => {
            navigation.goBack()
        }}>

            <View>
                <Text>2⬅️</Text>
            </View>
        </TouchableOpacity>,*/
    });


    render() {
        console.log(this.props.navigation)
        const {navigate, goBack, state} = this.props.navigation;
        const {params} = state;
        return (
            <View style={styles.container}>
                <Text>home2接收到的 : {params.name}</Text>
                <TouchableOpacity onPress={() => this._goNative()}>
                    <Text>跳去安卓原生页面</Text>
                </TouchableOpacity>

                <Text onPress={() => {
                    params.callback('回调参数')
                    // this.props.navigation.goBack()
                }}>
                    改变上个页面的a
                </Text>
            </View>
        )
    }

    _goNative() {
        if (Platform.OS == 'android') {
            NativeModules.IntentMoudle.startActivityFromJs('com.gitproject.FirstActivity', '从js来的参数');

        }
    }


    _goNativeForResult() {
        NativeModules.IntentMoudle.startActivityFromJSGetResult("com.gitproject.FirstActivity", 200, (msg) => {
                ToastAndroid.show('JS界面:从Activity中传输过来的数据为:' + msg, ToastAndroid.SHORT);
            },
            (result) => {
                ToastAndroid.show('JS界面:错误信息为:' + result, ToastAndroid.SHORT);
            })
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 22
    },
    headerTitleStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    },
    headerView: {
        backgroundColor: 'yellow',
    },
    rightView: {
        marginHorizontal: 20
    },
    leftText: {
        color: 'red'
    }
});