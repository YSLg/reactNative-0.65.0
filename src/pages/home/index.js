import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import * as loginAction from '../../store/actions/login.action';
import * as homeAction from '../../store/actions/home.action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  homes: state.homes,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({...loginAction, ...homeAction}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
