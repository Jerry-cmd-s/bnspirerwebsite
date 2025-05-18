import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { MdTrendingUp } from "react-icons/md";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";
import { CgInsights } from "react-icons/cg";
import { LuMap } from "react-icons/lu";
import { PiStepsDuotone } from "react-icons/pi";
import { VscLibrary } from "react-icons/vsc";
const Features = () => {
  const features = [
    {
      icon: FcIdea,
      title: "AI-Powered Idea Generation",
      description: "Input your industry, interests, or market trends, and Bnspirer’s AI generates tailored business ideas",
    },
    {
      icon: MdTrendingUp,
      title: "Market Trend Analysis",
      description: "Server and Client Components. using hooks and context.",
    },
    {
      icon: CgInsights,
      title: "Competitor Insights",
      description: "AI scans competitors in the user’s chosen industry to highlight gaps, weaknesses, or underserved areas where their business idea can stand out.",
    },
    {
      icon: LuMap,
      title: "Business Model Suggestions",
      description: "For each idea, the app provides AI-generated business model frameworks (e.g., subscription, freemium, or B2B) with pros, cons, and implementation tips.",
    },
    {
      icon: PiStepsDuotone,
      title: "Actionable Next Steps",
      description: "The AI delivers a step-by-step roadmap for each business idea, including tasks like market validation, prototyping, or funding strategies..",
    },
    {
      icon: VscLibrary,
      title: "Inspiration Library",
      description: "A curated database of successful business case studies, trends, and AI-generated “what if” scenarios to spark creativity.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Features</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
          Unleash Your Business Potential with Bnspirer’s AI Features
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
