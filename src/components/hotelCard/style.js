import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';
const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    backgroundColor: colors.white,
    width: '48%',
    margin: 2,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 4,
  },
  title: {
    color: colors.tertiary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  location: {
    color: colors.tertiary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default styles;
