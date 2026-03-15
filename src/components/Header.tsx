interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-base font-bold uppercase tracking-widest">
          ЕГЭ<span className="text-blue-400">82+</span>
        </div>
        <nav className="flex gap-6 sm:gap-8">
          <a
            href="#about"
            className="text-white hover:text-blue-300 transition-colors duration-300 uppercase text-xs sm:text-sm tracking-wide"
          >
            О курсе
          </a>
          <a
            href="#program"
            className="text-white hover:text-blue-300 transition-colors duration-300 uppercase text-xs sm:text-sm tracking-wide"
          >
            Программа
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-300 transition-colors duration-300 uppercase text-xs sm:text-sm tracking-wide"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
