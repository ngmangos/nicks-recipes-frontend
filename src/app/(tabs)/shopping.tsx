import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';


import CustomButton from '@/components/CustomButton';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
       <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
        <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
      </Svg>
      <View style={styles.container}>
        <Text style={styles.text}>Shopping scree</Text>
      </View>
      <View style={styles.footerContainer}>
        <CustomButton label={"Button"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AboutScreen