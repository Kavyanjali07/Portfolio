"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function KnowledgeArchitecture() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Accessibility: Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 2. Responsive Settings: Node density based on viewport
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 18 : 42;

    // 3. Three.js Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Color Palette - Editorial Design Tokens
    const COLOR_CHARCOAL = new THREE.Color("#2C2D1F");
    const COLOR_DEEP_OLIVE = new THREE.Color("#373F1D");
    const COLOR_OLIVE = new THREE.Color("#5C6E21");
    const COLOR_MUTED_GREEN = new THREE.Color("#00443B");
    const COLOR_WARM_SAND = new THREE.Color("#E3E1D4");

    // 5. Lighting Setup (Soft Warm Editorial Lighting)
    const ambientLight = new THREE.AmbientLight(0xf5eee9, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(12, 18, 15);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0x5c6e21, 0.6);
    fillLight.position.set(-10, -10, -10);
    scene.add(fillLight);

    // 6. Main Architectural Group (Contains Sculpture Components)
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 7. Architectural Bounding Box & Wireframe Plane Frames (ArchitectureFrame)
    const frameBoxGeo = new THREE.BoxGeometry(6.5, 6.5, 6.5);
    const frameBoxWire = new THREE.WireframeGeometry(frameBoxGeo);
    const frameMat = new THREE.LineBasicMaterial({
      color: COLOR_DEEP_OLIVE,
      transparent: true,
      opacity: 0.35,
    });
    const frameMesh = new THREE.LineSegments(frameBoxWire, frameMat);
    mainGroup.add(frameMesh);

    // Secondary Nested Octahedral Structural Frame
    const octaGeo = new THREE.OctahedronGeometry(4.2, 0);
    const octaWire = new THREE.WireframeGeometry(octaGeo);
    const octaMat = new THREE.LineBasicMaterial({
      color: COLOR_CHARCOAL,
      transparent: true,
      opacity: 0.25,
    });
    const octaMesh = new THREE.LineSegments(octaWire, octaMat);
    mainGroup.add(octaMesh);

    // 8. Generating Architectural Nodes & Positions (NetworkNode)
    const nodePositions: THREE.Vector3[] = [];
    const nodeGeos: THREE.BufferGeometry[] = [
      new THREE.SphereGeometry(0.18, 16, 16),
      new THREE.OctahedronGeometry(0.22, 0),
      new THREE.IcosahedronGeometry(0.16, 0),
    ];

    const nodeMaterials = [
      new THREE.MeshStandardMaterial({
        color: COLOR_OLIVE,
        roughness: 0.3,
        metalness: 0.2,
      }),
      new THREE.MeshStandardMaterial({
        color: COLOR_DEEP_OLIVE,
        roughness: 0.4,
        metalness: 0.1,
      }),
      new THREE.MeshStandardMaterial({
        color: COLOR_MUTED_GREEN,
        roughness: 0.5,
        metalness: 0.3,
      }),
    ];

    // Seeded architectural spatial distribution
    for (let i = 0; i < nodeCount; i++) {
      const radius = 1.5 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      // Create Node Mesh
      const geo = nodeGeos[i % nodeGeos.length];
      const mat = nodeMaterials[i % nodeMaterials.length];
      const nodeMesh = new THREE.Mesh(geo, mat);
      nodeMesh.position.copy(pos);
      nodeMesh.castShadow = true;
      nodeMesh.receiveShadow = true;
      mainGroup.add(nodeMesh);
    }

    // 9. Generating Structural Interconnecting Lines (NetworkEdge)
    const edgePositions: number[] = [];
    const maxEdgeDistance = isMobile ? 3.0 : 2.8;

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < maxEdgeDistance) {
          edgePositions.push(
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

    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(edgePositions, 3)
    );

    const edgeMat = new THREE.LineBasicMaterial({
      color: COLOR_CHARCOAL,
      transparent: true,
      opacity: 0.4,
    });

    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    mainGroup.add(edgeLines);

    // Accent Sand Lines (Highlights key structural pathways)
    const accentEdgePositions: number[] = [];
    for (let i = 0; i < nodePositions.length; i += 3) {
      const nextIdx = (i + 2) % nodePositions.length;
      accentEdgePositions.push(
        nodePositions[i].x,
        nodePositions[i].y,
        nodePositions[i].z,
        nodePositions[nextIdx].x,
        nodePositions[nextIdx].y,
        nodePositions[nextIdx].z
      );
    }

    const accentEdgeGeo = new THREE.BufferGeometry();
    accentEdgeGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(accentEdgePositions, 3)
    );
    const accentEdgeMat = new THREE.LineBasicMaterial({
      color: COLOR_WARM_SAND,
      transparent: true,
      opacity: 0.6,
    });
    const accentEdgeLines = new THREE.LineSegments(
      accentEdgeGeo,
      accentEdgeMat
    );
    mainGroup.add(accentEdgeLines);

    // 10. Interaction & Motion Physics Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) / windowHalfX;
      mouseY = (e.clientY - windowHalfY) / windowHalfY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 11. Render Loop
    let animId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous subtle rotation & floating motion
        mainGroup.rotation.y = elapsedTime * 0.08;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.05) * 0.15;
        mainGroup.position.y = Math.sin(elapsedTime * 0.7) * 0.2;

        // Nested frame relative counter-rotation
        octaMesh.rotation.y = -elapsedTime * 0.12;

        // Smooth mouse parallax interpolation
        targetRotY += (mouseX * 0.4 - targetRotY) * 0.04;
        targetRotX += (mouseY * 0.4 - targetRotX) * 0.04;

        mainGroup.rotation.y += targetRotY;
        mainGroup.rotation.x += targetRotX;
      }

      renderer.render(scene, camera);
    };

    renderLoop();

    // 12. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      frameBoxGeo.dispose();
      frameBoxWire.dispose();
      frameMat.dispose();
      octaGeo.dispose();
      octaWire.dispose();
      octaMat.dispose();

      nodeGeos.forEach((g) => g.dispose());
      nodeMaterials.forEach((m) => m.dispose());

      edgeGeo.dispose();
      edgeMat.dispose();
      accentEdgeGeo.dispose();
      accentEdgeMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[360px] md:min-h-[500px] relative pointer-events-none select-none"
      aria-label="Interactive 3D Architectural Knowledge Sculpture"
    />
  );
}
