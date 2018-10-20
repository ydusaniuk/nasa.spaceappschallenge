import React from 'react';

import * as Planetaryjs from 'planetary.js';
import worldData from 'planetary.js/dist/world-110m.json';
import * as d3 from 'd3';

import styles from './Globe.module.sass';

class Globe extends React.Component {
  planet = undefined;

  autorotate(degPerSec) {
    return function(planet) {
      var lastTick = null;
      var paused = false;
      planet.plugins.autorotate = {
        pause:  function() { paused = true;  },
        resume: function() { paused = false; }
      };
      planet.onDraw(function() {
        if (paused || !lastTick) {
          lastTick = new Date();
        } else {
          var now = new Date();
          var delta = now - lastTick;
          var rotation = planet.projection.rotate();
          rotation[0] += degPerSec * delta / 1000;
          if (rotation[0] >= 180) rotation[0] -= 360;
          planet.projection.rotate(rotation);
          lastTick = now;
        }
      });
    };
  };

  onCanvasResize = () => {
    const wrapper = document.getElementById('globe-wrapper');
    const canvasHTML = document.getElementById('globe');

    const resizeCanvas = () => {
      let sideSize = Math.min(wrapper.offsetHeight, wrapper.offsetWidth);
      // sideSize -= parseFloat(window.getComputedStyle(wrapper).padding);

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
    const canvas = document.getElementById('globe');

    this.planet.loadPlugin(
      Planetaryjs.plugins.earth({
        topojson: { world: worldData },
        oceans: { fill: '#666' },
        land: { fill: 'silver' },
        borders: { stroke: 'black' },
      })
    );


    this.planet.loadPlugin(Planetaryjs.plugins.pings());
    this.planet.loadPlugin(Planetaryjs.plugins.drag({
      onDragStart: function() {
        this.plugins.autorotate.pause();
      },
      onDragEnd: function() {
        this.plugins.autorotate.resume();
      }
    }));
    this.planet.loadPlugin(this.autorotate(10));

    this.planet.loadPlugin((planet) => {
      planet.onDraw(() => {
        planet.withSavedContext((context) => {
          // let arc = {type: "LineString", coordinates: [[40, 30], [40, -50]]};
          var arc = d3.geo.greatArc().source([40, 30]).target([0, -50])();

          context.beginPath();
          planet.path.context(context)(arc);
          context.stroke();
          context.closePath();
        });
      })
    });

    this.planet.projection.scale(200).translate([200, 200]);
    this.planet.draw(canvas);

    this.onCanvasResize();

    // for (let i = 0; i < 10; i++) {
    //   const colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
    //   setInterval(() => {
    //     var lat = Math.random() * 170 - 85;
    //     var lng = Math.random() * 360 - 180;
    //     var color = colors[Math.floor(Math.random() * colors.length)];
    //     var angle = Math.random() * 10;
    //     this.planet.plugins.pings.add(lng, lat, { color: color, ttl: 5000, angle: angle });
    //   }, 250);
    // }

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
