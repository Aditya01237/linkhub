// pages/about.js

import Head from 'next/head';

export default function About() {
    return (
        <div className=" min-h-screen flex flex-col items-center bg-gray-100">
            <Head>
                <title>About Us - Linkhub</title>
                <meta name="description" content="Learn more about our Linkhub and our mission." />
            </Head>
            <header className=" w-ful py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-black text-3xl font-bold">About Us</h1>
                </div>
            </header>
            <main className="flex-1 w-full max-w-4xl mx-auto py-10 px-6 sm:px-8 lg:px-12">
                <section className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 mb-6">
                        Our mission is to provide a simple, effective, and customizable solution to manage all your important links in one place. Whether you are a content creator, a business, or just someone who wants to organize their online presence, our Linkhub is designed to help you achieve your goals with ease.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-gray-700 mb-6">
                        We are a team of passionate developers and designers dedicated to creating tools that make your online life easier. Our goal is to deliver high-quality products that offer both functionality and style.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700">
                        If you have any questions, suggestions, or just want to say hello, feel free to reach out to us at <a href="mailto:contact@linktreeclone.com" className="text-blue-500 underline">contact@linktreeclone.com</a>.
                    </p>
                </section>
            </main>
            <footer className="w-ful py-4">
                <div className="container mx-auto text-center text-black">
                    &copy; 2024 Linkhub. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
