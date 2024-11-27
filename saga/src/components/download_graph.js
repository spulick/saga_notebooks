import * as htmlToImage from "npm:html-to-image";

export function download_graph(plot) {
  htmlToImage.toPng(plot, { pixelRatio: 2 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'alga_graphic.png';
    link.href = dataUrl;
    link.click();
  });
}