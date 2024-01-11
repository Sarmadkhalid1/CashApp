import {StyleSheet} from 'react-native';
import colors from '../../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.purple,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20,
    height: 100,
    overflow: 'hidden',
  },
  paidView: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'center',
    borderRightWidth: 1,
    borderRightColor: 'darkgray',
  },
  changeView: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  amountStyle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle: {
    color: colors.white,
    fontSize: 16,
    marginTop: 10,
  },
});
