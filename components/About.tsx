"use client";

import { Shield, Zap, Banknote } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

const features = [
  {
    icon: Shield,
    title: "Sécurité maximale",
    description: "Systèmes anti-fraude avancés et matériaux robustes pour une protection optimale de vos transactions."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Traitement rapide et fiable des pièces et billets pour une efficacité maximale."
  },
  {
    icon: Banknote,
    title: "Polyvalence",
    description: "Compatible avec tous types de monnaies et adapté à différents secteurs d'activité."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              À propos de nous
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Spécialistes des solutions de paiement automatisé, nous fournissons des monnayeurs de haute qualité pour optimiser vos opérations commerciales.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;