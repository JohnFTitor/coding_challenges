/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const recursiveSolution = (image, sr, sc, newColor, number) => {  
  if (image[sr] === undefined || image[sr][sc] === undefined) {
    return;
  }
  
  if (image[sr][sc] === newColor) {
    return;
  }
  
  if (image[sr][sc] === number) {
    image[sr][sc] = newColor;
    recursiveSolution(image, sr, sc-1, newColor, number); //left
    recursiveSolution(image, sr-1, sc, newColor, number); //top
    recursiveSolution(image, sr, sc+1, newColor, number); //right
    recursiveSolution(image, sr+1, sc, newColor, number); //bottom
  }
  
  return;
}



var floodFill = function(image, sr, sc, newColor) {
  recursiveSolution(image, sr, sc, newColor, image[sr][sc]);
  return image;
};