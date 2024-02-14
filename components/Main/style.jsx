import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 32,
      },
      pizzaContainer: {
        height: 260,
        width: 200,
        padding: 10,
        backgroundColor: '#ff1919',
        borderRadius: 24,
      },
      imgPizzas: {
        width: 180,
        height: 180,
        borderRadius: 20,
      },
      namePizza: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 3,
        color: '#ffe77c'
      },
      pricePizza: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff'
      },
})