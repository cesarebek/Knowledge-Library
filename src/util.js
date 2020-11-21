//Images
import noImage from './img/noImage.png';
//ImageAvailability
export const imageAvailability = (image) => {
  if (image === undefined) {
    return noImage;
  } else {
    return image.thumbnail;
  }
};
