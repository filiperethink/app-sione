import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  alignLoading: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  textLoading: {
    marginTop: 15,
    fontSize: 15,
    fontFamily: '$FONTS.secondaryBold',
    color: '$COLORS.primaryDetails',
    letterSpacing: 5,
  },
});
