const advantages = [
  {
    number: "01",
    title: "Джентльменский набор",
    description:
      "Задания 1–12, 13, 15, 16 дают более 82 баллов. Мы разбираем каждое из них с нуля до уровня автоматизма.",
  },
  {
    number: "02",
    title: "100 видеоуроков",
    description:
      "Полный курс с разбором теории, алгоритмами решения и типичными ошибками. Смотри в любое время.",
  },
  {
    number: "03",
    title: "Система прогресса",
    description:
      "Отслеживай свои результаты, проходи тренировочные задания и видь, как растёт твой балл.",
  },
  {
    number: "04",
    title: "Абсолютно бесплатно",
    description:
      "Никаких скрытых платежей. Весь курс — от первого урока до финального теста — открыт для каждого.",
  },
];

export default function Featured() {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 bg-white"
    >
      <div className="flex-1 h-[400px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/2513e2f9-14ca-40e3-aa34-b1832a634c12/files/9f3ee8f1-e932-4f8a-929f-981d2603ab5f.jpg"
          alt="Выпускники с высокими баллами ЕГЭ"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-4 text-xs tracking-widest text-blue-500 font-semibold">
          Почему именно этот курс
        </h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight font-bold">
          Не просто видеоуроки —<br />
          чёткая система<br />
          гарантированного результата
        </p>

        <div className="flex flex-col gap-6">
          {advantages.map((item) => (
            <div key={item.number} className="flex gap-4 items-start">
              <span className="text-blue-400 font-bold text-sm pt-0.5 shrink-0 w-6">
                {item.number}
              </span>
              <div>
                <div className="font-semibold text-neutral-900 text-sm uppercase tracking-wide mb-1">
                  {item.title}
                </div>
                <div className="text-neutral-500 text-sm leading-relaxed">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#program"
          className="mt-10 bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide font-semibold"
        >
          Смотреть программу
        </a>
      </div>
    </div>
  );
}
