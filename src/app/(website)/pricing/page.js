// pages/pricing.js

import Head from 'next/head';

export default function Pricing() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <Head>
                <title>Pricing - Linkhub</title>
                <meta name="description" content="Choose the best plan that fits your needs. Check out our pricing options." />
            </Head>
            <header className="w-full py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold text-black">Pricing</h1>
                </div>
            </header>
            <main className="flex-1 w-full max-w-5xl mx-auto py-10 px-6 sm:px-8 lg:px-12">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-110 transform transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Free</h2>
                        <p className="text-gray-700 mb-4">$0 / month</p>
                        <ul className="text-gray-700 mb-6">
                            <li className="mb-2">Basic Link Management</li>
                            <li className="mb-2">Limited Customization</li>
                            <li className="mb-2">Basic Analytics</li>
                        </ul>
                        <button className="bg-[#0f172a] text-white py-2 px-4 rounded-lg">Get Started</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-110 transform transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Pro</h2>
                        <p className="text-gray-700 mb-4">$10 / month</p>
                        <ul className="text-gray-700 mb-6">
                            <li className="mb-2">Advanced Link Management</li>
                            <li className="mb-2">Custom Themes</li>
                            <li className="mb-2">Detailed Analytics</li>
                            <li className="mb-2">Priority Support</li>
                        </ul>
                        <button className="bg-[#0f172a] text-white py-2 px-4 rounded-lg">Get Started</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-110 transform transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
                        <p className="text-gray-700 mb-4">$30 / month</p>
                        <ul className="text-gray-700 mb-6">
                            <li className="mb-2">All Pro Features</li>
                            <li className="mb-2">Unlimited Links</li>
                            <li className="mb-2">Team Collaboration</li>
                            <li className="mb-2">Custom Integrations</li>
                        </ul>
                        <button className="bg-[#0f172a] text-white py-2 px-4 rounded-lg">Get Started</button>
                    </div>
                </section>
            </main>
            <footer className="w-full py-4">
                <div className="container mx-auto text-center text-black">
                    <h1>&copy; 2024 Linkhub. All rights reserved.</h1>
                </div>
            </footer>
        </div>
    );
}
