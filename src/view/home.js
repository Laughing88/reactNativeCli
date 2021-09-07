import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {getTradingDetails, getMarketDetails} from '../public/api';
import Public, {px} from '../public/public';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          img: require('../assets/home/btc.png'),
          name: '比特币 BTC',
          unitPrice: 3853.1901,
          marketValue: 3853.1901,
          unitPriceTop: 3853.2001,
          unitPriceDown: 3805.0001,
        },
        {
          id: 1,
          img: require('../assets/home/eth.png'),
          name: '以太币 ETH',
          unitPrice: 3853.1901,
          marketValue: 3853.1901,
          unitPriceTop: 3853.2001,
          unitPriceDown: 3805.0001,
        },
        {
          id: 2,
          img: require('../assets/home/xrp.png'),
          name: '瑞波币 XRP',
          unitPrice: 3853.1901,
          marketValue: 3853.1901,
          unitPriceTop: 3853.2001,
          unitPriceDown: 3805.0001,
        },
        {
          id: 3,
          img: require('../assets/home/eos.png'),
          name: '柚子币 EOS',
          unitPrice: 3853.1901,
          marketValue: 3853.1901,
          unitPriceTop: 3853.2001,
          unitPriceDown: 3805.0001,
        },
        {
          id: 4,
          img: require('../assets/home/sta.png'),
          name: '恒星币 STA',
          unitPrice: 3853.1901,
          marketValue: 3853.1901,
          unitPriceTop: 3853.2001,
          unitPriceDown: 3805.0001,
        },
        {
          id: 5,
          img: require('../assets/home/neo.png'),
          name: '小蚁币 NEO',
          unitPrice: 3853.1901,
          marketValue: 3853.1901,
          unitPriceTop: 3853.2001,
          unitPriceDown: 3805.0001,
        },
      ],
    };
  }
  //币种详情页
  coinDetail(name) {
    this.props.navigation.navigate('CoinDetail', {
      name: name,
    });
  }
  componentDidMount() {
    let TradingDetails;
    getTradingDetails().then((res) => {
      // console.log(res);
      TradingDetails = Object.values(res).map((item) => {
        return {
          unitPriceTop: item.high24hr,
          unitPriceDown: item.low24hr,
        };
      });
      this.setState({
        // data: TradingDetails,
      });
    });
    getMarketDetails().then((resolve) => {
      console.log(resolve);
      let data = resolve.data.map((item) => {
        return {
          name: item.name_cn,
          unitPrice: item.rate.toFixed(2),
          marketValue: (item.rate * 7).toFixed(2),
        };
      });
      this.setState({
        // data: data,
      });
    });
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.data}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => this.coinDetail(item.name)}>
            <View key={index} style={styles.allVirtual}>
              <View style={styles.leftVirtual}>
                <View style={styles.leftVirtualContent}>
                  {/*<Image*/}
                  {/*  source={item.img}*/}
                  {/*  style={styles.leftVirtualContentImg}*/}
                  {/*/>*/}
                  <View>
                    <Text style={styles.leftVirtualContentName}>
                      {item.name}
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={styles.leftVirtualContentUnitPrice}>
                    <Text style={styles.unitPrice}>{item.unitPrice}</Text>
                  </View>
                  <View>
                    <Text style={styles.marketValue}>{item.marketValue}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rightVirtual}>
                <View style={styles.rightVirtualContentUnitPriceTop}>
                  <Text style={styles.unitPriceTop}>
                    最高 {item.unitPriceTop}
                  </Text>
                </View>
                <View>
                  <Text style={styles.unitPriceDown}>
                    最低 {item.unitPriceDown}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Public.contentHeight,
    marginTop: Platform.OS === 'ios' ? Public.statusHeight : 0,
    backgroundColor: '#F1F1F1',
  },
  allVirtual: {
    marginHorizontal: px(30),
    marginTop: px(20),
    paddingTop: px(30),
    paddingVertical: px(30),
    borderRadius: px(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  leftVirtual: {
    width: px(200),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  leftVirtualContent: {
    width: px(150),
    marginHorizontal: px(30),
    alignItems: 'center',
  },
  leftVirtualContentImg: {
    width: px(80),
    height: px(80),
    marginBottom: px(10),
  },
  leftVirtualContentName: {
    color: '#333333',
    fontSize: px(25),
  },
  leftVirtualContentUnitPrice: {
    marginBottom: px(20),
  },
  unitPrice: {
    color: '#5CBE7F',
    fontSize: px(40),
  },
  marketValue: {
    color: '#DC5D5D',
    fontSize: px(40),
  },
  rightVirtual: {
    marginRight: px(30),
  },
  rightVirtualContentUnitPriceTop: {
    marginBottom: px(20),
  },
  unitPriceTop: {
    color: '#5CBE7F',
    fontSize: px(25),
  },
  unitPriceDown: {
    color: '#DC5D5D',
    fontSize: px(25),
  },
});
