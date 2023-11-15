import React, {useState} from 'react';
import {
  ColorValue,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '@/components/Card';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import {cardData} from '@/utils/defaults';

const MainPageScreen: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const handleCardClick = (color: string) => {
    // If the same color is clicked again, reset the selection
    if (selectedColor === color) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: selectedColor as ColorValue},
      ]}>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.scrollContent}>
          {cardData.map((card, index) => {
            if (!selectedColor || card.color === selectedColor) {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.cardContainer}
                  onPress={() => handleCardClick(card.color)}>
                  <Card
                    color={card.color}
                    title={card.title}
                    isSelected={card.color === selectedColor}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: '10%',
  },
  scrollContainer: {
    flex: 90,
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    width: '48%',
    margin: '1%',
  },
  footer: {
    height: '3%',
  },
});

export default MainPageScreen;
