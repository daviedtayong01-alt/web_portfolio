import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

type SkillBadgeProps = {
  skill: string;
};

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{skill}</Text>
    </View>
  );
};

export default SkillBadge;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: Colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 8,

    borderRadius: 20,

    borderWidth: 1,
    borderColor: Colors.border,

    marginRight: 10,
    marginBottom: 10,
  },

  text: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "600",
  },
});
