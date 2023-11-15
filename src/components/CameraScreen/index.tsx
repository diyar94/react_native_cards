import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {requestCameraPermission} from '@/utils/PermissionHelper';

const CameraScreen: React.FC = () => {
  const [hasCameraPermission, setCameraPermission] = useState<boolean | null>(
    null,
  );
  const cameraRef = useRef<RNCamera | null>(null);

  useEffect(() => {
    const requestPermission = async () => {
      const granted = await requestCameraPermission();
      setCameraPermission(granted);
    };

    requestPermission();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current && hasCameraPermission) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('Photo data:', data);
    }
  };

  if (hasCameraPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  } else if (hasCameraPermission === false) {
    return <Text>No camera permission granted.</Text>;
  }

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={ref => {
          cameraRef.current = ref;
        }}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={takePicture} style={{padding: 16}}>
          <Text>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
