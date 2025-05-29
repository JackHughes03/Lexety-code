<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const router = useRouter();

const goHome = () => {
    router.push('/');
};
</script>

<template>
    <NavBar />
    <div class="min-h-[calc(100vh-200px)] flex items-center justify-center p-8 bg-gray-50">
        <div class="text-center max-w-2xl p-12 bg-white rounded-xl shadow-md">
            <h1 class="text-8xl font-bold text-red-600 m-0 leading-none">404</h1>
            <h2 class="text-3xl text-gray-800 my-4">Page Not Found</h2>
            <p class="text-lg text-blue-600 mb-8">
                Oops! The page you're looking for seems to have vanished into thin air.
            </p>
            <button 
                @click="goHome" 
                class="bg-gray-800 text-white px-8 py-4 text-lg rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-700"
            >
                Return to Home
            </button>
        </div>
    </div>
    <Footer />
</template>
