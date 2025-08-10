import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
        <Text style={styles.subtitle}>UNISMUH MAKASSAR</Text>
      </View>

      
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/unismuh1.png')}
            style={styles.image}
            resizeMode="cover"
            onLoad={() => console.log('✅ Unismuh1.png berhasil dimuat!')}
            onError={(error) => {
              console.log('❌ Gagal memuat unismuh1.png:', error);
            }}
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.imageLabel}>🏛 Kampus Unismuh Makassar</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Unismuh Makassar adalah perguruan tinggi swasta yang berkomitmen dalam menghasilkan lulusan yang berkualitas, berakhlak mulia, dan berdaya saing tinggi. Dengan visi menjadi universitas unggul yang berbasis nilai-nilai Islam, Unismuh Makassar terus mengembangkan program pendidikan yang inovatif dan relevan dengan kebutuhan zaman.
          </Text>
        </View>
      </View>

      
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/unismuh2.png')}
            style={styles.image}
            resizeMode="cover"
            onLoad={() => console.log('✅ Unismuh2.png berhasil dimuat!')}
            onError={(error) => {
              console.log('❌ Gagal memuat unismuh2.png:', error);
            }}
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.imageLabel}>🏆 Akreditasi Unggul Unismuh</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            UNISMUH MAKASSAR MERAIH AKREDITASI UNGGUL! Pencapaian gemilang ini merupakan bukti komitmen universitas dalam memberikan pendidikan berkualitas tinggi. Dengan akreditasi unggul, Unismuh Makassar semakin mantap dalam melangkah maju sebagai institusi pendidikan yang terdepan di Indonesia Timur.
          </Text>
        </View>
      </View>

      
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Keunggulan Unismuh Makassar:</Text>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Akreditasi Unggul</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Berbasis Nilai-nilai Islam</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Fasilitas Modern dan Lengkap</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Dosen Berkualitas dan Berpengalaman</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Program Studi Terakreditasi</Text>
        </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'fontBas',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Font2-Cursive-Bold',
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  
  imageContainer: {
    width: '100%',
    aspectRatio: 4 / 2, 
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '50%',
    height: '90%',
    backgroundColor: '#f8f9fa',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1670baff',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  imageLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'fontBas',
    textAlign: 'center',
  },
  textContainer: {
    padding: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    textAlign: 'justify',
    fontFamily: 'fontBas',
  },
  infoSection: {
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
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1670baff',
    marginBottom: 15,
    fontFamily: 'fontBas',
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#1670baff',
    fontWeight: 'bold',
    marginRight: 5,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    fontFamily: 'fontBas',
  },
});
