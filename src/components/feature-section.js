"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Car,
  CreditCard,
  Users,
  Shield,
  BarChart,
  Handshake,
  Smartphone,
} from "lucide-react";

export function FeatureSection() {
  const features = [
    {
      icon: Handshake,
      title: "Vendor Collaboration",
      description:
        "Connect local vendors with digital service providers to combine operational expertise with modern technology",
    },
    {
      icon: Smartphone,
      title: "Technology Integration",
      description:
        "GPS tracking, secure payment systems, and AI-driven analytics create a seamless experience",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description:
        "Eliminate payment fraud with secure gateways and escrow systems that protect all stakeholders",
    },
    {
      icon: Users,
      title: "Entrepreneurial Empowerment",
      description:
        "Enable new entrepreneurs to run travel agencies without owning vehicles through shared resources",
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description:
        "Provide vendors with real-time data on trip performance, demand trends, and customer satisfaction",
    },
    {
      icon: Car,
      title: "Vehicle Options",
      description:
        "Select from 4+1 or 6+1 seater vehicles based on customer requirements and group size",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description:
        "Monitor vehicle location and estimated arrival times for better coordination and safety",
    },
    {
      icon: CreditCard,
      title: "Transparent Pricing",
      description:
        "Clear fare calculations based on distance, vehicle type, and duration with no hidden charges",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Features of Tripto
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our platform combines cutting-edge technology with local expertise
            to revolutionize outstation travel
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                    <feature.icon
                      className={`h-6 w-6 text-blue-600 dark:text-blue-400`}
                    />
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
      </div>
    </section>
  );
}
