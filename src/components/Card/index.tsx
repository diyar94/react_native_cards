import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardProps} from '@/utils/types';

const Card: React.FC<CardProps> = ({color, title, isSelected}) => {
  return (
    <View
      style={[styles.card, {backgroundColor: isSelected ? 'white' : color}]}>
      <Text style={isSelected ? styles.selectedText : styles.text}>
        {isSelected ? 'Unselect' : title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    aspectRatio: 1, // Ensure the card is square
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  selectedText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Card;
