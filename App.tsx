import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Switch from './src/componant/switch';
import Card from './src/componant/card';
import {Header} from './src/componant/card/header';
import {Content} from './src/componant/card/content';
import {Footer} from './src/componant/card/footer';

const App = (): React.JSX.Element => {
  return (
    // SafeAreaView to ensure UI is inside the safe area
    <SafeAreaView style={style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.root}>
        <View style={style.switchContainer}>
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
            <Switch.Label>Enable Auto Sync</Switch.Label>
            <Switch.Button />
          </Switch>
        </View>

        {/* Card Component with Header, Content, and Footer */}
        <Card>
          <Card.Header>
            <Header />
          </Card.Header>
          <Card.Content>
            <Content />
          </Card.Content>
          <Card.Footer>
            <Footer />
          </Card.Footer>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  switchContainer: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
  },
  spacer: {
    height: 20,
  },
});
