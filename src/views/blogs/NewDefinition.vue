<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const router = useRouter();

const blogPost = ref({
    id: 2,
    title: "The New Delphi Definition of Dyslexia: What It Means for You",
    content: `
        <p class="mb-4">On 25th February 2025, a new definition of dyslexia was confirmed by experts using the Delphi method. This new definition is an important step forward in recognising the wide range of difficulties people with dyslexia face. It will help ensure that more people receive the support they need.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">What Does the New Definition Say?</h2>
        <p class="mb-4">The new Delphi definition describes dyslexia as a set of processing difficulties that affect learning to read and spell. This means that dyslexia is not just about struggling with literacy but about the way the brain processes information. The definition also highlights that dyslexia exists on a continuum, meaning that it affects people in different ways and to different degrees.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">How Will This Change Dyslexia Assessments?</h2>
         <p class="mb-4">If you or your child are being assessed for dyslexia, this new definition means that:</p>
        <ul class="list-disc pl-6 mb-4">
            <li>More people may be recognised as having dyslexia. Because the definition is broader, it acknowledges that dyslexia can present in different ways, not just through traditional reading and spelling difficulties. </li>
            <li>Early identification and intervention will improve. Since dyslexia is now seen as a spectrum, professionals can spot signs earlier, even if difficulties are mild or don’t fit the previous strict criteria. </li>
            <li>Support plans will be more personalised. Understanding dyslexia as a broader condition means that the recommendations in an assessment report can be even more tailored to  meet individual needs.</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">A More Inclusive Approach</h2>
        <p class="mb-4">The new definition is a big step forward because:</p>
        <p>It goes beyond phonics difficulties. While struggling with processing the sounds in words is common in dyslexia, other factors - such as struggling to recognise and remmeber letter patterns and words - also plays a role.</p>
        <p>It recognises overlapping difficulties. Many people with dyslexia also have challenges with maths (dyscalculia), attention (ADHD), or coordination (dyspraxia), and these will now be taken into account. </p>
        <p>It applies across all ages. Dyslexia is now understood as a lifelong condition that affects people at school, in work, and in daily life.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">What This Means for You</h2>
        <p class="mb-4">If you are seeking a dyslexia assessment, this new definition means that the process will be even more comprehensive and inclusive. It allows for a better understanding of your strengths and challenges, leading to the right support and strategies to help you thrive.</p>
    `,
    date: "2024-03-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3"
});

const goBack = () => {
    router.back();
};
</script>

<template>
    <NavBar />
    <article class="max-w-4xl mx-auto px-4 py-16">
        <button 
            @click="goBack"
            class="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Blog
        </button>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="relative">
                <img 
                    :src="blogPost.image" 
                    :alt="blogPost.title"
                    class="w-full h-96 object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div class="p-8">
                <div class="flex justify-between items-center mb-6">
                    <span class="text-sm text-gray-500">{{ blogPost.date }}</span>
                    <span class="text-sm text-gray-500">{{ blogPost.readTime }}</span>
                </div>

                <h1 class="text-4xl font-bold mb-8 text-gray-800">{{ blogPost.title }}</h1>

                <div 
                    class="prose prose-lg max-w-none"
                    v-html="blogPost.content"
                ></div>
            </div>
        </div>
    </article>
    <Footer />
</template> 