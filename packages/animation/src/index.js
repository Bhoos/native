import { Animated } from 'react-native';

export function run(animation) {
  return new Promise((resolve) => {
    animation.start(result => resolve(result));
  });
}

export function spring(value, toValue, config) {
  return Animated.spring(value, {
    toValue,
    useNativeDriver: true,
    ...config,
  });
}

export function timing(value, toValue, duration = 300, config) {
  return Animated.timing(value, {
    ...config,
    toValue,
    duration,
    useNativeDriver: true,
  });
}

export function decay(value, velocity, deceleration = 0.997, config) {
  return Animated.decay(value, {
    velocity,
    deceleration,
    useNativeDriver: true,
    ...config,
  });
}

export function delay(duration) {
  return Animated.delay(duration);
}

export function parallel(animations) {
  return Animated.parallel(animations);
}

export function sequence(animations) {
  return Animated.sequence(animations);
}

export function loop(animation, iterations = -1) {
  return Animated.loop(animation, iterations);
}

export function stagger(duration, animations) {
  return Animated.stagger(duration, animations);
}

export function interpolate(value, outputRange, inputRange, config) {
  return value.interpolate({
    inputRange,
    outputRange,
    ...config,
  });
}
