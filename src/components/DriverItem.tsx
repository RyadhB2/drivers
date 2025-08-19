import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Driver } from '../models/drivers';

interface DriverItemProps {
  driver: Driver;
  onTransferCredit: () => void;
}

const DriverItem: React.FC<DriverItemProps> = ({
  driver: { id, full_name, phone, reference },
  onTransferCredit,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{full_name}</Text>
      <Text style={styles.phone}>{phone}</Text>
      <View style={styles.lowerContainer}>
        <Text>{reference}</Text>
        <Pressable onPress={onTransferCredit} style={styles.button}>
          <Text style={{ color: 'white' }}>Créditer</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DriverItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  name: {
    fontSize: 16,
  },
  phone: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
});
