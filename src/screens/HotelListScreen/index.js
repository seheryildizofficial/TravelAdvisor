import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import styles from './style';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import FilterArea from '../../components/filterArea';
import Icon from 'react-native-vector-icons/Ionicons';
import {getPlacesData} from '../../service';
import HotelCard from '../../components/hotelCard';

const HotelListScreen = () => {
  const navigation = useNavigation();
  const [type, setType] = useState('restaurants');
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then(data => {
      setMainData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.subtitle}>the beauty today</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/images/avatarr.png')}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          placeholder="Search.."
          fetchDetails={true}
          onPress={(data, details = null) => {
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: 'AIzaSyBALJxYhftTUn77uyXtHmtzRhpsODa1n5s',
            language: 'en',
          }}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="#0B646B"
        />
      ) : (
        <ScrollView style={styles.scrollView}>
          <View style={styles.menuContainer}>
            <FilterArea
              key={'hotels'}
              type={type}
              title="Hotels"
              setType={setType}
              imageSrc={require('../../assets/images/hotel.jpg')}
            />
            <FilterArea
              key={'attractions'}
              type={type}
              title="Attractions"
              setType={setType}
              imageSrc={require('../../assets/images/trips.png')}
            />
            <FilterArea
              key={'restaurants'}
              type={type}
              title="Restaurant"
              setType={setType}
              imageSrc={require('../../assets/images/food.png')}
            />
          </View>

          <View style={styles.topTips}>
            <Text style={styles.topTipsText}>Top Trips</Text>
            <TouchableOpacity style={styles.exploreButton}>
              <Text style={styles.exploreButtonText}>Explore</Text>
              <Icon
                name="arrow-forward-outline"
                color="#A0C4C7"
                size={24}
                style={styles.exploreButtonIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            {mainData?.length > 0 ? (
              mainData?.map((data, i) => (
                <HotelCard
                  key={i}
                  imageSrc={
                    data?.photo?.images?.medium?.url ||
                    'https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg'
                  }
                  title={data?.name}
                  location={data?.location_string}
                  data={data}
                />
              ))
            ) : (
              <View style={styles.noDataContainer}>
                <Image
                  source={require('../../assets/images/sadd.png')}
                  style={styles.noDataImage}
                />
                <Text style={styles.noDataText}>Opps..no data found</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HotelListScreen;
