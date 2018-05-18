import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    ToastAndroid,
    AlertIOS,
    Platform,
    SectionList
} from 'react-native';


export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }


    render() {

        let sections = [
            /*{data: [{title: 'a'}, {title: 'a'}, {title: 'a'}, {title: 'a'}], title: '第一个头部'},
             {data: [{title: 'a'}, {title: 'a'}], title: '第2个头部'},
             {data: [{title: 'a'}], title: '第3个头部'}*/
        ];
        for (let i = 0; i < 5; i++) {
            let data = [];
            for (let j = 0; j < 5; j++) {
                data.push({title: 'data~~' + j});
            }
            sections.push({data: data, title: 'title' + i})
        }
        return (
            <View style={{marginTop: 52}}>
                <Text>asdasdadadda</Text>
                <SectionList
                    keyExtractor={this._keyExtractor}
                    sections={sections}
                    renderSectionHeader={(a) => <Text style={{
                        height: 50,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: 30
                    }}
                                                      onPress={() => console.log(a)}>{a.section.title}</Text>}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._itemSeparatorComponent}

                />
            </View>
        )
    }

    _itemSeparatorComponent() {
        return (
            <View style={{backgroundColor: "#fff", height: 1}}/>
        )
    }

    _renderItem = ({item, index}) => {

        return <Text
            onPress={() => console.log(index)}
            style={{
                height: 100,
                textAlignVertical: 'center',
                backgroundColor: 'green',
                color: 'white',
                fontSize: 15
            }}>{item.title}</Text>
    }

    _sectionComp = ({section}) => {

        return <Text
            style={{
                height: 50,
                textAlign: 'center',
                textAlignVertical: 'center',
                backgroundColor: 'black',
                color: 'white',
                fontSize: 30
            }}>{section.title}</Text>
    }

    _keyExtractor = (item, index) => index;

}
