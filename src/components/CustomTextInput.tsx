import React, { JSX, ReactNode } from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Pressable,
  PressableAndroidRippleConfig,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
  ViewStyle,
  TextStyle,
  ColorValue,
} from 'react-native';
import { colors } from '../theme/colors';

export interface CustomInputFieldProps {
  value?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  right?: () => JSX.Element;
  onRightPress?: () => void;
  onLeftPress?: () => void;
  left?: () => JSX.Element;
  editable?: boolean;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  AndroidRippleConfig_Right?: null | PressableAndroidRippleConfig | undefined;
  AndroidRippleConfig_Left?: null | PressableAndroidRippleConfig | undefined;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  placeholderTextColor?: ColorValue;
  multiline?: boolean;
  textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom';
  onFocus?: () => void;
  onBlur?: () => void;
  contextMenuHidden?: boolean;
}

const CustomInputField: React.FC<CustomInputFieldProps> = props => {
  return (
    <View style={[styles.mainContainer, props.containerStyle]}>
      {props.left ? (
        <Pressable
          style={[
            styles.leftContainer,
            !props.onLeftPress ? { padding: 8 } : {},
          ]}
          onPress={props.onLeftPress}
          disabled={!Boolean(props.left)}
          android_ripple={
            props.onLeftPress
              ? {
                  ...styles.androidRippleDefaultStyle,
                  ...props.AndroidRippleConfig_Left,
                }
              : null
          }
        >
          {props.left ? props.left() : null}
        </Pressable>
      ) : null}
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        editable={props.editable}
        style={[styles.textInputStyle, props.inputStyle]}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={props.placeholderTextColor}
        multiline={props?.multiline}
        textAlignVertical={props?.textAlignVertical}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        contextMenuHidden={props.contextMenuHidden}
      />
      {props.right ? (
        <Pressable
          style={[
            styles.rightContainer,
            !props.onRightPress ? { padding: 8 } : {},
          ]}
          onPress={props.onRightPress}
          disabled={!Boolean(props.right)}
          android_ripple={
            props.onRightPress
              ? {
                  ...styles.androidRippleDefaultStyle,
                  ...props.AndroidRippleConfig_Right,
                }
              : null
          }
        >
          {props.right ? props.right() : null}
        </Pressable>
      ) : null}
    </View>
  );
};

export default CustomInputField;

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 46,
  },
  leftContainer: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    flex: 1,
    color: 'gray',
  },
  androidRippleDefaultStyle: {
    color: 'gray',
    borderRadius: 16,
  },
});
