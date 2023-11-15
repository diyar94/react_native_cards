import React from 'react';
import Svg, {LinearGradient, Path, Stop} from 'react-native-svg';

const BackgroundImage = () => {
  return (
    <Svg height="1455" width="1499" viewBox="0 0 1499 1455">
      <LinearGradient id="grad1" x1="0" x2="1" y1="0" y2="0">
        <Stop offset="0" stopColor="#ff421a" />
        <Stop offset="1" stopColor="#4d87ff" />
      </LinearGradient>
      <Path
        d="M0 0L 0 1402.6710033974057Q 149.9 1323.7485530144393 299.8 1288.5744179201843T 599.6 895.1138787712454T 899.4 977.4289544322696T 1199.2 755.7082767221575T 1499 641.6562226846196L 1499 0 Z"
        fill="url(#grad1)"
        opacity="0.4"
      />
      {/* ... other paths ... */}
    </Svg>
  );
};

export default BackgroundImage;
