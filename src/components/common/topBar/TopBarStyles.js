import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  iconStyle: {
    height: 20,
    width: 20,
    tintColor: colors.white,
  },
});
