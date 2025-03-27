"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Users, Building } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive solutions for all your transportation needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Passenger Services",
              description:
                "Book one-way or round trips with ease. Choose your preferred vehicle type and track your ride in real-time.",
              color: "bg-blue-100 dark:bg-blue-900/30",
              textColor: "text-blue-600 dark:text-blue-400",
            },
            {
              icon: Car,
              title: "Driver Services",
              description:
                "Join our network of professional drivers. Receive trip requests, navigate efficiently, and track your earnings.",
              color: "bg-green-100 dark:bg-green-900/30",
              textColor: "text-green-600 dark:text-green-400",
            },
            {
              icon: Building,
              title: "Vendor Services",
              description:
                "Manage transportation for your clients. Book trips on their behalf and monitor all bookings from a central dashboard.",
              color: "bg-purple-100 dark:bg-purple-900/30",
              textColor: "text-purple-600 dark:text-purple-400",
            },
          ].map((service, index) => (
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
                    className={`h-16 w-16 rounded-lg ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon className={`h-8 w-8 ${service.textColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Button variant="outline" className="mt-auto self-start">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
