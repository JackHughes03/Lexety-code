<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const router = useRouter();

const blogPost = ref({
    id: 3,
    title: "How Do I Know if I Have Dyslexia?",
    content: `
        <p class="mb-4">Dyslexia is a common learning difference that affects reading, writing, and information processing. While often diagnosed in childhood, many adults may have undiagnosed dyslexia. If you've always struggled with certain tasks but never understood why, you might be wondering if dyslexia could be the explanation. Let's explore the common signs of dyslexia in adults and the benefits of getting a full assessment.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Common Signs of Dyslexia in Adults</h2>
        <h2 class="font-bold">Reading and Writing Difficulties</h2>
        <ul class="list-disc pl-6 mb-4">
            <li>Slow reading speed and difficulty reading aloud</li>
            <li>Trouble sounding out unfamiliar words</li>
            <li>Poor spelling, often spelling the same word differently each time</li>
            <li>Avoiding reading or writing tasks whenever possible</li>
            <li>Difficulty expressing thoughts in writing compared to speaking</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Information Processing Challenges</h2>
        <ul class="list-disc pl-6 mb-4">
            <li>Confusion when given multiple instructions at once</li>
            <li>Difficulty scanning or skimming text</li>
            <li>Trouble focusing on one task or becoming easily distracted</li>
            <li>Feeling overwhelmed when filling out forms</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Memory and Organisation Issues</h2>
        <ul class="list-disc pl-6 mb-4">
            <li>Forgetting conversations or important dates</li>
            <li>Struggling with personal organisation and time management</li>
            <li>Difficulty remembering sequences like days of the week or the alphabet</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Other Indicators</h2>
        <ul class="list-disc pl-6 mb-4">
            <li>Confusing visually similar words (e.g., "cat" and "cot")</li>
            <li>Struggling with left and right directions</li>
            <li>Difficulty with mental arithmetic or administrative tasks</li>
            <li>Low self-esteem, especially if dyslexia was undiagnosed earlier in life</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Benefits of a Full Dyslexia Assessment</h2>
        <p>If you recognise many of these signs in yourself, you might consider getting a full dyslexia assessment. Here's why it can be beneficial:</p>
        <ul class="list-ordered pl-6 mb-4">
            <li>Understanding Yourself Better: A diagnosis can explain lifelong struggles and boost your self-esteem by understanding that your difficulties are not due to lack of intelligence or effort.)</li>
            <li>Access to Support: A formal diagnosis can help you access accommodations in educational settings or the workplace, such as extra time for exams or assistive technology.</li>
            <li>Tailored Strategies: An assessment provides a detailed picture of your cognitive profile, including strengths and weaknesses. This information can help develop personalized strategies to overcome challenges.</li>
            <li>Emotional Relief: Many adults report feeling relieved after receiving a diagnosis, as it provides an explanation for their struggles and validates their experiences</li>
        </ul>

        <p>Remember, dyslexia is a difference in learning, not a measure of intelligence. Many successful individuals have dyslexia and have developed unique strengths because of it. If you suspect you might have dyslexia, consider having an assessment. It's never too late to gain insights into you’re the way your mind works and unlock your full potential.</p>
    `,
    date: "Jan 31",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
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