import * as Plot from "npm:@observablehq/plot";

export function plotter_function(data_json, {width, height} = {}) {
  return Plot.plot({
    width: width,
    height: height,
    projection: "identity",
    
    
  });
}
