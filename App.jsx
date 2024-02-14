import { View } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { styles } from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}
