import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet } from 'react-native';

const generateStudentImageSet = () => {
  const baseNIM = '10584110';
  const suffix = '22';
  const baseURL = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
  const query = '_.jpg?1751871539';
  const fallbackURL =
    'https://i.pinimg.com/originals/4c/91/92/4c9192c2f1a1c17c9aae6d42b6834273.gif';

  const imageSet = [];

  for (let i = 52; i <= 60; i++) {
    const nim = `${baseNIM}${i}${suffix}`;
    const main = `${baseURL}${nim}${query}`;
    const alt = fallbackURL;
    imageSet.push({ main, alt });
  }

  return imageSet;
};

const studentImageSet = generateStudentImageSet();

export default function StudentImageGrid() {
  const [imageStates, setImageStates] = useState(
    studentImageSet.map(() => ({ scale: 1, isAlt: false }))
  );

  const handleImagePress = (index : number) => {
    setImageStates((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const newScale = item.scale < 2 ? item.scale * 1.2 : 2;
        return {
          scale: newScale,
          isAlt: !item.isAlt,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {studentImageSet.map((pair, index) => (
        <Pressable key={index} onPress={() => handleImagePress(index)}>
          <Image
            source={{ uri: imageStates[index].isAlt ? pair.alt : pair.main }}
            style={[
              styles.image,
              {
                transform: [{ scale: imageStates[index].scale }],
              },
            ]}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 330, // 3 gambar x (100px + margin)
    alignSelf: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#aaa',
  },
});
