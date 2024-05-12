import React, {useLayoutEffect} from 'react';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* first section */}
      <View style={styles.firstSection}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Go</Text>
        </View>
        <Text style={styles.titleText}>Travel</Text>
      </View>

      {/* second section */}
      <View style={styles.secondSection}>
        <Text style={styles.bigText}>Enjoy the trip with</Text>
        <Text style={styles.boldText}>Good Moments</Text>
        <Text style={styles.smallText}>
          Welcome to a new adventure! Are you ready to explore amazing places?
        </Text>
      </View>

      {/* circle section */}
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />

      {/* image container */}
      <View style={styles.imageContainer}>
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={require('../../assets/images/human.png')}
          style={styles.image}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('HotelListScreen')}
          style={styles.button}>
          <Animatable.View
            animation={'pulse'}
            easing="ease-in-out"
            iterationCount={'infinite'}
            style={styles.buttonInner}>
            <Text style={styles.buttonText}>Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
