import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/2513e2f9-14ca-40e3-aa34-b1832a634c12/files/065b8862-741c-4c44-98c0-c0d89f9e0c52.jpg"
          alt="Студент готовится к ЕГЭ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/60 to-blue-950/80" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <p className="text-blue-300 uppercase tracking-widest text-xs sm:text-sm mb-4 font-medium">
          Бесплатный курс подготовки
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          Сдай ЕГЭ на{" "}
          <span className="text-blue-400">82+</span>
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-10 leading-relaxed">
          Освой джентльменский набор заданий и гарантированно получи высокий балл.
          100 видеоуроков, разбор всех типов задач — абсолютно бесплатно.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#program"
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 uppercase tracking-wide text-sm font-semibold transition-all duration-300 cursor-pointer"
          >
            Начать обучение
          </a>
          <a
            href="#about"
            className="border border-white/50 hover:border-white text-white px-8 py-3 uppercase tracking-wide text-sm font-semibold transition-all duration-300 cursor-pointer hover:bg-white/10"
          >
            Узнать подробнее
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 sm:gap-16 text-white z-10">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-400">82+</div>
          <div className="text-xs uppercase tracking-wide opacity-70 mt-1">Гарантия баллов</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-400">100</div>
          <div className="text-xs uppercase tracking-wide opacity-70 mt-1">Видеоуроков</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-400">0 ₽</div>
          <div className="text-xs uppercase tracking-wide opacity-70 mt-1">Полностью бесплатно</div>
        </div>
      </div>
    </div>
  );
}
