import React, {useState} from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  View,
  Image,
} from 'native-base';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import config from '../utils/config';
import HomeIcn from '../assets/media/icons/home.png';
import ProjIcn from '../assets/media/icons/projects.png';
import TaskIcn from '../assets/media/icons/tasks.png';
import CltIcn from '../assets/media/icons/clients.png';

export default function Footer({
  state,
  descriptors,
  navigation,
  roleCode,
  lang,
  auth,
}) {
  const [selected, setSelected] = useState('Home');
  const [approved, setApproved] = useState(true);

  useFocusEffect(() => {
    let history = state?.history || null;
    if (history && history.length > 0) {
      let lastKey = state.history[history.length - 1].key;
      lastKey = lastKey.split('-');
      setSelected(lastKey[0]);
    }
  });

  const handlePress = (key, screen) => {
    setSelected(key);
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView>
      <View style={styles.footerContainer}>
        <Box flex={1} width="100%" alignSelf="center">
          <HStack alignItems="center" safeAreaBottom>
            <Pressable
              cursor="pointer"
              py="3"
              flex={1}
              style={styles.selT}
              onPress={() => handlePress('Home', 'Home')}>
              <Center>
                <Image source={HomeIcn} style={styles.icnFo1} />
                <Text style={styles.textFo1}>Home</Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>
        <Box flex={1} width="100%" alignSelf="center">
          <HStack alignItems="center" safeAreaBottom>
            <Pressable
              cursor="pointer"
              py="3"
              flex={1}
              style={styles.selT}
              onPress={() => handlePress('Projects', 'Projects')}>
              <Center>
                <Image source={ProjIcn} style={styles.icnFo1} />
                <Text style={styles.textFo1}>My Projects</Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>
        <Box flex={1} width="100%" alignSelf="center">
          <HStack alignItems="center" safeAreaBottom>
            <Pressable
              cursor="pointer"
              py="3"
              flex={1}
              style={styles.selT}
              onPress={() => handlePress('Tasks', 'Tasks')}>
              <Center>
                <Image source={TaskIcn} style={styles.icnFo1} />
                <Text style={styles.textFo1}>My Tasks</Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>
        <Box flex={1} width="100%" alignSelf="center">
          <HStack alignItems="center" safeAreaBottom>
            <Pressable
              cursor="pointer"
              py="3"
              flex={1}
              style={styles.selT}
              onPress={() => handlePress('Clients', 'Clients')}>
              <Center>
                <Image source={CltIcn} style={styles.icnFo1} />
                <Text style={styles.textFo1}>My Clients</Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    height: Platform.OS === 'android' ? 100 : 100,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
   
  },
  textFo1: {
    color: 'white',
    fontSize: 16,
  },
  selT: {
    borderColor: 'white',
    marginTop: -10,
  },
  selT2: {
    backgroundColor: 'white',
  },
  icnFo1: {
    marginBottom: 10,
    color: 'white',
  },
});
