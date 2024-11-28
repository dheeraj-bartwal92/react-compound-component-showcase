import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {flexDirection: 'row', alignItems: 'flex-start'},
  imageStyle: {height: 40, width: 40, borderRadius: 20},
  headerContentContainer: {paddingHorizontal: 12},
  userName: {
    fontSize: 16,
    fontWeight: '800',
  },
  email: {
    fontSize: 14,
    marginTop: 4,
  },
});
