<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const router = useRouter();

const blogPost = ref({
    id: 1,
    title: "Does Dyslexia Exist?",
    content: `
        <p class="mb-4">Dyslexia, a learning difficulty affecting reading and spelling, has long sparked debate. Some people question whether dyslexia is real or simply a label for general reading struggles. The recent Delphi study (Carroll et al., 2025) helps clarify this discussion.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Why Do Some People Think Dyslexia Doesn't Exist?</h2>
        <p class="mb-4">In the past, public perception led to the idea that dyslexia not a real condition. This was based on the notion that children who were straggling with literacy skills were simply “stupid”. However, more recent research has shown that dyslexia is not related to intelligence.</p>
        <p>Additionally, some critics argue that dyslexia is no different from general reading difficulties. For instance, Professor Julian Elliott describes dyslexia as a "meaningless label." He believes that rather than using specific labels, we should focus on improving the reading skills of all struggling readers.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Evidence Supporting Dyslexia's Existence</h2>
         <p class="mb-4">Despite these criticisms, significant scientific evidence supports dyslexia as a specific condition. Studies have found clear differences in the brain structures of people with dyslexia, especially in areas linked to language and reading. Genetics also play a role, with certain genes increasing the likelihood of having dyslexia.</p>
        <p>The Delphi study, involving experts from different fields, further supports the idea that dyslexia is real. Experts agree dyslexia typically involves persistent problems with word reading spelling fluency, usually due to difficulties processing language sounds (phonological processing). They also highlight that dyslexia varies in terms of how it impacts an individual and it often appears alongside other conditions, such as ADHD and autism.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p class="mb-4">While discussions around the exact definition continue, scientific evidence and expert consensus strongly indicate dyslexia is a genuine condition. Recognising dyslexia as real helps ensure individuals access the right support, making a real difference in their lives.</p>
    `,
    date: "2025-03-14",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3"
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