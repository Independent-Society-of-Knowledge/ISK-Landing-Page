<template>
  <canvas ref="el"/>
</template>
<script setup lang="ts">
import * as THREE from "three"
import {onMounted, ref} from "vue";
import {useEventListener, useResizeObserver} from "@vueuse/core";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Vector3} from "three";
import {LineMaterial} from "three/examples/jsm/lines/LineMaterial";

const el = ref<HTMLCanvasElement | null>(null)


function meshPoints(a = 1.0) {

  const res: Vector3[] = []
  const connections: any[] = []
  const a_2 = 0.5 * a;

  const v1 = new Vector3(a_2, a_2, 0)
  const v2 = new Vector3(a_2, 0, a_2)
  const v3 = new Vector3(0, a_2, a_2)

  for (let i = -3; i <= 3; i++) {
    for (let j = -3; j <= 3; j++) {
      for (let k = -3; k <= 3; k++) {
        const p1 = v1.clone().multiplyScalar(i)
            .add(v2.clone().multiplyScalar(j))
            .add(v3.clone().multiplyScalar(k))

        const p2 = p1.add(
            v1.clone().multiplyScalar(0.25)
                .add(v2.clone().multiplyScalar(0.25))
                .add(v3.clone().multiplyScalar(0.25))
        )
        res.push(p1, p2)
        connections.push(
            p1, p2,
            p2, p1.clone().add(v1),
            p2, p1.clone().add(v2),
            p2, p1.clone().add(v3),
        )
      }
    }
  }
  return [res, connections]
}

onMounted(() => {
  const canvas = el.value!!
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(100,2,1,40)
  const renderer = new THREE.WebGLRenderer({canvas: canvas})

  function setSizes() {
    camera.updateProjectionMatrix()

    camera.aspect = canvas.clientWidth / canvas.clientHeight
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  }

  setSizes()
  scene.add(new THREE.AxesHelper(25))
  useEventListener('resize', setSizes)

  const controls = new OrbitControls(camera, renderer.domElement);

  controls.update();

  const material = new THREE.MeshStandardMaterial({color: '#7300ff', metalness: 0.2});
  const light = new THREE.AmbientLight(0xffffff, 1)
  const light2 = new THREE.PointLight(0xffffff, 10000)
  light2.position.z = -30
  light2.position.x = -30
  light2.position.y = -30
  scene.add(light)
  scene.add(light2)
  const data = meshPoints(5)
  data[0].map(it => {
    const geometry = new THREE.SphereGeometry(0.8);
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(it.x, it.y, it.z)
    return sphere
  })
      .forEach(it => {
        scene.add(it)
      })

  for (let i = 0; i < data[1].length; i += 2) {
    const start = data[1][i] as Vector3
    const end = data[1][i + 1] as Vector3
    const connection = end.clone().sub(start);
    const distance = connection.length();
    const direction = connection.clone().normalize();

    const cylinder = new THREE.Mesh(
        new THREE. CylinderGeometry(0.2, 0.2, distance / 1.5),
        new THREE.MeshNormalMaterial()
    );
    const pivot = new THREE.Group();
    pivot.add(cylinder);

    const halfDistance = direction.clone().multiplyScalar(distance / 2.0);

    pivot.position.copy(start);
    pivot.position.add(halfDistance);

    scene.add(pivot);

    pivot.lookAt(end);
    cylinder.rotation.x = Math.PI / 2.0;
  }


  camera.position.z = 30
  controls.autoRotate = true
  let lastTime = Date.now()

  function animate() {
    if (Date.now() - lastTime > (1.0 / 30) * 1000) {
      lastTime = Date.now()
      renderer.render(scene, camera);
      controls.update()
    }
    requestAnimationFrame(animate);

  }

  animate();

})
</script>
<style scoped>

</style>
