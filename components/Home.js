import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Home extends React.Component {

  render() {
    const { idToken, accessToken } = this.props;
    return (
      <View>
        <Text style={styles.textStyle}>ID Token:</Text>
          <Text>{idToken}</Text>
          <Text style={styles.textStyle}>Access Token:</Text>
          <Text>{accessToken}</Text>
      </View>
    );
   }

}

const mapStateToProps = ({ auth }) => {
  const { idToken, accessToken } = auth;
  return { idToken, accessToken };
};

const styles = {
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
};

export default connect(mapStateToProps, {})(Home);
