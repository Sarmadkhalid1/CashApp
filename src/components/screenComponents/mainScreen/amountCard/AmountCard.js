import {ImageBackground, View} from 'react-native';
import AppText from '../../../common/appText/AppText';
import {styles} from './AmountCardStyles';

const AmountCard = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../../assets/images/backgroundImage.jpeg')}>
      <View style={styles.paidView}>
        <AppText style={styles.amountStyle} text={'$12.00'} />
        <AppText style={styles.textStyle} text={'Total paid'} />
      </View>
      <View style={styles.changeView}>
        <AppText style={styles.amountStyle} text={'$0.00'} />
        <AppText style={styles.textStyle} text={'Change'} />
      </View>
    </ImageBackground>
  );
};

export default AmountCard;
