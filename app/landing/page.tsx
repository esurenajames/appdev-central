'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ShieldCheck, Zap, BarChart3, Users2, Lock, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
    return (
        <section className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-12 lg:px-20 overflow-hidden font-sans">
            {/* Main Hero Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-full min-h-[700px] w-full max-w-[1400px] mx-auto bg-gray-200 rounded-[48px] overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-16 gap-12"
            >

                {/* Left Content */}
                <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/50 w-fit"
                    >
                        <div className="w-2 h-2 rounded-full bg-accent-1 animate-pulse" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-info">The Centralized Solution</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-[44px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight font-medium text-[#1d1d1f]"
                    >
                        centralized user <br /> <span className="text-accent-1">management.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg md:text-xl text-[#86868b] max-w-[480px] leading-relaxed"
                    >
                        Effortlessly manage your entire user base, roles, and access permissions from one unified, premium dashboard. Built for scale and enterprise security.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <Link href="/login" className="block w-fit">
                            <button className="bg-[#1d1d1f] text-white p-2 pr-2.5 rounded-full flex items-center gap-4 transition-all hover:scale-[1.02] hover:shadow-2xl shadow-xl group">
                                <span className="font-semibold text-[16px] pl-6 py-2">Get Started Now</span>
                                <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                                    <ChevronRight strokeWidth={3} size={22} />
                                </div>
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Visual Element */}
                <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 2 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                        className="relative w-full aspect-square max-w-[550px]"
                    >
                        <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full animate-pulse" />
                        <div className="relative bg-white/20 backdrop-blur-3xl rounded-[40px] border border-white/30 shadow-2xl overflow-hidden p-2">
                            <img
                                src="/hero-image.png"
                                alt="Centralized Dashboard"
                                className="w-full h-auto rounded-[32px] shadow-sm transform group-hover:scale-[1.02] transition-transform duration-700"
                            />
                        </div>

                        <div className="absolute -right-4 top-[20%] bg-black rounded-full px-4 py-2 shadow-xl border border-gray-100 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-[10px] font-semibold text-gray-50 whitespace-nowrap uppercase tracking-widest">344 Active Users</span>
                        </div>

                        <div className="absolute -left-12 bottom-[30%] bg-[#1d1d1f] text-white rounded-2xl p-4 shadow-2xl border border-white/10 hidden lg:block">
                            <p className="text-[10px] font-bold opacity-50 uppercase mb-2">Realtime Data Sync</p>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => <div key={i} className="w-1 h-4 bg-accent-1 rounded-full animate-wave" style={{ animationDelay: `${i * 0.1}s` }} />)}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-24 mb-32 text-center"
            >
                <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#86868b] mb-12">
                    Trusted by industry leaders worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                    {['Acme Corp', 'GlobalTech', 'Luminary', 'Quantum', 'Nexus'].map((logo) => (
                        <span key={logo} className="text-2xl font-bold text-[#1d1d1f] tracking-tighter">
                            {logo}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Features Section */}
            <div className="max-w-[1400px] mx-auto px-4 mb-40">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent-1 font-bold text-sm tracking-widest uppercase mb-4"
                        >
                            Powerful Capabilities
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-medium text-[#1d1d1f] leading-tight"
                        >
                            Everything you need to <br /> manage at scale.
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="pb-2"
                    >
                        <Link href="/features" className="text-[#1d1d1f] font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
                            Explore all features <ArrowRight size={20} className="text-accent-1" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <ShieldCheck className="text-accent-1" size={32} />,
                            title: "Enterprise Security",
                            desc: "State-of-the-art encryption and advanced threat detection to keep your data safe."
                        },
                        {
                            icon: <Zap className="text-accent-1" size={32} />,
                            title: "Lightning Fast",
                            desc: "Optimized performance ensuring zero-latency transitions and real-time updates."
                        },
                        {
                            icon: <BarChart3 className="text-accent-1" size={32} />,
                            title: "Visual Analytics",
                            desc: "Comprehensive insights into user behavior and system performance at a glance."
                        }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gray-50 rounded-[32px] p-10 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-transparent hover:border-gray-100 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f]">{feature.title}</h3>
                            <p className="text-[#86868b] leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section / Stats */}
            <div className="max-w-[1400px] mx-auto mb-40">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#1d1d1f] rounded-[48px] p-8 md:p-20 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-1/20 to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h2 className="text-4xl md:text-6xl font-medium mb-8 max-w-3xl">Ready to centralize your operations?</h2>
                        <p className="text-[#86868b] text-xl mb-12 max-w-xl">
                            Join thousands of teams who have transformed their user management workflow with our premium platform.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6">
                            <Link href="/login">
                                <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                                    Start Free Trial
                                </button>
                            </Link>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                                Schedule Demo
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24 w-full">
                            {[
                                { label: "Active Users", value: "12k+" },
                                { label: "Uptime", value: "99.9%" },
                                { label: "Integrations", value: "50+" },
                                { label: "Countries", value: "120+" }
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <p className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</p>
                                    <p className="text-[#86868b] text-sm font-semibold uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes wave {
                    0%, 100% { height: 4px; }
                    50% { height: 16px; }
                }
                .animate-wave {
                    animation: wave 1s infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s infinite ease-in-out;
                }
            `}</style>
        </section>
    );
};

export default LandingPage;
