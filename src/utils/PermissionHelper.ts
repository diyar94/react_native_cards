import {Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

type CameraPermission = typeof PERMISSIONS.IOS.CAMERA &
  typeof PERMISSIONS.ANDROID.CAMERA;
const CAMERA_PERMISSIONS = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
});

export const requestCameraPermission = async (): Promise<boolean> => {
  try {
    const status = await check(CAMERA_PERMISSIONS as CameraPermission);

    if (status === RESULTS.GRANTED) {
      return true; // Permission already granted
    }

    const result = await request(CAMERA_PERMISSIONS as CameraPermission);
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.error('Error requesting camera permission:', error);
    return false;
  }
};
