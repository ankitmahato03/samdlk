import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  const quickLinks = [
    "Governing Body",
    "Courses Offered",
    "Academic Calendar",
    "Rules & Regulation",
    "Facilities",
    "Library",
    "IQAC",
  ];

  const downloads = [
    "Result",
    "Routine",
    "Holiday List",
    "Subject Combination",
    "Notice",
    "Alumni Association Form",
  ];

  return (
    <footer className="bg-gray-800 text-white rounded-bl-2xl rounded-br-2xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Campus Video */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Campus Video</h3>
            <div className="bg-gray-700 h-32 rounded-lg flex items-center justify-center mb-4"></div>
            <p className="text-sm text-gray-300">
              Watch our campus tour and admission guide
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Downloads</h3>
            <ul className="space-y-2">
              {downloads.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-gray-400" />
                <p className="text-sm text-gray-300">
                  Shree Agrasen Mahavidyalaya
                  <br />
                  West Bengal, India
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <p className="text-sm text-gray-300">
                  8768546488 (11AM to 4PM)
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <p className="text-sm text-gray-300">
                  shreeagrasenmahav@yahoo.com
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-700 h-24 rounded-lg flex items-center justify-center">
              <MapPin className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Shree Agrasen Mahavidyalaya. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Design and Developed by Ankit Mahato
          </p>
        </div>
      </div>
    </footer>
  );
}
