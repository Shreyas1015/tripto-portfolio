"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Car, ArrowRight, Smartphone } from "lucide-react";
import Image from "next/image";

export function BusinessModelSection() {
  return (
    <section id="business-model" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Decentralized B2B Model
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Connecting key stakeholders to create a structured ecosystem for
            outstation travel
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Car,
              title: "Car Owners",
              description:
                "Vehicle owners join our network to maximize utilization and generate consistent revenue without the hassle of finding customers.",
              color: "bg-blue-100 dark:bg-blue-900/30",
              textColor: "text-blue-600 dark:text-blue-400",
            },
            {
              icon: Building,
              title: "Local Vendors",
              description:
                "Travel agencies and local operators leverage our platform to access a wider customer base and streamline their operations.",
              color: "bg-green-100 dark:bg-green-900/30",
              textColor: "text-green-600 dark:text-green-400",
            },
            {
              icon: Smartphone,
              title: "Digital Service Providers",
              description:
                "Tech partners integrate their solutions for GPS tracking, payments, and analytics to enhance the overall ecosystem.",
              color: "bg-purple-100 dark:bg-purple-900/30",
              textColor: "text-purple-600 dark:text-purple-400",
            },
          ].map((stakeholder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div
                    className={`h-16 w-16 rounded-lg ${stakeholder.color} flex items-center justify-center mb-6`}
                  >
                    <stakeholder.icon
                      className={`h-8 w-8 ${stakeholder.textColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {stakeholder.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                    {stakeholder.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
          <div className="md:w-1/2 p-8 md:p-12">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How Tripto Differs from B2C Platforms
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Unlike monopolistic B2C platforms like Ola and Uber that control
              the entire process, Tripto creates a decentralized ecosystem that
              empowers all stakeholders.
            </motion.p>

            <div className="space-y-4">
              {[
                "Lower commission structure benefiting vendors and customers",
                "Empowers local entrepreneurs rather than replacing them",
                "Focuses specifically on outstation travel needs",
                "Combines technology with local expertise",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/Images/Business model.webp"
                alt="Tripto Business Model"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
