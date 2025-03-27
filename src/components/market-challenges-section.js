"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  Puzzle,
  Lock,
  BlocksIcon as BarrierBlock,
} from "lucide-react";

export function MarketChallengesSection() {
  const challenges = [
    {
      icon: Puzzle,
      title: "Fragmentation and Lack of Organization",
      description:
        "The outstation travel market operates on informal systems, leading to inefficiencies, poor resource allocation, and inconsistent service quality.",
    },
    {
      icon: AlertTriangle,
      title: "Dominance of B2C Platforms",
      description:
        "Large players like Ola and Uber dominate urban transportation but offer limited solutions for outstation travel, with high commissions that marginalize smaller vendors.",
    },
    {
      icon: Lock,
      title: "Trust and Payment Issues",
      description:
        "Reliance on informal communication and random vendor bookings increases the risk of payment fraud and lack of accountability.",
    },
    {
      icon: BarrierBlock,
      title: "Barriers to Entry for Entrepreneurs",
      description:
        "New entrepreneurs face significant challenges entering the market due to high initial investment requirements and lack of structured networks.",
    },
  ];

  return (
    <section
      id="market-challenges"
      className="py-24 bg-gray-50 dark:bg-gray-900"
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
            Market Challenges We&apos;re Solving
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            India&apos;s outstation travel industry faces several critical
            issues that Tripto addresses
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                      <challenge.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Tripto&apos;s innovative B2B platform addresses these challenges by
            creating a structured ecosystem that benefits all stakeholders while
            ensuring fair pricing and reliable service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
