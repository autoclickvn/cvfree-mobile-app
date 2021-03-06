import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChangePassword } from '../screen/change-password';
import { TabsHome } from '../screen/tab-home';
import { RootStackParamList } from './router.type';
import { SearchScreen } from '../screen/search';
import { ProfileScreen } from '../screen/profile';
import { HeaderStack } from '../components/header-stack';
import { UpdateProfileScreen } from '../screen/profile-update';
import { JobDetail } from '../screen/job-detail';
import { CvDetail } from '../screen/cv-detail';

const Stack = createStackNavigator<RootStackParamList>();

export const AppRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabsHome">
      <Stack.Screen name="TabsHome" component={TabsHome} />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          header: props => (
            <HeaderStack {...props} backButton title="Change password" />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          header: props => (
            <HeaderStack {...props} backButton title="Information" />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
        options={{
          header: props => (
            <HeaderStack {...props} backButton title="Update infomation" />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{
          header: props => (
            <HeaderStack {...props} backButton title="Job detail" />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="CvDetail"
        component={CvDetail}
        options={{
          header: props => (
            <HeaderStack {...props} backButton title="Cv detail" />
          ),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
