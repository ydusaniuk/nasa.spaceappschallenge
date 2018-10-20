import React from 'react';

import * as Planetaryjs from 'planetary.js';
import worldData from 'planetary.js/dist/world-110m.json';

class Globe extends React.Component {
  planet = undefined;

  componentDidMount() {
    this.planet = Planetaryjs.planet();
    const canvas = document.getElementById('globe');

    this.planet.loadPlugin(
      Planetaryjs.plugins.earth({
        topojson: { world: worldData },
        oceans: { fill: 'none' },
        land: { fill: 'silver' },
        borders: { stroke: 'silver' },
      })
    );


    this.planet.loadPlugin(Planetaryjs.plugins.pings());
    this.planet.loadPlugin(Planetaryjs.plugins.drag());

    this.planet.projection.scale(250).translate([250, 250]);
    // this.planet.draw(canvas);
  }

  render() {
    return (
      <div>
        Globe
        {/*<canvas id="globe" width="500" height="500" />*/}
      </div>
    );
  }
}

export default Globe;
