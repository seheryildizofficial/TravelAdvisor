import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  firstSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: 56,
    height: 56,
    backgroundColor: 'black',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleText: {
    color: colors.titleText,
    fontSize: 24,
    fontWeight: 'bold',
  },
  secondSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bigText: {
    color: colors.circle1,
    fontSize: 42,
  },
  boldText: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  },
  smallText: {
    color: colors.circle1,
    fontSize: 16,
    marginTop: 5,
    zIndex: 5,
  },
  circle: {
    width: 350,
    height: 350,
    borderRadius: 175,
    position: 'absolute',
  },
  circle1: {
    backgroundColor: colors.primary,
    bottom: -10,
    right: -36,
  },
  circle2: {
    backgroundColor: colors.circle2,
    bottom: -28,
    left: -36,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginTop: 20,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    width: 96,
    height: 96,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.circle1,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
export default styles;
