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
