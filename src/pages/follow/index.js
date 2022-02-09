import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as loginAction from '../../store/actions/login.action';
import * as homeAction from '../../store/actions/home.action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Follow extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <View>
        <Text>88888888</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  homes: state.homes,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({...loginAction, ...homeAction}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Follow);
