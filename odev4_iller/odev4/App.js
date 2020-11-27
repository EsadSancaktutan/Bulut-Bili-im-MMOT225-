import React, { useState } from 'react';
import { View, TouchableHighlight, Text, FlatList, ScrollView } from 'react-native';

import data from './data.json';

function Component1 ({list, style, select, selected}) {
  const renderItem = ({ item }) => (
      <TouchableHighlight onPress={() => select(item)}>
          <Text style={{
              padding: 8,
              fontSize: 15,
              color: 'black'
          }}>{item}</Text>
      </TouchableHighlight>
  )

  return (
      <FlatList 
          data={list}
          renderItem={renderItem}
          keyExtractor={name => name}
          style={style}
      />
  );
}

function Component2({ name, cityList, style }){
  return (
      <View style={[style, { padding: 10 }]}>
          {name && (
              <>
                  <Text>{name} bölgesine ait şehirler.</Text>
                  <ScrollView>
                      {cityList.map(city => 
                      <View key={city.plateCode}
                          style={{
                              padding: 10
                          }}>
                          <Text>Şehir: {city.name}</Text>
                          <Text>Nüfus: {city.population}</Text>
                          <Text>Plaka: {city.plateCode}</Text>
                      </View>)}
                  </ScrollView>
              </>
          )}
      </View>
  );
}

const App = () => {
    const [select, setSelect] = useState();

    return (
        <View style={{ flex: 1 }}>
            <Component1 
                list={Object.keys(data)}
                style={{ flexBasis: '50%' }}
                select={i => setSelect(i)}
                selected={select} />
            <Component2 
                name={select}
                cityList={select && data[select]}
                style={{ flexBasis: '50%' }}
                />
        </View>
    )
}


export default App;