import {Image, StatusBar, View, StyleSheet} from 'react-native';
import AppInput from './src/components/common/appInput/AppInput';
import AppText from './src/components/common/appText/AppText';
import Button from './src/components/common/button/Button';
import TopBar from './src/components/common/topBar/TopBar';
import AmountCard from './src/components/screenComponents/mainScreen/amountCard/AmountCard';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <TopBar title={'Cash Payment'} />
      <AmountCard />
      <AppInput
        style={styles.inputStyle}
        label={'Email'}
        placeholder={'Enter here'}
      />
      <Button style={styles.btnStyle} title={'New Sale'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnStyle: {
    position: 'absolute',
    bottom: 30,
  },
  inputStyle: {
    marginTop: 50,
  },
});

export default App;
