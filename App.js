import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.scrollView.scrollTo({ y: -30 });
    }, 1);
  }

  render() {
    return (
      <ScrollView
        ref={(scrollView) => {
          this.scrollView = scrollView;
        }}
        style={styles.container}
        pagingEnabled
        decelerationRate="fast"
        snapToInterval={220}
        snapToAlignment="center"
        contentContainerStyle={styles.contentContainer}
      >
        {[...Array(10)].map((_, index) => (
          <View key={index} style={styles.card}>
            <postview />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const postview = () => (
  <View>
    <Image
      source={{ uri: "https://placekitten.com/200/300" }}
      style={styles.image}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 40,
  },
  card: {
    width: width - 30,
    marginVertical: 10,
    height: innerHeight,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  image: {
    borderRadius: 18,
    width: innerWidth,
    height: innerHeight,
    marginTop: 10,
  },
});
