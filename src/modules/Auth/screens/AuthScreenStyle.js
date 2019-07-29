import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$COLORS.primaryBase',
  },
  logo: {
    marginVertical: 60,
    alignSelf: 'center',
  },
  inner: {
    marginHorizontal: 20,
  },
  onCreateStyle: {
    backgroundColor: '$COLORS.primaryDarkFont',
  },
  haveAccount: {
    fontSize: 10,
    alignSelf: 'center',
    fontFamily: '$FONTS.secondaryRegular',
    color: '$COLORS.primaryDarkFont',
    textDecorationLine: 'underline',
  },
});
