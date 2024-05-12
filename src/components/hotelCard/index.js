import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const HotelCard = ({imageSrc, title, location, data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HotelDetailScreen', {param: data})}
      style={styles.card}>
      <Image source={{uri: imageSrc}} style={styles.image} />

      {title && (
        <>
          <Text style={styles.title}>
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>
          <View style={styles.locationContainer}>
            <Icon name="location-outline" size={20} color="#8597A2" />
            <Text style={styles.location}>
              {location?.length > 18 ? `${location.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default HotelCard;
