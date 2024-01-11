import {Image, View} from 'react-native';
import AppText from '../appText/AppText';
import {styles} from './TopBarStyles';

const TopBar = ({iconLeft, title, rightIcon}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/left_arrow.png')}
      />
      <AppText style={styles.titleStyle} text={title} />
      <Image style={styles.iconStyle} source={rightIcon} />
    </View>
  );
};

export default TopBar;
