import { StyleSheet, Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>About screen</Text>
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
    flex: 1 / 3,
    alignItems: 'center',
  },
});

export default AboutScreen