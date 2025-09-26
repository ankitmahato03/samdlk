import Image from "next/image";

export function PhotoGallery() {
  const galleryImages = [
    {
      src: "/link-image/ugb.png",
      title: "Student Activities",
      description: "Students engaging in various academic activities",
    },
    {
      src: "/photo1.webp",
      title: "Graduation Ceremony",
      description: "Annual convocation and graduation ceremony",
    },
    {
      src: "/photo1.webp",
      title: "Modern Classrooms",
      description: "State-of-the-art classroom facilities",
    },
    {
      src: "/photo1.webp",
      title: "Campus Events",
      description: "Cultural and academic events on campus",
    },
    {
      src: "/photo1.webp",
      title: "Faculty Meeting",
      description: "Faculty discussions and academic planning",
    },
  ];

  return (
    <section className="py-16 bg-blue-900 rounded-tl-2xl rounded-tr-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          PHOTO GALLERY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 hover:bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-center px-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-xs">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
