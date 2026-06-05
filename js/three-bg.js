/**
 * THREE-BG JS
 * Animação "Rede de Vigilância" para o fundo do Hero
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    // Cenário, Câmera e Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera.position.z = 25;

    // Grupo para conter toda a animação
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Criação dos Pontos (Sensores)
    const pointsCount = 120;
    const pointsGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const pointsMaterial = new THREE.MeshStandardMaterial({
        color: 0x0047FF,
        emissive: 0x0033CC,
        emissiveIntensity: 2
    });

    const points = [];
    for (let i = 0; i < pointsCount; i++) {
        const mesh = new THREE.Mesh(pointsGeometry, pointsMaterial);
        mesh.position.set(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30
        );
        networkGroup.add(mesh);
        points.push(mesh);
    }

    // Adicionar luz para brilho dos pontos
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x0047FF, 1);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Pontos Ativos (Pulsação e Ondas)
    const activePointsCount = 5;
    const activePoints = [];
    for (let i = 0; i < activePointsCount; i++) {
        activePoints.push(points[Math.floor(Math.random() * points.length)]);
    }

    // Ondas (Anéis)
    const rings = [];
    const ringGeo = new THREE.RingGeometry(0.1, 0.15, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0047FF, transparent: true, opacity: 0.5, side: THREE.DoubleSide });

    activePoints.forEach(p => {
        const ring = new THREE.Mesh(ringGeo, ringMat.clone());
        ring.position.copy(p.position);
        networkGroup.add(ring);
        rings.push({ mesh: ring, scale: 1, opacity: 0.5 });
    });

    // Linhas de Conexão
    const linesMaterial = new THREE.LineBasicMaterial({ color: 0x0047FF, transparent: true, opacity: 0.15 });
    const linePairs = [];

    // Otimização: conectar apenas pontos próximos
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const dist = points[i].position.distanceTo(points[j].position);
            if (dist < 8) {
                const geometry = new THREE.BufferGeometry().setFromPoints([points[i].position, points[j].position]);
                const line = new THREE.Line(geometry, linesMaterial);
                networkGroup.add(line);
                linePairs.push({ line, p1: points[i], p2: points[j] });
            }
        }
    }

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Loop de Animação
    const clock = new THREE.Clock();

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        // Rotação lenta da cena
        networkGroup.rotation.y += 0.0008;
        networkGroup.rotation.x += 0.0003;

        // Mouse Parallax suave
        networkGroup.rotation.y += (mouseX * 0.05 - networkGroup.rotation.y) * 0.05;
        networkGroup.rotation.x += (-mouseY * 0.05 - networkGroup.rotation.x) * 0.05;

        // Animação de pontos ativos (pulsar)
        activePoints.forEach((p, index) => {
            const pulse = 1 + Math.sin(elapsedTime * 2 + index) * 0.5;
            p.scale.set(pulse, pulse, pulse);
        });

        // Animação das ondas
        rings.forEach(r => {
            r.scale += 0.05;
            r.opacity -= 0.005;
            r.mesh.scale.set(r.scale, r.scale, 1);
            r.mesh.material.opacity = r.opacity;

            if (r.opacity <= 0) {
                r.scale = 1;
                r.opacity = 0.5;
                // Mudar posição para um ponto ativo aleatório para variar
                const randomActive = activePoints[Math.floor(Math.random() * activePoints.length)];
                r.mesh.position.copy(randomActive.position);
            }
        });

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
    console.log('Three.js: Rede de Vigilância Iniciada');
});
