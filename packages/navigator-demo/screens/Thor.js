// @flow
import React, { Component } from 'react';
import { Animated, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { HeroIcon, createTracker } from '@bhoos/navigator-native';

const thor = require('../assets/thor.png');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    position: 'absolute',
    left: 30,
    top: 30,
    width: 60,
    height: 90,
  },
  title: {
    fontSize: 50,
  },
  button: {
    fontSize: 14,
  },
});

type Props = {
  navigator: {
    setRoute: (string) => void,
  },
};

class Thor extends Component<Props> {
  constructor(props) {
    super(props);

    const opacity = new Animated.Value(0);
    const scale = new Animated.Value(0.01);

    this.style = {
      flex: 1,
      opacity,
      transform: [
        { scale },
      ],
    };

    this.tracker = createTracker({ opacity, scale });
  }

  onEnter(transition) {
    this.tracker.fadeIn(transition).zoomIn(transition);
  }

  onLeave(transition) {
    this.tracker.fadeOut(transition).zoomOut(transition);
  }

  render() {
    const { navigator } = this.props;

    return (
      <Animated.View style={[styles.container, this.style]}>
        <View
          style={{
            width: '80%',
            height: '60%',
            backgroundColor: '#0f08',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}
        >
          <Text style={styles.title}>Thor</Text>
          <Text style={styles.description}>Blah Blah Blah</Text>
          <TouchableOpacity onPress={() => navigator.setRoute('home')}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
        </View>
        <HeroIcon id="thor" style={styles.hero} source={thor} />
      </Animated.View>
    );
  }
}

export default Thor;
