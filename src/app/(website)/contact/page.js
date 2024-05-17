// src/app/(website)/contact/page.js

"use client";

import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(''); // To track form submission status
    const [loading, setLoading] = useState(false); // To track form submission loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');
        // Submit the form data
        const form = e.target;
        const formDataObj = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formDataObj,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setFormData({ name: '', email: '', message: '' });
                setStatus('Form submitted successfully!');
            } else {
                setStatus('Form submission failed. Please try again.');
            }
        } catch (error) {
            setStatus('Form submission error. Please try again.');
            console.error('Form submission error:', error);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <Head>
                <title>Contact Us - Linktree Clone</title>
                <meta name="description" content="Get in touch with us through our contact form." />
            </Head>
            <header className="w-ful py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold text-black">Contact Us</h1>
                </div>
            </header>
            <main className="flex-1 w-full max-w-3xl mx-auto py-10 px-6 sm:px-8 lg:px-12">
                <section className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">We had love to hear from you</h2>
                    <p className="text-gray-700 mb-6">
                        Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                    </p>
                    <form
                        action="https://getform.io/f/zbzkzmda"
                        method="POST"
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            ></textarea>
                        </div>
                        <input type="hidden" name="_gotcha" style={{ display: 'none !important' }} />
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-[#0f172a] text-white font-medium rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    {status && (
                        <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                            {status}
                        </p>
                    )}
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
