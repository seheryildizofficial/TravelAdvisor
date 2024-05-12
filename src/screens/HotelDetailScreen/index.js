import React, {useLayoutEffect} from 'react';
import styles from './style';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

const HotelDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : 'https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg',
            }}
            style={styles.image}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HotelListScreen')}
              style={styles.backButton}>
              <Icon name="chevron-back" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartButton}>
              <Icon name="heart-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceTextContainer}>
              <Text style={styles.priceLevel}>{data?.price_level}</Text>
              <Text style={styles.price}>{data?.price}</Text>
            </View>
            <View style={styles.openNowContainer}>
              <Text style={styles.openNowText}>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{data?.name}</Text>
          <View style={styles.locationContainer}>
            <Icon name="location-outline" size={24} color="#8C9EA6" />
            <Text style={styles.locationText}>{data?.location_string}</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsHeader}>Details</Text>
          <View style={styles.detailsRow}>
            {data?.rating && (
              <View style={styles.detailItem}>
                <View style={styles.detailIconContainer}>
                  <Icon name="star" size={24} color="#D58574" />
                </View>
                <View>
                  <Text style={styles.detailText}>{data?.rating}</Text>
                  <Text style={styles.detailLabel}>Ratings</Text>
                </View>
              </View>
            )}
            {data?.price_level && (
              <View style={styles.detailItem}>
                <View style={styles.detailIconContainer}>
                  <Icon name="cash-outline" size={24} color="black" />
                </View>
                <View>
                  <Text style={styles.detailText}>{data?.price_level}</Text>
                  <Text style={styles.detailLabel}>Price Level</Text>
                </View>
              </View>
            )}
            {data?.bearing && (
              <View style={styles.detailItem}>
                <View style={styles.detailIconContainer}>
                  <Icon name="map" size={24} color="black" />
                </View>
                <View>
                  <Text style={styles.detailText}>{data?.bearing}</Text>
                  <Text style={styles.detailLabel}>Bearing</Text>
                </View>
              </View>
            )}
          </View>
        </View>

        {data?.description && (
          <Text style={styles.description}>{data?.description}</Text>
        )}

        {data?.cuisine && (
          <View style={styles.cuisineContainer}>
            {data?.cuisine.map((n, index) => (
              <TouchableOpacity key={index} style={styles.cuisineItem}>
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelDetailScreen;
