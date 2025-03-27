"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

export function EntrepreneurSection() {
  return (
    <section
      id="entrepreneurs"
      className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Opportunities for{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Entrepreneurs
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Tripto provides a unique opportunity for aspiring entrepreneurs to
              enter the passenger vehicle market without owning a fleet. By
              leveraging our platform&apos;s resources and partnerships, you
              can:
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Manage bookings and trips seamlessly",
                  description:
                    "Use Tripto's tools to handle customer requests, schedule trips, and manage payments without complex systems.",
                },
                {
                  icon: Users,
                  title: "Collaborate with verified vendors",
                  description:
                    "Access our network of trusted car owners and service providers for reliable operations.",
                },
                {
                  icon: TrendingUp,
                  title: "Focus on growth, not assets",
                  description:
                    "Concentrate on customer service and business development instead of managing vehicle fleets.",
                },
                {
                  icon: Briefcase,
                  title: "Low barrier to entry",
                  description:
                    "Start your travel business with minimal capital investment and scale as you grow.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-4">
                    <benefit.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/Images/Entrepreneur using Tripto platform.webp"
                  alt="Entrepreneur using Tripto platform"
                  className="w-full h-auto"
                  width={800}
                  height={600}
                />
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Democratizing access to the travel industry
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Creating opportunities for local entrepreneurs
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
