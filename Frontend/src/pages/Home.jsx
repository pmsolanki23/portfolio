import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import Projects from "../components/sections/Projects";
import WhatIDo from "../components/sections/WhatIDo";
import TechScroll from "../components/sections/TechLogoScroll";
import ContactCTA from "../components/sections/ContactCTA";
import AboutPreview from "../components/sections/AboutPreview";
import ReviewModal from "../components/sections/ReviewModal";

import { useState } from "react";
import { MdReviews } from "react-icons/md";
import ReviewsSection from "../components/sections/ReviewsSection";
import ReviewFloatingButton from "../components/ui/ReviewFloatingButton";

// export default function Home() {

//   return (
//     <div className="relative pt-6 sm:pt-8 md:pt-10">
//       {/* 🌌 BACKGROUND */}
//       <div className="fixed inset-0 -z-10 pointer-events-none">
//         <div
//           className="
//           absolute inset-0
//           bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.15),transparent_40%),
//               radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.15),transparent_40%)]
//         "
//         />
//       </div>

//       {/* 🔥 SECTIONS */}
//       <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
//         <Hero />
//         <TechStack />
//         <TechScroll />
//         <WhatIDo />
//         <AboutPreview />
//         <Projects />
//         <ContactCTA />
//         <ReviewsSection/>
//       </div>

//       <ReviewFloatingButton/>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="relative pt-6 sm:pt-8 md:pt-10">

      {/* 🌌 BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="
          absolute inset-0
          bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.15),transparent_40%),
              radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.15),transparent_40%)]
        "
        />
      </div>

      {/* 🔥 SECTIONS */}
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
        <Hero />
        <TechStack />
        <TechScroll />
        <WhatIDo />
        <AboutPreview />
        <Projects />
        <ReviewsSection />
        <ContactCTA />
      </div>

    </div>
  );
}