import Link from "next/link";

const clients = [
  { name: "Ricehouse", logo: "/logos/ricehouse_white.webp", scale: 0.95, invert: false, href: "/casi-studio/ricehouse" },
  { name: "Lely", logo: "/logos/lely_white.svg", scale: 0.95, invert: false, href: "/casi-studio/lely" },
  { name: "Randstad", logo: "/logos/randstad_blue.svg", scale: 1, invert: true, href: "/casi-studio" },
  { name: "CVE", logo: "/logos/cve_mono.webp", scale: 0.8, invert: false, href: "/casi-studio/cve" },
  { name: "Findomestic", logo: "/logos/findomestic_white.webp", scale: 1.9, invert: false, href: "/casi-studio/findomestic" },
  { name: "Sambonet", logo: "/logos/sambonet_white.webp", scale: 1, invert: false, href: "/casi-studio" },
  { name: "Ufficio Pio", logo: "/logos/ufficio_pio_white.webp", scale: 1, invert: false, href: "/casi-studio/ufficio-pio" },
  { name: "Eu.promotions", logo: "/logos/eupromotion_white.webp", scale: 1.1, invert: false, href: "/casi-studio/eupromotions" },
  { name: "Comune di Vercelli", logo: "/logos/comune_vercelli_white.png", scale: 1.05, invert: false, href: "/casi-studio/comune-di-vercelli-violenza-di-genere" },
];

// Duplicate the array 3 times for seamless infinite scroll
const duplicatedClients = [...clients, ...clients, ...clients];

const ClientsSection = () => {
  return (
    <section className="py-12 bg-[#000000] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-section text-white opacity-90 mb-10">
          Hanno scelto Venturo
        </h2>
      </div>

      <div className="relative">
        {/* Left gradient fade */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-20 md:w-[120px] z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000000 0%, transparent 100%)' }}
        />
        
        {/* Right gradient fade */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-20 md:w-[120px] z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000000 0%, transparent 100%)' }}
        />

        {/* Scrolling container */}
        <div className="flex items-center animate-scroll hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, index) => (
            <Link
              href={client.href}
              key={`${client.name}-${index}`}
              aria-label={`Vai al caso studio ${client.name}`}
              className="flex-shrink-0 w-[180px] h-[80px] md:w-[220px] md:h-[100px] mx-3 md:mx-4 px-8 md:px-10 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name} - cliente Venturo`}
                style={{ transform: `scale(${client.scale})`, maxHeight: '40px' }}
                className={`w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${client.invert ? 'invert brightness-0 invert' : ''}`}
                width={160}
                height={40}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
