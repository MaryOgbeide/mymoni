import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Theme.sizes[4],
    paddingVertical: Theme.sizes[3],
    backgroundColor: Theme.colors.greenAltYellow,
  },
  flashIcon: {
    marginBottom: Theme.sizes[3],
  },
  flashTitle: {
    fontSize: Theme.fonts.fontSizePoint.h2,
    marginBottom: Theme.sizes[2],
    color: "white",
    fontFamily: "Pacifico_400Regular",
  },
  flashArticle: {
    fontSize: Theme.fonts.fontSizePoint.h5,
    fontFamily: "Pacifico_400Regular",
    color: "white",
  },
});