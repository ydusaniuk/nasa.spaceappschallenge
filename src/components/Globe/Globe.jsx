import React from 'react';
import * as THREE from 'three';

import earthMap from '../../assets/earth/earthmap1k.jpg';
import earthBump from '../../assets/earth/earthbump1k.jpg';

class Globe extends React.Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    this.camera.position.z = 4;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD EARTH
    const geometry = new THREE.SphereGeometry(2, 32, 32);

    // const texture = new THREE.TextureLoader().load(earthMap);

    this.light = new THREE.AmbientLight();
    this.scene.add(this.light);

    const map = new THREE.TextureLoader().load(earthMap);
    // map.wrapS = THREE.ClampToEdgeWrapping;
    // map.wrapT = THREE.ClampToEdgeWrapping;
    // map.repeat.set( 4, 4 );
    // const bump = new THREE.TextureLoader().load(earthBump);


    const material = new THREE.MeshPhongMaterial({
      map: map,
      // bumpMap: bump,
      // bumpScale: 0.05,
    });
    // material.map = THREE.ImageUtils.loadTexture(earthMap);
    //
    // material.bumpMap = THREE.ImageUtils.loadTexture(earthBump);
    // material.bumpScale = 0.05;

    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.cube.rotation.y -= 0.005;
    this.renderScene();

    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{ width: '800px', height: '800px' }}
        ref={(mount) => {
          this.mount = mount
        }}
      />
    )
  }

}

export default Globe;
