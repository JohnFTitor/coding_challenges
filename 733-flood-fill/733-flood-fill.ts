function changeColor(image: number[][], sr: number, sc: number, color: number, target: number) {
    if (target === color) return image;
    
    if (image[sr] === undefined || image[sr][sc] === undefined || image[sr][sc] !== target) return image;
    
    image[sr][sc] = color;
    changeColor(image, sr + 1, sc, color, target);
    changeColor(image, sr, sc + 1, color, target);
    changeColor(image, sr - 1, sc, color, target);
    changeColor(image, sr, sc - 1, color, target);
    
    return image;
}


function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    return changeColor(image, sr, sc, color, image[sr][sc]);
};