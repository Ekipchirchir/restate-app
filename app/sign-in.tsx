import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'

const SignIn = () => {
  const handleLogin = async () => { 
    const result = await login();

    if (result) {
      console.log("Login successful");
    } else {
      Alert.alert("Login Failed", "Please try again.");
    }
  };
  return (
    <SafeAreaView className='bg-white h-full' >
      <ScrollView contentContainerClassName = "h-full">
        <Image source ={images.onboarding} className = "w-full h-4/6" resizeMode = "contain"/>
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to Restate</Text>
          <Text className='text-3xl  font-rubik font-bold text-black-200 text-center mt-2'>Let's Get You Closer to {"\n"}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to Restate with Google</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View className='flex flex-row items-center justify-center'>
              <Image
              source={icons.google}
              className='w-6 h-5'
              resizeMode='contain'
              />
            <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn 