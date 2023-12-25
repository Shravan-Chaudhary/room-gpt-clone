"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    name: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: "Fast ",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-fast.png",
    alt: "Customizable",
  },
  {
    name: "Integrations",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-journey.png",
    alt: "Customizable",
  },
  {
    name: "Full Stack",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },
  {
    name: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/images/icon-location.png",
    alt: "Customizable",
  },
  {
    name: "Support",
    image: "/images/icon-support-1.png",
    description: "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Customizable",
  },
];

const FeatureCard = () => {
  return (
    <div className="flex-col items-center justify-center">
      <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
          >
            <div className="text-gray-600 text-3xl font-bold">
              <Image
                src={feature.image}
                alt={feature.alt}
                width={300}
                height={300}
                className="object-contain h-20 w-20 items-center justify-center flex mb-10"
              />
              <div>
                <div className="text-2xl pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent">
                  {feature.name}
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                  {feature.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
