import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
      selected: 'card' | 'pix' | 'money' | null;
  onSelect: (method: 'card' | 'pix' | 'money') => void;
  cardInfo: { number: string; expiry: string; cvv: string };
  onCardChange: (info: { number: string; expiry: string; cvv: string }) => void;
}

const PaymentMethods = ({ selected, onSelect, cardInfo, onCardChange }: Props) => {
  return (
  <View style={styles.paymentContainer}>
      <Text style={styles.sectionTitle}>Formas de Pagamento</Text>

      {paymentOptions.map((option) => {
        const Icon = option.icon;
        return (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.paymentOption,
              selected === option.value && styles.paymentOptionSelected
            ]}
            onPress={() => onSelect(option.value as 'card' | 'pix' | 'money')}
          >
           
            <View style={{ flex: 1 }}>
              <Text style={styles.optionTitle}>{option.label}</Text>
              <Text style={styles.optionDescription}>{option.description}</Text>
            </View>
          </TouchableOpacity>
        );
      })}

      {selected === 'card' && (
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Informações do Cartão</Text>
          <TextInput
            style={styles.input}
            placeholder="Número do Cartão"
            keyboardType="numeric"
            value={cardInfo.number}
            onChangeText={(text) => onCardChange({ ...cardInfo, number: text })}
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 8 }]}
              placeholder="Validade (MM/AA)"
              keyboardType="numeric"
              value={cardInfo.expiry}
              onChangeText={(text) => onCardChange({ ...cardInfo, expiry: text })}
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="CVV"
              secureTextEntry
              keyboardType="numeric"
              value={cardInfo.cvv}
              onChangeText={(text) => onCardChange({ ...cardInfo, cvv: text })}
            />
          </View>
        </View>
      )}

      {selected === 'pix' && (
        <View style={[styles.infoBox, styles.pixBox]}>
          <View style={styles.infoHeader}>
            <Feather name="smartphone" size={20} color="#28a745" />
            <Text style={styles.pixTitle}>Pagamento PIX</Text>
          </View>
          <Text style={styles.infoText}>
            Após confirmar o pedido, você receberá um QR Code para realizar o pagamento
            instantâneo.
          </Text>
        </View>
      )}

      {selected === 'money' && (
        <View style={[styles.infoBox, styles.moneyBox]}>
          <View style={styles.infoHeader}>
            <MaterialCommunityIcons name="cash" size={20} color="#ff9900" />
            <Text style={styles.moneyTitle}>Pagamento em Dinheiro</Text>
          </View>
          <Text style={styles.infoText}>
            O pagamento será realizado na entrega do produto. Tenha o valor exato em
            mãos.
          </Text>
        </View>
      )}
    </View>
  )
}

export default PaymentMethods;

const paymentOptions = [
  {
    value: 'card',
    label: 'Cartão de Crédito',
    description: 'Pague com cartão de crédito.',
    icon: () => <Ionicons name="card-outline" size={20} color="#555" style={styles.icon} />
  },
  {
    value: 'pix',
    label: 'PIX',
    description: 'Pague via QR Code no app do seu banco.',
    icon: () => <MaterialCommunityIcons name="qrcode" size={20} color="#555" style={styles.icon} />
  },
  {
    value: 'money',
    label: 'Dinheiro',
    description: 'Pagamento na entrega.',
    icon: () => <MaterialCommunityIcons name="cash" size={20} color="#555" style={styles.icon} />
  }
];

const styles = StyleSheet.create({
    paymentContainer: {
    marginBottom: 30
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#f8f8f8'
  },
  paymentOptionSelected: {
    borderColor: '#007bff',
    backgroundColor: '#eaf2ff'
  },
  icon: {
    marginRight: 12
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500'
  },
  optionDescription: {
    fontSize: 13,
    color: '#666'
  },
  infoBox: {
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f5f5f5'
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 12
  },
  row: {
    flexDirection: 'row'
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
  },
  pixBox: {
    backgroundColor: '#e6f4ec',
    borderColor: '#b2dec6'
  },
  moneyBox: {
    backgroundColor: '#fff5e5',
    borderColor: '#ffe1a8'
  },
  pixTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#28a745'
  },
  moneyTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ff9900'
  },
  infoText: {
    fontSize: 13,
    color: '#555'
  }
})