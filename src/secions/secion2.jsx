import React from "react";
// 1. Импортированные изображения
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

// Обновленные Настройки для каждого блока
// Теперь в них есть поле 'iconImage' для пути к изображению
const features = [
  {
    title: "Доступно",
    description:
      "Работа на дому, не нужно никуда ездить, нет начальства, работаешь исключительно на себя.",
    buttonText: "Выбрать курс",
    buttonLink: "#videoCoursScrioling",
    iconColor: "text-blue-500",
    iconImage: second, // <-- Добавлено изображение
  },
  {
    title: "Эффективно",
    description:
      "Ты  сможешь  зарабатывать  до  тысячи  $  в  месяц,  даже  не  углубляясь  в  программирование.    Доказанно  результатами  учеников",
    buttonText: "Смотреть отзывы",
    buttonLink: "#sectionId",
    iconColor: "text-green-500",
    iconImage: first, // <-- Добавлено изображение
  },
  {
    title: "Безопасно",
    description:
      "Если ты всё правильно повторишь и не заработаешь - я верну деньги за весь курс",
    buttonText: "Читать статью",
    buttonLink: "#",
    iconColor: "text-teal-500",
    iconImage: third, // <-- Добавлено изображение
  },
];

// Основной компонент секции (без изменений)
const Secion2 = ({ secion2Scroll }) => {
  return (
    <div id={secion2Scroll} className="bg-gray-50 py-2 md:py-20 min-h-screen">
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
// ⭐️ КОМПОНЕНТ КАРТОЧКИ С АДАПТИВНЫМ GLASS EFFECT МАКЕТОМ
// ----------------------------------------------------------------------------------

const FeatureCard = ({ feature }) => {
  const glassmorphismStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.074)",
    border: "1px solid white",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  };

  // Декоративные стили (без изменений)
  const beforeStyle = {
    content: '""',
    position: 'absolute',
    backgroundColor: "rgba(0, 128, 0, 0.6)", // более насыщенный зелёный
    width: "4rem",
    height: "7rem", // удлинённая форма
    borderRadius: "60% 40% 60% 40% / 50% 60% 40% 50%", // сложная форма радиуса
    transform: "rotate(-20deg)", // лёгкий наклон
    top: "15%",
    right: "-5%",
    boxShadow: "0 0 10px rgba(0, 100, 0, 0.3)", // мягкая тень
  };
  

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
        style={beforeStyle}
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
            src={feature.iconImage} // <-- Используем путь из массива features
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