import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scaleSize = (size: number) => (width / guidelineBaseWidth) * size;
export const scaleHeight = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const scaleFont = (size: number) =>
  PixelRatio.getFontScale() <= 1
    ? scaleSize(size)
    : scaleSize(size / PixelRatio.getFontScale());
