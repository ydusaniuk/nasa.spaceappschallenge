import React from 'react';

import * as planetaryjs from 'planetary.js';
import worldData from 'planetary.js/dist/world-110m.json';
import * as d3 from 'd3';

class Globe extends React.Component {
  planet = planetaryjs.planet();

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

  focusOnLocation = (location) => {
    // const paused = false;
    // let counter = 0;
    //
    // const rotate = this.planet.projection.rotate();
    // const diff = [rotate[0] - location[0], rotate[1] - location[1]];
    //
    // this.planet.onDraw(() => {
    //   if (counter === 10) return;
    //   counter++;
    //
    //   const rotation = this.planet.projection.rotate();
    //
    //   rotation[0] += diff[0] * 0.1;
    //   // rotation[1] -= diff[1] * 0.1;
    //
    //   this.planet.projection.rotate(rotation)
    // });

    const rotation = this.planet.projection.rotate();

    rotation[0] = -location[0];
    rotation[1] = -location[1];

    this.planet.projection.rotate(rotation);
  };

  componentDidMount() {
    this.planet.loadPlugin(
      planetaryjs.plugins.earth({
        topojson: { world: worldData },
        oceans: { fill: '#001320' },
        land: { fill: '#06304e' },
        borders: { stroke: '#001320' }
      })
    );

    this.planet.loadPlugin(planetaryjs.plugins.drag({
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
      <div id="globe-wrapper"
           style={{width: '100%', height: '100%', 'min-height': '360px'}}>
        <canvas id="globe" style={{display: 'block', margin: '0 auto'}} />
      </div>
    );
  }
}

export default Globe;
