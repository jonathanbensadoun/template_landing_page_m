"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeIn } from "./animations/FadeIn";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Basic",
      price: "1 990€",
      features: [
        "Capacité 500 pièces",
        "Accepte pièces et billets",
        "Écran LCD",
        "Garantie 1 an",
        "Support technique basique"
      ]
    },
    {
      name: "Pro",
      price: "2 990€",
      features: [
        "Capacité 1000 pièces",
        "Accepte pièces et billets",
        "Écran tactile",
        "Garantie 2 ans",
        "Support technique prioritaire",
        "Statistiques de base"
      ]
    },
    {
      name: "Premium",
      price: "4 990€",
      features: [
        "Capacité 2000 pièces",
        "Accepte tout type de paiement",
        "Écran tactile HD",
        "Garantie 3 ans",
        "Support 24/7",
        "Statistiques avancées",
        "Connection à distance"
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Tarifs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les budgets
            </p>
          </div>
        </FadeIn>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }
                }
              }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {plan.name}
              </h3>
              <motion.div 
                className="text-center mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-4xl font-bold text-blue-600">
                  {plan.price}
                </span>
                <span className="text-gray-600">/unité</span>
              </motion.div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-center"
                  >
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
              >
                Demander un devis
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;