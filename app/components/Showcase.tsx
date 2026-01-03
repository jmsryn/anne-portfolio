"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const showcaseItems = [
    {
        id: 1,
        image: "/images/showcase1.png",
        title: "Social Media Campaign",
        description: "Strategic content creation and community engagement",
        category: "Social Media",
    },
    {
        id: 2,
        image: "/images/showcase2.png",
        title: "Research Analysis",
        description: "Data-driven insights and comprehensive reporting",
        category: "Research",
    },
    {
        id: 3,
        image: "/images/showcase3.png",
        title: "Content Strategy",
        description: "Multi-platform content planning and execution",
        category: "Content",
    },
    {
        id: 4,
        image: "/images/showcase4.png",
        title: "Brand Development",
        description: "Visual identity and brand storytelling",
        category: "Branding",
    },
];

export default function Showcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? showcaseItems.length - 1 : prev - 1
        );
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
        setIsAutoPlaying(false);
    };

    return (
        <section id="showcase" className="section bg-cream-dark/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                        Portfolio
                    </span>
                    <h2 className="section-title mt-2">Work Showcase</h2>
                    <p className="section-subtitle">
                        A glimpse into my professional projects and achievements
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Main Carousel */}
                    <div className="relative group">
                        {/* Carousel Container */}
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-video bg-white">
                            {showcaseItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex
                                            ? "opacity-100 translate-x-0"
                                            : index < currentIndex
                                                ? "opacity-0 -translate-x-full"
                                                : "opacity-0 translate-x-full"
                                        }`}
                                >
                                    {/* Image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                            priority={index === 0}
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/90 via-dark-brown/20 to-transparent" />

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <span className="inline-block px-3 py-1 rounded-full bg-coral text-white text-xs font-semibold mb-3">
                                                {item.category}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-cream-light text-sm md:text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-dark-brown transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                            aria-label="Previous slide"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-dark-brown transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                            aria-label="Next slide"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-3 mt-8">
                        {showcaseItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => goToSlide(index)}
                                className={`transition-all ${index === currentIndex
                                        ? "w-12 bg-coral"
                                        : "w-3 bg-warm-gray/30 hover:bg-warm-gray/60"
                                    } h-3 rounded-full`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Thumbnail Preview */}
                    <div className="grid grid-cols-4 gap-4 mt-8">
                        {showcaseItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => goToSlide(index)}
                                className={`relative aspect-video rounded-xl overflow-hidden transition-all ${index === currentIndex
                                        ? "ring-4 ring-coral shadow-lg scale-105"
                                        : "opacity-60 hover:opacity-100 hover:scale-105"
                                    }`}
                            >
                                <Image
                                    src={item.image}
                                    alt={`${item.title} thumbnail`}
                                    fill
                                    className="object-cover"
                                />
                                <div
                                    className={`absolute inset-0 ${index === currentIndex
                                            ? "bg-coral/20"
                                            : "bg-dark-brown/40"
                                        } transition-colors`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
