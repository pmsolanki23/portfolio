import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaRocket,
  FaBrain,
} from "react-icons/fa";

/* 🔹 DATA */
const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Core Technologies" },
  { value: "100%", label: "Commitment" },
];

const journey = [
  {
    title: "Foundation",
    desc: "Built a strong base in HTML, CSS, and JavaScript with focus on core fundamentals",
  },
  {
    title: "Full-Stack Development",
    desc: "Worked with the MERN stack to build complete, production-ready applications",
  },
  {
    title: "Real-World Systems",
    desc: "Developed scalable apps, dashboards, and performance-focused systems",
  },
];

const skills = [
  {
    title: "Frontend Engineering",
    desc: "Building modern, responsive interfaces with React and Tailwind",
    icon: <FaCode />,
  },
  {
    title: "Backend Development",
    desc: "Designing scalable APIs and architectures using Node.js and Express",
    icon: <FaServer />,
  },
  {
    title: "Problem Solving",
    desc: "Strong analytical thinking with focus on performance and scalability",
    icon: <FaBrain />,
  },
];

const valuePoints = [
  {
    title: "Strong Full-Stack Expertise",
    desc: "Hands-on experience building end-to-end applications using the MERN stack",
    icon: <FaCode />,
  },
  {
    title: "Scalable & Clean Code",
    desc: "Focused on writing maintainable, efficient, and production-ready code",
    icon: <FaServer />,
  },
  {
    title: "Fast Adaptability",
    desc: "Quickly learn and integrate new technologies based on project needs",
    icon: <FaRocket />,
  },
  {
    title: "Problem Solving Mindset",
    desc: "Approach development with logic, clarity, and real-world problem solving",
    icon: <FaBrain />,
  },
];

function ValueCard({ title, desc, icon }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="
        group relative p-7 rounded-2xl overflow-hidden

        bg-white border border-gray-200
        dark:bg-white/5 dark:border-white/10

        backdrop-blur-xl
        shadow-sm hover:shadow-2xl

        transition-all duration-300
      "
    >

      {/* 🔥 GLOW BACKGROUND */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-br from-blue-400/10 via-emerald-400/10 to-transparent
        blur-2xl transition duration-500
      "></div>

      {/* 🔥 TOP ICON BOX */}
      <div className="
        relative z-10 w-12 h-12 flex items-center justify-center
        rounded-xl mb-4

        bg-gradient-to-r from-blue-400 to-emerald-400
        text-white text-xl

        shadow-md group-hover:scale-110
        transition
      ">
        {icon}
      </div>

      {/* 🔥 TITLE */}
      <h3 className="
        relative z-10 text-lg font-semibold mb-2
        text-gray-800 dark:text-gray-200
        group-hover:text-transparent
        group-hover:bg-clip-text
        group-hover:bg-gradient-to-r
        group-hover:from-blue-400 group-hover:to-emerald-400
        transition
      ">
        {title}
      </h3>

      {/* 🔥 DESC */}
      <p className="
        relative z-10 text-sm leading-relaxed
        text-gray-500 dark:text-gray-400
      ">
        {desc}
      </p>

      {/* 🔥 SIDE ACCENT LINE */}
      <div className="
        absolute left-0 top-0 h-full w-[3px]
        bg-gradient-to-b from-blue-400 to-emerald-400
        opacity-70
      "></div>

    </motion.div>
  );
}

/* 🔹 ANIMATION */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

/* 🔹 MAIN */
export default function About() {
  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto">

      {/* 🔥 HERO */}
      <section className="grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div {...fadeUp}>
          <p className="text-xs tracking-[0.4em] text-gray-500 mb-4">
            ABOUT ME
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
            Building{" "}
            <span className="gradient-text">
              scalable systems
            </span>{" "}
            with precision
          </h1>

          <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            I design and develop high-performance web applications with modern UI,
            clean architecture, and real-world impact.
          </p>

          <p className="mt-4 text-gray-400">
            Focused on performance, scalability, and seamless user experience.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          {...fadeUp}
          className="flex justify-center"
        >
          <div className="
            relative w-[280px] md:w-[360px] aspect-square
            rounded-3xl p-[2px]
            bg-gradient-to-tr from-blue-400 to-emerald-400
          ">

            <div className="
              w-full h-full rounded-3xl overflow-hidden
              bg-white dark:bg-[#020617]
            ">
              <img
                src="/images/profile.jpg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 rounded-3xl bg-blue-400/20 blur-2xl -z-10"></div>
          </div>
        </motion.div>

      </section>

      {/* 🔥 STATS */}
      <section className="grid md:grid-cols-3 gap-6 mt-24">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="
              p-8 text-center rounded-2xl
              bg-white border border-gray-200
              dark:bg-white/5 dark:border-white/10
              backdrop-blur-xl
              shadow-sm hover:shadow-xl
              transition
            "
          >
            <h2 className="text-4xl font-bold gradient-text">
              {s.value}
            </h2>
            <p className="text-gray-400 mt-2">{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* 🔥 BREAK */}
      <section className="mt-32 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          I build products that are{" "}
          <span className="gradient-text">
            fast, scalable & intuitive
          </span>
        </h2>

        <p className="text-gray-400 mt-4">
          Focused on performance, clarity, and real-world usability.
        </p>
      </section>

      {/* 🔥 SKILLS */}
      <section className="mt-28 grid md:grid-cols-3 gap-8">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="
              p-6 rounded-2xl
              bg-white border border-gray-200
              dark:bg-white/5 dark:border-white/10
              backdrop-blur-xl
              shadow-sm hover:shadow-xl
              transition
            "
          >
            <div className="text-3xl text-blue-400 mb-4">
              {s.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {s.title}
            </h3>

            <p className="text-gray-400">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* 🔥 WHAT I BRING */}
<section className="mt-32 max-w-6xl mx-auto">

  <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
    What I Bring
  </h2>

  <div className="grid md:grid-cols-2 gap-10">
    {valuePoints.map((item, i) => (
      <ValueCard
        key={i}
        title={item.title}
        desc={item.desc}
        icon={item.icon}
      />
    ))}
  </div>

</section>

      {/* 🔥 JOURNEY (TIMELINE) */}
     <section className="mt-32">

  <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
    My Journey
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {journey.map((j, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        className="
          relative p-6 rounded-2xl

          bg-white border border-gray-200
          dark:bg-white/5 dark:border-white/10

          backdrop-blur-xl
          shadow-sm hover:shadow-xl

          hover:-translate-y-2
          transition duration-300
        "
      >

        {/* 🔥 Step Number */}
        <div className="
          absolute -top-4 left-6
          px-3 py-1 text-xs font-semibold rounded-full

          bg-gradient-to-r from-blue-400 to-emerald-400
          text-white shadow-md
        ">
          Step {i + 1}
        </div>

        {/* 🔥 Title */}
        <h3 className="text-xl font-semibold mt-4 mb-2">
          {j.title}
        </h3>

        {/* 🔥 Desc */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {j.desc}
        </p>

      </motion.div>
    ))}

  </div>

</section>

      {/* 🔥 CTA */}
      <section className="mt-32 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s build something meaningful 
        </h2>

        <p className="text-gray-400 mt-4">
          Open to collaborations, freelance projects, and exciting opportunities.
        </p>

        <a
          href="/contact"
          className="
            inline-block mt-6 px-8 py-3 rounded-xl font-semibold
            bg-gradient-to-r from-blue-400 to-emerald-400 text-white
            shadow-lg hover:scale-105 hover:shadow-xl
            transition
          "
        >
          Get in Touch
        </a>

      </section>

    </div>
  );
}