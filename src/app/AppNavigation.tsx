import * as React from 'react';
import {SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NowPlayingM from './NowPlayingM'
import TopRatedM from './TopRatedM'
import PopularM from './PopularM'
import UpCommingM from './UpCommingM'


const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Now Playing" component={NowPlayingM} />
      <Tab.Screen name="Top Rated" component={TopRatedM} />
      <Tab.Screen name="Popular" component={PopularM} />
      <Tab.Screen name="Upcomming" component={UpCommingM} />
    </Tab.Navigator>
  );
}


