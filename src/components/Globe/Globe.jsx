import React from 'react';

import * as Planetaryjs from 'planetary.js';
import worldData from 'planetary.js/dist/world-110m.json';
import * as d3 from 'd3';

import styles from './Globe.module.sass';

const autorotate = (degPerSec) => {
  return function (planet) {
    let lastTick = null;
    let paused = false;
    planet.plugins.autorotate = {
      pause: function () {
        paused = true;
      },
      resume: function () {
        paused = false;
      }
    };
    planet.onDraw(function () {
      if (paused || !lastTick) {
        lastTick = new Date();
      } else {
        const now = new Date();
        const delta = now - lastTick;

        let rotation = planet.projection.rotate();
        rotation[0] += degPerSec * delta / 1000;

        if (rotation[0] >= 180) rotation[0] -= 360;

        planet.projection.rotate(rotation);
        lastTick = now;
      }
    });
  };
};

class Globe extends React.Component {
  state = {
    hasDrawnSpaceports: false,
  };

  planet = undefined;

  onCanvasResize = () => {
    const wrapper = document.getElementById('globe-wrapper');
    const canvasHTML = document.getElementById('globe');

    const resizeCanvas = () => {
      const sideSize = Math.min(wrapper.offsetHeight, wrapper.offsetWidth);
      const scaleSize = sideSize / 2;

      canvasHTML.width = sideSize;
      canvasHTML.height = sideSize;

      this.planet.projection.scale(scaleSize).translate([scaleSize, scaleSize]);
    };

    // TODO: handle window resize event for dynamic updates
    resizeCanvas();
  };

  componentDidMount() {
    this.planet = Planetaryjs.planet();
    this.planet.loadPlugin(
      Planetaryjs.plugins.earth({
        topojson: { world: worldData },
        oceans: { fill: '#666' },
        land: { fill: 'silver' },
        borders: { stroke: 'black' },
      })
    );

    this.planet.loadPlugin(autorotate(0));
    this.planet.loadPlugin(Planetaryjs.plugins.pings());

    this.planet.loadPlugin(Planetaryjs.plugins.drag({
      onDragStart: () => {
        if (this.props.spaceportsLoadStatus.loaded) {
          const [lng, lat] = this.planet.projection.invert(d3.mouse(this.planet.canvas));

          const port = this.props.spaceports.find((port) =>
            Math.abs(port.lat - lat) <= 2 && Math.abs(port.lng - lng) <= 2);

          if (port) {
            this.props.onSpaceportSelected(port);
          }
        }

        this.planet.plugins.autorotate.pause();
      },
      onDragEnd: () => this.planet.plugins.autorotate.resume,
    }));

    this.planet.projection.scale(200).translate([200, 200]);

    const canvas = document.getElementById('globe');
    this.planet.draw(canvas);

    this.onCanvasResize();
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
              coordinates: [port.lng, port.lat],
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
