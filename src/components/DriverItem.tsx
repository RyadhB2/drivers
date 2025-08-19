import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Driver } from '../models/drivers';
import { colors } from '../theme/colors';

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
        <Text style={styles.reference}>{reference}</Text>
        <Pressable onPress={onTransferCredit} style={styles.button}>
          <Text style={{ color: colors.black }}>Créditer</Text>
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
    color: colors.white,
    marginBottom: 6,
  },
  phone: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 6,
  },
  reference: {
    fontSize: 16,
    color: colors.white,
  },

  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    backgroundColor: '#F2D54E',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
