import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import Public, {px} from '../public/public';

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTabb: [
        {
          id: 0,
          img: require('../assets/mine/purchase.png'),
          name: '购买',
        },
        {
          id: 1,
          img: require('../assets/mine/sell.png'),
          name: '出售',
        },
        {
          id: 2,
          img: require('../assets/mine/complaint.png'),
          name: '出售',
        },
      ],
      personalCenter: [
        {
          id: 0,
          img: require('../assets/mine/sell1.png'),
          name: '购币记录',
          arrow: require('../assets/mine/arrow.png'),
        },
        {
          id: 1,
          img: require('../assets/mine/purchase1.png'),
          name: '出售记录',
          arrow: require('../assets/mine/arrow.png'),
        },
        {
          id: 2,
          img: require('../assets/mine/history.png'),
          name: '历史订单',
          arrow: require('../assets/mine/arrow.png'),
        },
        {
          id: 3,
          img: require('../assets/mine/compile.png'),
          name: '修改信息',
          arrow: require('../assets/mine/arrow.png'),
        },
        {
          id: 4,
          img: require('../assets/mine/service.png'),
          name: '联系客户',
          arrow: require('../assets/mine/arrow.png'),
        },
        {
          id: 5,
          img: require('../assets/mine/dropOut.png'),
          name: '退出',
          arrow: require('../assets/mine/arrow.png'),
        },
      ],
    };
  }

  render() {
    let topTabb = this.state.topTabb.map((item, index) => {
      return (
        <View key={index} style={styles.topTabbContent}>
          <Image source={item.img} style={styles.topTabbContentImg} />
          <View>
            <Text>{item.name}</Text>
          </View>
        </View>
      );
    });
    let personalCenter = this.state.personalCenter.map((item, index) => {
      return (
        <View key={index} style={styles.personalCenterContent}>
          <View style={styles.personalCenterContentLeft}>
            <Image
              source={item.img}
              style={styles.personalCenterContentLeftImg}
            />
            <View>
              <Text style={styles.personalCenterContentLeftName}>{item.name}</Text>
            </View>
          </View>
          <Image source={item.arrow} />
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <View style={styles.titleLeft}>
            <Image
              style={styles.titleLeftImg}
              source={require('../assets/mine/headPortrait.png')}
            />
            <View>
              <View style={styles.titleLeftTop}>
                <Text style={styles.titleUserName}>
                  用户名
                  <Text style={styles.titleAgent}>
                    （代理商 邀请码：<Text>13049</Text>）
                  </Text>
                </Text>
              </View>
              <View>
                <Text style={styles.titleMargin}>
                  ustd 23.20(保证金：<Text>100.00</Text>)
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.titleRightImg}
            source={require('../assets/mine/particulars.png')}
          />
        </View>
        <View style={styles.topTabb}>{topTabb}</View>
        <View style={styles.personalCenter}>{personalCenter}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Public.contentHeight,
    marginTop: Platform.OS === 'ios' ? Public.statusHeight : 0,
    backgroundColor: '#F1F1F1',
  },
  title: {
    width: '100%',
    height: px(300),
    backgroundColor: '#5872FF',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: px(30),
    position: 'relative',
  },
  titleLeft: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleLeftImg: {
    width: px(100),
    height: px(100),
    marginRight: px(30),
  },
  titleLeftTop: {
    marginBottom: px(10),
  },
  titleUserName: {
    color: '#fff',
    fontSize: px(30),
  },
  titleAgent: {
    fontSize: px(25),
  },
  titleMargin: {
    color: '#CCC',
    fontSize: px(20),
  },
  titleRightImg: {
    width: px(35),
    height: px(35),
  },
  topTabb: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: '5%',
    paddingVertical: px(30),
    borderRadius: px(25),
    position: 'absolute',
    top: px(220),
    zIndex: 999,
  },
  topTabbContent: {
    alignItems: 'center',
  },
  topTabbContentImg: {
    width: px(80),
    height: px(80),
    marginBottom: px(10),
  },
  personalCenter: {
    backgroundColor: '#fff',
    marginTop: px(120),
  },
  personalCenterContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: px(20),
    paddingHorizontal: px(30),
    borderBottomWidth: px(1),
    borderBottomColor: '#eee',
  },
  personalCenterContentLeft: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  personalCenterContentLeftImg: {
    width: px(50),
    height: px(50),
    marginRight: px(20),
  },
  personalCenterContentLeftName: {
    color: '#333',
    fontSize: px(30),
  },
});
