import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  wrapper: {},
  title: {
    fontSize: 20,
    fontFamily: '$FONTS.secondaryBold',
    color: '$COLORS.primaryDarkFont',
    letterSpacing: 5,
  },
  dash: {
    marginTop: 5,
    height: 6,
    width: 30,
    backgroundColor: '$COLORS.primaryDetails',
  },
});
