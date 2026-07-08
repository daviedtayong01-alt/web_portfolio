import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

type InfoCardProps = {
  title: string;
  children: ReactNode;
};

const InfoCard = ({ title, children }: InfoCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,

    borderWidth: 1,
    borderColor: Colors.border,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text,

    marginBottom: 12,
  },

  content: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
});
