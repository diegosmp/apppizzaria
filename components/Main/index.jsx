import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from './style'
import { menuPizzas } from '../../api/pizzasMenu'

const Main = () => {
    return(
        <ScrollView style={styles.main}>
        <View style={styles.containerMain}>
          {
            menuPizzas.map(item => {
              return(
                <View style={styles.pizzaContainer} key={item.id}>
                  <Image source={{uri: item.img}} style={styles.imgPizzas} alt={item.name}/>
                  <Text style={styles.namePizza}>{item.name}</Text>
                  <Text style={styles.pricePizza}>{item.price.toFixed(2)}</Text>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    )
}
export default Main