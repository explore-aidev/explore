import { View, Text, Image, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import SlideItem from '../components/SlideItem';
import Carousel, { Pagination } from 'react-native-snap-carousel';

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
      </View>
    </View>
  );
};

export default index;
