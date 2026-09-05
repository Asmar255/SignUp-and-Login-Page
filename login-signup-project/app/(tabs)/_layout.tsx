import { Tabs } from 'expo-router';
import React from 'react';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme]?.tint ?? '#0a7ea4',
        headerShown: false,
        tabBarButton: (props) => <HapticTab {...props} />,
      }}>
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <Entypo name="login" size={24} color={color} />,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="SignUp"
        options={{
          title: 'SignUp',
          tabBarIcon: ({ color }) => <AntDesign name="user-add" size={24} color={color} />,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}