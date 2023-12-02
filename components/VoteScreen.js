import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ rating, onStarPress }) => {
  const stars = [1, 2, 3, 4, 5]; // Số lượng sao

  return (
    <View style={styles.starRatingContainer}>
      {stars.map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => onStarPress(star)}
        >
          <Icon
            name={star <= rating ? 'star' : 'star-o'}
            size={18}
            color={star <= rating ? '#f1c40f' : '#ccc'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const VoteScreen = () => {
  const [rating, setRating] = useState(0);

  const handleStarPress = (star) => {
    setRating(star);
    // Thực hiện các hành động khác khi người dùng nhấn vào một sao
  };

  return (
    <View style={styles.container}>
      <StarRating rating={rating} onStarPress={handleStarPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: 20,
  },
 
});

export default VoteScreen;
