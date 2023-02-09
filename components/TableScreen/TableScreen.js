import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TableScreen = () => {
  const [data, setData] = useState([
    {status: 'Почтовый ящик закрыт в 19:00'},
    {status: 'Почтовый ящик закрыт в 19:00'},
    {status: 'Почтовый ящик закрыт в 19:00'},
  ]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@history');
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.historyList}
        data={data}
        renderItem={({item}) => (
          <View style={styles.historyListItem}>
            <Text style={styles.historyListItemTitle}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  historyList: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },

  historyListItem: {
    width: 300,
    padding: 10,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  historyListItemTitle: {
    fontSize: 15,
    fontWeight: '900',
  },
});
