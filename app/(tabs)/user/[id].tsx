import { useLocalSearchParams } from 'expo-router';
import { useMemo, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const users = [
  { id: '1', name: 'Maratul azizah', nim: '105841105222', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105222_.jpg?1754534429' },
  { id: '2', name: 'Fikrah Lejahtegis', nim: '105841105322', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105322_.jpg?1754534429' },
  { id: '3', name: 'Alya Anandha', nim: '105841105422', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105422_.jpg?1754534429' },
  { id: '4', name: 'M Fikri Haikalayatullah', nim: '105841105522', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105522_.jpg?1754534429' },
  { id: '5', name: 'Muh Dirham Rahim', nim: '105841105622', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105622_.jpg?1754534429' },
  { id: '6', name: 'Zaskya aulia ashar', nim: '105841105722', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105722_.jpg?1754534429' },
  { id: '7', name: 'Muh Ilham akbar', nim: '105841105822', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1754534429' },
  { id: '8', name: 'Zelvia', nim: '105841105922', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105922_.jpg?1754534429' },
  { id: '9', name: 'A Diftha Rameyza kailah', nim: '105841106022', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841106022_.jpg?1754534429' },
  { id: '10', name: 'Arsifah Ainun aulia', nim: '105841106122', 
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841106122_.jpg?1754534429' },
];

export default function UserPage() {
  const { id } = useLocalSearchParams();
  const user = useMemo(() => users.find((u) => u.id === id), [id]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 6, useNativeDriver: true }),
    ]).start();
  }, []);

  if (!user) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>User tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={['#4facfe', '#00f2fe']} style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
        <BlurView intensity={60} tint="light" style={styles.card}>
          <LinearGradient colors={['#4facfe', '#00f2fe']} style={styles.imageBorder}>
            <Image source={{ uri: user.photo }} style={styles.image} />
          </LinearGradient>

          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.nim}>🎓 NIM: {user.nim}</Text>
        </BlurView>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 6,
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(255,255,255,0.6)',
    overflow: 'hidden',
  },
  imageBorder: {
    padding: 4,
    borderRadius: 100,
    marginBottom: 20,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 6,
  },
  nim: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff3f3',
  },
  errorText: {
    color: '#cc0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
