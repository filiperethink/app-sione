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
  successText: {
    alignSelf: 'center',
    fontSize: 13,
    marginTop: 50,
    fontFamily: '$FONTS.secondaryBold',
    color: '$COLORS.primaryDetails',
    letterSpacing: 5,
  },
});
