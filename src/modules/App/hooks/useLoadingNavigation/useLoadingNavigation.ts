import {useNavigation, CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type LoadingScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<{Loading: {}}, 'Loading'>,
  StackNavigationProp<{Scanner: {}}>
>;

export type UseLoadingNavigationType = {
  navigation: LoadingScreenNavigationProp;
};

export const useLoadingNavigation = (): UseLoadingNavigationType => ({
  navigation: useNavigation<LoadingScreenNavigationProp>(),
});
