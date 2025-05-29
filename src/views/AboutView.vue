<script setup>
import { ref, onMounted, createApp } from 'vue';

import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <NavBar />

    <section class="flex flex-col justify-center max-w-3xl mx-auto gap-6 mt-32 pb-20 px-4">
        <div class="text-center mb-8">
            <h2 class="font-bold text-3xl mb-4 text-gray-800">About Lexety Education</h2>
            <div class="w-24 h-1 bg-[#C0DAD6] mx-auto rounded-full"></div>
        </div>

        <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed">
                As a qualified teacher, Chrissy brings this experience to her assessment work. She offers recommendations and advice based on her knowledge and expertise.
            </p>

            <p class="text-gray-700 leading-relaxed mt-6">
                She offers full diagnostic assessment for dyslexia and holds the following qualifications:
            </p>

            <ul class="list-none space-y-0 mt-4">
                <li v-for="(qualification, index) in qualifications" :key="index" 
                    class="flex items-center text-gray-700">
                    <span class="text-blue-600 mr-2">•</span>
                    {{ qualification }}
                </li>
            </ul>

            <p class="text-gray-700 leading-relaxed mt-8">
                Dyslexia testing can take place online or in Truro, Cornwall.​ If you have questions about dyslexia testing online or dyslexia assessment in Truro, Cornwall, contact Chrissy at Lexety Education.
            </p>

            <div class="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p class="text-gray-700">
                    Chrissy has an enhanced DBS check on the Update Service.
                </p>
            </div>
        </div>
    </section>

    <Footer />
</template>

<script>
const qualifications = [
    'Assessment Practising Certificate (APC)',
    'Associate Member of the British Dyslexia Association (AMBDA)',
    'Member of Dyslexia Guild (MDG)',
    'Member of PATOSS',
    'Accredited Teacher Status (British Dyslexia Association)',
    'MA Education (Special Educational Needs and Inclusion)',
    'PG Cert Dyslexia and Literacy Difficulties',
    'PG Cert Applied Psychology',
    'PGCE Primary',
    'Qualified Teacher Status (QTS)',
    'BA (Hons) Education and Training'
];
</script>
