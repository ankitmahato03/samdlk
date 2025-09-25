import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Building,
  Globe,
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Quality Education',
      description:
        "NAAC accredited Grade 'B' college providing excellent academic programs since 1995.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Diverse Courses',
      description:
        'Wide range of undergraduate and postgraduate programs in various disciplines.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Experienced Faculty',
      description:
        'Dedicated and qualified faculty members committed to student success.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Academic Excellence',
      description:
        'Strong academic track record with excellent student performance and achievements.',
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Modern Infrastructure',
      description:
        'Well-equipped classrooms, laboratories, and facilities for comprehensive learning.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Holistic Development',
      description:
        'Focus on overall personality development through co-curricular activities.',
    },
  ];

  return (
    <section id="academics" className="py-16 bg-white  rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes Shree Agrasen Mahavidyalaya a preferred choice
            for quality higher education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
