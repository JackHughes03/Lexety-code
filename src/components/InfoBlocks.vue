<script setup>
import { ref } from 'vue';

defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        default: 'primary'
    }
});

const splitDescription = (text) => {
    return text.split('.').filter(sentence => sentence.trim());
};
</script>

<template>
    <div class="md:mx-10 mx-4 flex items-center justify-center flex-col gap-6">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800">{{ title }}</h2>
        
        <div class="w-24 h-1 bg-[#C0DAD6] rounded-full"></div>
        
        <div class="description space-y-3 text-left max-w-2xl mx-auto pb-10">
            <p v-for="(sentence, index) in splitDescription(description)" 
               :key="index"
               class="text-gray-600 text-base leading-relaxed">
                {{ sentence.trim() }}.
            </p>
        </div>
    </div>
</template>

<style scoped>
.description p {
    @apply text-gray-600;
}

.description p:first-child {
    @apply text-gray-700;
}
</style>