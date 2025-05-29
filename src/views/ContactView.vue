<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <NavBar />
    <section class="max-w-2xl mx-auto p-10 mt-10 md:mt-28 mb-6 bg-[#C0DAD6] rounded-lg shadow-xl border-2 border-black/20">
        <h2 class="font-bold text-3xl mb-4 text-gray-800 text-center">Get in touch</h2>
        <p class="text-gray-600 text-sm text-center mb-6">Have questions about dyslexia assessment or support? I'm here
            to help.</p>

        <form action="https://formspree.io/f/your-form-id" method="POST" class="bg-white shadow p-6 md:pb-14">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Name" required
                    class="border border-gray-200 p-2 rounded bg-gray-50 focus:bg-white focus:border-blue-400">
                <input type="email" name="email" placeholder="Email" required
                    class="border border-gray-200 p-2 rounded bg-gray-50 focus:bg-white focus:border-blue-400">
            </div>

            <input type="text" name="subject" placeholder="Subject" required
                class="w-full border border-gray-200 p-2 rounded mb-4 bg-gray-50 focus:bg-white focus:border-blue-400">
            <textarea name="message" placeholder="Message" rows="4" required
                class="w-full border border-gray-200 p-2 rounded mb-4 bg-gray-50 focus:bg-white focus:border-blue-400"></textarea>

            <button type="submit"
                class="w-full md:w-auto md:float-right bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                Send Message
            </button>
        </form>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <article class="bg-white shadow p-4">
                <h3 class="font-semibold mb-2">Contact Information</h3>
                <a href="mailto:contact@lexety.com" class="flex items-center text-gray-600 text-sm hover:text-blue-600">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@lexety.com
                </a>
                <a href="tel:+44123456789" class="flex items-center text-gray-600 text-sm hover:text-blue-600 mt-2">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +44 123 456 789
                </a>
            </article>

            <article class="bg-white shadow p-4">
                <h3 class="font-semibold mb-2">Office Hours</h3>
                <p class="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p class="text-gray-600 text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                <p class="text-gray-600 text-sm">Sunday: Closed</p>
            </article>
        </div>
    </section>
    <Footer />
</template>
