'use client';

import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { footprint } from '@/content/site';

const R = 1.4;

// Lat/Lon (degrees) → point on a sphere of radius r.
function llToVec(lat: number, lon: number, r = R): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

type Conn = [string, string];

// Capital-flow story: sourcing (China, Turkey) → processing (Egypt) →
// markets, all routed through the UAE governance hub.
const CONNECTIONS: Conn[] = [
  ['China', 'UAE'],
  ['Turkey', 'UAE'],
  ['Egypt', 'UAE'],
  ['Yemen', 'UAE'],
  ['China', 'Egypt'],
  ['Turkey', 'Egypt'],
  ['UAE', 'Canada'],
];

const byCountry = Object.fromEntries(footprint.map((f) => [f.country, f]));

function Arc({
  from,
  to,
  delay,
}: {
  from: THREE.Vector3;
  to: THREE.Vector3;
  delay: number;
}) {
  const pulse = useRef<THREE.Mesh>(null);

  const { points, curve } = useMemo(() => {
    const mid = from.clone().add(to).multiplyScalar(0.5);
    const dist = from.distanceTo(to);
    // Lift the control point off the surface proportional to arc length.
    mid.normalize().multiplyScalar(R + dist * 0.55);
    const c = new THREE.QuadraticBezierCurve3(from.clone(), mid, to.clone());
    return { points: c.getPoints(50), curve: c };
  }, [from, to]);

  useFrame(({ clock }) => {
    if (!pulse.current) return;
    const t = (clock.getElapsedTime() * 0.18 + delay) % 1;
    const p = curve.getPoint(t);
    pulse.current.position.copy(p);
    const scale = 0.5 + Math.sin(t * Math.PI) * 0.9;
    pulse.current.scale.setScalar(scale * 0.035);
  });

  return (
    <group>
      <Line
        points={points}
        color="#ED5225"
        lineWidth={1.1}
        transparent
        opacity={0.55}
      />
      <mesh ref={pulse}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial color="#F2784F" toneMapped={false} />
      </mesh>
    </group>
  );
}

function Marker({
  pos,
  hub,
}: {
  pos: THREE.Vector3;
  hub: boolean;
}) {
  const ring = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ring.current) return;
    ring.current.lookAt(0, 0, 0); // orient ring plane toward globe centre
    const s = 1 + (Math.sin(clock.getElapsedTime() * 1.5) + 1) * 0.6;
    ring.current.scale.setScalar(s);
    const mat = ring.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.5 * (1 - (s - 1) / 1.2);
  });

  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[hub ? 0.03 : 0.022, 16, 16]} />
        <meshBasicMaterial color="#ED5225" toneMapped={false} />
      </mesh>
      <mesh ref={ring}>
        <ringGeometry args={[0.03, 0.045, 24]} />
        <meshBasicMaterial
          color="#ED5225"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function GlobeBody() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.06; // gentle auto-rotate
    // Subtle parallax toward the pointer.
    const targetX = pointer.y * 0.12;
    group.current.rotation.x +=
      (targetX - group.current.rotation.x) * 0.04;
  });

  const markers = useMemo(
    () =>
      footprint.map((f) => ({
        country: f.country,
        pos: llToVec(f.coords.lat, f.coords.lon),
        hub: f.flow === 'hub',
      })),
    [],
  );

  return (
    <group ref={group}>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[R - 0.01, 48, 48]} />
        <meshStandardMaterial
          color="#0E1922"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      {/* Lat/long grid */}
      <mesh>
        <sphereGeometry args={[R, 36, 24]} />
        <meshBasicMaterial
          color="#3a4a55"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>
      {/* Atmosphere */}
      <mesh scale={1.18}>
        <sphereGeometry args={[R, 32, 32]} />
        <meshBasicMaterial
          color="#ED5225"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {markers.map((m) => (
        <Marker key={m.country} pos={m.pos} hub={m.hub} />
      ))}

      {CONNECTIONS.map(([a, b], i) => {
        const fa = byCountry[a];
        const fb = byCountry[b];
        if (!fa || !fb) return null;
        return (
          <Arc
            key={`${a}-${b}`}
            from={llToVec(fa.coords.lat, fa.coords.lon)}
            to={llToVec(fb.coords.lat, fb.coords.lon)}
            delay={(i / CONNECTIONS.length) * 1}
          />
        );
      })}
    </group>
  );
}

export default function Globe({ interactive = true }: { interactive?: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 2, 4]} intensity={1.1} />
      <directionalLight position={[-4, -1, -2]} intensity={0.3} color="#ED5225" />
      <GlobeBody />
      {interactive && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          rotateSpeed={0.4}
          autoRotate={false}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.7}
        />
      )}
    </>
  );
}
