import * as htmlToImage from "../../_npm/html-to-image@1.11.11/17ad95e3.js";

export function download_graph(plot) {
  htmlToImage.toPng(plot, { pixelRatio: 2, backgroundColor: "white" })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'alga_graphic.png';
    link.href = dataUrl;
    link.click();
  });
}