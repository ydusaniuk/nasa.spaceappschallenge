import React from 'react';

import * as Planetaryjs from 'planetary.js';
import worldData from 'planetary.js/dist/world-110m.json';
import * as d3 from 'd3';

import styles from './Globe.module.sass';

class Globe extends React.Component {
  planet = Planetaryjs.planet();

  state = {
    hasDrawnSpaceports: false,
  };

  onCanvasResize = (canvasHTML) => {
    const wrapper = document.getElementById('globe-wrapper');

    const resizeCanvas = () => {
      const sideSize = Math.min(wrapper.offsetHeight, wrapper.offsetWidth);
      const scaleSize = sideSize / 2;

      canvasHTML.width = sideSize;
      canvasHTML.height = sideSize;

      this.planet.projection.scale(scaleSize).translate([scaleSize, scaleSize]);
    };

    // TODO: handle window resize event for canvas resizing
    resizeCanvas();
  };

  componentDidMount() {
    this.planet.loadPlugin(
      Planetaryjs.plugins.earth({
        topojson: { world: worldData },
        oceans:   { fill:   '#001320' },
        land:     { fill:   '#06304e' },
        borders:  { stroke: '#001320' }
      })
    );

    this.planet.loadPlugin(Planetaryjs.plugins.drag({
      onDragStart: () => {
        const location = this.planet.projection.invert(d3.mouse(this.planet.canvas));
        this.props.onLocationSelected(location);
      },
    }));

    this.planet.projection.scale(200).translate([200, 200]);

    // TODO: should look for more elegant way of canvas usage
    const canvasHTML = document.getElementById('globe');
    this.planet.draw(canvasHTML);

    this.onCanvasResize(canvasHTML);
  }

  componentDidUpdate() {
    if (this.props.spaceportsLoadStatus.loaded && !this.state.hasDrawnSpaceports) {
      this.setState({ hasDrawnSpaceports: true });

      this.planet.onDraw(() => {
        this.planet.withSavedContext((context) => {
          context.beginPath();

          this.props.spaceports.forEach((port) => {
            this.planet.path.context(context)({
              type: 'Point',
              coordinates: [port.longitude, port.latitude],
            });
          });

          context.strokeStyle = '#f00';
          context.stroke();

          context.fillStyle = '#b40000';
          context.fill();

          context.closePath();
        });
      });
    }
  }

  render() {
    return (
      <div id="globe-wrapper" className={styles.Globe}>
        <canvas id="globe" />
      </div>
    );
  }
}

export default Globe;
