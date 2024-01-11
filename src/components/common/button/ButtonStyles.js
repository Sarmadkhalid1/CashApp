import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
});
