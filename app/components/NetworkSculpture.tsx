"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NetworkSculpture() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Group to hold all architectural objects
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Materials - Editorial Palette Tokens
    const oliveColor = new THREE.Color("#5C6E21");
    const deepOliveColor = new THREE.Color("#373F1D");
    const charcoalColor = new THREE.Color("#2C2D1F");
    const sandColor = new THREE.Color("#E3E1D4");

    // 1. Outer Polyhedral Framework (Icosahedron Wireframe)
    const outerGeo = new THREE.IcosahedronGeometry(4.5, 1);
    const outerWire = new THREE.WireframeGeometry(outerGeo);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: oliveColor,
      transparent: true,
      opacity: 0.45,
      linewidth: 1,
    });
    const outerLines = new THREE.LineSegments(outerWire, lineMaterial);
    sculptureGroup.add(outerLines);

    // 2. Inner Architectural Framework (Dodecahedron)
    const innerGeo = new THREE.DodecahedronGeometry(2.6, 0);
    const innerWire = new THREE.WireframeGeometry(innerGeo);
    const innerLineMaterial = new THREE.LineBasicMaterial({
      color: deepOliveColor,
      transparent: true,
      opacity: 0.6,
    });
    const innerLines = new THREE.LineSegments(innerWire, innerLineMaterial);
    sculptureGroup.add(innerLines);

    // 3. Central Core Node (Octahedron Solid Mesh)
    const coreGeo = new THREE.OctahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: charcoalColor,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // 4. Vertex Node Spheres (Interconnected Knowledge Graph Nodes)
    const nodeGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: oliveColor,
    });

    const nodePositions: THREE.Vector3[] = [];
    const posAttr = outerGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i += 3) {
      const vec = new THREE.Vector3(
        posAttr.getX(i),
        posAttr.getY(i),
        posAttr.getZ(i)
      );
      // Avoid duplicate vertices
      if (!nodePositions.some((p) => p.distanceTo(vec) < 0.1)) {
        nodePositions.push(vec);
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.copy(vec);
        sculptureGroup.add(nodeMesh);
      }
    }

    // 5. Internal Network Structural Lines (Connecting Nodes)
    const networkLinePositions: number[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist > 2.5 && dist < 5.0) {
          networkLinePositions.push(
            nodePositions[i].x,
            nodePositions[i].y,
            nodePositions[i].z,
            nodePositions[j].x,
            nodePositions[j].y,
            nodePositions[j].z
          );
        }
      }
    }

    const networkGeo = new THREE.BufferGeometry();
    networkGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(networkLinePositions, 3)
    );
    const networkMat = new THREE.LineBasicMaterial({
      color: sandColor,
      transparent: true,
      opacity: 0.25,
    });
    const networkLines = new THREE.LineSegments(networkGeo, networkMat);
    sculptureGroup.add(networkLines);

    // Mouse Interaction / Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) / windowHalfX;
      mouseY = (event.clientY - windowHalfY) / windowHalfY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        // Continuous slow rotation
        sculptureGroup.rotation.y += 0.002;
        sculptureGroup.rotation.x += 0.001;
        innerLines.rotation.y -= 0.003;

        // Smooth mouse damping
        targetX += (mouseX - targetX) * 0.03;
        targetY += (mouseY - targetY) * 0.03;

        sculptureGroup.rotation.y += targetX * 0.01;
        sculptureGroup.rotation.x += targetY * 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      outerGeo.dispose();
      outerWire.dispose();
      lineMaterial.dispose();
      innerGeo.dispose();
      innerWire.dispose();
      innerLineMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      networkGeo.dispose();
      networkMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[350px] md:min-h-[500px] relative pointer-events-none"
    />
  );
}
