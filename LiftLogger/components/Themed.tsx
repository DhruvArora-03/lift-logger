/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  ScrollView as DefaultScrollView,
} from "react-native";

import Colors from "@/constants/Colors";

type KeyProps = {
  colorKey?: keyof typeof Colors.light & keyof typeof Colors.dark;
};

export type TextProps = DefaultText["props"];
export type ViewProps = KeyProps & DefaultView["props"];
export type ScrollViewProps = KeyProps & DefaultScrollView["props"];

export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";

  return Colors[theme][colorName];
}

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const color = useThemeColor("text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, colorKey, ...otherProps } = props;
  const backgroundColor = useThemeColor(colorKey ?? "background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, colorKey, ...otherProps } = props;
  const backgroundColor = useThemeColor(colorKey ?? "background");

  return (
    <DefaultScrollView
      style={[{ backgroundColor }, style]}
      contentContainerStyle={{ flexGrow: 1 }}
      {...otherProps}
    />
  );
}
