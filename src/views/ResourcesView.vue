<script setup>
import { ref, onMounted, createApp } from 'vue';
import linkIcon from '@/assets/link.png';

import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <NavBar />

    <section class="flex flex-col justify-center max-w-3xl mx-auto gap-6 mt-32 pb-20 px-4">
        <div class="text-center mb-8">
            <h2 class="font-bold text-3xl mb-4 text-gray-800">Resources</h2>
            <p>Below are resources and organisations which focus on dyslexia.​</p>
            <div class="w-24 h-1 bg-[#C0DAD6] mx-auto rounded-full mt-4"></div>
        </div>

        <div class="prose prose-lg max-w-none">
            <h3 class="font-bold text-xl mb-6">Useful links</h3>
            <p class="text-gray-700 leading-relaxed mb-8">
                These organisations offer help, advice and support in relation to dyslexia.
            </p>

            <div class="space-y-8">
                <div class="group">
                    <a href="https://www.bdadyslexia.org.uk/" target="_blank" 
                       class="text-lg font-semibold text-[#2C5282] hover:text-[#1A365D] transition-colors duration-200 inline-flex items-center gap-2">
                        British Dyslexia Association (BDA)
                        <img :src="linkIcon" alt="External link" class="w-4 h-4" />
                    </a>
                    <p class="mt-2 text-gray-700 leading-relaxed">
                        The British Dyslexia Association has been the voice of dyslexic people since 1972. They are a membership organisation working to achieve a dyslexia-friendly society for all.
                    </p>
                </div>

                <div class="group">
                    <a href="https://www.patoss-dyslexia.org/" target="_blank"
                       class="text-lg font-semibold text-[#2C5282] hover:text-[#1A365D] transition-colors duration-200 inline-flex items-center gap-2">
                        Professional Association of Teachers of Students with Specific Learning Difficulties (PATOSS)
                        <img :src="linkIcon" alt="External link" class="w-4 h-4" />
                    </a>
                    <p class="mt-2 text-gray-700 leading-relaxed">
                        Patoss is the professional association of teachers of students with specific learning difficulties, for all those concerned with the teaching and support of pupils with SpLD, for example: dyslexic, dyspraxic, dyscalculic, ADHD.
                    </p>
                </div>

                <div class="group">
                    <a href="https://www.dyslexic.org.uk/" target="_blank"
                       class="text-lg font-semibold text-[#2C5282] hover:text-[#1A365D] transition-colors duration-200 inline-flex items-center gap-2">
                        Dyslexia Research Trust
                        <img :src="linkIcon" alt="External link" class="w-4 h-4" />
                    </a>
                    <p class="mt-2 text-gray-700 leading-relaxed">
                        The mission of the Dyslexia Research Trust (DRT) is to help people with reading difficulties, especially young children, to achieve their full potential in life.
                    </p>
                </div>

                <div class="group">
                    <a href="http://www.thedyslexia-spldtrust.org.uk/" target="_blank"
                       class="text-lg font-semibold text-[#2C5282] hover:text-[#1A365D] transition-colors duration-200 inline-flex items-center gap-2">
                        Dyslexia SpLD Trust
                        <img :src="linkIcon" alt="External link" class="w-4 h-4" />
                    </a>
                    <p class="mt-2 text-gray-700 leading-relaxed">
                        The Dyslexia-SpLD-Trust, or the Trust, is a collaboration of voluntary and community organisations with funding from the Department for Education to provide reliable information to parents, teachers, schools and the wider sector. It acts as the important communication channel between government, leading dyslexia organisations, parents, schools, colleges, teachers and the sector.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>

<script>
const qualifications = [
    'Struggles learning letter sounds',
    'Difficulties remembering sequences such as the alphabet or days of the week',
    'Difficulty blending letters to form words',
    'Confusing visually similar words when reading',
    'Problems with spelling',
    'Slower reading and writing speeds',
    'Needing to re-read paragraphs for comprehension',
];
</script>
