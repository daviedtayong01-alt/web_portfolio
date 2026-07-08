import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "../constants/colors";
import { profile } from "../constants/data";

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      {/* Banner */}
      <LinearGradient
        colors={["#5865F2", "#4752C4", "#3B82F6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.banner}
      />

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />

        <View style={styles.onlineIndicator} />
      </View>

      {/* Profile Information */}
      <View style={styles.info}>
        <Text style={styles.name}>{profile.name}</Text>

        <Text style={styles.role}>{profile.role}</Text>

        <Text style={styles.tagline}>{profile.tagline}</Text>

        <Text style={styles.bio}>{profile.bio}</Text>
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{profile.organizations.length}</Text>

          <Text style={styles.statLabel}>Organizations</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>{profile.skills.length}</Text>

          <Text style={styles.statLabel}>Skills</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>{profile.contacts.length}</Text>

          <Text style={styles.statLabel}>Contacts</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 24,
    overflow: "hidden",

    marginBottom: 22,

    borderWidth: 1,
    borderColor: Colors.border,
  },

  banner: {
    height: 190,
  },

  avatarContainer: {
    alignSelf: "center",
    marginTop: -70,
  },

  avatar: {
    width: 140,
    height: 140,

    borderRadius: 70,

    borderWidth: 5,
    borderColor: Colors.card,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 12,

    elevation: 10,
  },

  onlineIndicator: {
    position: "absolute",

    width: 24,
    height: 24,

    borderRadius: 12,

    backgroundColor: "#43B581",

    borderWidth: 4,
    borderColor: Colors.card,

    bottom: 8,
    right: 8,
  },

  info: {
    alignItems: "center",

    paddingHorizontal: 24,

    marginTop: 18,
  },

  name: {
    fontSize: 28,
    fontWeight: "700",

    color: Colors.text,
  },

  role: {
    marginTop: 6,

    fontSize: 18,

    fontWeight: "600",

    color: Colors.primary,
  },

  tagline: {
    marginTop: 12,

    textAlign: "center",

    fontSize: 16,

    color: Colors.textSecondary,
  },

  bio: {
    marginTop: 10,

    textAlign: "center",

    fontSize: 14,

    lineHeight: 22,

    color: Colors.textMuted,
  },

  statsContainer: {
    flexDirection: "row",

    justifyContent: "space-around",

    marginTop: 24,

    paddingVertical: 20,

    borderTopWidth: 1,

    borderColor: Colors.border,
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 22,

    fontWeight: "700",

    color: Colors.text,
  },

  statLabel: {
    marginTop: 5,

    fontSize: 13,

    color: Colors.textSecondary,
  },
});
