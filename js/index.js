let scene, camera, renderer, plane;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x18181b );
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('resources/bartosz.png');
    const geometry = new THREE.PlaneGeometry(3, 3);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, alphaTest: 0.5    });
    plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    plane.rotation.y += 0.1;

    renderer.render(scene, camera);
}

init();
animate();