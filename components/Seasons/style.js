import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullWidth: Dimensions.get('window').width
}

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    button: {
      width: (dimensions.fullWidth - 40) / 2,
      justifyContent: "center",
      margin: 10,
    }
});