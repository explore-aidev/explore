import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '@iconify/react';

import { images, icons } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';

const Register = () => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {};
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-6 mt-4">
          <TouchableOpacity onPress={router.back}>
            <Image
              source={icons.chevronLeft}
              resizeMode="contain"
              className="mb-5 w-6 h-6"
            />
          </TouchableOpacity>
          <Image
            source={images.logoSmall}
            resizeMode="contain"
            className="mb-2 w-[67px] h-[33px]"
          />
        </View>
        <View className="px-6 mb-8">
          <Text className="font-psemibold text-2xl text-primary">
            Registration 👍
          </Text>
          <Text className="font-pregular text-sm text-primary/40">
            Let’s Register. Apply to jobs!
          </Text>
        </View>
        <View className="px-6 mb-8">
          <FormField
            icon={form.fullname === '' ? icons.profileGrey : icons.profileBlack}
            placeholder={'Full Name'}
            value={form.fullname}
            handleChangeText={(e) => setForm({ ...form, fullname: e })}
          />
          <FormField
            icon={form.email === '' ? icons.emailGrey : icons.emailBlack}
            placeholder={'E-mail'}
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            icon={
              form.password === '' ? icons.passwordGrey : icons.passwordBlack
            }
            placeholder={'Password'}
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          <FormField
            icon={
              form.confirmPassword === ''
                ? icons.passwordGrey
                : icons.passwordBlack
            }
            placeholder={'Confirm Password'}
            value={form.confirmPassword}
            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
          />
        </View>
        <View className="px-6 mb-8">
          <CustomButton
            title={'Register'}
            containerStyles={'w-full'}
            handlePress={handleSubmit}
          />
        </View>
        <View className="flex-row justify-center items-center flex px-6 mb-8">
          <View className="h-[1px] bg-secondary flex-1"></View>
          <View className="flex-1 justify-center items-center">
            <Text className="font-pregular text-sm text-secondary">
              Or continue with
            </Text>
          </View>
          <View className="h-[1px] bg-secondary flex-1"></View>
        </View>

        <View className="flex-row justify-center items-center mb-8">
          <TouchableOpacity onPress={() => {}}>
            <Image source={images.loginApple} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={images.loginGoogle} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={images.loginFacebook} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        <View className="justify-center items-center flex-row gap-2">
          <Text className="font-pregular text-sm text-secondary">
            Have an account?
          </Text>
          <Link className="text-buttonColor font-pbold" href={'/login'}>
            Log in
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
