// app/index.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; 

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 MaterialCommunityIcons</Text>

      <View style={styles.item}>
        <MaterialCommunityIcons name="application-import" size={28} color="#000" />
        <Text style={styles.label}>Import</Text>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons name="application-settings" size={28} color="#000" />
        <Text style={styles.label}>Settings</Text>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons name="approximately-equal-box" size={28} color="#000" />
        <Text style={styles.label}>Approx Equal</Text>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons name="apps" size={28} color="#000" />
        <Text style={styles.label}>Apps</Text>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons name="archive" size={28} color="#000" />
        <Text style={styles.label}>Archive</Text>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons name="archive-arrow-down" size={28} color="#000" />
        <Text style={styles.label}>Archive ↓</Text>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons name="archive-remove" size={28} color="#000" />
        <Text style={styles.label}>Archive Remove</Text>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons name="archive-edit" size={28} color="#000" />
        <Text style={styles.label}>Archive Edit</Text>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons name="archive-lock-open" size={28} color="#000" />
        <Text style={styles.label}>Unlocked Archive</Text>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons name="archive-minus" size={28} color="#000" />
        <Text style={styles.label}>Archive -</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});
