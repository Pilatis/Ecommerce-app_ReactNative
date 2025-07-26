import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { ProductType } from '@/src/types/dataMock';
import { globalsStyles } from '@/src/styles/globals';
import FlashSaleItem from './FlashSaleItem';

type Props = {
  productsSale: ProductType[] | null;
};

type Timer = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const FlashSale = ({ productsSale }: Props) => {
  const [timeUnits, setTimeUnits] = useState<Timer>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const saleEndDate = new Date();
  //saleEndDate.setFullYear(2025, 9, 2)
  saleEndDate.setDate(saleEndDate.getDate() + 2);
  saleEndDate.setHours(23, 59, 59);

  useEffect(() => {
    const calculatedTimeUnits = (timeDifferent: number) => {
      const seconds = Math.floor(timeDifferent / 1000);

      setTimeUnits({
        days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
        hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((seconds % (60 * 60)) / 60),
        seconds: seconds % 60
      });
    };

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const expiryTime = saleEndDate.getTime();
      const timeDifferent = expiryTime - currentDate;

      if (timeDifferent <= 0) {
        calculatedTimeUnits(0);
      } else {
        calculatedTimeUnits(timeDifferent);
      }
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <>
      {productsSale ? (
        <View style={styles.container}>
          <View style={styles.titleHeader}>
            <View style={styles.timerBox}>
              <Text style={styles.title}>Promoções</Text>
              <View style={styles.timer}>
                <Ionicons
                  name="time-outline"
                  size={16}
                  color={Colors.baseBlack}
                />
                <Text style={styles.timerText}>
                  {`${formatTime(timeUnits.days).padEnd(1, '0')}`}:
                  {`${formatTime(timeUnits.hours)}`}:
                  {`${formatTime(timeUnits.minutes)}`}:
                  {`${formatTime(timeUnits.seconds)}`}
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.titleButton}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={productsSale}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <FlashSaleItem key={item.id} item={item} index={index} />
            )}
          />
        </View>
      ) : (
        <Text style={globalsStyles.textError}>
          Não foi possível carregar suas promoções
        </Text>
      )}
    </>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  timerBox: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.highlight,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12
  },
  timerText: {
    color: Colors.baseBlack,
    fontWeight: 500
  },
  titleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.6,
    color: Colors.baseBlack
  },
  titleButton: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.6,
    color: Colors.baseBlack
  }
});
