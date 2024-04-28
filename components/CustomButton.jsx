import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({
  title,
  containerStyles,
  handlePress,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-buttonColor rounded-[5px] justify-center items-center min-h-[56px] ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
      onPress={handlePress}
    >
      <Text className={`text-white font-pmedium text-base ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
