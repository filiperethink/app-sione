import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { COLORS } from '~/styles';
import { apply, extract } from '~/util';
import { Images } from '~/assets';
import {
  Wrapper,
  Input,
  Label,
  ErrorMessage,
  IconWrapper,
  TouchableIconWrapper,
} from './styled';

const { icons } = Images;

class InputField extends PureComponent {
  getValue = () => apply(this.props.value, this.props.mask);

  _onChangeText = text => {
    const { onChangeText, mask } = this.props;
    onChangeText(extract(text, mask));
  };

  renderLabel = () => {
    const { label } = this.props;
    return label.length > 0 && <Label>{label}</Label>;
  };

  renderError = () => {
    const { errorMsg } = this.props;
    return errorMsg.length > 0 && <ErrorMessage>{errorMsg}</ErrorMessage>;
  };

  renderIcon = () => {
    const { icnName, onIcnPress, isValid, error } = this.props;

    if (isValid) {
      return (
        <IconWrapper>
          <Image
            style={{ tintColor: COLORS.primarySuccess }}
            source={icons.icnCheck}
          />
        </IconWrapper>
      );
    }
    if (error) {
      return (
        <IconWrapper>
          <Image
            style={{ tintColor: COLORS.primaryError }}
            source={icons.icnX}
          />
        </IconWrapper>
      );
    }
    return (
      icnName &&
      icnName.length > 0 && (
        <TouchableIconWrapper onPress={onIcnPress}>
          <Image source={icons[icnName]} />
        </TouchableIconWrapper>
      )
    );
  };

  render() {
    const {
      keyboardType,
      secureText,
      autoCorrect,
      onBlur,
      placeholder,
      halfSize,
    } = this.props;
    return (
      <Wrapper halfSize={halfSize}>
        {this.renderLabel()}
        <Input
          value={this.getValue()}
          keyboardType={keyboardType}
          secureTextEntry={secureText}
          onChangeText={this._onChangeText}
          autoCorrect={autoCorrect}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {this.renderError()}
        {this.renderIcon()}
      </Wrapper>
    );
  }
}

InputField.defaultProps = {
  label: '',
  placeholder: '',
  keyboardType: 'default',
  secureText: false,
  errorMsg: '',
  error: false,
  isValid: false,
  halfSize: false,
  onIcnPress: () => {},
  autoCorrect: false,
  onBlur: () => {},
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  keyboardType: PropTypes.string,
  secureText: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  isValid: PropTypes.bool,
  halfSize: PropTypes.bool,
  icnName: PropTypes.string,
  onIcnPress: PropTypes.func,
  autoCorrect: PropTypes.bool,
  onBlur: PropTypes.func,
};

export default InputField;
