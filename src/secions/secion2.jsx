import React, { useState, useEffect } from "react";
// 1. Импортированные изображения
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

// ОБРАТИТЕ ВНИМАНИЕ: Вам нужно создать и импортировать этот хук
// или заменить его на свою логику определения ширины экрана.
// Я предоставляю базовую реализацию для примера:

// ------------------------------------------------------------------
// ⚠️ ВАЖНО: Хук для получения ширины окна (пример)
// ------------------------------------------------------------------
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
// ------------------------------------------------------------------


// Обновленные Настройки для каждого блока (без изменений)
const features = [
  // ... ваш массив features
  {
    title: "Доступно",
    description:
      "Работа на дому, не нужно никуда ездить, нет начальства, работаешь исключительно на себя.",
    buttonText: "Выбрать курс",
    buttonLink: "#videoCoursScrioling",
    iconColor: "text-blue-500",
    iconImage: second,
  },
  {
    title: "Эффективно",
    description:
      "Ты  сможешь  зарабатывать  до  тысячи  $  в  месяц,  даже  не  углубляясь  в  программирование.    Доказанно  результатами  учеников",
    buttonText: "Смотреть отзывы",
    buttonLink: "#sectionId",
    iconColor: "text-green-500",
    iconImage: first,
  },
  {
    title: "Безопасно",
    description:
      "Если ты всё правильно повторишь и не заработаешь - я верну деньги за весь курс",
    buttonText: "Читать статью",
    buttonLink: "#",
    iconColor: "text-teal-500",
    iconImage: third,
  },
];

// Основной компонент секции (без изменений)
const Secion2 = ({ secion2Scroll }) => {
  return (
    <div id={secion2Scroll} className="bg-gray-50 py-2 h-auto mt-[10xp] mb-[10px]">
      <section className="m-auto">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Адаптивная сетка карточек */}
          <div className="flex flex-wrap justify-center items-center gap-[30px]">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-[500px] lg:w-[300px]">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ----------------------------------------------------------------------------------
// ⭐️ МОДИФИЦИРОВАННЫЙ КОМПОНЕНТ КАРТОЧКИ
// ----------------------------------------------------------------------------------

const FeatureCard = ({ feature }) => {
  // Получаем текущую ширину окна
  const width = useWindowWidth();
  const isDesktop = width >= 768; // Используем ваш брейкпойнт (lg: 768px)

  const glassmorphismStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.074)",
    border: "1px solid white",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  };

  // 1. Базовые стили для ::before
  const baseBeforeStyle = {
    content: '""',
    position: 'absolute',
    backgroundColor: "rgba(0, 128, 0, 0.6)", 
    
    // Уменьшим размер на мобильных, чтобы избежать обрезки, как вы просили ранее
    width: isDesktop ? "4rem" : "2.5rem", 
    height: isDesktop ? "7rem" : "4rem", 

    borderRadius: "60% 40% 60% 40% / 50% 60% 40% 50%", 
    transform: "rotate(-20deg)", 
    top: "15%",
    
    // 2. ДИНАМИЧЕСКОЕ ИЗМЕНЕНИЕ 'right'
    right: isDesktop ? "-5%" : "-1%", // Десктоп: -5%, Мобильный: 0%
    
    boxShadow: "0 0 10px rgba(0, 100, 0, 0.3)", 
  };
  
  // 3. Создаем финальный beforeStyle объединяя базовый и динамический
  const beforeStyle = baseBeforeStyle;
  
  // Декоративные стили (без изменений)
  const afterStyle = {
    content: '""',
    backgroundColor: "transparent",
    border: "1px solid rgba(250, 181, 112, 0.3)",
    height: "3rem",
    top: "8%",
    right: "5%",
    width: "1px",
  };

  return (
    <div className="relative text-white font-sans">
      
      {/* ДЕКОРАТИВНЫЕ ЭЛЕМЕНТЫ */}
      <div
        className="absolute z-0"
        style={beforeStyle} // <-- Используем динамический beforeStyle
      ></div>
      <div
        className="absolute z-0"
        style={afterStyle}
      ></div>

      {/* ⭐️ КАРТОЧКА (.box) */}
      <div
        className={`
            p-6 sm:p-8 rounded-xl shadow-lg relative z-10 overflow-hidden transition duration-300 hover:shadow-glow
            
            // ⭐️ МОБИЛЬНЫЙ (по умолчанию, до lg:): Горизонтальный макет
            flex flex-row-reverse  items-center justify-between min-h-[180px] text-left
            
            // ⭐️ ДЕСКТОП (lg:): Вертикальный, центрированный макет
            lg:flex-col lg:items-center lg:text-center lg:min-h-[400px]
        `}
        style={glassmorphismStyle}
      >

        {/* ⭐️ ИКОНКА (ЗАМЕНА SVG НА IMG) */}
        <div className={`relative z-10 flex-shrink-0 mb-0 lg:mb-6 p-4`}>
          {/* Использование импортированного изображения */}
          <img
            src={feature.iconImage} 
            alt={feature.title}
            // Устанавливаем размер изображения
            className={`w-20 h-20`} 
          />
        </div>

        {/* ⭐️ КОНТЕНТ (Заголовок, Описание, Кнопка) */}
        <div className="flex-grow pr-4 lg:pr-0 lg:flex-grow-0 flex flex-col items-start lg:items-center"> 
          
          {/* Заголовок */}
          <h3 className="relative text-[#2C3850] z-10 text-xl font-semibold mb-2 lg:text-2xl lg:mb-3">
            {feature.title}
          </h3>

          {/* Описание */}
          <p className="relative text-center z-10 mb-4 text-sm flex-grow text-[#687683] lg:mb-8 lg:text-base">
            {feature.description}
          </p>

          {/* Кнопка */}
          <a
            href={feature.buttonLink}
            className="relative z-10 inline-block px-4 py-2 text-xs font-medium rounded-full 
                      text-gray-900 border border-gray-50 
                      transition duration-200 ease-in-out lg:mt-auto 
                      hover:bg-gray-200 hover:text-gray-900 lg:px-6 lg:py-3 lg:text-sm"
          >
            {feature.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Secion2;