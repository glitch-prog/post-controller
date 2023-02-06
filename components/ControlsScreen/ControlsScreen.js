import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {NodePlayerView} from 'react-native-nodemediaclient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ControlsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Состояние</Text>
      <View style={styles.batterySection}>
        <Icon name="battery-1" size={200} color={'red'} />
        <Text style={styles.batteryText}>25%</Text>
      </View>

      <View style={styles.controlsBtnSection}>
        <View style={styles.controlsBtnFirst}>
          <View style={styles.leftContainer}>
            <Icon name="lock" size={40} />
            <Text>Открыть</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#4F80FF'}}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
        <View style={styles.controlsBtn}>
          <View style={styles.leftContainer}>
            <Icon name="lightbulb-o" size={40} />
            <Text>Закрыть</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#4F80FF'}}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>

        <View style={styles.controlsBtn}>
          <View style={styles.leftContainer}>
            <Icon name="shield" size={40} />
            <Text>Сигнал</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#4F80FF'}}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.tableBtn}>
        <Text style={styles.controlsBtnText}>Проверить таблицу</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    // justifyContent: 's',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f7f7',
  },
  header: {
    paddingVertical: 13,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    color: '#000000',
    fontSize: 24,
    marginTop: 70,
  },
  batterySection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryText: {fontSize: 20, color: '#000000', fontWeight: 'bold'},

  leftContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlsBtnSection: {
    width: '100%',
    // marginBottom: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  controlsBtnFirst: {
    padding: 14,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderTopWidth: 1,

    // borderRadius: 50,
    // backgroundColor: '#ffffff',
  },

  controlsBtn: {
    padding: 14,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#b3b3b3',

    // borderRadius: 50,
    // backgroundColor: '#ffffff',
  },

  controlsBtnText: {
    color: '#ffffff',
  },

  tableBtn: {
    padding: 13,
    borderRadius: 10,
    width: '80%',
    backgroundColor: '#FFBB00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
});
export default ControlsScreen;
