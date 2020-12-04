
import React from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Header,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
} from "native-base";

const contactsData = [
  {
    name: "Ivysaur",
    title: "#002",
    company: "Grass | Poison",
    pic: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
  },
  {
    name: "Butterfree",
    title: "#012",
    company: "Flying",
    pic: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
  },
  {
    name: "Squirtle",
    title: "#007",
    company: "Water",
    pic: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
  },
  {
    name: "Charmeleon",
    title: "#005",
    company: "Fire",
    pic: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
  },
];

export default function ContactScreen() {
  return (
    <Container>
      <Content>
        <List>
          {contactsData.map((item) => {
            return (
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: item.pic }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>
                    {item.title}, {item.company}
                  </Text>
                </Body>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );
}