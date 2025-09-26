export function ImportantLinks() {
  const links = [
    { name: "NAAC", img: "/link-image/naac.png" },
    { name: "UGC", img: "/link-image/ugc.png" },
    { name: "State University", img: "/link-image/ubv.png" },
    { name: "Government Portal", img: "/link-image/wbgov.png" },
    { name: "Education Ministry", img: "/link-image/rgju.png" },
    { name: "Higher Education", img: "/link-image/ugb.png" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          IMPORTANT LINKS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {links.map((link, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="h-24 rounded-lg flex items-center justify-center bg-white transition-transform duration-300 group-hover:scale-105 shadow-lg">
                <img
                  src={link.img}
                  alt={link.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-center mt-2">
                <span className="text-sm font-semibold text-blue-900">
                  {link.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
