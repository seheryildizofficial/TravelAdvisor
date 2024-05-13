import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedImageContainer: {
    backgroundColor: colors.selectedBg,
    borderColor: colors.primary,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 40,
  },
  title: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
export default styles;
