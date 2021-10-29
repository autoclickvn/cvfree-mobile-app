import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Cvs } from '../admin-area/cv';
import { Jobs } from '../admin-area/job';
import { HomeScreen } from '../home';
import { SettingScreen } from '../setting/setting';
import { HeaderTab } from './tab-home.header';
import { RootTabParamList } from './tab-home.type';
import * as fonts from '../../constants/fonts';
// import { styles } from './home.styles';
const Tab = createBottomTabNavigator<RootTabParamList>();

const getIconTab = (route: string) => {
  switch (route) {
    case 'Home':
      return 'home';

    case 'Setting':
      return 'cog';

    case 'Job':
      return 'briefcase';

    case 'Cv':
      return 'paste';

    default:
      return '';
  }
};

export const TabsHome: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          // if (route.name === 'CreateTab') {
          //   return (
          //     <View style={styles.vButtonCreate}>
          //       <Icon
          //         name="plus"
          //         size={size}
          //         color={color}
          //         style={styles.icCreate}
          //       />
          //     </View>
          //   );
          // }
          return <Icon name={getIconTab(route.name)} size={20} color={color} />;
        },
        tabBarActiveTintColor: '#299D55',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarStyle: { height: 55, paddingTop: 5 },
        headerStyle: {
          backgroundColor: '#31BC31',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        tabBarLabelStyle: {
          textTransform: 'uppercase',
          marginBottom: 6,
          fontFamily: fonts.FontQsSemiBold,
        },
        headerShown: false,
        tabBarShowLabel: true,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Job"
        component={Jobs}
        options={{
          header: props => <HeaderTab {...props} />,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Cv"
        component={Cvs}
        options={{
          header: props => <HeaderTab {...props} />,
          headerShown: true,
        }}
      />
      {/* <Tab.Screen name="CreateTab" component={CreateScreen} /> */}
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          header: props => <HeaderTab {...props} />,
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};
