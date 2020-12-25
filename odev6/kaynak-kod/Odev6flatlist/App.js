
import React from 'react';
import {
  TouchableNativeFeedback,
  StyleSheet,
  View,
  Alert,
  Text,
  FlatList,
} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.ApiCall();
  }
  async ApiCall() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let resJson = await res.json();
    this.setState({data: resJson});
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableNativeFeedback
              onPress={() => {
                Alert.alert(
                  'Post',
                  item.id + '\n' + item.title + '\n' + item.body,
                );
              }}
              key={item.id}>
              <Text
                style={{
                  fontSize: 15,
                  margin: 1,
                  color: 'grey',
                  backgroundColor: 'orange',
                  padding: 5,
                }}>
                {item.title}
              </Text>
            </TouchableNativeFeedback>
          )}
        />
      </View>
    );
  }
}

export default App;