import _ from "lodash";
import { PixelRatio } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";

export const responsiveFont = (
  fontSize: number,
  maxFontSize?: number,
  minFontSize?: number
): number => {
  try {
    const fontScale = PixelRatio.getFontScale();

    let adjustedFontSize: number;
    if (fontScale <= 1) {
      adjustedFontSize = fontSize * (1 + (2 - fontScale) * (1 - fontScale));
    } else {
      const adjustedSize = fontSize / fontScale;
      adjustedFontSize = _.clamp(fontSize * fontScale, 0, adjustedSize);
    }

    if (maxFontSize !== undefined) {
      adjustedFontSize = Math.min(adjustedFontSize, maxFontSize);
    }

    if (minFontSize !== undefined) {
      adjustedFontSize = Math.max(adjustedFontSize, minFontSize);
    }

    return moderateVerticalScale(adjustedFontSize);
  } catch (error) {
    console.error("Error in responsiveFont:", error);
    return moderateVerticalScale(fontSize);
  }
};
