<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const router = useRouter();

const blogPosts = ref([
    {
        id: 1,
        title: "Does Dyslexia Exist?",
        excerpt: "Real or label - exploring the reality of dyslexia as a learning difference.",
        date: "Feb 15",
        readTime: "2 min read",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3",
        route: "dyslexia-exist"
    },
    {
        id: 2,
        title: "The New Delphi Definition of Dyslexia",
        excerpt: "On 25th February 2025, a new definition of dyslexia was confirmed by experts using the Delphi method.",
        date: "Feb 10",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3",
        route: "new-definition"
    },
    {
        id: 3,
        title: "How Do I Know if I Have Dyslexia?",
        excerpt: "Understanding the signs and symptoms of dyslexia in adults and the benefits of assessment.",
        date: "Jan 31",
        readTime: "1 min read",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3",
        route: "have-dyslexia"
    }
]);

const navigateToBlog = (route) => {
    router.push({ name: route });
};
</script>

<template>
    <NavBar />
    <main class="max-w-7xl mx-auto px-4 py-16 mt-5 md:mt-16">
        <h2 class="font-bold text-3xl mb-4 text-gray-800 text-center pb-5">Blog Posts</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article 
                v-for="post in blogPosts" 
                :key="post.id"
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                @click="navigateToBlog(post.route)"
            >
                <div class="relative">
                    <img 
                        :src="post.image" 
                        :alt="post.title"
                        class="w-full h-48 object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-sm text-gray-500">{{ post.date }}</span>
                        <span class="text-sm text-gray-500">{{ post.readTime }}</span>
                    </div>

                    <h2 class="text-2xl font-bold mb-3 text-gray-800">{{ post.title }}</h2>
                    <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>

                    <button class="text-blue-600 hover:text-blue-800 font-medium">
                        Read More →
                    </button>
                </div>
            </article>
        </div>
    </main>
    <Footer />
</template> 