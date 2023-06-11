// Importar as bibliotecas necessárias do Three.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextureLoader } from 'three';
import { MeshStandardMaterial } from 'three';
import { Mesh } from 'three';
import { PlaneGeometry } from 'three';


// Inicializar a cena, a câmera e o renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adicionar controles para manipulação da câmera
const controls = new OrbitControls(camera, renderer.domElement);

// Adicionar redimensionamento da tela e fullscreen
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Adicionar luz ambiente
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Adicionar luz direcional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-2, 3, 2);
directionalLight.target.position.set(0, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

// Adicionar luz pontual
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(0, 3, 0);
//pointLight.target.position.set(0, 0, 0); // Direção da luz pontual (apontando para o centro da cena)
scene.add(pointLight);
scene.add(pointLight.target);

// Adicionar sombras
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
directionalLight.castShadow = true;
pointLight.castShadow = true;

// Adicionar chão
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.8, metalness: 0.2 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);


// Adicionar paredes à sala de estar
const textureLoader = new TextureLoader();
const wallTexture = textureLoader.load('glTF-Sample-Models/2.0/wood_floor_deck_4k.gltf/textures/wood_floor_deck_diff_4k.jpg')

const wallGeometry1 = new THREE.PlaneGeometry(10, 3);
const wallMaterial1 = new THREE.MeshStandardMaterial({ map: wallTexture });
const wall1 = new THREE.Mesh(wallGeometry1, wallMaterial1);
wall1.position.set(0, 1.5, -5);
scene.add(wall1);

const wallGeometry2 = new THREE.PlaneGeometry(10, 3);
const wallMaterial2 = new THREE.MeshStandardMaterial({ map: wallTexture });
const wall2 = new THREE.Mesh(wallGeometry2, wallMaterial2);
wall2.position.set(-5, 1.5, 0);
wall2.rotation.y = Math.PI / 2;
scene.add(wall2);

const wallGeometry3 = new THREE.PlaneGeometry(10, 3);
const wallMaterial3 = new THREE.MeshStandardMaterial({ map: wallTexture });
const wall3 = new THREE.Mesh(wallGeometry3, wallMaterial3);
wall3.position.set(5, 1.5, 0);
wall3.rotation.y = Math.PI / 2;
scene.add(wall3);


// Adicionar 10 objetos à sala de estar


// mesa de centro
const tableLoader = new GLTFLoader();
tableLoader.load('glTF-Sample-Models/2.0/CoffeeTable_01_4k.gltf/CoffeeTable_01_4k.gltf', (gltf) => {
  const table = gltf.scene;
  table.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  table.position.set(-1.6, 0, -1.6);
  scene.add(table);
});

// vaso
const vasoLoader = new GLTFLoader();
tableLoader.load('glTF-Sample-Models/2.0/potted_plant_04_4k.gltf/potted_plant_04_4k.gltf', (gltf) => {
  const table = gltf.scene;
  table.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  table.position.set(-1.6, 0.5, -1.6);
  scene.add(table);
});


// espelho
const espelhoLoader = new GLTFLoader();
tableLoader.load('glTF-Sample-Models/2.0/ornate_mirror_01_4k.gltf/ornate_mirror_01_4k.gltf', (gltf) => {
  const table = gltf.scene;
  table.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  table.position.set(0, 2.5, -5);
  scene.add(table);
});


// console
const consoleLoader = new GLTFLoader();
tableLoader.load('glTF-Sample-Models/2.0/ClassicConsole_01_4k.gltf/ClassicConsole_01_4k.gltf', (gltf) => {
  const table = gltf.scene;
  table.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  table.position.set(-4, 0, 0);
  scene.add(table);
});


//sofá
const loader = new GLTFLoader();
loader.load('glTF-Sample-Models/2.0/sofa_03_4k.gltf/sofa_03_4k.gltf', (gltf) => {
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  gltf.scene.position.set(-1, 0, -4); 
  scene.add(gltf.scene);
});

//sofá2
const Sofaloader = new GLTFLoader();
loader.load('glTF-Sample-Models/2.0/sofa_03_4k.gltf/sofa_03_4k.gltf', (gltf) => {
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  gltf.scene.position.set(-4, 0, -3); 
  gltf.scene.rotation.y = Math.PI / 2;
  scene.add(gltf.scene);
});


//Cadeira
const gltfloader = new GLTFLoader();
loader.load('glTF-Sample-Models/2.0/SheenChair/glTF/SheenChair.gltf', (gltf) => {
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  gltf.scene.position.set(-3, 0, -4); // Definir a posição da cadeira
 //gltf.scene.rotation.y = Math.PI / 2;
  scene.add(gltf.scene);
});


// Adicionar animação
const animate = () => {
  requestAnimationFrame(animate);
  // Adicione a animação dos objetos aqui
  renderer.render(scene, camera);
};

camera.position.set(0, 2, 5);
//camera.position.z = 5;
directionalLight.target.position.copy(scene.position);
camera.lookAt(scene.position);


animate();
