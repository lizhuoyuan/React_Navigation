/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
    Image, View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import More from './app/more/More';
import MePage from './app/mepage/Me';
import Home2 from './app/home/Home2';
import Home from './app/home/Home';
import Drawer from './app/home/Home';
import * as ScreenUtil from './app/utils/ScreenUtil';

const styles = StyleSheet.create({
    rightView: {
        marginHorizontal: 20
    },
    headerView: {
        backgroundColor: 'yellow',
    },
    headerTitleStyle: {
        color: 'blue',
        fontSize: 20,
        alignSelf: 'center'
    },
    leftText: {
        color: 'green'
    }
});
const Tab = TabNavigator({
    HomePage: {
        screen: Drawer,
        navigationOptions: {
            tabBarLabel: '首页',    //若不设置,则以key为标题
            tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
            tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                 source={require('./img/ic_launcher.png')}/>)
        },

    },
    More: {
        screen: More,
        navigationOptions: {
            // tabBarLabel: '首页',
            tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
            tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                 source={require('./img/ic_launcher.png')}/>)
        },
    },
    MePage: {
        screen: MePage,
        navigationOptions: {
            //   tabBarLabel: '首页',
            tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
            tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                 source={require('./img/ic_launcher.png')}/>)
        },
    },

}, {
    tabBarPosition: 'bottom',    //设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）
    swipeEnabled: true,          //是否允许在标签之间滑动
    animationEnabled: false,     //是否在更改标签时显示动画。
    lazy: true,                  //是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦
    initialRouteName: 'HomePage',    //设置默认的页面组件
    backBehavior: 'none',        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: 'green',//label和icon的前景色 活跃状态下（选中）。
        activeBackgroundColor: 'red', //label和icon的背景色 活跃状态下（选中） 。
        showLabel: true,         //是否显示label，默认开启
        labelStyle: {fontSize: 12}, //label的样式
        style: {height: 50, bottom: ScreenUtil.isIphoneX ? 34 : 0},  //tabbar的样式
        iconStyle: {height: 30}   //安卓,
    }
});

const AppRoute = StackNavigator({
    Home: {
        screen: Tab,
        navigationOptions: {
            header: null
        }
    },
    Home2: {
        screen: Home2,
        navigationOptions: ({navigation}) => ({
            headerTitle: `${navigation.state.params.name} `,
            headerStyle: styles.headerView,
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: 'blue',
            headerBackTitleStyle: styles.leftText,
            headerBackTitle: 'headerBackTitle: null,',
            headerLeft: <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>

                <View>
                    <Text>2⬅️</Text>
                </View>
            </TouchableOpacity>
        }),
        /*navigationOptions: {
            // header: null  //可以设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了
            // headerTitle: '首页2呀',  //设置导航栏标题，推荐用这个方法。
            // headerRight: <View style={styles.rightView}><Text>右侧</Text></View>,
            //headerStyle: styles.headerView,
           // headerTitleStyle: styles.headerTitleStyle,
            // headerBackTitle: null,
            // headerBackTitleStyle: styles.leftText,
            // headerLeft: <View style={styles.rightView}><Text>返回</Text></View>,
            headerTintColor : 'red', //返回按钮的颜色

        }*/
    }
}, {
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: {
        gesturesEnabled: false,
    },

});
export default AppRoute;
