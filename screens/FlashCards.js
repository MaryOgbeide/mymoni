import { View, Text, Dimensions } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { SafeArea } from "../utilities/AreaView";
import { styles } from "../styles/flashcards";
import { Theme } from "../themes/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import Carousel from "react-native-reanimated-carousel";

export function FlashCards() {
  const [appIsReady, setAppIsReady] = useState(false);
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Pacifico_400Regular });
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
  //delete this later
  const tips = [
    {
      id: 1,
      title: "How to Set Goals",
      article: "Always consider your top priorities",
    },
    {
      id: 2,
      title: "Understanding Investing",
      article:
        "Investing is an effective way to put your money to work and potentially build wealth. Smart investing may allow your money to outpace inflation and increase in value. The greater growth potential of investing is primarily due to the power of compounding and the risk-return tradeoff",
    },
  ];

  return (
    <SafeArea>
      
        <Carousel
        
          loop
          width={width}
          height={height}
          autoPlay={true}
          data={tips}
          scrollAnimationDuration={3000}
          
          renderItem={({ index }) => (
            <View style={styles.container}>
              <FontAwesomeIcon
                icon={faBolt}
                size={Theme.fonts.fontSizePoint.h3}
                color={Theme.colors.yellowAltGreen}
                style={styles.flashIcon}
              />

              <Text style={styles.flashTitle}>How to save</Text>
              <Text style={styles.flashArticle}>
                Investing is an effective way to put your money to work and
                potentially build wealth. Smart investing may allow your money
                to outpace inflation and increase in value. The greater growth
                potential of investing is primarily due to the power of
                compounding and the risk-return tradeoff.
              </Text>
            </View>
          )}
        />
      
    </SafeArea>
  );
}
