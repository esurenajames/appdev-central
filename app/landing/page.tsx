'use client';

import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <section className="relative h-full md:h-[90vh] md:px-16 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
                    <div className="flex flex-col gap-4 max-w-lg">
                        <div className="bg-accent-1 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit">
                            Centralized Management
                        </div>

                        <h1 className="text-4xl font-extrabold text-primary mb-4 leading-tight lg:text-5xl tracking-tight">
                            All your needs in <br />one central app.
                        </h1>

                        <p className="text-lg text-gray-500 leading-relaxed max-w-md">
                            Stop switching between tools. AppDev Central puts user management, modules, and project tracking in one easy-to-use platform.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden w-full h-[500px] max-w-[500px] ml-auto">
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#F9FAFB] border-b border-gray-200">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                                </div>
                                <span className="ml-4 text-xs font-semibold text-gray-400">User Management</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
