import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  ListRenderItem,
  Platform,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import CustomInputField from '../../components/CustomTextInput';
import { colors } from '../../theme/colors';
import DriverItem from '../../components/DriverItem';
import axios from 'axios';
import { Driver, DriversResponse } from '../../models/drivers';
import Loader from '../../components/Loader';
import { useDebounce } from '../../hooks/useDebounce';

const API_BASE_URL = 'https://inesvtc-api.aventique.com';
const ITEMS_PER_PAGE = 10;

const HomeScreen: React.FC = () => {
  //State & Data
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const offset = useRef(0);
  const nextUrl = useRef<string | null>(null);

  const fetchDrivers = async (withDataReset = false) => {
    try {
      const currentOffset = withDataReset ? 0 : offset.current;
      const response = await axios.get<DriversResponse>(
        `${API_BASE_URL}/interview/drivers`,
        {
          params: {
            search: debouncedSearchQuery.toLowerCase(),
            count: ITEMS_PER_PAGE,
            offset: currentOffset,
          },
        },
      );

      const { drivers: newDrivers, next } = response.data;
      if (withDataReset) {
        setDrivers(newDrivers);
      } else {
        setDrivers(prev => [...prev, ...newDrivers]);
      }
      nextUrl.current = next;
      offset.current = currentOffset + ITEMS_PER_PAGE;
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  //Hooks
  useEffect(() => {
    const initalFetch = async () => {
      setIsLoading(true);
      offset.current = 0;
      await fetchDrivers(true);
      setIsLoading(false);
    };
    initalFetch();
  }, [debouncedSearchQuery]);

  //Functions
  const renderDriver: ListRenderItem<Driver> = useCallback(({ item }) => {
    return <DriverItem driver={item} onTransferCredit={() => null} />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  const renderFooter = useCallback(() => {
    if (isLoadingMore) return <ActivityIndicator size={'large'} />;
    else return null;
  }, [isLoadingMore]);

  const renderEmptyList = useCallback(() => {
    return (
      <View>
        <Text style={styles.emptyListTextTitle}>Aucun chauffeur trouvé</Text>
        <Text style={styles.emptyListTextSubtitle}>
          Verifiez le nom, le numéro ou la référence saisis
        </Text>
      </View>
    );
  }, [isLoadingMore]);

  const renderHeader = useCallback(() => {
    return <Text style={styles.listHeaderText}>Liste des chauffeurs</Text>;
  }, []);

  const handleRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      setSearchQuery('');
      offset.current = 0;
      await fetchDrivers(true);
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
      console.error('Error refreshing drivers:', error);
    }
  }, []);

  const handleLoadMore = async () => {
    try {
      if (isLoadingMore || !nextUrl.current) return;
      setIsLoadingMore(true);
      await fetchDrivers();
      setIsLoadingMore(false);
    } catch (error) {
      setIsLoadingMore(false);
      console.error('Error loading more drivers:', error);
    }
  };

  //rendering
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Rechercher un chauffeur</Text>
        <Text style={styles.subTitle}>
          Saisissez le nom,le numéro ou la réference du chauffeur pour lui
          transferer du crédit
        </Text>

        <CustomInputField
          left={() => <Text>🔍</Text>}
          placeholder="Ex: Mourad, 0550, CH-152 ..."
          containerStyle={styles.inputContainer}
          inputStyle={styles.textInputStyle}
          placeholderTextColor={colors.white}
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.listContainer}
            data={drivers}
            renderItem={renderDriver}
            ItemSeparatorComponent={renderSeparator}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.3}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderEmptyList}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
