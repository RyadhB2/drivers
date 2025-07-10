import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// export type BottomTabParamList = {
//   Home: undefined;
// };
export type MainNavigatorParamList = {
  // BottomTab: NavigatorScreenParams<BottomTabParamList> | undefined;
  Home: undefined;
};
// export type BottomTabNavigationProp = StackNavigationProp<BottomTabParamList>;

export type DefaultMainNavigationProp =
  NativeStackNavigationProp<MainNavigatorParamList>;
// export type HomeScreenNavigationProp = StackNavigationProp<MainNavigatorParamList, 'Home'>;
