import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookList from '../screens/book-list';
import BookDetails from '../screens/book-details';
import SearchList from '../screens/search-list/search-list';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Stack = createNativeStackNavigator();

const StackScreen = () => (
  <Stack.Navigator
    initialRouteName={'BookList'}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={'BookList'} component={BookList} />
    <Stack.Screen name={'BookDetails'} component={BookDetails} />
    <Stack.Screen name={'Search'} component={SearchList} />
  </Stack.Navigator>
);

const Navigation = props => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default Navigation;
