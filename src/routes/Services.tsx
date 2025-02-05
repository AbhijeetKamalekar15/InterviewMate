import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, BookOpen, Code } from "lucide-react";
import Container from "@/components/container";

const services = [
  {
    title: "ByteBlog",
    description:
      "A blogging platform where we post technical blogs and the latest tech trends.",
    icon: <Sparkles size={32} className="text-blue-500" />,
  },
  {
    title: "TechShelf",
    description:
      "A curated collection of tech books related to CSE, including recommended reads.",
    icon: <BookOpen size={32} className="text-green-500" />,
  },
  {
    title: "DSA Sheet",
    description:
      "Comprehensive DSA sheets to help you master Data Structures and Algorithms.",
    icon: <Code size={32} className="text-purple-500" />,
  },
];

const Services = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen py-16">
      <Container>
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">Our Services</h1>
          <p className="text-gray-300 mt-2 text-lg">
            Explore our carefully curated tech resources designed for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300 p-6 rounded-xl"
            >
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="p-4 bg-white/20 rounded-full">{service.icon}</div>
                <CardTitle className="text-white text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
