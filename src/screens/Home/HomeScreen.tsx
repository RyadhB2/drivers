import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from './styles';

import { DefaultMainNavigationProp } from '../../utils/RoutersType';
import { useNavigation } from '@react-navigation/native';
import CustomInputField from '../../components/CustomTextInput';
import { colors } from '../../theme/colors';

const HomeScreen: React.FC = () => {
  //State & Data

  //Hooks
  // const navigation = useNavigation<DefaultMainNavigationProp>()
  //Functions

  //Effects

  //rendering
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Text>Hello!</Text>
    </View>
  );
};

export default HomeScreen;
