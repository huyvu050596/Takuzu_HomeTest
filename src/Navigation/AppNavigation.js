import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import ScreenKey  from './ScreenKey';
import getSlideFromRightTransition from './SlideFromRightTransition';
import { Colors } from '../Themes';

import GamePlay from '../Screen/GamePlay';
import IntroOption from '../Screen/IntroOption';
import Ranking from '../Screen/Ranking';

const MainNav = createStackNavigator(
  {
    [ScreenKey.IntroOption]: { screen: IntroOption },
    [ScreenKey.GamePlay]: { screen: GamePlay },
    [ScreenKey.Ranking]: { screen: Ranking },
  },
  {
    headerMode: 'none',
    initialRouteName: ScreenKey.IntroOption,
    transitionConfig: getSlideFromRightTransition, // custom transition animation
  },
);

export default MainNav;
