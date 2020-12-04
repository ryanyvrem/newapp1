import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
  Accordion,
} from "native-base";

const dataArray = [
    {
      title: "What is this?",
      content: "It's a card game!",
    },
    {
      title: "Who is this by?",
      content: "People who brought you Pokemon",
    },
    {
      title: "Why is this?",
      content: "Why not?",
    },
  ];
  
  function HomeMainScreen() {
    return (
      <View style={{ padding: 10 }}>
        <Text style={styles.titleText}>Pokedex</Text>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Text style={styles.cardTitle}>Coming Soon!</Text>
              <Text>
              Discover new brilliance and maximum power in the Pokémon TCG: Sword & Shield—Vivid Voltage expansion. Even more Pokémon V are lining up to battle, including the newly discovered Mythical Pokémon Zarude!
              </Text>
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://assets.pokemon.com/assets/cms2/img/trading-card-game/series/swsh_series/swsh04/swsh04_logo_169_en.png",
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        </Card>
  
        <Accordion style={styles.accordion} dataArray={dataArray} expanded={0} />
      </View>
    );
  }
  
  const Stack = createStackNavigator();
  
  export default function HomeScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeMainScreen} />
      </Stack.Navigator>
    );
  }
  
  const styles = StyleSheet.create({
    titleText: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
  });