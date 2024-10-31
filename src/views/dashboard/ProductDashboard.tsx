
import React, { useEffect, useRef } from 'react';
import { Animated as RNanimated, SafeAreaView, StyleSheet, View } from 'react-native';
import NoticeAnimation from './noticeAnimation/NoticeAnimation';
import { NoticeHeight } from '@utils/Scaling';
import Visuals from './Visuals';
import { CollapsibleContainer, CollapsibleHeaderContainer, CollapsibleScrollView, withCollapsibleContext } from '@r0b0t3d/react-native-collapsible';
import AnimatedHeader from './AnimatedHeader';
import StickSearchBar from './StickSearchBar';
import Content from '@views/component/Content';
import CustomText from '@components/ui/CustomText';
import { RFValue } from 'react-native-responsive-fontsize';
import { Fonts } from '@utils/Constants';


const NOTICE_HEIGHT = -[NoticeHeight + 12];


const ProductDashboard = ()=> {

  const noticePosition = useRef(new RNanimated.Value(NOTICE_HEIGHT)).current;


  const slideUp = ()=>{
    RNanimated.timing(noticePosition,{
      toValue:NOTICE_HEIGHT,
      duration:1200,
      useNativeDriver:false,
    }).start();
  };

  const slideDown = ()=>{
    RNanimated.timing(noticePosition,{
      toValue:0,
      duration:1200,
      useNativeDriver:false,
    }).start();
  };

  useEffect(()=>{
    slideDown();
    const timeOutId = setTimeout(() => {
      slideUp();
    }, 3000);
    return ()=>clearTimeout(timeOutId);
  },[]);




    return (
      <NoticeAnimation noticePosition={noticePosition}>
        <>
        <Visuals/>
        <SafeAreaView/>
         <CollapsibleContainer style={styles.panelContainer}>
          <CollapsibleHeaderContainer containerStyle={styles.transparent}>
                <AnimatedHeader
                  showNotice={()=>{
                    slideDown();
                    const timeOutId = setTimeout(() => {
                      slideUp();
                    }, 3000);
                    return()=>clearTimeout(timeOutId);
                  }}
                />
                <StickSearchBar/>
          </CollapsibleHeaderContainer>

            <CollapsibleScrollView
              nestedScrollEnabled
              style={styles.panelContainer}
              showsVerticalScrollIndicator={false}
            >
              <Content/>

              <View style={{backgroundColor:'#F8F8F8',padding:20}} >
                <CustomText fontSize={RFValue(32)} fontFamily={Fonts.Bold} style={{opacity:0.2}}>
                  India's last minute app
                </CustomText>
                <CustomText
                fontFamily={Fonts.Bold}
                style={{marginTop:10,paddingBottom:100,opacity:0.2}}>
                  Developed By Varun gandhi
                </CustomText>
              </View>
            </CollapsibleScrollView>
         </CollapsibleContainer>
        </>
      </NoticeAnimation>
    );
};
export default withCollapsibleContext(ProductDashboard);

const styles = StyleSheet.create({
  panelContainer:{
    flex:1,
  },
  transparent:{
    backgroundColor:'transparent',
  },
});
