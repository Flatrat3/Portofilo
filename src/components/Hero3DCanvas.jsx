import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particle field variables (Increased for a richer constellation network)
    const particlesCount = 140;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const velocities = [];
    const baseCoords = []; // Store base coordinates for wave motion

    // Initialize random positions and velocities for particles
    for (let i = 0; i < particlesCount; i++) {
      const idx = i * 3;
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 4;
      const z = (Math.random() - 0.5) * 8;
      
      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;

      baseCoords.push({ x, y, z });

      velocities.push({
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.004,
        z: (Math.random() - 0.5) * 0.004,
        phase: Math.random() * Math.PI * 2
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom round dot texture for glowing particles
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    const texture = new THREE.CanvasTexture(canvas);

    // Cyan / Purple particle color
    const material = new THREE.PointsMaterial({
      size: 0.12,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x3b82f6, // primary accent
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Add glowing floating wireframe objects in the background
    const shapes = [];
    const shapeColors = [0x3b82f6, 0x9333ea, 0x60a5fa];
    const shapeGeometries = [
      new THREE.IcosahedronGeometry(0.7, 1),
      new THREE.TorusGeometry(0.4, 0.12, 8, 20),
      new THREE.OctahedronGeometry(0.5, 0),
    ];

    shapeGeometries.forEach((geom, idx) => {
      const mat = new THREE.MeshBasicMaterial({
        color: shapeColors[idx % shapeColors.length],
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const mesh = new THREE.Mesh(geom, mat);
      
      mesh.position.set(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2
      );
      
      mesh.userData = {
        baseX: mesh.position.x,
        baseY: mesh.position.y,
        baseZ: mesh.position.z,
        rotSpeedX: (Math.random() - 0.5) * 0.016 + 0.008, // Faster rotation
        rotSpeedY: (Math.random() - 0.5) * 0.016 + 0.008,
        floatSpeed: 0.0016 + Math.random() * 0.0016, // Faster floating
        floatOffset: Math.random() * Math.PI * 2,
      };

      scene.add(mesh);
      shapes.push(mesh);
    });

    // Material for drawing connections between particles
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.12,
    });
    
    let lineSegments = null;

    // Mouse tracking variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      // Normalize mouse coordinates (-1 to 1)
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resizing logic
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(containerRef.current);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera transition towards mouse movement (Parallax)
      targetX += (mouseX * 0.8 - targetX) * 0.05;
      targetY += (mouseY * 0.8 - targetY) * 0.05;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotate overall particles slightly
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.01;

      // Update particle positions based on drift + dynamic sine wave motion
      const posAttr = geometry.attributes.position;
      const coords = posAttr.array;
      for (let i = 0; i < particlesCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        // Slowly drift base X and Z
        baseCoords[i].x += velocities[i].x;
        baseCoords[i].z += velocities[i].z;

        // Bound check for drift
        if (Math.abs(baseCoords[i].x) > 5) velocities[i].x *= -1;
        if (Math.abs(baseCoords[i].z) > 4) velocities[i].z *= -1;

        // Apply dynamic wave math to X and Z coordinates
        coords[ix] = baseCoords[i].x;
        coords[iz] = baseCoords[i].z;
        
        // Y coordinate waves up and down dynamically
        coords[iy] = Math.sin(baseCoords[i].x * 0.5 + elapsedTime * 1.5 + velocities[i].phase) * 0.6 +
                     Math.cos(baseCoords[i].z * 0.5 + elapsedTime * 1.2 + velocities[i].phase) * 0.6;
      }
      geometry.attributes.position.needsUpdate = true;

      // Animate shapes (faster rotation and float)
      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotSpeedX;
        shape.rotation.y += shape.userData.rotSpeedY;

        // Floating animation
        const offset = shape.userData.floatOffset + elapsedTime * shape.userData.floatSpeed * 1.2;
        shape.position.y = shape.userData.baseY + Math.sin(offset) * 0.4; // larger float range
        shape.position.x = shape.userData.baseX + Math.cos(offset) * 0.2;
      });

      // Render lines between nearby particles
      if (lineSegments) {
        scene.remove(lineSegments);
        lineSegments.geometry.dispose();
      }

      const linePositions = [];
      for (let i = 0; i < particlesCount; i++) {
        for (let j = i + 1; j < particlesCount; j++) {
          const dx = coords[i * 3] - coords[j * 3];
          const dy = coords[i * 3 + 1] - coords[j * 3 + 1];
          const dz = coords[i * 3 + 2] - coords[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Connect if particles are closer than 1.8 units
          if (dist < 1.8) {
            linePositions.push(coords[i * 3], coords[i * 3 + 1], coords[i * 3 + 2]);
            linePositions.push(coords[j * 3], coords[j * 3 + 1], coords[j * 3 + 2]);
          }
        }
      }

      if (linePositions.length > 0) {
        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lineSegments);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up all ThreeJS references to prevent memory leaks
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      shapes.forEach((shape) => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
      lineMaterial.dispose();
      if (lineSegments) {
        lineSegments.geometry.dispose();
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="hero-3d-canvas-container" />;
};

export default Hero3DCanvas;
