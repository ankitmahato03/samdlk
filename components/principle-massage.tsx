import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export function PrincipalMessage() {
  return (
    <section id="about" className="py-16 bg-gray-50 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Principal's Message */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-blue-900">
                  Principal's Message
                </h2>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48 flex-shrink-0">
                    <Image
                      src="/p-image.png"
                      width={192}
                      height={192}
                      alt="Principal"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      I am delighted to welcome you to Shree Agrasen
                      Mahavidyalaya. The college has completed illustrious 27
                      years since its establishment in 1995. The objective is to
                      provide learning environment to the highest quality.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Despite of all adversities in all aspects I am proud to
                      say that our students are good in academics, co-curricular
                      activities and well disciplined. The management is highly
                      supportive for the overall development of the students and
                      faculty.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our teachers are committed the role of facilitator to our
                      students. They participate in numerous national and
                      international conferences. The college also organizes
                      several seminars and workshops.
                    </p>

                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
                      KNOW MORE
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision & Mission */}
            <Card className="mt-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-blue-900">
                  Vision & Mission
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As the institution is situated in the most backward district
                  and moreover in the educationally backward block of West
                  Bengal, the vision of the institute is to become one of the
                  best educational institutions catering to the rural students'
                  need of higher education, run along the ideals of men making
                  education propounded by Swami Vivekananda.
                </p>

                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
                  KNOW MORE
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Notifications */}
          <div>
            {/* <Card className="bg-blue-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">NOTIFICATIONS</h3>

                <div className="space-y-4">
                  <div className="border-b border-blue-700 pb-3">
                    <p className="text-sm">Admission Notification 2025</p>
                  </div>
                  <div className="border-b border-blue-700 pb-3">
                    <p className="text-sm">Annual Examination Results</p>
                  </div>
                  <div className="border-b border-blue-700 pb-3">
                    <p className="text-sm">Holiday List 2025</p>
                  </div>
                  <div className="border-b border-blue-700 pb-3">
                    <p className="text-sm">Subject Combination Notice</p>
                  </div>
                  <div className="border-b border-blue-700 pb-3">
                    <p className="text-sm">Alumni Association Form</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card className="bg-blue-900 text-white overflow-hidden">
  <CardContent className="p-6">
    <h3 className="text-xl font-bold mb-4">NOTIFICATIONS</h3>

    <div className="relative h-48 overflow-hidden">
      <div className="space-y-4 animate-scroll">
        <div className="border-b border-blue-700 pb-3">
          <p className="text-sm">Admission Notification 2025</p>
        </div>
        <div className="border-b border-blue-700 pb-3">
          <p className="text-sm">Annual Examination Results</p>
        </div>
        <div className="border-b border-blue-700 pb-3">
          <p className="text-sm">Holiday List 2025</p>
        </div>
        <div className="border-b border-blue-700 pb-3">
          <p className="text-sm">Subject Combination Notice</p>
        </div>
        <div className="border-b border-blue-700 pb-3">
          <p className="text-sm">Alumni Association Form</p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>


            {/* Quick Links */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-900">
                  Quick Links
                </h3>

                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    N.C.C
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    N.S.S
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Sports & Games
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Cultural Unit
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Routine
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Result
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    College Magazine
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}


