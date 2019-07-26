import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$COLORS.primaryDetails',
    height: 40,
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    fontFamily: '$FONTS.secondaryBold',
    color: '$COLORS.primaryBase',
    letterSpacing: 5,
  },
});
