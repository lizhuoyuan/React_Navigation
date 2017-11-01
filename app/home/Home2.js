/**
 * Created by 卓原 on 2017/10/31.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
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

        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>home2接收到的 : {params.name}</Text>
            </View>
        )
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