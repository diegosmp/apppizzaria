import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const menuPizzas = [
  {
    id: 1,
    name: 'Calabresa',
    price: 29.99,
    img: 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg'
  },
  {
    id: 2,
    name: 'Frango',
    price: 29.99,
    img: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-frango-11.jpg'
  },
  {
    id: 3,
    name: 'Portuguesa',
    price: 29.99,
    img: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/103eca6a504379a0df6f55155b8d607d.webp?itok=0iu1IWt6'
  },
  {
    id: 4,
    name: '4 Queijos',
    price: 39.99,
    img: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/d036cd01122da62bf581784f52d99b3a.jpg'
  },
  {
    id: 5,
    name: 'Chocolate',
    price: 39.99,
    img: 'https://receitasdepesos.com.br/wp-content/uploads/2023/09/pizza-de-chocolate--scaled.jpg'
  },
  {
    id: 6,
    name: 'Chocolate branco',
    price: 39.99,
    img: 'https://cdn0.tudoreceitas.com/pt/posts/1/7/6/pizza_doce_de_chocolate_7671_orig.jpg'
  },
  {
    id: 7,
    name: 'Morango',
    price: 39.99,
    img: 'https://receitinhas.com.br/wp-content/uploads/2018/03/Depositphotos_28956963_l-2015-1200x798.jpg'
  },
  {
    id: 8,
    name: 'Mista',
    price: 29.99,
    img: 'https://img77.uenicdn.com/image/upload/v1587225738/business/7458c216-75b0-44de-a561-c740ae903f36.jpg'
  },
  {
    id: 9,
    name: 'Banana',
    price: 39.99,
    img: 'https://t2.uc.ltmcdn.com/pt/posts/4/8/1/como_fazer_pizza_de_banana_27184_orig.jpg'
  },
  {
    id: 10,
    name: 'Strogonoff',
    price: 39.99,
    img: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/pizza-de-estrogonofe-43804.jpg'
  },
  {
    id: 11,
    name: 'Camarão',
    price: 44.99,
    img: 'https://www.sabornamesa.com.br/media/k2/items/cache/08a4cf1e44f783c853b207a033a173b9_XL.jpg'
  },
  {
    id: 12,
    name: 'Carne do sol',
    price: 44.99,
    img: 'https://receitasdepizza.com.br/wp-content/uploads/2023/02/Mito-Pizza-Carne-de-sol-com-Nata.webp'
  },
  {
    id: 13,
    name: "MM's",
    price: 39.99,
    img: 'https://papadoms.com.br/wp-content/uploads/2023/03/8-2.png'
  },
  {
    id: 14,
    name: "Nutella",
    price: 44.99,
    img: 'https://pizzariadobairro.com.br/wp-content/uploads/2021/03/Nutella-com-Farofa-de-Brownie-1.jpg',
  },
  {
    id: 15,
    name: "Coca-Cola Latinha",
    price: 5.99,
    qntd: 60,
    img: 'https://supsaojoao.com.br/272-medium_default/refrigerante-coca-cola-lata-350ml.jpg',
  },
  {
    id: 16,
    name: "Fanta Laranja Latinha",
    price: 5.99,
    qntd: 60,
    img: 'https://brutuschicken.com.br/wp-content/uploads/2023/10/refrigerante-fanta-laranja-lata-350ml-6eb.jpg',
  },
  {
    id: 17,
    name: "Fanta Uva Latinha",
    price: 5.99,
    qntd: 60,
    img: 'https://andinacocacola.vtexassets.com/arquivos/ids/157587/Fanta-Uva-350ml.png?v=638344471799070000',
  },
  {
    id: 18,
    name: "Sprite Latinha",
    price: 5.99,
    qntd: 60,
    img: 'https://www.drogariaminasbrasil.com.br/media/product/61d/refrigerante-sprite-lata-350ml-123.jpg',
  },
  {
    id: 19,
    name: "Coca-Cola 2L",
    price: 11.99,
    qntd: 20,
    img: 'https://static.paodeacucar.com/img/uploads/1/120/24982120.png',
  },
  {
    id: 20,
    name: "Cajuina 2L",
    price: 11.99,
    qntd: 20,
    img: 'https://atacadaobr.vtexassets.com/arquivos/ids/229188/g.jpg?v=638353717109000000',
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PIZZA DA CASA 🍕</Text>
        <Text style={styles.subTitle}>Cardápio</Text>
      </View>
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
      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito por Diego Sampaio</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'space-between'
  },
  header: {
    height: 120,
    backgroundColor: '#b61e0a',
    paddingVertical:40,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#ffe77c',
    textAlign: "center",
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  main: {
    
  },
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
  footer: {
    height: 80,
    backgroundColor: '#b61e0a',
    padding: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  footerText: {
    color:'#fff5c8'
  }
});
