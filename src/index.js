import {
  Platform,
  StyleSheet,
} from 'react-native';

export default {
  async create(styles) {
    const keys = Object.keys(styles);
    const newStyles = {};

    await keys.forEach(key => {
      const {ios, android, ...style} = styles[key];
      newStyles[key] = {...style, ...Platform.select({ios, android})};
    });

    return StyleSheet.create(newStyles);
  },
};