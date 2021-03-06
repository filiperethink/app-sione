import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  wrapperInput: {
    height: 40,
    borderColor: '$COLORS.primaryBorder',
    paddingHorizontal: 5,
    borderWidth: EStyleSheet.hairlineWidth,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    position: 'relative',
  },
  wrapperInputError: {
    height: 40,
    borderColor: '$COLORS.primaryError',
    paddingHorizontal: 5,
    borderWidth: EStyleSheet.hairlineWidth,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    position: 'relative',
  },
  labelInput: {
    position: 'absolute',
    top: -6,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '$COLORS.primaryBase',
    left: 10,
    fontSize: '$SIZES.fonts.small',
  },
  labelInputError: {
    position: 'absolute',
    top: -6,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '$COLORS.primaryBase',
    left: 10,
    color: '$COLORS.primaryError',
    fontSize: '$SIZES.fonts.small',
  },
  inputField: {
    height: 40,
    width: '100%',
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: '$SIZES.fonts.medium',
    fontFamily: '$FONTS.secondaryRegular',
    color: '$COLORS.primaryBorder',
  },
});
