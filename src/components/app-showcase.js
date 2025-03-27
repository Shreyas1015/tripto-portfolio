"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AppShowcase() {
  return (
    <section
      id="showcase"
      className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
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
            See Tripto in Action
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our intuitive interfaces designed for passengers, drivers,
            and vendors
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Passenger App",
              description:
                "Book rides with ease, track your driver in real-time, and manage your trip history",
              image: "/placeholder.svg?height=600&width=300",
              color: "from-blue-600 to-blue-400",
            },
            {
              title: "Driver App",
              description:
                "Accept ride requests, navigate efficiently, and track your earnings all in one place",
              image: "/placeholder.svg?height=600&width=300",
              color: "from-green-600 to-green-400",
            },
            {
              title: "Vendor Portal",
              description:
                "Manage bookings for clients, track fleet performance, and optimize operations",
              image: "/placeholder.svg?height=600&width=300",
              color: "from-purple-600 to-purple-400",
            },
          ].map((app, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative mb-6">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${app.color} rounded-3xl blur opacity-20`}
                ></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <Image
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    className="w-full h-auto"
                    width={300}
                    height={600}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {app.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4 max-w-xs">
                {app.description}
              </p>
              <Button variant="outline" size="sm" className="mt-auto">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium">
            Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
