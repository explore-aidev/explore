import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { router } from 'expo-router';

const sliderWith = Dimensions.get('window').width;
const itemWidth = Math.round(sliderWith);

const dataStart = [
  {
    title: 'Search your job',
    subtitle:
      'Figure out your top five priorities whether it is company culture, salary.',
    image: images.setA1,
  },
  {
    title: 'Browse jobs list',
    subtitle:
      'Our job list include several  industries, so you can find the best job for you.',
    image: images.setA2,
  },
  {
    title: 'Apply to best jobs',
    subtitle:
      'You can apply to your desirable jobs very quickly and easily with ease.',
    image: images.setA3,
  },
  {
    title: 'Make your career',
    subtitle:
      'We help you find your dream job based on your skillset, location, demand.',
    image: images.setA4,
  },
];
_renderItem = ({ item }) => {
  return (
    <View className="items-center px-[32px]">
      <Image source={item.image} resizeMode="contain" />
      <Text className="font-psemibold text-[28px] text-primary text-center">
        {item.title}
      </Text>
      <Text className="font-pregular text-[15px] text-secondary text-center">
        {item.subtitle}
      </Text>
    </View>
  );
};
const index = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View className="h-full w-full bg-sky-300 justify-center items-center relative">
      <Image
        source={images.backgroundStarted}
        resizeMode="cover"
        className="w-full h-full absolute"
      />
      <View className="w-full h-fit">
        <Carousel
          ref={isCarousel}
          data={dataStart}
          renderItem={_renderItem}
          sliderWidth={sliderWith}
          itemWidth={itemWidth}
          onSnapToItem={(index) => setIndex(index)}
        />

        <Pagination
          dotsLength={dataStart.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 28,
            height: 8,
            borderRadius: 26,
            backgroundColor: '#2B557C',
          }}
          inactiveDotStyle={{
            width: 8,
            height: 8,
            borderRadius: 26,
            backgroundColor: '#2B557C',
            opacity: 0.4,
          }}
        />
        {index === dataStart.length - 1 ? (
          <View className="mt-16 px-10 items-center w-full justify-center">
            <TouchableOpacity
              className="bg-background justify-center items-center flex h-[56px] w-full rounded-[5px]"
              onPress={() => {
                router.push('/register');
              }}
            >
              <Text className="font-pmedium text-white text-[16px]">
                Explore
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="mt-16 px-10 flex-row justify-between w-full items-center">
            <TouchableWithoutFeedback
              onPress={() => {
                isCarousel.current.snapToItem(dataStart.length - 1);
              }}
            >
              <Text className="font-pmedium text-secondary text-[16px]">
                Skip
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                isCarousel.current.snapToNext();
              }}
            >
              <View className="bg-background justify-center items-center flex h-[56px] w-[158px] rounded-[5px]">
                <Text className="font-pmedium text-white text-[16px]">
                  Next
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    </View>
  );
};

export default index;
