import Image from 'next/image';

const polaroids = [
  {
    src: "/images/reels/reel1.jpeg",
    caption: "Viral moves",
    rotation: "-rotate-[16deg]",
    zIndex: "z-10",
    offsetX: "-translate-x-[85%] sm:-translate-x-[100%] md:-translate-x-[110%]",
    offsetY: "translate-y-[15px] md:translate-y-[20px]"
  },
  {
    src: "/images/reels/reel2.jpg",
    caption: "Trending dance",
    rotation: "-rotate-[8deg]",
    zIndex: "z-20",
    offsetX: "-translate-x-[45%] sm:-translate-x-[50%] md:-translate-x-[55%]",
    offsetY: "translate-y-[5px] md:translate-y-[10px]"
  },
  {
    src: "/images/reels/reel3.jpg",
    caption: "Choreography",
    rotation: "rotate-[0deg]",
    zIndex: "z-30",
    offsetX: "-translate-x-0",
    offsetY: "translate-y-[0px]"
  },
  {
    src: "/images/reels/reel4.jpg",
    caption: "Dance tutorials",
    rotation: "rotate-[8deg]",
    zIndex: "z-40",
    offsetX: "translate-x-[45%] sm:translate-x-[50%] md:translate-x-[55%]",
    offsetY: "translate-y-[5px] md:translate-y-[10px]"
  },
  {
    src: "/images/reels/reel5.jpeg",
    caption: "Perfect sync",
    rotation: "rotate-[16deg]",
    zIndex: "z-50",
    offsetX: "translate-x-[85%] sm:translate-x-[100%] md:translate-x-[110%]",
    offsetY: "translate-y-[15px] md:translate-y-[20px]"
  }
];

export function BehindTheScenesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto pt-16 pb-32 px-4 relative z-10 flex flex-col items-center overflow-hidden">
      
      {/* Floating Tree Sticker */}
      <div className="absolute right-[5%] top-[5%] opacity-80 rotate-[15deg] pointer-events-none hidden md:block">
        <img 
          src="https://framerusercontent.com/images/3F7ldnftLP0RuSKEOksr3928ms.webp?width=443&height=446" 
          alt="Tree Sticker" 
          className="w-[120px] h-[120px] object-cover drop-shadow-lg" 
        />
      </div>

      {/* Text Content */}
      <div className="text-center mb-10 md:mb-16 relative z-50 px-2">
        <h2 className="text-[32px] md:text-[56px] font-[730] tracking-[-0.4px] text-[#1b1c1c] leading-[110%] mb-4 md:mb-6">
          Instagram Reel Downloader
        </h2>
        <p className="text-[16px] md:text-[19px] font-normal text-[#1b1c1c]/90 max-w-2xl mx-auto leading-[1.6]">
          The fastest way to download Instagram reels, photos, and X videos directly to your device. No apps to install, no spam, and completely free. Here are some of the aesthetic moments people are saving using GrabIt2Me:
        </p>
      </div>

      {/* Polaroids Container */}
      <div className="relative w-full max-w-[800px] h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center mt-4 md:mt-8">
        {polaroids.map((polaroid, index) => (
          <div 
            key={index}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${polaroid.zIndex}`}
          >
            <div className={`transition-transform ${polaroid.offsetX} ${polaroid.offsetY} ${polaroid.rotation}`}>
              {/* Polaroid Card */}
              <div className="bg-[#fbfeff] p-2 pb-6 sm:p-3 sm:pb-8 md:p-3 md:pb-12 rounded-[16px] md:rounded-[24px] shadow-[0px_8px_24px_rgba(0,0,0,0.12),inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.3)] w-[120px] sm:w-[150px] md:w-[200px]">
                <div className="w-full aspect-[9/16] relative rounded-[8px] md:rounded-[12px] overflow-hidden bg-gray-200">
                  <Image 
                    src={polaroid.src}
                    alt={polaroid.caption}
                    fill
                    sizes="(max-width: 768px) 150px, 200px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 md:mt-4 text-center">
                  <span className="font-serif italic text-[12px] sm:text-[14px] md:text-[18px] text-[#1b1c1c]/80 tracking-tight">
                    {polaroid.caption}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
