export function getShortImagePath(imagePath) {
  let imageNameArray = imagePath.split("/");
  let imageFileName = imageNameArray[imageNameArray.length - 1];
  return imageFileName;
}
