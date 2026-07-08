import { StyleSheet } from "react-native";
import Colors from "../constants/colors";

export const GlobalStyles = StyleSheet.create({
  //----------------------------------
  // Screen
  //----------------------------------
  screen: {
    flex: 1, // whole screen filled
    backgroundColor: Colors.background,
  },

  //----------------------------------
  // Scroll Container
  //----------------------------------
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  //----------------------------------
  // Cards
  //----------------------------------
  card: {
    backgroundColor: Colors.card,
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: Colors.border,
  },

  //----------------------------------
  // Titles
  //----------------------------------
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 14,
  },

  //----------------------------------
  // Text
  //----------------------------------
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textSecondary,
  },

  caption: {
    fontSize: 14,
    color: Colors.textMuted,
  },

  //----------------------------------
  // Divider
  //----------------------------------
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: 18,
  },
});

export default GlobalStyles;
