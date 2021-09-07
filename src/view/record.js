import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Platform} from 'react-native';
import Public, {px} from '../public/public';

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          img: require('../assets/home/btc.png'),
          name: '比特币 BTC',
          explainName: 'JIAOYIDIZHIJIAOYIDIZHI',
          price: '38.025',
          detail: '查看明细',
        },
        {
          id: 1,
          img: require('../assets/home/eth.png'),
          name: '以太币 ETH',
          explainName: 'JIAOYIDIZHIJIAOYIDIZHI',
          price: '38.025',
          detail: '查看明细',
        },
        {
          id: 2,
          img: require('../assets/home/xrp.png'),
          name: '瑞波币 XRP',
          explainName: 'JIAOYIDIZHIJIAOYIDIZHI',
          price: '38.025',
          detail: '查看明细',
        },
        {
          id: 3,
          img: require('../assets/home/eos.png'),
          name: '柚子币 EOS',
          explainName: 'JIAOYIDIZHIJIAOYIDIZHI',
          price: '38.025',
          detail: '查看明细',
        },
        {
          id: 4,
          img: require('../assets/home/sta.png'),
          name: '恒星币 STA',
          explainName: 'JIAOYIDIZHIJIAOYIDIZHI',
          price: '38.025',
          detail: '查看明细',
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.transactionDetailsContent}
          data={this.state.data}
          renderItem={({item, index}) => (
            <View key={index} style={styles.transactionContent}>
              <View style={styles.transactionContentLeft}>
                <Image
                  source={item.img}
                  style={styles.transactionContentLeftImg}
                />
                <View>
                  <View style={styles.transactionContentLeftTop}>
                    <Text style={styles.transactionContentLeftName}>
                      {item.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.transactionContentLeftDateTime}>
                      {item.explainName}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.transactionContentRight}>
                <View style={styles.transactionContentRightTop}>
                  <Text style={styles.transactionNum}>{item.price}</Text>
                </View>
                <View>
                  <Text style={styles.transactionName}>{item.detail}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
  transactionContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: px(30),
    marginTop: px(20),
    paddingHorizontal: px(30),
    paddingVertical: px(30),
    borderRadius: px(10),
    backgroundColor: '#fff',
  },
  transactionContentLeft: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  transactionContentLeftImg: {
    width: px(80),
    height: px(80),
    marginRight: px(30),
  },
  transactionContentLeftTop: {
    marginBottom: px(10),
  },
  transactionContentLeftName: {
    color: '#666',
    fontSize: px(25),
  },
  transactionContentLeftDateTime: {
    color: '#666',
    fontSize: px(20),
  },

  transactionContentRight: {
    alignItems: 'flex-end',
  },
  transactionContentRightTop: {
    marginBottom: px(10),
  },
  transactionNum: {
    color: '#5CBE7F',
    fontSize: px(30),
  },
  transactionName: {
    color: '#666',
    fontSize: px(25),
  },
});
