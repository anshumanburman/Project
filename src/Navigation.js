import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator,Header } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';

import CheckAuth from './containers/CheckAuth'
import Login from './containers/Auth/Login'
import Home from './containers/Screens/Home'
import { navigationHeader } from './theme'

 import { AuthLoadingScreen } from './common/AuthLoadingScreen';
// import LocationSearch from './components/Screens/LocationSearch';

global.HeaderHeight = Header.HEIGHT;
// const DrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions:{
//       // drawerLockMode:'locked-closed',
//       // gesturesEnabled:'false'
//     },
//   }
// },{
//   initialRouteName:'Home',
//   contentComponent:CustomDrawer

// });
const AppNavigator1 = createStackNavigator({
  Auth: {screen:Login, navigationOptions:{header:null}},
  Home: {screen:Home, navigationOptions:{header:null}},
  
}, {
  initialRouteName: 'Auth',
  defaultNavigationOptions: navigationHeader,

});
const AppNavigator = (createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AppStack: AppNavigator1,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));





 
export default createAppContainer(AppNavigator)
