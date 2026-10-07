"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ImpossibleMachineProps {
  progress?: number; // Scroll progress from 0.0 to 1.0
}

export default function ImpossibleMachine({ progress = 0.5 }: ImpossibleMachineProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);

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

    const mainKeyLight = new THREE.DirectionalLight(0xfff8ee, 3.0);
    mainKeyLight.position.set(6, 9, 7);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 1024;
    mainKeyLight.shadow.mapSize.height = 1024;
    scene.add(mainKeyLight);

    const fillLight = new THREE.DirectionalLight(0x5c6e21, 1.2);
    fillLight.position.set(-6, -5, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x00443b, 0.9);
    rimLight.position.set(2, -7, 4);
    scene.add(rimLight);

    // -----------------------------------------------------------------
    // MATERIALS: Sophisticated Palette
    // -----------------------------------------------------------------
    const darkMatteMat = new THREE.MeshStandardMaterial({
      color: 0x2c2d1f,
      roughness: 0.45,
      metalness: 0.2,
    });

    const darkOlivePolishedMat = new THREE.MeshStandardMaterial({
      color: 0x373f1d,
      roughness: 0.2,
      metalness: 0.4,
    });

    const oliveRibbonMat = new THREE.MeshStandardMaterial({
      color: 0x5c6e21,
      roughness: 0.25,
      metalness: 0.1,
    });

    const translucentPlaneMat = new THREE.MeshStandardMaterial({
      color: 0xe3e1d4,
      roughness: 0.15,
      metalness: 0.1,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    });

    const accentJointMat = new THREE.MeshStandardMaterial({
      color: 0x00443b,
      roughness: 0.2,
      metalness: 0.3,
    });

    // -----------------------------------------------------------------
    // GEOMETRY ARCHITECTURE: "THE IMPOSSIBLE MACHINE"
    // Built around a deliberate CENTRAL VOID at (0,0,0)
    // -----------------------------------------------------------------
    const machineGroup = new THREE.Group();
    scene.add(machineGroup);

    // 1. LARGE CURVED ARCHITECTURAL ARC (Asymmetrical Torus Arc)
    const arcGeo = new THREE.TorusGeometry(2.4, 0.08, 16, 64, Math.PI * 1.35);
    const arcMesh = new THREE.Mesh(arcGeo, darkMatteMat);
    arcMesh.castShadow = true;
    arcMesh.receiveShadow = true;
    arcMesh.rotation.x = Math.PI / 6;
    arcMesh.rotation.y = -Math.PI / 8;
    machineGroup.add(arcMesh);

    // Secondary Support Rail for Arc
    const railGeo = new THREE.TorusGeometry(2.55, 0.03, 12, 48, Math.PI * 1.1);
    const railMesh = new THREE.Mesh(railGeo, darkOlivePolishedMat);
    railMesh.rotation.x = Math.PI / 5;
    railMesh.rotation.z = Math.PI / 12;
    machineGroup.add(railMesh);

    // 2. CONTINUOUS 3D RIBBON (Loops through Void & Extends into Open Space)
    const ribbonPoints = [
      new THREE.Vector3(-2.8, -1.8, -0.8),
      new THREE.Vector3(-1.4, 0.6, 0.8),
      new THREE.Vector3(0.2, 1.6, -0.6),
      new THREE.Vector3(1.6, 0.4, 0.9),
      new THREE.Vector3(0.8, -1.5, -0.4),
      new THREE.Vector3(-0.6, -0.9, 0.7),
      new THREE.Vector3(1.8, 1.8, -0.9),
      new THREE.Vector3(3.1, 2.4, -1.4), // Continuous unfinished end extending into open space!
    ];
    const ribbonCurve = new THREE.CatmullRomCurve3(ribbonPoints);
    const ribbonGeo = new THREE.TubeGeometry(ribbonCurve, 128, 0.045, 12, false);
    const ribbonMesh = new THREE.Mesh(ribbonGeo, oliveRibbonMat);
    ribbonMesh.castShadow = true;
    machineGroup.add(ribbonMesh);

    // 3. STRUCTURAL PLANES (Translucent surfaces positioned at unusual angles)
    const plane1Geo = new THREE.PlaneGeometry(1.8, 1.3);
    const plane1Mesh = new THREE.Mesh(plane1Geo, translucentPlaneMat);
    plane1Mesh.position.set(-1.1, 0.9, 0.3);
    plane1Mesh.rotation.set(Math.PI / 4, -Math.PI / 6, Math.PI / 12);
    plane1Mesh.receiveShadow = true;
    machineGroup.add(plane1Mesh);

    const plane2Geo = new THREE.PlaneGeometry(1.4, 1.9);
    const plane2Mesh = new THREE.Mesh(plane2Geo, translucentPlaneMat);
    plane2Mesh.position.set(1.2, -0.8, -0.5);
    plane2Mesh.rotation.set(-Math.PI / 3, Math.PI / 5, -Math.PI / 8);
    plane2Mesh.receiveShadow = true;
    machineGroup.add(plane2Mesh);

    const plane3Geo = new THREE.BufferGeometry();
    const plane3Vertices = new Float32Array([
      -0.5, 0.5, 1.2,
      1.4, 0.8, 0.2,
      0.8, -1.1, 0.9,
    ]);
    plane3Geo.setAttribute("position", new THREE.BufferAttribute(plane3Vertices, 3));
    plane3Geo.computeVertexNormals();
    const plane3Mesh = new THREE.Mesh(plane3Geo, translucentPlaneMat);
    machineGroup.add(plane3Mesh);

    // 4. MECHANICAL ABSTRACT SLIDERS (Slide along structural tracks)
    const track1Geo = new THREE.CylinderGeometry(0.025, 0.025, 3.2, 8);
    const track1Mesh = new THREE.Mesh(track1Geo, darkMatteMat);
    track1Mesh.position.set(-0.9, 0.2, -0.7);
    track1Mesh.rotation.z = Math.PI / 3;
    machineGroup.add(track1Mesh);

    const slider1Geo = new THREE.BoxGeometry(0.35, 0.18, 0.18);
    const slider1Mesh = new THREE.Mesh(slider1Geo, darkOlivePolishedMat);
    slider1Mesh.castShadow = true;
    track1Mesh.add(slider1Mesh);

    const track2Geo = new THREE.CylinderGeometry(0.025, 0.025, 2.8, 8);
    const track2Mesh = new THREE.Mesh(track2Geo, darkMatteMat);
    track2Mesh.position.set(0.9, -0.4, 0.6);
    track2Mesh.rotation.x = Math.PI / 4;
    machineGroup.add(track2Mesh);

    const slider2Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.35, 12), accentJointMat);
    slider2Mesh.castShadow = true;
    track2Mesh.add(slider2Mesh);

    // 5. INCOMPLETE ELEMENT (Unfinished Frame Leg)
    const incompleteFrameGeo = new THREE.BoxGeometry(0.08, 1.6, 0.08);
    const incompleteFrame = new THREE.Mesh(incompleteFrameGeo, darkMatteMat);
    incompleteFrame.position.set(-1.8, -1.2, 0.4);
    incompleteFrame.rotation.z = -Math.PI / 4;
    machineGroup.add(incompleteFrame);

    const openTipNode = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.14), oliveRibbonMat);
    openTipNode.position.set(-2.4, -1.8, 0.4);
    machineGroup.add(openTipNode);

    // -----------------------------------------------------------------
    // MOUSE PARALLAX & EVENT LISTENERS
    // -----------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

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
    // ANIMATION RENDER LOOP: Continuous Kinetic Reconfiguration
    // -----------------------------------------------------------------
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.012;

      const p = prefersReducedMotion ? 1.0 : Math.max(0, Math.min(1, progressRef.current));

      // 1. Kinetic Reconfiguration Animations
      // Arc opens and rotates slowly
      arcMesh.rotation.z = Math.sin(time * 0.25) * 0.12 + p * 0.2;
      railMesh.rotation.y = Math.cos(time * 0.2) * 0.15;

      // Mechanical sliders slide back and forth along tracks
      slider1Mesh.position.y = Math.sin(time * 0.8) * 1.1;
      slider2Mesh.position.y = Math.cos(time * 0.6) * 0.9;

      // Translucent Structural Planes slowly pivot along asymmetrical axes
      plane1Mesh.rotation.z = Math.sin(time * 0.3) * 0.15 + p * 0.15;
      plane2Mesh.rotation.x = -Math.PI / 3 + Math.cos(time * 0.25) * 0.12;

      // Unfinished open tip node pulses subtly
      openTipNode.scale.setScalar(1 + Math.sin(time * 1.2) * 0.08);

      // 2. Continuous Micro-Rotation & Parallax
      machineGroup.rotation.y += 0.0025;
      machineGroup.rotation.x = Math.sin(time * 0.15) * 0.04;

      machineGroup.rotation.y += (mouseX * 0.18 - machineGroup.rotation.y) * 0.04;
      machineGroup.rotation.x += (-mouseY * 0.12 - machineGroup.rotation.x) * 0.04;

      // 3. Scroll-Driven Kinetic Expansion & Camera Depth Shift
      machineGroup.scale.setScalar(0.82 + p * 0.32);
      camera.position.z = 8.8 - p * 1.1;

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

      arcGeo.dispose();
      railGeo.dispose();
      ribbonGeo.dispose();
      plane1Geo.dispose();
      plane2Geo.dispose();
      plane3Geo.dispose();
      track1Geo.dispose();
      slider1Geo.dispose();
      track2Geo.dispose();
      incompleteFrameGeo.dispose();

      darkMatteMat.dispose();
      darkOlivePolishedMat.dispose();
      oliveRibbonMat.dispose();
      translucentPlaneMat.dispose();
      accentJointMat.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[420px]" />;
}
