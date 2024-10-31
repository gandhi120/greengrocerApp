import CustomText from '@components/ui/CustomText';
import { Fonts } from '@utils/Constants';
import React, { FC, useState } from 'react';
import { Button, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const Header:FC<{showNotice:()=>void}> = ({showNotice}) => {

  return (
    <View style={styles.subContainer}>
          <TouchableOpacity activeOpacity={0.8}>
                <CustomText fontFamily={Fonts.Bold} variant="h8" style={styles.text}>
                    Delivery in
                </CustomText>
                <View style={styles.flexRowGap}>
                    <CustomText
                        fontFamily={Fonts.SemiBold}
                        variant="h2"
                        style={styles.text}>
                        10 minutes
                    </CustomText>
                    <TouchableOpacity style={styles.noticeBtn} onPress={showNotice}>
                        <CustomText
                            fontFamily={Fonts.SemiBold}
                            fontSize={RFValue(5)}
                            style={{color:'#3B4886'}}>
                            Rain
                        </CustomText>
                    </TouchableOpacity>
                </View>

                <View style={styles.flexRow}>
                    <CustomText
                        variant="h8"
                        numberOfLines={1}
                        fontFamily={Fonts.Medium}
                        style={styles.text2}
                    >
                          {'Somewhere'}
                    </CustomText>

                    <Icon name="menu-down" color={'#fff'} size={RFValue(20)} style={{bottom:-1}}/>
                </View>

          </TouchableOpacity>
            <TouchableOpacity>
              <Icon
              name="account-circle-outline"
              size={RFValue(36)}
              color={'#fff'}
              />
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
subContainer: {
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    paddingTop:Platform.OS === 'android' ? 10 : 5,
    justifyContent:'space-between',
  },
  text: {
    color:'#fff',
  },
  flexRowGap:{
    flexDirection:'row',
    alignItems:'center',
    gap:5,
  },
  noticeBtn:{
    backgroundColor:'#E8EAF5',
    borderRadius:100,
    paddingHorizontal:8,
    paddingVertical:2,
    bottom:-2,
  },
  flexRow:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:2,
    width:'70%',
  },
  text2:{
    color:'#fff',
    width:'90%',
    textAlign:'center',
  },
});

export default Header;
