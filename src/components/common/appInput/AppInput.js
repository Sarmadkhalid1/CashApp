import {TextInput, View} from 'react-native';
import colors from '../../../config/colors';
import AppText from '../appText/AppText';
import {styles} from './AppInputStyles';

const AppInput = ({placeholder, label, style, inputStyle}) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.lableStyle} text={label} />
      <TextInput
        style={[styles.inputStyle, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
      />
    </View>
  );
};

export default AppInput;
