import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import CardStackStyleInterpolator from 'react-navigation-stack/src/views/StackView';

//tabb页面
import Home from '../src/view/home';
import Record from '../src/view/record';
import Mine from '../src/view/mine';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '行情',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../src/assets/tabb/market.png')}
            style={[{height: 24, width: 24}, {tintColor: tintColor}]}
          />
        ),
      },
    },
    Message: {
      screen: Record,
      navigationOptions: {
        tabBarLabel: '记录',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../src/assets/tabb/record.png')}
            style={[{height: 24, width: 24}, {tintColor: tintColor}]}
          />
        ),
      },
    },
    Mine: {
      screen: Mine,
      navigationOptions: {
        tabBarLabel: '个人',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../src/assets/tabb/personage.png')}
            style={[{height: 24, width: 24}, {tintColor: tintColor}]}
          />
        ),
      },
    },
  },
  {
    mode: 'card',
    headerMode: 'none',
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator,
    }),
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: 'none',
    //设置Tab标签的属性

    tabBarOptions: {
      //Android属性
      upperCaseLabel: false, //是否使标签大写，默认为true
      //共有属性
      showIcon: true, //是否显示图标，默认关闭
      showLabel: true, //是否显示label，默认开启
      activeTintColor: '#5C74FF', //label和icon的前景色 活跃状态下（选中）
      inactiveTintColor: 'gray', //label和icon的前景色 活跃状态下（未选中）
      style: {
        //TabNavigator 的背景颜色
        backgroundColor: '#fff',
        height: 55,
      },
      indicatorStyle: {
        //标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
        height: 0,
      },
      labelStyle: {
        //文字的样式
        fontSize: 13,
        marginTop: -5,
        marginBottom: 5,
      },
      iconStyle: {
        //图标的样式
        marginBottom: 5,
      },
    },
  },
);

const AppNavigator = createStackNavigator({
  //四个taber页面
  TabBar: {
    screen: BottomTabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
