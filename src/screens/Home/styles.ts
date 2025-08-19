import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContainer: {
    paddingBottom: 20,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  separator: {
    borderWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
  },
});
