import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const users = [
  { id: '1', name: 'Maratul azizah' },
  { id: '2', name: 'Fikrah Lejahtegis' },
  { id: '3', name: 'Alya Anandha' },
  { id: '4', name: 'M Fikri Haikalayatullah' },
  { id: '5', name: 'Muh Dirham Rahim' },
  { id: '6', name: 'Zaskya aulia ashar' },
  { id: '7', name: 'Muh Ilham akbar' },
  { id: '8', name: 'Zelvia' },
  { id: '9', name: 'A Diftha Rameyza kailah' },
  { id: '10', name: 'Arsifah Ainun aulia' },
];

export default function TabHome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Judul dengan Gradien */}
      <LinearGradient colors={['#4facfe', '#00f2fe']} style={styles.header}>
        <Text style={styles.title}>Daftar Mahasiswa Kelas B</Text>
      </LinearGradient>

      {users.map((user) => (
        <Link
          key={user.id}
          href={{
            pathname: '/user/[id]',
            params: { id: user.id },
          }}
          asChild
        >
          <Pressable style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}>
            <Ionicons name="person-circle" size={40} color="#4facfe" style={styles.icon} />
            <Text style={styles.name}>{user.name}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#eef5ff',
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  itemPressed: {
    backgroundColor: '#f0f8ff',
    transform: [{ scale: 0.98 }],
  },
  icon: {
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});
