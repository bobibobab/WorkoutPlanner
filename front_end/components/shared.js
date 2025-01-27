import { Dimensions } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const StatusBarHeight = getStatusBarHeight();
export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;
