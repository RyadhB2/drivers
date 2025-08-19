import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40,
  },
  subTitle: {
    width: '70%',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    marginVertical: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 40,

    borderRadius: 10,
    backgroundColor: '#575757',
    borderWidth: 0,
  },
  textInputStyle: {
    color: colors.white,
  },
  separator: {
    borderWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
    borderColor: colors.white,
    marginBottom: 12,
  },
  listHeaderText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyListTextTitle: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,
    color: colors.white,
  },
  emptyListTextSubtitle: {
    alignSelf: 'center',
    textAlign: 'center',
    width: '70%',
    marginTop: 10,
    fontSize: 16,
    color: colors.white,
  },
});
