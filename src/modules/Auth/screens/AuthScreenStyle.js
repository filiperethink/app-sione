import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$COLORS.primaryBase',
  },
  logo: {
    marginTop: 60,
    marginBottom: 20,
    alignSelf: 'center',
  },
  inner: {
    marginHorizontal: 20,
  },
});
