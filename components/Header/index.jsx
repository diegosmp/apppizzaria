import { View, Text } from 'react-native'
import { styles } from './style'

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>PIZZA DA CASA 🍕</Text>
            <Text style={styles.subTitle}>Cardápio</Text>
        </View>
    )
}
export default Header