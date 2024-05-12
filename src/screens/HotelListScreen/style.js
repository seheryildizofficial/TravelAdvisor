import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 28,
    color: colors.fifth,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
  },
  searchContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 16,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  topTips: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginTop: 16,
  },
  topTipsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.fifth,
  },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exploreButtonText: {
    fontSize: 20,
    color: colors.fifth,
  },
  exploreButtonIcon: {
    marginLeft: 4,
  },
  contentContainer: {
    paddingHorizontal: 4,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  noDataContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  noDataImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  noDataText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.tertiary,
    marginTop: 8,
  },
});
export default styles;
