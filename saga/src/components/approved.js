import * as Plot from "npm:@observablehq/plot";

export function plotter_function(approved, local_govs, {width, height} = {}) {
  return Plot.plot({
    width,
    height,
    projection:{
      type: "equirectangular",
      rotate: [-133, 27],
      domain: {type: "MultiPoint", coordinates: [[113, -24], [154, -28], [141, -10.5], [146, -44]]}
    },
    marks : [
      Plot.geo(local_govs, {fill: "currentColor", fillOpacity: 0.2}),
      Plot.spike(approved, Plot.geoCentroid({ stroke: "red", length: approved["Installed capacity (W)"]}))
    ]
  });
}
