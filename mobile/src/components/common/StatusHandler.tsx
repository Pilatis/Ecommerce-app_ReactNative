import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalsStyles } from '@/src/styles/globals';
import { Colors } from '@/src/constants/Colors';

type Props = {
  loading: boolean;
  error?: boolean;
  empty?: boolean;
  children: React.ReactNode;
};

const StatusHandler = ({ loading, error, empty, children }: Props) => {
  if (loading) {
    return (
      <View style={{ marginTop: 5 }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={[globalsStyles.textError, { textAlign: 'center' }]}>
          Erro ao carregar dados. Tente novamente mais tarde.
        </Text>
      </View>
    );
  }

  if (empty) {
    return (
      <View style={styles.center}>
        <Text style={[globalsStyles.textError, { textAlign: 'center' }]}>
          Nenhum conteúdo encontrado.
        </Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default StatusHandler;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
