function getRandomHexColor() {
    var color = "#" +
        Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, "O");
    return color;
}
console.log(getRandomHexColor());
