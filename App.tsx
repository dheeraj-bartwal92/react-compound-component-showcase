import React from 'react';
import {StyleSheet, View} from 'react-native';
import Switch from './src/componant/switch';

const App = (): React.JSX.Element => {
  return (
    <View style={style.root}>
      <Switch>
        <Switch.Label>Push Notification Enabled</Switch.Label>
        <Switch.Button />
      </Switch>
      <View style={style.spacer} />
      <Switch check={true}>
        <Switch.Label>Enable Dark Mode</Switch.Label>
        <Switch.Button />
      </Switch>
      <View style={style.spacer} />
      <Switch check={true}>
        <Switch.Label>Enable Auto Synce</Switch.Label>
        <Switch.Button />
      </Switch>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    height: 50,
  },
});
