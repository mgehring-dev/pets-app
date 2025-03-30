import React from "react";
import { View } from "react-native";
import { List, Badge } from "react-native-paper";

interface Props {
  icon: string;
  title: string;
  description?: string;
  onPress?: () => void;
  badge?: boolean;
}

export const SettingsItem = ({
  icon,
  title,
  description,
  onPress,
  badge,
}: Props) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={() => <List.Icon icon={icon} />}
      right={() =>
        badge ? (
          <Badge style={{ alignSelf: "center", marginRight: 8 }}>Novo</Badge>
        ) : (
          <List.Icon icon="chevron-right" />
        )
      }
      onPress={onPress}
    />
  );
};
