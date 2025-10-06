import React from "react";

// Настройки для каждого блока (без изменений)
// Иконки теперь представлены в виде простого SVG-кода внутри FeatureCard
const features = [
  {
    // Иконка удалена из импортов, но метаданные цвета сохранены
    title: "Доступно",
    description:
      "Работа на дому, не нужно никуда ездить, нет начальства, работаешь исключительно на себя.",
    buttonText: "Выбрать курс",
    buttonLink: "#",
    iconColor: "text-blue-500", // Цвет иконки
  },
  {
    title: "Эффективно",
    description:
      "Ты сможешь зарабатывать до тысячи $ в месяц, даже не углубляясь в программирование. Доказанно результатами учеников",
    buttonText: "Смотреть отзывы",
    buttonLink: "#",
    iconColor: "text-green-500", // Цвет иконки
  },
  {
    title: "Безопасно",
    description:
      "Если ты всё правильно повторишь и не заработаешь - я верну деньги за весь курс",
    buttonText: "Читать статью",
    buttonLink: "#",
    iconColor: "text-teal-500", // Цвет иконки
  },
];

// Основной компонент секции
const Secion2 = () => {
  return (
    // ⭐️ ИЗМЕНЕНИЕ: Установлен фон bg-gray-50 для соответствия Secion1
    <section className="py-2 md:py-20 bg-gray-50 m-auto">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Адаптивная сетка карточек */}
        <div className=" flex flex-wrap justify-center items-center gap-[30px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Компонент стеклянной карточки
const FeatureCard = ({ feature }) => {
  // ⭐️ Ключевой стиль Glassmorphism, применяемый через встроенный style
  const glassmorphismStyle = {
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    // Увеличенная прозрачность для лучшего эффекта
    backgroundColor: "rgba(255, 255, 255, 0.35)",
  };

  return (
    // Увеличенный padding (p-6) и более выраженные hover-эффекты
    <div
      className="w-[300px] h-[400px] p-6 sm:p-8 rounded-3xl shadow-lg border border-white/70 flex flex-col items-center text-center 
                       relative overflow-hidden transition duration-300 transform 
                       hover:shadow-2xl hover:scale-[1.02]"
      style={glassmorphismStyle}
    >
      {/* Декоративный элемент для глубины (легкий градиент внутри карточки) */}
      <div
        className="absolute inset-0 z-0 opacity-10 rounded-3xl pointer-events-none 
                        bg-gradient-to-br from-white/80 via-white/10 to-transparent"
      ></div>

      {/* Иконка (относительное позиционирование для z-index) */}
      {/* ⭐️ ИЗМЕНЕНИЕ: Восстановлена подложка bg-white/70 для эффекта стекла */}
      <div
        className={`relative z-10 mb-6 p-4 rounded-full shadow-inner bg-white/70`}
      >
        {/* Замена импортированной иконки на inline SVG (простой плейсхолдер) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-8 h-8 ${feature.iconColor}`}
        >
          {/* Используем простой путь для иконки (круглая метка), чтобы избежать ошибок импорта */}
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.532-2.354-2.353a.75.75 0 1 0-1.06 1.06l2.94 2.94a.75.75 0 0 0 1.082.016l3.87-5.419z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Заголовок */}
      <h3 className="relative z-10 text-2xl font-bold text-gray-800 mb-3">
        {feature.title}
      </h3>

      {/* Описание */}
      <p className="relative z-10 text-gray-700 mb-8 flex-grow">
        {feature.description}
      </p>

      {/* Кнопка */}
      <a
        href={feature.buttonLink}
        // Стильная кнопка с градиентом при наведении
        className="relative z-10 inline-block px-6 py-3 text-sm font-medium rounded-full 
                           text-gray-800 bg-white/80 border border-gray-300 
                           transition duration-200 ease-in-out mt-auto 
                           hover:bg-gray-100 hover:border-gray-500"
      >
        {feature.buttonText}
      </a>
    </div>
  );
};

export default Secion2;
