"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface LivingStructureProps {
  progress?: number; // Scroll progress from 0.0 to 1.0
}

export default function LivingStructure({ progress = 0.5 }: LivingStructureProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // -----------------------------------------------------------------
    // LIGHTING: Warm Gallery Photography Setup
    // -----------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xe8ece1, 1.4);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xfff8ee, 2.8);
    mainKeyLight.position.set(6, 9, 6);
    mainKeyLight.castShadow = true;
    scene.add(mainKeyLight);

    const fillLight = new THREE.DirectionalLight(0x5c6e21, 1.2);
    fillLight.position.set(-6, -4, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x00443b, 1.0);
    rimLight.position.set(0, -6, 5);
    scene.add(rimLight);

    // -----------------------------------------------------------------
    // MATERIALS: Sophisticated Palette
    // -----------------------------------------------------------------
    const charcoalMat = new THREE.MeshStandardMaterial({
      color: 0x2c2d1f,
      roughness: 0.4,
      metalness: 0.2,
    });

    const deepOliveMat = new THREE.MeshStandardMaterial({
      color: 0x373f1d,
      roughness: 0.35,
      metalness: 0.15,
    });

    const oliveMat = new THREE.MeshStandardMaterial({
      color: 0x5c6e21,
      roughness: 0.3,
      metalness: 0.1,
    });

    const mutedGreenMat = new THREE.MeshStandardMaterial({
      color: 0x00443b,
      roughness: 0.25,
      metalness: 0.3,
    });

    const crystallineMat = new THREE.MeshStandardMaterial({
      color: 0xe3e1d4,
      roughness: 0.15,
      metalness: 0.1,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide,
    });

    const wireframeLineMat = new THREE.LineBasicMaterial({
      color: 0x5c6e21,
      linewidth: 1.5,
    });

    const jointAccentMat = new THREE.MeshStandardMaterial({
      color: 0xe3e1d4,
      roughness: 0.2,
      metalness: 0.5,
    });

    // -----------------------------------------------------------------
    // GEOMETRY ARCHITECTURE: "THE LIVING STRUCTURE"
    // -----------------------------------------------------------------
    const livingStructureGroup = new THREE.Group();
    scene.add(livingStructureGroup);

    // 1. Central Core Chamber (Dodecahedron + Inner Octahedron)
    const coreGroup = new THREE.Group();
    const coreGeo = new THREE.DodecahedronGeometry(0.85, 0);
    const coreMesh = new THREE.Mesh(coreGeo, charcoalMat);
    coreMesh.castShadow = true;
    coreMesh.receiveShadow = true;
    coreGroup.add(coreMesh);

    const innerOcta = new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0), deepOliveMat);
    coreGroup.add(innerOcta);

    const coreWire = new THREE.LineSegments(new THREE.EdgesGeometry(coreGeo), wireframeLineMat);
    coreWire.scale.setScalar(1.04);
    coreGroup.add(coreWire);

    livingStructureGroup.add(coreGroup);

    // 2. Growth Branch 1 (North-East: Structural Pillar + Crystalline Facet)
    const branch1 = new THREE.Group();
    const beam1Geo = new THREE.BoxGeometry(0.12, 1.8, 0.12);
    const beam1 = new THREE.Mesh(beam1Geo, deepOliveMat);
    beam1.position.set(0.6, 0.9, 0.2);
    beam1.rotation.z = -Math.PI / 6;
    branch1.add(beam1);

    const facet1Geo = new THREE.BufferGeometry();
    const vertices1 = new Float32Array([
      0, 0, 0,
      1.1, 1.2, 0.3,
      0.4, 1.8, -0.2,
    ]);
    facet1Geo.setAttribute("position", new THREE.BufferAttribute(vertices1, 3));
    facet1Geo.computeVertexNormals();
    const facet1 = new THREE.Mesh(facet1Geo, crystallineMat);
    branch1.add(facet1);

    livingStructureGroup.add(branch1);

    // 3. Growth Branch 2 (North-West: Layered Frame + Floating Node)
    const branch2 = new THREE.Group();
    const boxFrameGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(0.9, 0.9, 0.9));
    const boxFrame = new THREE.LineSegments(boxFrameGeo, wireframeLineMat);
    boxFrame.position.set(-1.1, 0.8, -0.4);
    boxFrame.rotation.y = Math.PI / 4;
    branch2.add(boxFrame);

    const node2 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 0), oliveMat);
    node2.position.set(-1.1, 0.8, -0.4);
    branch2.add(node2);

    livingStructureGroup.add(branch2);

    // 4. Growth Branch 3 (South-East: Extruded Structural Polygon)
    const branch3 = new THREE.Group();
    const beam3 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.6, 6), mutedGreenMat);
    beam3.position.set(0.9, -0.8, 0.3);
    beam3.rotation.z = Math.PI / 4;
    branch3.add(beam3);

    const facet3Geo = new THREE.BufferGeometry();
    const vertices3 = new Float32Array([
      0, 0, 0,
      1.2, -0.9, 0.4,
      0.5, -1.4, -0.1,
    ]);
    facet3Geo.setAttribute("position", new THREE.BufferAttribute(vertices3, 3));
    facet3Geo.computeVertexNormals();
    const facet3 = new THREE.Mesh(facet3Geo, crystallineMat);
    branch3.add(facet3);

    livingStructureGroup.add(branch3);

    // 5. Growth Branch 4 (South-West: Incomplete Architectural Wireframe)
    const branch4 = new THREE.Group();
    const beam4Geo = new THREE.BoxGeometry(0.1, 1.4, 0.1);
    const beam4 = new THREE.Mesh(beam4Geo, charcoalMat);
    beam4.position.set(-0.8, -0.9, -0.2);
    beam4.rotation.z = -Math.PI / 3;
    branch4.add(beam4);

    const joint4 = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), jointAccentMat);
    joint4.position.set(-1.3, -1.2, -0.2);
    branch4.add(joint4);

    livingStructureGroup.add(branch4);

    // 6. Growth Branch 5 (Z-Depth: Translucent Crystalline Shield)
    const branch5 = new THREE.Group();
    const shieldGeo = new THREE.PlaneGeometry(1.2, 1.4);
    const shieldMesh = new THREE.Mesh(shieldGeo, crystallineMat);
    shieldMesh.position.set(0, 0, 1.1);
    shieldMesh.rotation.x = -Math.PI / 8;
    branch5.add(shieldMesh);

    livingStructureGroup.add(branch5);

    // 7. Growth Branch 6 (UNFINISHED EXTENSION BRANCH — Extends into Open Space)
    const branch6 = new THREE.Group();
    const extensionBeam = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 2.2, 8), oliveMat);
    extensionBeam.position.set(1.5, 1.4, -0.5);
    extensionBeam.rotation.z = -Math.PI / 3.5;
    branch6.add(extensionBeam);

    // Open Joint Node at Tip (Intentionally Unfinished Open Joint!)
    const openJointNode = new THREE.Mesh(new THREE.OctahedronGeometry(0.18, 0), jointAccentMat);
    openJointNode.position.set(2.3, 1.9, -0.5);
    branch6.add(openJointNode);

    // Incomplete Open Frame Ring
    const openRing = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.TorusGeometry(0.3, 0.02, 8, 16, Math.PI * 1.3)),
      wireframeLineMat
    );
    openRing.position.set(2.3, 1.9, -0.5);
    openRing.rotation.x = Math.PI / 3;
    branch6.add(openRing);

    livingStructureGroup.add(branch6);

    // -----------------------------------------------------------------
    // MOUSE PARALLAX
    // -----------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // -----------------------------------------------------------------
    // RESIZE LISTENER
    // -----------------------------------------------------------------
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // -----------------------------------------------------------------
    // ANIMATION RENDER LOOP: Scroll-Driven Progressive Growth
    // -----------------------------------------------------------------
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const p = prefersReducedMotion ? 1.0 : Math.max(0, Math.min(1, progressRef.current));

      // Continuous Slow Rotation
      livingStructureGroup.rotation.y += 0.003;
      livingStructureGroup.rotation.x = Math.sin(Date.now() * 0.0005) * 0.05;

      // Mouse Parallax Damping
      livingStructureGroup.rotation.y += (mouseX * 0.2 - livingStructureGroup.rotation.y) * 0.05;
      livingStructureGroup.rotation.x += (-mouseY * 0.15 - livingStructureGroup.rotation.x) * 0.05;

      // Camera Depth Shift
      camera.position.z = 8.5 - p * 1.2;

      // Progressive Stage Scale & Opacity Calculations based on Scroll Progress p
      // Core Chamber always visible
      coreGroup.scale.setScalar(0.7 + p * 0.35);

      // Branch 1 & 2 (Emerge at p >= 0.15)
      const b1Scale = Math.max(0.001, Math.min(1, (p - 0.1) * 3));
      branch1.scale.setScalar(b1Scale);
      branch2.scale.setScalar(b1Scale);

      // Branch 3 & 4 (Emerge at p >= 0.35)
      const b3Scale = Math.max(0.001, Math.min(1, (p - 0.3) * 3));
      branch3.scale.setScalar(b3Scale);
      branch4.scale.setScalar(b3Scale);

      // Branch 5 (Crystalline shield at p >= 0.55)
      const b5Scale = Math.max(0.001, Math.min(1, (p - 0.5) * 3));
      branch5.scale.setScalar(b5Scale);

      // Branch 6 (UNFINISHED EXTENSION BRANCH at p >= 0.75 -> Extends into Open Space)
      const b6Scale = Math.max(0.001, Math.min(1, (p - 0.7) * 3.5));
      branch6.scale.setScalar(b6Scale);

      // Subtle pulse on the unfinished open joint node at final scroll stage
      if (p > 0.85) {
        const pulse = 1 + Math.sin(Date.now() * 0.004) * 0.08;
        openJointNode.scale.setScalar(pulse);
      }

      renderer.render(scene, camera);
    };

    animate();

    // -----------------------------------------------------------------
    // CLEANUP DISPOSAL
    // -----------------------------------------------------------------
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Dispose Geometries & Materials
      coreGeo.dispose();
      beam1Geo.dispose();
      facet1Geo.dispose();
      boxFrameGeo.dispose();
      facet3Geo.dispose();
      beam4Geo.dispose();
      shieldGeo.dispose();

      charcoalMat.dispose();
      deepOliveMat.dispose();
      oliveMat.dispose();
      mutedGreenMat.dispose();
      crystallineMat.dispose();
      wireframeLineMat.dispose();
      jointAccentMat.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[380px]" />;
}
