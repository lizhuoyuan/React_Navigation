/**
 * Created by 卓原 on 2017/10/31.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    SafeAreaView
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            d: 'a'
        }
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <Text onPress={() =>
                        navigate('Home2', {
                            name: '从Home到HOme2', callback: data => {
                                this.setState({
                                    d: data
                                });
                                console.log(this.state.d)
                            }
                        })
                    }>跳到新页面{this.state.d}</Text>

                    <Text onPress={() =>
                        navigate('DrawerOpen')
                    }>打开抽屉</Text>
                </SafeAreaView>
            </View>
        )
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications标题',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../../img/ic_launcher.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const Drawer = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: '帅气Home',
            headerTitle: 'home title',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../../img/ic_launcher.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
    Notifications2: {
        screen: MyNotificationsScreen,
    },
}, {
    drawerWidth: 200, //抽屉的宽度
    drawerPosition: 'left',  //选项是left和right.默认是left
    // contentComponent:(navigation)=><Text>asa</Text>,
    contentOptions: {
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1
        },
    }

});

const styles = StyleSheet.create({
    container: {
        marginTop: 22
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default Drawer;