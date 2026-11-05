'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Sparkles, Layers, ShieldCheck, Activity } from 'lucide-react';

export default function ThreeCompositeViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeMaterial, setActiveMaterial] = useState<'smc' | 'carbon' | 'fiberglass'>('smc');
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const laserBeamRef = useRef<THREE.Mesh | null>(null);

  const HOTSPOTS = [
    { id: 0, title: 'Flame-Retardant SMC Shell', desc: 'Compression moulded thermoset body with UL-94 V0 fire safety rating.' },
    { id: 1, title: 'Precision Matched Die Tolerance', desc: 'CNC hardened steel dies guarantee ±0.15mm dimensional repeatability.' },
    { id: 2, title: 'High Dielectric Barrier', desc: '>15 kV/mm breakdown strength for electrical switchgear safety.' },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(3.8, 2.5, 4.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xff7733, 2.8);
    dirLight1.position.set(5, 8, 4);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 2.2);
    dirLight2.position.set(-5, -3, -4);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffaa44, 2, 10);
    pointLight.position.set(0, 3, 2);
    scene.add(pointLight);

    // Mesh Group
    const group = new THREE.Group();
    meshGroupRef.current = group;
    scene.add(group);

    // Materials
    const getMaterial = (type: 'smc' | 'carbon' | 'fiberglass', isWire: boolean) => {
      let color = 0x1e293b;
      let roughness = 0.35;
      let metalness = 0.25;

      if (type === 'smc') {
        color = 0x1f293d; // Industrial navy composite
        roughness = 0.3;
        metalness = 0.4;
      } else if (type === 'carbon') {
        color = 0x111827; // Carbon black
        roughness = 0.2;
        metalness = 0.6;
      } else if (type === 'fiberglass') {
        color = 0x334155; // Reinforced fiberglass slate
        roughness = 0.5;
        metalness = 0.15;
      }

      return new THREE.MeshStandardMaterial({
        color,
        roughness,
        metalness,
        wireframe: isWire,
      });
    };

    // Build Industrial Composite Enclosure Model (Main Body + Cavity + Reinforcement Ribs + Mounting Bosses)
    const baseMat = getMaterial(activeMaterial, wireframe);

    // Outer Casing
    const baseGeo = new THREE.BoxGeometry(2.6, 1.4, 2.0);
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    group.add(baseMesh);

    // Top Beveled Flange
    const flangeGeo = new THREE.BoxGeometry(2.8, 0.15, 2.2);
    const flangeMat = new THREE.MeshStandardMaterial({
      color: 0xff6b35,
      metalness: 0.6,
      roughness: 0.25,
      wireframe,
    });
    const flangeMesh = new THREE.Mesh(flangeGeo, flangeMat);
    flangeMesh.position.y = 0.75;
    group.add(flangeMesh);

    // Structural Ribs (3D Stiffeners for high stiffness-to-weight)
    const ribMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.4,
      roughness: 0.3,
      wireframe,
    });
    for (let i = -1; i <= 1; i++) {
      const ribGeo = new THREE.BoxGeometry(0.08, 1.2, 1.8);
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.x = i * 0.7;
      rib.position.y = 0;
      group.add(rib);
    }

    // Cylindrical Brass / Steel Inserts (In-Mould Compression Inserts)
    const insertGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.3, 16);
    const insertMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.1,
    });
    const insertPositions = [
      [-1.1, 0.8, -0.8],
      [1.1, 0.8, -0.8],
      [-1.1, 0.8, 0.8],
      [1.1, 0.8, 0.8],
    ];
    insertPositions.forEach(([x, y, z]) => {
      const insertMesh = new THREE.Mesh(insertGeo, insertMat);
      insertMesh.position.set(x, y, z);
      group.add(insertMesh);
    });

    // Holographic Laser Scanner Ring (Animated QA Inspection Laser)
    const laserGeo = new THREE.RingGeometry(1.6, 1.66, 64);
    const laserMat = new THREE.MeshBasicMaterial({
      color: 0xff6b35,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
    });
    const laser = new THREE.Mesh(laserGeo, laserMat);
    laser.rotation.x = Math.PI / 2;
    laserBeamRef.current = laser;
    group.add(laser);

    // Ground Grid
    const gridHelper = new THREE.GridHelper(8, 16, 0xff6b35, 0x1e293b);
    gridHelper.position.y = -1.2;
    scene.add(gridHelper);

    camera.lookAt(0, 0, 0);

    // Mouse Interaction for 3D Drag/Orbit
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !meshGroupRef.current) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      meshGroupRef.current.rotation.y += deltaX * 0.008;
      meshGroupRef.current.rotation.x += deltaY * 0.008;

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch Support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !meshGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      const deltaY = e.touches[0].clientY - prevMousePos.y;

      meshGroupRef.current.rotation.y += deltaX * 0.008;
      meshGroupRef.current.rotation.x += deltaY * 0.008;

      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (meshGroupRef.current && autoRotate && !isDragging) {
        meshGroupRef.current.rotation.y += 0.006;
      }

      // Laser Scanner Animation (Oscillates along Y-axis)
      if (laserBeamRef.current) {
        laserBeamRef.current.position.y = Math.sin(elapsedTime * 2.2) * 0.9;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [wireframe, autoRotate, activeMaterial]);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] rounded-3xl bg-gradient-to-br from-[#0c1633] via-[#091024] to-[#040814] border border-orange-500/30 shadow-2xl overflow-hidden flex flex-col group">
      {/* 3D Viewport Title & Status */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
        <span className="text-[11px] font-mono tracking-widest uppercase text-slate-300 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/80 backdrop-blur-md">
          3D Matched Die CAD Engine
        </span>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={() => setWireframe(!wireframe)}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-all backdrop-blur-md ${
            wireframe
              ? 'bg-orange-500 text-white border-orange-400'
              : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-800'
          }`}
          title="Toggle Wireframe CAD Mesh"
        >
          {wireframe ? 'Solid' : 'CAD Mesh'}
        </button>
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-1.5 rounded-md border transition-all backdrop-blur-md ${
            autoRotate
              ? 'bg-orange-500 text-white border-orange-400'
              : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:text-white'
          }`}
          title="Toggle Auto 360° Rotation"
        >
          <RotateCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Canvas Element */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Drag Hint Tooltip */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none z-10 text-[11px] text-slate-400 font-mono tracking-wide bg-slate-950/70 px-3 py-1 rounded-full border border-slate-800/80 backdrop-blur-md flex items-center gap-1.5">
        <Activity className="w-3 h-3 text-orange-400 animate-pulse" />
        <span>Click & Drag to Rotate 3D Component • Laser Metrology Active</span>
      </div>

      {/* Bottom Material Switcher & Feature Callouts */}
      <div className="absolute bottom-3 inset-x-3 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Hotspot pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
          {HOTSPOTS.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot.id)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all whitespace-nowrap ${
                activeHotspot === spot.id
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {spot.title.split(' ')[0]} {spot.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Selected Hotspot Description */}
        <div className="text-[11px] text-slate-300 text-left truncate max-w-xs hidden md:block">
          {HOTSPOTS[activeHotspot ?? 0].desc}
        </div>
      </div>
    </div>
  );
}

