import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
const { width } = Dimensions.get('screen');
const SlideItem = ({ item }) => {
  return (
    <View className="justify-center px-[36px]" style={{ width: width }}>
      <Image source={item.image} resizeMode="contain" className="w-full" />
      <Text className="font-psemibold text-center text-primary text-[28px]">
        {item.title}
      </Text>
      <Text className="font-pregular text-secondary text-center text-[15px]">
        {item.subtitle}
      </Text>
    </View>
  );
};

export default SlideItem;
