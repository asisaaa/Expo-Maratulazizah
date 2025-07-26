import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "barlow-extrabold": require("../assets/fonts/Barlow-ExtraBold.ttf"),
    "bitcount": require("../assets/fonts/Bitcount-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "bitcount-prop": require("../assets/fonts/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "lemon": require("../assets/fonts/Lemon-Regular.ttf"),
    "libertinus": require("../assets/fonts/LibertinusMono-Regular.ttf"),
    "oswald": require("../assets/fonts/Oswald-VariableFont_wght.ttf"),
    "roboto": require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
    "roboto-condensed": require("../assets/fonts/RobotoCondensed-Italic-VariableFont_wght.ttf"),
    "special-gothic": require("../assets/fonts/SpecialGothicExpandedOne-Regular.ttf"),
    "ubuntu": require("../assets/fonts/Ubuntu-Regular.ttf"),
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
