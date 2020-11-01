import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Saying extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.state = {phrase: ''};
  }

  arrPhrase = ['I love you.','Nice shirt.','That is some elegant code you wrote.','You make good decisions.', 'You deserve to take good care of you.','You have made the right life choices.', 'Your hair looks great today.', 'The world is a better place with you in it.', 'You have great taste in music.', 'You get better and better at guitar every day.', 'You are important to me.', 'You make my world beautiful.', 'You make a difference.', 'Your shoes are so interesting yet practical.', 'You smell nice.']

  randomIndex() {
    return Math.floor(Math.random() * this.arrPhrase.length)
  }

  handleWordChange() {
    this.setState({
      phrase: this.arrPhrase[this.randomIndex()]
    });    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.phrase}
        </Text>
        <Button styles={styles.button}
          onPress={this.handleWordChange}
          title="Generate Compliment"
          color="purple"
          accessibilityLabel='Generate Compliment'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
 
  }
});