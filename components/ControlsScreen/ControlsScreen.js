import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NodePlayerView} from 'react-native-nodemediaclient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ControlsScreen = () => {
  const [playerRef, setPlayerRef] = useState(null);
  useEffect(() => {
    return () => {
      if (playerRef) {
        playerRef.stop();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Post controller status</Text>
      <View style={styles.batterySection}>
        <Icon name="battery-1" size={200} color={'red'} />
        <Text>Battery</Text>
      </View>

      <View style={styles.controlsBtnSection}>
        <View style={styles.controlsBtn}>
          <View style={styles.leftContainer}>
            <Icon name="lock" size={40} />
            <Text>Lock</Text>
          </View>
        </View>
        <View style={styles.controlsBtn}>
          <View style={styles.leftContainer}>
            <Icon name="lightbulb-o" size={40} />
            <Text>Light</Text>
          </View>
        </View>

        <View style={styles.controlsBtn}>
          <View style={styles.leftContainer}>
            <Icon name="shield" size={40} />
            <Text>Signal</Text>
          </View>
        </View>
      </View>
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
  batterySection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  leftContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlsBtnSection: {
    width: '100%',
    // marginHorizontal: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  controlsBtn: {
    padding: 14,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,

    // borderRadius: 50,
    // backgroundColor: '#ffffff',
  },

  controlsBtnText: {
    color: '#ffffff',
  },

  galleryBtn: {
    padding: 13,
    borderRadius: 10,
    width: '80%',
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ControlsScreen;
