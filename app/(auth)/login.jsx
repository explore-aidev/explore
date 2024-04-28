import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '@iconify/react';

import { images, icons } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://192.168.0.162:8000/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          // deviceName: `${Platform.OS} ${Platform.Version}`,
        }),
      });
      const json = await response.json();
      if (response.status == 200) {
        setIsError(false);
        setErrors({
          email: '',
          password: '',
        });
        Alert.alert(json.message);
        router.push('/home');
      } else {
        if (json.message == 'validation error') {
          setIsError(true);
          setErrors({
            email: json.error.email,
            password: json.error.password,
          });
        } else {
          setIsError(true);
          setErrors({
            email: '',
            password: '',
          });
          Alert.alert(json.message);
        }
      }
    } catch (error) {
      if (error) console.log('ERROR', error);
    }
  };
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
            Welcome Back 👋
          </Text>
          <Text className="font-pregular text-sm text-primary/40">
            Let’s log in. Apply to jobs!
          </Text>
        </View>
        <View className="px-6 mb-8">
          <FormField
            icon={form.email === '' ? icons.emailGrey : icons.emailBlack}
            placeholder="E-mail"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            autoCapitalize="none"
            isError={isError}
            errors={errors.email}
          />
          <FormField
            icon={
              form.password === '' ? icons.passwordGrey : icons.passwordBlack
            }
            placeholder="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            errors={errors.password}
            isError={isError}
          />
        </View>
        <View className="px-6 mb-10">
          <CustomButton
            title="Login"
            containerStyles="w-full"
            handlePress={handleSubmit}
          />
        </View>

        <View className="justify-center items-center mb-12">
          <TouchableOpacity onPress={() => {}}>
            <Text className="font-pregular text-buttonColor text-base">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center items-center flex px-6 mb-12">
          <View className="h-[1px] bg-secondary flex-1"></View>
          <View className="flex-1 justify-center items-center">
            <Text className="font-pregular text-sm text-secondary">
              Or continue with
            </Text>
          </View>
          <View className="h-[1px] bg-secondary flex-1"></View>
        </View>

        <View className="flex-row justify-center items-center mb-12">
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
            Haven't an account?
          </Text>
          <Link className="text-buttonColor font-pbold" href="/register">
            Register
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
