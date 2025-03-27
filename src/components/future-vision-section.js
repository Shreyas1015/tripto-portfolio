"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PlaneTakeoff, Briefcase, Zap, Brain, Globe } from "lucide-react";

export function FutureVisionSection() {
  const futureFeatures = [
    {
      icon: PlaneTakeoff,
      title: "Airport Transfers",
      description:
        "Expanding into airport transfer services to capture a broader segment of the market",
      color: "from-blue-500 to-blue-300",
    },
    {
      icon: Briefcase,
      title: "Corporate Partnerships",
      description:
        "Collaborating with businesses for employee travel solutions with bulk discounts and tailored services",
      color: "from-purple-500 to-purple-300",
    },
    {
      icon: Zap,
      title: "Electric Vehicle Integration",
      description:
        "Promoting sustainable travel by incentivizing the use of electric and hybrid vehicles",
      color: "from-green-500 to-green-300",
    },
    {
      icon: Brain,
      title: "AI-Driven Features",
      description:
        "Advanced AI algorithms to predict demand, suggest routes, and dynamically adjust pricing",
      color: "from-orange-500 to-orange-300",
    },
    {
      icon: Globe,
      title: "Regional Expansion",
      description:
        "Scaling the platform to operate across all major cities and towns in India",
      color: "from-teal-500 to-teal-300",
    },
  ];

  return (
    <section
      id="future-vision"
      className="py-24 bg-white dark:bg-gray-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Future Vision
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tripto&apos;s roadmap for expanding our impact on India&apos;s
            transportation ecosystem
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex"
            >
              <Card className="w-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div
                  className={`h-2 w-full bg-gradient-to-r ${feature.color}`}
                ></div>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Our Long-Term Vision
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto">
            Tripto aims to transform India&apos;s outstation passenger vehicle
            market by creating a structured, fair, and efficient ecosystem that
            benefits all stakeholders. Our decentralized model promotes
            entrepreneurship, fair pricing, and technological advancement while
            preserving the local expertise that makes travel seamless.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
