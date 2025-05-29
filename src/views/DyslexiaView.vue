<script setup>
import { ref, onMounted, createApp } from 'vue';

import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <NavBar />

    <section class="flex flex-col justify-center max-w-3xl mx-auto gap-6 mt-32 pb-20 px-4">
        <div class="text-center mb-8">
            <h2 class="font-bold text-3xl mb-4 text-gray-800">Dyslexia Assessment</h2>
            <p>Testing for dyslexia goes beyond simply providing a diagnosis. It not only identifies if dyslexia is
                present but it also offers a detailed profile of an individual's strengths and areas requiring support
                in school, college, university, and at home.​</p>
            <div class="w-24 h-1 bg-[#C0DAD6] mx-auto rounded-full mt-4"></div>
        </div>

        <div class="prose prose-lg max-w-none">
            <h3 class="font-bold text-xl mb-6">Do I need a dyslexia assessment?</h3>
            <p class="text-gray-700 leading-relaxed">
                Dyslexia is a specific learning difficulty that primarily affects skills involved in accurate and fluent
                reading and spelling. It is a lifelong condition that impacts how the brain processes information.
            </p>

            <p class="text-gray-700 leading-relaxed mt-6">
                People with dyslexia often experience challenges in reading fluently, spelling, and writing speed.
                Common signs may include:
            </p>

            <ul class="list-disc ml-4 space-y-0 mt-4">
                <li v-for="(qualification, index) in qualifications" :key="index" class=" text-gray-700">
                    {{ qualification }}
                </li>
            </ul>

            <p class="text-gray-700 leading-relaxed mt-8">
                Dyslexia is not related to intelligence, and with proper support, individuals can achieve success.
                <br><br>
                If you or your child are experiencing signs of dyslexia, contact Chrissy about dyslexia testing to see
                if it is the right option.
            </p>
        </div>

        <div class="prose prose-lg max-w-none mt-10">
            <h3 class="font-bold text-xl mb-8">What happens before a dyslexia assessment?</h3>
            <h4 class="mb-4 underline">Pre-16 Assessment</h4>
            <p class="text-gray-700 leading-relaxed">
                Before a dyslexia assessment, you will receive a questionnaire to complete about your child.
                Additionally, you will be given a questionnaire to forward to their school.
            </p>

            <p class="text-gray-700 leading-relaxed mt-6">
                If further information is needed, Chrissy will contact you to arrange a telephone meeting. This
                information, combined with the data from the assessment and school, will be used to make a diagnostic
                decision.
            </p>

            <p class="text-gray-700 leading-relaxed mt-6">
                It is natural to feel unsure about the unknown. If your child feels anxious or worried about the
                assessment process, don't hesitate to get in touch with Chrissy to discuss how your child's individual
                needs can be met. ​
            </p>

            <h4 class="underline mb-4 mt-10">Post-16 and Adult Assessment</h4>
            <p class="text-gray-700 leading-relaxed">
                Before a dyslexia assessment, you will receive a questionnaire to complete. Completing this with a
                family member who knows about your birth and developmental history is helpful.
            </p>

            <p class="text-gray-700 leading-relaxed mt-6">
                If further information is needed, Chrissy will contact you to arrange a telephone meeting. This
                information, combined with the data from the assessment, will be used to make a diagnostic decision.​
            </p>
        </div>

        <div class="prose prose-lg max-w-none mt-10">
            <h3 class="font-bold text-xl mb-8">What happens during a dyslexia assessment?</h3>
            <p class="text-gray-700 leading-relaxed">
                On the day of the assessment, various dyslexia tests will be conducted, with opportunities for breaks as
                needed. The tests cover the following areas:
            </p>

            <ul class="list-disc ml-4 space-y-0 mt-4 text-gray-700">
                <li>Underlying Ability: This includes verbal and visual abilities.</li>
                <li>Cognitive Ability: This includes assessments for memory, phonological processing, and processing
                    speed.</li>
                <li>Attainment: This includes an assessment of reading, writing, and spelling. Maths may be included if
                    identified as an area of need.</li>
            </ul>

            <p class="text-gray-700 leading-relaxed mt-6">
                Dyslexia testing takes approximately three hours, sometimes longer depending on individual needs. Within
                three weeks, you will receive a comprehensive diagnostic report. If you wish, a 30-minute telephone call
                can be arranged to discuss the findings.
            </p>
        </div>

        <div class="prose prose-lg max-w-none mt-10">
            <h3 class="font-bold text-xl mb-8">How much does an assessment cost?</h3>

            <div class="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p class="text-gray-700">
                    A full test for dyslexia for a child or adult costs £395.
                </p>
            </div>
            <div class="mt-2 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p class="text-gray-700">
                    Dyslexia assessment can take place online or in Truro, Cornwall.
                </p>
            </div>

            <p class="text-gray-700 leading-relaxed mt-6">
                If you have any questions about dyslexia testing online or dyslexia assessment in Truro, Cornwall,
                contact Chrissy at Lexety Education.
            </p>

            <button class="text-gray-700 mt-6 bg-blue-50 px-6 py-2 duration-500 hover:bg-blue-100 border-blue-100 rounded-lg border">Book now</button>
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
