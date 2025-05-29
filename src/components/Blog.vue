<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const router = useRouter();

const blogs = ref([
    {
        id: 1,
        title: "Does Dyslexia Exist?",
        excerpt: "Some people question whether dyslexia is real or simply a label for general reading struggles",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
        date: "March 14",
        readTime: "2 min read"
    },
    {
        id: 2,
        title: "The New Delphi Definition of Dyslexia",
        excerpt: "On 25th February 2025, a new definition of dyslexia was confirmed by experts using the Delphi method",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3",
        date: "2025-02-26",
        readTime: "2 min read"
    },
    {
        id: 3,
        title: "Do I have dyslexia?",
        excerpt: "How do I know if I have dyslexia?",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3",
        date: "Jan 31",
        readTime: "1 min read"
    }
]);

const swiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 500000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    navigation: true,
};

const goToBlog = (blogId) => {
    router.push(`/blog/${blogId}`);
};
</script>

<template>
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-center pb-0">Latest Blog Posts</h2>
            
            <div class="max-w-4xl mx-auto">
                <Swiper v-bind="swiperOptions" class="blog-swiper">
                    <SwiperSlide v-for="blog in blogs" :key="blog.id">
                        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl mt-10">
                            <div class="relative">
                                <img 
                                    :src="blog.image" 
                                    :alt="blog.title"
                                    class="w-full h-64 object-cover"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            
                            <div class="p-8">
                                <div class="flex justify-between items-center mb-4">
                                    <span class="text-sm text-gray-500">{{ blog.date }}</span>
                                    <span class="text-sm text-gray-500">{{ blog.readTime }}</span>
                                </div>
                                
                                <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ blog.title }}</h3>
                                <p class="text-gray-600 mb-6">{{ blog.excerpt }}</p>
                                
                                <button 
                                    @click="goToBlog(blog.id)"
                                    class="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                                >
                                    Read More
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>

<style>
.blog-swiper {
    padding: 2rem 0;
}

.blog-swiper .swiper-button-next,
.blog-swiper .swiper-button-prev {
    color: #1f2937;
    background: white;
    width: 40px;
    margin-top: -300px;
    height: 40px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
}

.blog-swiper .swiper-button-next:after,
.blog-swiper .swiper-button-prev:after {
    font-size: 1.2rem;
}

.blog-swiper .swiper-pagination-bullet {
    background: #1f2937;
}

.blog-swiper .swiper-pagination-bullet-active {
    background: #1f2937;
}
</style>
