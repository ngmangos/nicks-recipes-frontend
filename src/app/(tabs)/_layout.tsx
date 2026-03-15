import BookIcon from '@/components/images/BookIcon';
import ListIcon from '@/components/images/ListIcon';
import UserIcon from '@/components/images/UserIcon';
import { Tabs } from 'expo-router';

// Pallette: https://paletton.com/#uid=50i0u0koq++cE+Mi++Yuf+WM3ZB
// Next: https://paletton.com/#uid=50i0u0khMZY42+UbV+umWYMs3V7

const tintColor = '#FFE9DF';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // hide all titles
        tabBarStyle: {
          backgroundColor: '#FF9F71',
          borderTopColor: '#FFBFA0',
          height: 55,
        },
        headerStyle: {
          backgroundColor: '#FF9F71', // header background color
          borderBottomColor: '#FFBFA0', // header border color
        },
        headerTintColor: tintColor, // color of back button & title
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
          tabBarIcon: () => <BookIcon color={tintColor}/>
        }}
      />
      <Tabs.Screen
        name="shopping" 
        options={{ 
          title: 'Shopping',
          tabBarIcon: () => <ListIcon color={tintColor}/>
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          tabBarIcon: () => <UserIcon color={tintColor}/>
        }}
      />
    </Tabs>
  );
}


export default TabLayout