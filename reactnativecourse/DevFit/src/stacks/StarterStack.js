import {createStackNavigator} from 'react-navigation-stack';

import StarterIntro from '../screens/StarterIntro';
import StarterName from '../screens/StarterName';
import StarterDias from '../screens/StarterDias';
import StarterNivel from '../screens/StarterNivel';
import StarterRecommendations from '../screens/StarterRecommendations';

const StarterStack = createStackNavigator({
  StarterIntro,
  StarterName,
  StarterDias,
  StarterNivel,
  StarterRecommendations,
});

export default StarterStack;
