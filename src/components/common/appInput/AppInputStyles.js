import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#CBC3E340',
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.black,
  },
  lableStyle: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 14,
  },
});
