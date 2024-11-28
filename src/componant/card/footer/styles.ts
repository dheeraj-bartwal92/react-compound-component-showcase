import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 8,
    minWidth: 100,
  },
  buttonTitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12,
  },
});
