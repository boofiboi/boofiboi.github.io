let scene, camera, renderer, plane;

function init() {
    // Create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x18181b );
    // Set up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load the texture (image)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('resources/bartosz.png'); // Replace with the path to your image

    // Create a plane geometry and apply the texture
    const geometry = new THREE.PlaneGeometry(3, 3); // Adjust the size as needed
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, alphaTest: 0.5    });
    plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate the plane around its Y-axis
    plane.rotation.y += 0.005;

    renderer.render(scene, camera);
}

init();
animate();