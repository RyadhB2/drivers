import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '../theme/colors';

function Loader() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={colors.primary} size={'large'} />
    </View>
  );
}

export default Loader;
