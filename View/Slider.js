/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button
} from 'react-native';


type Props = {};

import Swiper from 'react-native-swiper';

var width = Dimensions.get('window').width;

export default class Slider extends Component<Props> {

  constructor(props) {
    super(props);
  
    this.state = {
      loop:false,
      banners : [
        require('../img/start1.jpg'),
        require('../img/start2.jpg'),
        require('../img/start3.jpg'),
        require('../img/start4.jpg')
      ]
    };
  }

  _enter(){

  }

  render() {
    return (
        <Swiper 
        style={styles.container} 
        dot={<View style={styles.dot}/>} 
        activeDot={<View style={styles.activeDot}/>}
        paginationStyle={styles.pagination} 
        loop={this.state.loop}>
          <View style={styles.slide}>
            <Image style={styles.image} source={this.state.banners[0]}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={this.state.banners[1]}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={this.state.banners[2]}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={this.state.banners[3]}/>
            <Button color="#ee735c" onPress={this._enter} title="马上体验"/>
          </View>
        </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  slide:{
    flex:1,
    width:width,
  },

  image:{
    flex:1,
    width:width,
  },

  dot:{
    width:14,
    height:14,
    backgroundColor:'transparent',
    borderColor:'#ff6600',
    borderRadius:7,
    borderWidth:1,
    marginLeft:12,
    marginRight:12,
  },

  activeDot:{
    width:14,
    height:14,
    borderWidth:1,
    borderRadius:7,
    marginLeft:12,
    marginRight:12,
    borderColor:'#ee735c',
    backgroundColor:'#ee735c',
  },

  pagination:{
    bottom:30,
  },

});

module.exports=Slider;
