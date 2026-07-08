import React from "react";
import { ScrollView, Text, View, Pressable, Linking, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import ProfileCard from "../components/ProfileCard";
import InfoCard from "../components/InfoCard";
import SkillBadge from "../components/SkillBadge";

import { profile } from "../constants/data";
import { Colors } from "../constants/colors";
import GlobalStyles from "../styles/global";

export default function Home() {
  return (
    <ScrollView
      style={GlobalStyles.screen}
      contentContainerStyle={GlobalStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <ProfileCard />

      {/* About */}
      <InfoCard title="About me">
        <Text style={styles.content}>{profile.about}</Text>
      </InfoCard>

      {/* Skills */}
      <InfoCard title="Skills">
        <View style={styles.skillsContainer}>
          {profile.skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </View>
      </InfoCard>

      {/* Education */}
      <InfoCard title="Education">
        <Text style={styles.content}>{profile.education.school}</Text>

        <Text style={styles.subContent}>{profile.education.course}</Text>
      </InfoCard>

      {/* Organizations */}
      <InfoCard title="Organizations">
        {profile.organizations.map((org) => (
          <View key={org.organization} style={styles.organizationCard}>
            <Text style={styles.organizationRole}>{org.role}</Text>

            <Text style={styles.organizationName}>{org.organization}</Text>
          </View>
        ))}
      </InfoCard>

      {/* Achievements */}
      <InfoCard title="Achievements">
        <Text style={styles.content}>{profile.achievements}</Text>
      </InfoCard>

      {/* Contact */}
      <InfoCard title="Contact">
        {profile.contacts.map((contact) => (
          <Pressable
            key={contact.title}
            style={styles.contactCard}
            onPress={() => Linking.openURL(contact.url)}
          >
            <Ionicons name={contact.icon as any} size={24} color={Colors.primary} />

            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>{contact.title}</Text>

              <Text style={styles.contactValue}>{contact.value}</Text>
            </View>
          </Pressable>
        ))}
      </InfoCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 15,
    lineHeight: 24,
    color: Colors.textSecondary,
  },

  subContent: {
    marginTop: 6,
    fontSize: 14,
    color: Colors.textMuted,
  },

  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  organizationCard: {
    marginBottom: 12,
  },

  organizationRole: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },

  organizationName: {
    marginTop: 3,
    color: Colors.textSecondary,
  },

  contactCard: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: Colors.surface,

    padding: 16,

    borderRadius: 16,

    marginBottom: 12,
  },

  contactInfo: {
    marginLeft: 16,
  },

  contactTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "600",
  },

  contactValue: {
    marginTop: 3,
    color: Colors.textSecondary,
  },
});
