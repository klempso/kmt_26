import { ContactShadows } from '@react-three/drei';

const HeroLights = () => {
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[-40, 15, 5]} intensity={7} color='#ffffff' />
			<directionalLight
				position={[20, 30, 10]}
				intensity={8}
				castShadow
				shadow-mapSize={[1024, 1024]}
				shadow-camera-left={-30}
				shadow-camera-right={30}
				shadow-camera-top={30}
				shadow-camera-bottom={-30}
				shadow-camera-far={100}
			/>

			<mesh
				position={[-10, -2.5, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				receiveShadow
			>
				<planeGeometry args={[50, 80]} />
				<shadowMaterial opacity={0.05} />
			</mesh>
		</>
	);
};

export default HeroLights;
