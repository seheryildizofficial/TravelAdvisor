import React from 'react';
import styles from './style';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const FilterArea = ({title, imageSrc, setType, type}) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View
        style={[
          styles.imageContainer,
          type === title.toLowerCase() && styles.selectedImageContainer,
        ]}>
        <Image style={styles.image} source={imageSrc} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default FilterArea;
