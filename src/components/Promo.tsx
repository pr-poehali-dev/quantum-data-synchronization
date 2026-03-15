import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const tasks = [
  { id: "1–12", label: "Базовые задания", points: "48 баллов" },
  { id: "13", label: "Уравнения и неравенства", points: "12 баллов" },
  { id: "15", label: "Планиметрия", points: "12 баллов" },
  { id: "16", label: "Стереометрия", points: "12 баллов" },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      id="program"
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/2513e2f9-14ca-40e3-aa34-b1832a634c12/files/04bbe5f3-5288-4a00-bc8f-36b19c1fcddf.jpg"
            alt="Математические формулы и диаграммы"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/75" />
        </motion.div>
      </div>

      <h3 className="absolute top-10 left-6 text-blue-300 uppercase z-10 text-xs sm:text-sm tracking-widest font-semibold">
        Джентльменский набор
      </h3>

      <div className="absolute top-10 right-6 z-10">
        <div className="text-white text-right">
          <div className="text-4xl sm:text-5xl font-bold text-blue-400">82+</div>
          <div className="text-xs uppercase tracking-widest opacity-70 mt-1">баллов гарантировано</div>
        </div>
      </div>

      <div className="absolute z-10 w-full px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="border border-white/20 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-blue-400 text-xs uppercase tracking-widest mb-2 font-semibold">
                Задание {task.id}
              </div>
              <div className="text-white font-semibold text-base sm:text-lg mb-1">
                {task.label}
              </div>
              <div className="text-white/60 text-sm">{task.points}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="absolute bottom-10 left-6 text-white/70 text-sm sm:text-base max-w-xs sm:max-w-md z-10 leading-relaxed">
        Освой эти задания — и 82 балла у тебя в кармане.<br />
        Без стресса, без репетиторов, без лишних трат.
      </p>
    </div>
  );
}
