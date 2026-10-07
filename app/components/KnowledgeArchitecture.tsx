"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export interface System3DProps {
  mode?: "hero" | "about" | "knowledgenetwork" | "security" | "contact";
}

export default function KnowledgeArchitecture({
  mode = "hero",
}: System3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
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

    // 2. Editorial Color Palette Tokens
    const COLOR_CHARCOAL = new THREE.Color("#2C2D1F");
    const COLOR_DEEP_OLIVE = new THREE.Color("#373F1D");
    const COLOR_OLIVE = new THREE.Color("#5C6E21");
    const COLOR_MUTED_GREEN = new THREE.Color("#00443B");
    const COLOR_WARM_SAND = new THREE.Color("#E3E1D4");

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xf5eee9, 1.3);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight.position.set(14, 20, 15);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0x5c6e21, 0.7);
    fillLight.position.set(-12, -8, -10);
    scene.add(fillLight);

    // 4. Main Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 5. Central Core Chamber (THE SYSTEM CORE)
    const coreGeo = new THREE.DodecahedronGeometry(1.4, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: mode === "security" ? COLOR_MUTED_GREEN : COLOR_DEEP_OLIVE,
      roughness: 0.3,
      metalness: 0.4,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.castShadow = true;
    coreMesh.receiveShadow = true;
    mainGroup.add(coreMesh);

    // Core Wireframe Frame Overlay
    const coreWireGeo = new THREE.WireframeGeometry(
      new THREE.IcosahedronGeometry(2.1, 0)
    );
    const coreWireMat = new THREE.LineBasicMaterial({
      color: COLOR_OLIVE,
      transparent: true,
      opacity: 0.6,
    });
    const coreWireMesh = new THREE.LineSegments(coreWireGeo, coreWireMat);
    mainGroup.add(coreWireMesh);

    // 6. Outer Architectural Frame & Boundary Planes
    const frameBoxGeo = new THREE.BoxGeometry(6.8, 6.8, 6.8);
    const frameBoxWire = new THREE.WireframeGeometry(frameBoxGeo);
    const frameMat = new THREE.LineBasicMaterial({
      color: mode === "security" ? COLOR_MUTED_GREEN : COLOR_CHARCOAL,
      transparent: true,
      opacity: mode === "security" ? 0.6 : 0.3,
    });
    const frameMesh = new THREE.LineSegments(frameBoxWire, frameMat);
    mainGroup.add(frameMesh);

    // Security Boundary Plane (if in security mode)
    if (mode === "security") {
      const shieldPlaneGeo = new THREE.BoxGeometry(4.5, 4.5, 4.5);
      const shieldWire = new THREE.WireframeGeometry(shieldPlaneGeo);
      const shieldMat = new THREE.LineBasicMaterial({
        color: COLOR_OLIVE,
        transparent: true,
        opacity: 0.75,
      });
      const shieldMesh = new THREE.LineSegments(shieldWire, shieldMat);
      mainGroup.add(shieldMesh);
    }

    // 7. Topology Nodes Generation (Primary vs Secondary Nodes)
    const nodePositions: THREE.Vector3[] = [];
    const primaryNodeCount = isMobile ? 8 : mode === "knowledgenetwork" ? 28 : 16;
    const secondaryNodeCount = isMobile ? 10 : mode === "knowledgenetwork" ? 30 : 20;

    const primaryGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const secondaryGeo = new THREE.SphereGeometry(0.12, 12, 12);

    const primaryMat = new THREE.MeshStandardMaterial({
      color: COLOR_OLIVE,
      roughness: 0.3,
      metalness: 0.3,
    });

    const secondaryMat = new THREE.MeshStandardMaterial({
      color: COLOR_DEEP_OLIVE,
      roughness: 0.5,
      metalness: 0.1,
    });

    // Primary Nodes (Structured Anchor Points)
    for (let i = 0; i < primaryNodeCount; i++) {
      const angle = (i / primaryNodeCount) * Math.PI * 2;
      const radius = 2.8 + (i % 3) * 0.7;
      const heightOffset = (i % 2 === 0 ? 1 : -1) * (1.2 + (i % 4) * 0.4);

      const x = Math.cos(angle) * radius;
      const y = heightOffset;
      const z = Math.sin(angle) * radius;

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      const nodeMesh = new THREE.Mesh(primaryGeo, primaryMat);
      nodeMesh.position.copy(pos);
      nodeMesh.castShadow = true;
      mainGroup.add(nodeMesh);
    }

    // Secondary Nodes (Outer Field Connections)
    for (let i = 0; i < secondaryNodeCount; i++) {
      const radius = 3.5 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      const nodeMesh = new THREE.Mesh(secondaryGeo, secondaryMat);
      nodeMesh.position.copy(pos);
      mainGroup.add(nodeMesh);
    }

    // 8. Connecting Structural Beams / Paths
    const edgePositions: number[] = [];
    const maxDist = isMobile ? 3.2 : mode === "knowledgenetwork" ? 3.8 : 3.2;

    for (let i = 0; i < nodePositions.length; i++) {
      // Connect to Core
      if (i < primaryNodeCount) {
        edgePositions.push(
          0,
          0,
          0,
          nodePositions[i].x,
          nodePositions[i].y,
          nodePositions[i].z
        );
      }

      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < maxDist) {
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
      opacity: 0.35,
    });

    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    mainGroup.add(edgeLines);

    // Warm Sand Highlight Pathways
    const sandPositions: number[] = [];
    for (let i = 0; i < primaryNodeCount; i++) {
      const nextIdx = (i + 1) % primaryNodeCount;
      sandPositions.push(
        nodePositions[i].x,
        nodePositions[i].y,
        nodePositions[i].z,
        nodePositions[nextIdx].x,
        nodePositions[nextIdx].y,
        nodePositions[nextIdx].z
      );
    }

    const sandGeo = new THREE.BufferGeometry();
    sandGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(sandPositions, 3)
    );
    const sandMat = new THREE.LineBasicMaterial({
      color: COLOR_WARM_SAND,
      transparent: true,
      opacity: 0.65,
    });
    const sandLines = new THREE.LineSegments(sandGeo, sandMat);
    mainGroup.add(sandLines);

    // 9. Interaction & Motion Physics
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

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 10. Render Loop
    let animId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous slow rotation & floating
        mainGroup.rotation.y = elapsedTime * 0.07;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.04) * 0.12;
        mainGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.18;

        // Core counter-rotation
        coreMesh.rotation.y = -elapsedTime * 0.15;
        coreWireMesh.rotation.y = elapsedTime * 0.1;

        // Smooth mouse damping
        targetRotY += (mouseX * 0.35 - targetRotY) * 0.04;
        targetRotX += (mouseY * 0.35 - targetRotX) * 0.04;

        mainGroup.rotation.y += targetRotY;
        mainGroup.rotation.x += targetRotX;
      }

      renderer.render(scene, camera);
    };

    renderLoop();

    // 11. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();

      frameBoxGeo.dispose();
      frameBoxWire.dispose();
      frameMat.dispose();

      primaryGeo.dispose();
      primaryMat.dispose();
      secondaryGeo.dispose();
      secondaryMat.dispose();

      edgeGeo.dispose();
      edgeMat.dispose();
      sandGeo.dispose();
      sandMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [mode]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[350px] md:min-h-[480px] relative pointer-events-none select-none"
      aria-label="The System — Architectural 3D Sculpture"
    />
  );
}
