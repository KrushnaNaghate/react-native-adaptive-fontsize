# React Native Responsive Font Size

`react-native-responsivefontsize` is a utility for React Native that helps you create responsive font sizes that adapt to the user's system settings, particularly in environments like Android 14, where users have more control over font scaling. This package is designed to prevent common issues that arise from excessive font scaling, ensuring your app's UI remains consistent and user-friendly.

## Problem Statement

With the introduction of enhanced font scaling options in Android 14, users can significantly alter the font size across their devices. While this improves accessibility, it also poses challenges for app developers:

- **UI Breakage**: Excessive font scaling can lead to text truncation, overlapping UI elements, and other layout issues, negatively affecting the user experience.
- **Inconsistent Appearance**: Different devices may render text sizes inconsistently, leading to a fragmented user experience.
- **Accessibility vs. Usability**: Balancing accessibility features like font scaling with maintaining a clean and usable interface can be challenging.

**`react-native-responsivefontsize` solves these problems by:**

- **Capping Font Sizes**: Allows you to set minimum and maximum font sizes, ensuring text remains readable without breaking the UI.
- **Adaptive Scaling**: Automatically adjusts font sizes based on the device’s font scale settings while respecting your defined constraints.
- **Consistency Across Devices**: Ensures that your app maintains a consistent look and feel, regardless of the user's font size preferences.

## Installation

You can install the package using npm:

```bash
npm install react-native-responsivefontsize

Usage
Here are two examples demonstrating how to use react-native-responsivefontsize in your React Native project:

Example 1: Basic Usage Without Min/Max Constraints
This example shows how to use the responsiveFont function without specifying maxFontSize and minFontSize. The font size will scale freely based on the device's settings.

import { responsiveFont } from 'react-native-responsivefontsize';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Responsive Font Example</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveFont(16), // Base size 16, scales freely
  },
});

export default App;


Example 2: Usage with Min/Max Constraints
This example shows how to use the responsiveFont function with specified maxFontSize and minFontSize parameters. This ensures the font size remains within the defined range:


import { responsiveFont } from 'react-native-responsivefontsize';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Responsive Font Example</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveFont(16, 24, 12), // Base size 16, max size 24, min size 12
  },
});

export default App;


Parameters
fontSize: number: The base font size that you want to scale.
maxFontSize?: number: Optional. The maximum allowed font size after scaling. If not provided, the font size can scale freely upwards.
minFontSize?: number: Optional. The minimum allowed font size after scaling. If not provided, the font size can scale freely downwards.
Why Use react-native-responsivefontsize?
With react-native-responsivefontsize, you can:

Maintain UI Integrity: Prevent your app’s UI from breaking due to large or small text sizes.
Enhance Accessibility: Respect user preferences for font size adjustments while ensuring your app remains usable and visually appealing.
Simplify Development: Easily manage responsive typography without manually calculating sizes or worrying about device-specific issues.
This package is particularly useful for developers targeting Android 14 and newer, where system-wide font scaling is more granular and can have a significant impact on app layouts.

Contributing
Contributions are welcome! If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
```
