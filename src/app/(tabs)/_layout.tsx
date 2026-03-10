import BookIcon from '@/assets/images/BookIcon';
import ListIcon from '@/assets/images/ListIcon';
import UserIcon from '@/assets/images/UserIcon';
import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // hide all titles
        tabBarStyle: {
          backgroundColor: '#badd13',
          borderTopColor: '#eee',
          height: 55,
        },
        headerStyle: {
          backgroundColor: '#208AEF', // header background color
        },
        headerTintColor: '#fff', // color of back button & title
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Recipes',
          tabBarIcon: () => <BookIcon />
        }}
      />
      <Tabs.Screen
        name="shopping" 
        options={{ 
          title: 'Shopping',
          tabBarIcon: () => <ListIcon />
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          tabBarIcon: () => <UserIcon />
        }}
      />
    </Tabs>
  );
}


export default TabLayout