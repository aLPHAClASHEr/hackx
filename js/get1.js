
        import { GLTFLoader } from './GLTFLoader.js';
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            .01,
            1000
        );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        var loader = new GLTFLoader();
        var obj;
        loader.load('../img5/scene.gltf', function (gltf) {
            obj = gltf.scene;
            scene.add(gltf.scene);

        });
        scene.background = new THREE.Color(0x181f2b)
        var light = new THREE.HemisphereLight(0xfffffff, 0x000000, 60);
        scene.add(light);
        camera.position.set(0, 0.5, 400);
        function animate() {
            requestAnimationFrame(animate);
            obj.rotation.y += 0.03;
            renderer.render(scene, camera);
        }
        animate();