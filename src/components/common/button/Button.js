import {TouchableOpacity} from 'react-native';
import AppText from '../appText/AppText';
import {styles} from './ButtonStyles';

const Button = ({title, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <AppText style={styles.titleStyle} text={title} />
    </TouchableOpacity>
  );
};

export default Button;
