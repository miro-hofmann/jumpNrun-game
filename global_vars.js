
var slider;
const liney = 380;

const colors = {
    Maroon: "#810000",
    Brown: "#9B6324",
    Olive: "#808001",
    Teal: "#469A91",
    Navy: "#010275",
    Red: "#e7194A",
    Orange: "#f48231",
    Yellow: "#fee118",
    Lime: "#beee46",
    Green: "#3bb44b",
    Cyan: "#44d4f4",
    Blue: "#4464d8",
    Purple: "#911eb4",
    Magenta: "#f033e6",
    Grey: "#aaaaaa",
    Pink: "#fabdd3",
    Apricot: "#ffd8b1",
    Beige: "#fffaca",
    Mint: "#aaffc4",
    Lavender: "#ddbbff",
  };

  function randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
}