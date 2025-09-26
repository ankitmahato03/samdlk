import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function HeroSection() {
  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      number: "27+",
      label: "Years of Excellence",
    },
    { icon: <Users className="w-6 h-6" />, number: "2000+", label: "Students" },
    {
      icon: <Award className="w-6 h-6" />,
      number: "NAAC",
      label: "Grade 'B' Accredited",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      number: "15+",
      label: "Academic Programs",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden rounded-2xl"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <div className="w-32 h-32 bg-orange-500 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-32 left-10 opacity-10">
        <div className="w-24 h-24 bg-white rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center xl:gap-40">
          {/* Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-400 text-sm px-4 py-1">
                Est. 1995 • NAAC Accredited
              </Badge>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Excellence in
                <span className="block text-orange-400">Education</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-xl">
                Empowering students with quality education, fostering
                innovation, and building tomorrow's leaders at
                <span className="text-orange-300 font-semibold">
                  {" "}
                  Shree Agrasen Mahavidyalaya
                </span>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                <span className="flex items-center justify-center gap-2">
                  Apply Now
                  <ChevronDown className="w-4 h-4 group-hover:translate-x-1 transition-transform rotate-[-90deg]" />
                </span>
              </button>
              <button className="group border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-2">
                  Virtual Tour
                  <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="group bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <CardContent className="p-6 text-center text-white">
                  <div className="text-orange-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1 group-hover:text-orange-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
