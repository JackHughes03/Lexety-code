<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
    {
        title: 'Parent of a 14 year old',
        description: 'Thank you so much! C seems to be happier/more relaxed now she has this diagnosis as if her struggles make sense and there\'s a reason for it all.'
    },
    {
        title: 'Parent of a 12 year old',
        description: 'Just a quick thank you for taking the time to explain the report last week. School are on board with the recommendations and K came away feeling positive about the diagnosis.'
    },
    {
        title: 'Adult assessed for DSA',
        description: 'The DSA needs assessor was really happy with the report. They said it was easy to read with plenty of detail.'
    },
    {
        title: 'Parent of a 9 year old',
        description: 'Thanks for explaining the report to me in such detail. This made a real difference when I went to school. I knew what to ask for to help support E. School have really listened and they\'ve started to put the recommendations in action.'
    },
    {
        title: 'Parent of a 14 year old',
        description: 'Thank you so much for your time and the report. Hopefully, this will help school understand C and help alleviate some of her struggles and help her thrive!'
    },
    {
        title: 'Adult assessed for DSA',
        description: 'Thank you for making the whole assessment process so easy. The communication was fab and the results quick.'
    },
    {
        title: 'Parent of a 16 year old',
        description: 'School were very impressed with your report, I don\'t know if they mentioned this? They have also been brilliant about accepting all your recommendations without question, so thank you so much once again for making such a difference to F\'s life.'
    }
];
</script>

<template>
    <section class="py-12 bg-primary">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl md:text-3xl font-bold text-center mb-4">What My Clients Say</h2>
            
            <div class="relative">
                <Swiper
                    :modules="[Pagination, Navigation, Autoplay]"
                    :slides-per-view="1"
                    :space-between="30"
                    :loop="true"
                    :autoplay="{
                        delay: 7000,
                        disableOnInteraction: false
                    }"
                    :pagination="{
                        clickable: true
                    }"
                    :navigation="true"
                    :breakpoints="{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }"
                    class="pb-12 px-12 md:pb-16 [&_.swiper-button-next]:text-gray-800 [&_.swiper-button-next]:bg-[#C0DAD6] [&_.swiper-button-next]:w-9 [&_.swiper-button-next]:h-9 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:shadow-md [&_.swiper-button-next]:border-[1px] [&_.swiper-button-next]:top-6 [&_.swiper-button-next]:-translate-y-0 [&_.swiper-button-next]:transition-all [&_.swiper-button-next]:duration-300 [&_.swiper-button-next]:right-0 [&_.swiper-button-next:hover]:bg-[#a8c4bf] [&_.swiper-button-next:hover]:scale-105 [&_.swiper-button-prev]:text-gray-800 [&_.swiper-button-prev]:bg-[#C0DAD6] [&_.swiper-button-prev]:w-9 [&_.swiper-button-prev]:border-[1px] [&_.swiper-button-prev]:h-9 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:shadow-md [&_.swiper-button-prev]:top-6 [&_.swiper-button-prev]:-translate-y-0 [&_.swiper-button-prev]:transition-all [&_.swiper-button-prev]:duration-300 [&_.swiper-button-prev]:left-0 [&_.swiper-button-prev:hover]:bg-[#a8c4bf] [&_.swiper-button-prev:hover]:scale-105 [&_.swiper-button-next:after]:text-base [&_.swiper-button-prev:after]:text-base [&_.swiper-pagination]:bottom-0 [&_.swiper-pagination]:absolute [&_.swiper-pagination]:w-full [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-2 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:bg-[#C0DAD6] [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:bg-[#C0DAD6] [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination-bullet-active]:scale-110 [&_.swiper-slide]:h-auto sm:[&_.swiper-pagination-bullet]:w-2 sm:[&_.swiper-pagination-bullet]:h-2"
                >
                    <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
                        <div class="bg-white mt-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 h-full border border-gray-100">
                            <div class="flex flex-col h-full">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="w-12 h-12 bg-[#C0DAD6] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                        </svg>
                                    </div>
                                    <div class="h-[1px] flex-grow bg-gradient-to-r from-[#C0DAD6] to-transparent"></div>
                                </div>
                                <p class="text-gray-700 text-base md:text-lg mb-6 italic flex-grow leading-relaxed">
                                    "{{ testimonial.description }}"
                                </p>
                                <div class="pt-4 border-t border-gray-100">
                                    <p class="text-gray-900 font-medium">
                                        {{ testimonial.title }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>