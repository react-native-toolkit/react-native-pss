# react-native-pss

Platform Specific Styles. Create simple platform specific stylesheets for React Native.

Apply Platform specific styles to components by specifying android and ios keys in the component's style property.

The below snippet will create background color 'red' on android and 'yellow' on ios
```js
import StyleSheet from 'react-native-pss';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    android: {
        backgroundColor: 'red',
    },
    ios: {
        backgroundColor: 'yellow',
    },
    alignItems: 'center',
  },
});
```

If you want to use it alongside react-native's StyleSheet, just import it with a different name like:
```js
import PlatformStyleSheet from 'react-native-pss';
```

Since it overrides React Native's default stylesheet function all other styles should work normally.

A simple implementation example:
```js
/**
 * react-native-pss example
 * https://github.com/DaniAkash/react-native-pss
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import StyleSheet from 'react-native-pss';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    android: {
        backgroundColor: 'red',
    },
    ios: {
        backgroundColor: 'yellow',
    },
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
```

License
----

MIT
