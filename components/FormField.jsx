import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';

const FormField = ({
  keyboardType,
  placeholder,
  value,
  icon,
  handleChangeText,
  otherStyles,
  isError,
  errors,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View>
      <View
        className={`px-6 rounded-xl border border-greyCustom items-center flex-row focus:border-primary h-[52px] w-full my-2 ${
          value !== '' ? 'border-primary' : ''
        }`}
      >
        <Image source={icon} resizeMode="contain" className="mr-4" />
        <TextInput
          autoCapitalize="none"
          className="flex-1 text-primary font-pmedium text-sm"
          placeholder={placeholder}
          placeholderTextColor={'#AFB0B6'}
          onChangeText={handleChangeText}
          secureTextEntry={
            (placeholder === 'Password' ||
              placeholder === 'Confirm Password') &&
            !showPassword
          }
          keyboardType={keyboardType}
        />
        {(placeholder === 'Password' || placeholder === 'Confirm Password') && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                !showPassword ? icons.showPasswordGrey : icons.showPasswordBlack
              }
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      <View>
        {isError && errors !== '' ? (
          <Text className="font-pmedium text-sm text-red-400 mt-1">
            {errors}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default FormField;
