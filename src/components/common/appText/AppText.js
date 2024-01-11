import {Text} from 'react-native';
import {styles} from './AppTextStyles';

const AppText = ({text, style}) => {
  return <Text style={[styles.textStyle, style]}>{text}</Text>;
};

export default AppText;
