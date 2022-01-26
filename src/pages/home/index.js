import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as loginAction from '../../store/actions/login.action';
import * as homeAction from '../../store/actions/home.action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends Component {
  componentDidMount() {
    console.log(this.props.getVerifyCode('17698753015', 'login'), 423634576);
  }
  render() {
    return (
      <View>
        <Text>423646345</Text>
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
