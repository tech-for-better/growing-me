export function getShortImagePath(imagePath) {
  if (imagePath === null) {
    return null;
  }
  let imageNameArray = imagePath.split("/");
  let imageFileName = imageNameArray[imageNameArray.length - 1];
  return imageFileName;
}

export function getShortImagePathFromArray(array) {
  let imagePath = array[0]; // won't work if there is more than one item in array (growing or whoAround)
  return getShortImagePath(imagePath);
}
