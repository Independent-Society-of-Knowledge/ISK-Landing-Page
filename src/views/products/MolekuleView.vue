<template>
  <div class="min-h-screen min-w-full max-w-none flex flex-col overflow-clip">
    <div class="relative z-[2]">
      <div class="w-screen"/>
      <div class="h-screen grid grid-cols-1 md:grid-cols-2">
        <StaticContent
            title="Molekule"
            subtitle="Molecular Dynamics Toolkit"
            class="backdrop-blur-[2px] h-full p-3 px-5"
        >
          <div class="flex flex-col justify-between gap-10">
            <div class="">
              <p>
                A comprehensive toolkit to prepare, visualize, run and post-process
                <span class="font-bold">MD</span> and <span class="font-bold">DFT</span> simulation with an all-in-one
                process.
              </p>

              <p>
                Molekule is a <span class="font-bold text-lg">"Meta Framework"</span>
                <br/>
                Meta frameworks don't reinvent the wheel!
                <br/>
                they improve what already exist, we glued everything up for you
              </p>

              <h4>What does it do?</h4>
              <div class="bg-black/[0.5] p-1 ">
                <ul>
                  <li>provides an idiomatic integrated environment</li>
                  <li>snapshots each of your simulations</li>
                  <li>provides scalable environment</li>
                  <li>it's clean, extendable and reusable</li>
                </ul>
              </div>
            </div>
          </div>
        </StaticContent>
        <div class="hidden md:flex flex-row items-center justify-center h-full">
          <MolekuleAtoms class="!h-[80%] !w-full"/>
        </div>
        <div class="flex flex-row w-full items-center justify-center gap-3 col-span-1 md:col-span-2 pb-11">
          <a href="https://github.com/independent-society-of-knowledge/molekule">
            <CvButton kind="primary" size="lg" class="w-[12rem]">
              Get Started
            </CvButton>
          </a>
          <a href="https://github.com/independent-society-of-knowledge/molekule">
            <CvButton kind="secondary" size="lg" class="w-[12rem]">
              Documentation
            </CvButton>
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 h-[160vh] md:h-screen">
        <StaticContent id="what-is-molekule" title="What is Molekule?" anchorage class="max-w-none col-span-1">
          <p>
            MoleKule is an open-source, community-driven objective toolkit that empowers users to procedurally
            generate initial configurations for Molecular Dynamics simulations.
          </p>
          <p>
            Leveraging the full power of programming languages, this versatile toolkit offers unparalleled
            flexibility, enabling users to configure and extend its functionality as needed, without being constrained
            by limited plugins.
          </p>
          <p>
            Despite its robust capabilities, MoleKule boasts a remarkably user-friendly interface, requiring only a
            quick review of straightforward examples to grasp its core functionality.
          </p>
          <p>
            With its reusable and modular design, users can effortlessly repurpose and build upon existing
            configurations, fostering a collaborative ecosystem where airtight, battle-tested, and clean code is
            continuously refined and expanded by the community.
          </p>
          <p>
            Whether you're a seasoned researcher or a budding enthusiast, MoleKule streamlines the intricate process
            of setting up Molecular Dynamics simulations, enabling you to focus on your scientific pursuits while
            benefiting from the collective wisdom of a thriving open-source community.
          </p>
        </StaticContent>
        <div class="flex flex-col items-center justify-start col-span-1">
          <div class="flex flex-col gap-3 h-[80vh] ml-12 overflow-y-scroll overflow-x-scroll">
            <h2 class="text-2xl font-bold">Example</h2>
            <pre class="hljs language-kotlin !px-3">
              <code v-html="code"></code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-full h-screen top-0 left-0 overflow-clip bg-white opacity-20">
      <img src="@/assets/molekuleproduct.jpg"
           class="transition-transform w-screen h-screen object-cover translate-x-[-20%] md:translate-x-[-50%] mix-blend-hard-light">
    </div>
  </div>
</template>
<script setup lang="ts">

import StaticContent from "@/components/blocks/StaticContent.vue";
import MolekuleAtoms from "@/components/MolekuleAtoms.vue";
import hljs from "highlight.js"

const script =
    `
fun main() {

   // geometries
   val env = Environment()
   val boxLen = -20 to 20

   val shape = Box(boxLen, boxLen, boxLen)

   // generation and manipulation
   Grid3D(30, 30, 30)
       .points
       .spanInAllDirections()
       .usingCrystal(Crystal.famous.diamond(40.0))
       .filter { it isInside shape }
       .map {
           atomOf(AtomicMass.C, it)
       }
       .forEach {
           env.add(it)
       }

   // visualization
   env.createVMD()
       .dynamicBonds(cutOff = 40.0, size = 1.0)
       .run()
       .waitUntilExit()

   // simulation
   val lmp = LAMMPS()

   lmp.includeEnvironment(env, "data.in", AtomStyle.FULL)
   lmp.addScriptFile("gas_separation.vm")
 
   lmp.ctx["contains_CH4"] = true
   lmp.ctx["contains_CO2"] = true
 
   lmp.ctx["atom_id_C_in_CH4"] = AtomTypes.CH4_C
   lmp.ctx["atom_id_H_in_CH4"] = AtomTypes.CH4_H
 
   lmp.runMPI(10)

   // and much more
 }
`

const code = hljs.highlight(script, {language: 'kotlin'}).value;
</script>
<style scoped>

</style>
