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

import UShare from '../share/share';
import SharePlatform from '../share/SharePlatform';

export default class More extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>More</Text>

                <Text onPress={
                    /**
                     * 参数说明：
                     * 1. 标题
                     * 2. 内容
                     * 3. 跳转链接
                     * 4. 图片链接
                     * 5. 分享平台
                     * 6. 分享结果回调
                     */
                    () => {
                        this.shareWeChat()
                    }
                }>分享</Text>
            </View>
        )
    }

    shareWeChat() {
        UShare.share('标题', '内容', 'http://baidu.com', 'http://dev.umeng.com/images/tab2_1.png', SharePlatform.WECHAT,
            (code, message) => {
                // 分享成功：code=200
                // ToastAndroid.show(message,ToastAndroid.SHORT);

            })
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22
    }
})