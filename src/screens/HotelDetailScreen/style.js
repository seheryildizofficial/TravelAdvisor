import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartButton: {
    marginHorizontal: '53%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  priceLevel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 8,
  },
  openNowContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  openNowText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white,
  },
  infoContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.tertiary,
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8C9EA6',
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.tertiary,
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EEF0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    fontSize: 16,
    color: colors.quaternary,
  },
  detailLabel: {
    fontSize: 12,
    color: colors.quaternary,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.quaternary,
    marginBottom: 16,
  },
  cuisineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  cuisineItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: colors.secondary,
    color: colors.white,
    marginRight: 8,
    marginBottom: 8,
  },
  bookButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginBottom: 12,
  },
  bookButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
});
export default styles;
