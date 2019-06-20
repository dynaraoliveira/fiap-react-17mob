import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullWidth: Dimensions.get('window').width
}

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTitle: {
    margin: 10,
    fontWeight: '500',
    fontSize: 18,
  },
  contentText: {
    margin: 'auto',
    fontSize: 16,
    margin: 10,
  },
  button: {
    width: (dimensions.fullWidth - 40),
    justifyContent: "center",
    margin: 10,  
  }
});