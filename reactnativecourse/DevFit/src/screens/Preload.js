import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';

const Preload = (props) => {
  if (!props.name) {
    // mandar para StarterStack
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
      }),
    );
  } else {
    // mandar para AppTab
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'AppTab'})],
      }),
    );
  }

  return null;
};

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
  };
};

export default connect(mapStateToProps)(Preload);
