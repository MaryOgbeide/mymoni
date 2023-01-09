import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../utilities/AreaView";
import * as Font from "expo-font";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Philosopher_700Bold } from "@expo-google-fonts/philosopher";
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Theme } from "../themes/theme";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/favourites";
import { faHeart, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { favList } from "../components/favlist";

export function Favourites({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Lobster_400Regular, Philosopher_700Bold });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.brandText}>My Favourites</Text>
        <FontAwesomeIcon
          icon={faHeart}
          color={"red"}
          size={30}></FontAwesomeIcon>
      </View>

      <View style={styles.container}>
        <FlatList
          data={favList}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.tipBlock}>
                  <View style={styles.tipImage}>
                    <Image
                      source={require("../assets/piggy-bank.jpg")}
                      style={styles.image}></Image>
                  </View>
                  <View style={styles.favs}>
                    <TouchableOpacity style={styles.remove}>
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        color={"#DC3535"}
                        size={20}></FontAwesomeIcon>
                    </TouchableOpacity>
                    <View style={styles.tipbox}>
                      <Text style={styles.favTip}>{item.tips}</Text>
                    </View>
                    <View style={styles.date}>
                      <Text style={styles.tipDates}>{item.date}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.tipBlock2}>
                  <View style={styles.tipImage}>
                    <Image
                      source={require("../assets/shopping-basket.jpg")}
                      style={styles.image}></Image>
                  </View>
                  <View style={styles.favs}>
                    <TouchableOpacity style={styles.remove}>
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        color={"#DC3535"}
                        size={20}></FontAwesomeIcon>
                    </TouchableOpacity>
                    <View style={styles.tipbox}>
                      <Text style={styles.favTip2}>{item.tips}</Text>
                    </View>
                    <View style={styles.date}>
                      <Text style={styles.tipDates}>{item.date}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.tipBlock3}>
                  <View style={styles.tipImage}>
                    <Image
                      source={require("../assets/shopping-bags.jpg")}
                      style={styles.image}></Image>
                  </View>
                  <View style={styles.favs}>
                    <TouchableOpacity style={styles.remove}>
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        color={"#DC3535"}
                        size={20}></FontAwesomeIcon>
                    </TouchableOpacity>
                    <View style={styles.tipbox}>
                      <Text style={styles.favTip3}>{item.tips}</Text>
                    </View>
                    <View style={styles.date}>
                      <Text style={styles.tipDates}>{item.date}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.tipBlock4}>
                  <View style={styles.tipImage}>
                    <Image
                      source={require("../assets/blue-piggy.jpg")}
                      style={styles.image}></Image>
                  </View>
                  <View style={styles.favs}>
                    <TouchableOpacity style={styles.remove}>
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        color={"#DC3535"}
                        size={20}></FontAwesomeIcon>
                    </TouchableOpacity>
                    <View style={styles.tipbox}>
                      <Text style={styles.favTip4}>{item.tips}</Text>
                    </View>
                    <View style={styles.date}>
                      <Text style={styles.tipDates}>{item.date}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
