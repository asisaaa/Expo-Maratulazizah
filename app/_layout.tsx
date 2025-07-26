import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "bigshoulders": require("../assets/fonts/BigShouldersInline-VariableFont_opsz,wght.ttf"),
    "darkergrotesque": require("../assets/fonts/DarkerGrotesque-VariableFont_wght.ttf"),
    "eduhand": require("../assets/fonts/EduAUVICWANTHand-VariableFont_wght.ttf"),
    "inriasans": require("../assets/fonts/InriaSans-BoldItalic.ttf"),
    "playwrite": require("../assets/fonts/PlaywriteNGModernGuides-Regular.ttf"),
    "simonetta": require("../assets/fonts/Simonetta-Regular.ttf"),
    "sourgummy": require("../assets/fonts/SourGummy-Italic-VariableFont_wdth,wght.ttf"),
    "sunshiney": require("../assets/fonts/Sunshiney-Regular.ttf"),
    "girlnextdoor": require("../assets/fonts/TheGirlNextDoor-Regular.ttf"),
    "tiltprism": require("../assets/fonts/TiltPrism-Regular-VariableFont_XROT,YROT.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}
