import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profil Mahasiswa</Text>
      </View>

      
      <View style={styles.photoSection}>
        <View style={styles.photoContainer}>
          <Image
            source={require('../../assets/images/ija.jpg')}
            style={styles.profilePhoto}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.photoCaption}>Foto Profil</Text>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data Pribadi</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nama:</Text>
          <Text style={styles.value}>MAR'ATUL AZIZAH</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>NIM:</Text>
          <Text style={styles.value}>105841105222</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Kelas:</Text>
          <Text style={styles.value}>B</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Jurusan:</Text>
          <Text style={styles.value}>Informatika</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Fakultas:</Text>
          <Text style={styles.value}>Teknik</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Universitas:</Text>
          <Text style={styles.value}>Universitas Muhammadiyah Makassar</Text>
        </View>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informasi Akademik</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Program Studi:</Text>
          <Text style={styles.value}>S1 Informatika</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Semester:</Text>
          <Text style={styles.value}>6 (Enam)</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>Mahasiswa Aktif</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Mata Kuliah:</Text>
          <Text style={styles.value}>Aplikasi Komputasi Bergerak</Text>
        </View>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informasi Kontak</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email Institusi:</Text>
          <Text style={styles.emailValue}>105841105222@unismuh.ac.id</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Asal Daerah:</Text>
          <Text style={styles.value}>Makassar, Sulawesi Selatan</Text>
        </View>
      </View>

      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Belajar dengan tekun, beramal dengan ikhlas
        </Text>
        <Text style={styles.footerSubtext}>
          - Mahasiswa Unismuh Makassar -
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1670baff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'fontBas',
  },
  photoSection: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#1670baff',
    marginBottom: 10,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
  },
  photoCaption: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'fontBas',
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1670baff',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'fontBas',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    width: 120,
    fontFamily: 'fontBas',
  },
  value: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    fontFamily: 'fontBas',
  },
  emailValue: {
    fontSize: 14,
    color: '#2196F3',
    flex: 1,
    fontFamily: 'fontBas',
  },
  footer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  footerText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1670baff',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'fontBas',
  },
  footerSubtext: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    fontFamily: 'fontBas',
  },
});