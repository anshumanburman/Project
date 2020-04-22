import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View, Modal
} from 'react-native'
import { colors } from '../theme'
import Bubbles from '../common/animated/Bubbles';

export default class Loader extends Component {
  render() {
    const { loader } = this.props
    return (

      <Modal
        visible={loader}
        //animationType={'slide'}
        style={{ borderWidth: 3, borderColor: 'red' }}
        transparent={true}
      >
        <View style={{
          width: '100%', height: "100%",
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor:colors.blackTransparent_bG
        }}>
          <Bubbles size={15} color={colors.primary}
            style={{}} />
          
          {/* 
        <ActivityIndicator 
        size="large" color={colors.YELLOW.secondary} /> */}
          
        </View>
      </Modal>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.TRANSPARENT_LIGHT,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  }
})