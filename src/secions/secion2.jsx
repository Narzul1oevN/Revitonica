import React from "react";

// Настройки для каждого блока (без изменений)
// Иконки теперь представлены в виде простого SVG-кода внутри FeatureCard
const features = [
  {
    title: "Доступно",
    description:
      "Работа на дому, не нужно никуда ездить, нет начальства, работаешь исключительно на себя.",
    buttonText: "Выбрать курс",
    buttonLink: "#videoCoursScrioling",
    iconColor: "text-blue-500", // Сделаем иконки светлее для темного фона
  },
  {
    title: "Эффективно",
    description:
      "Ты сможешь зарабатывать до тысячи $ в месяц, даже не углубляясь в программирование. Доказанно результатами учеников",
    buttonText: "Смотреть отзывы",
    buttonLink: "#sectionId",
    iconColor: "text-green-500",
  },
  {
    title: "Безопасно",
    description:
      "Если ты всё правильно повторишь и не заработаешь - я верну деньги за весь курс",
    buttonText: "Читать статью",
    buttonLink: "#",
    iconColor: "text-teal-500",
  },
];

// Основной компонент секции
const Secion2 = ({secion2Scroll}) => {
  // ⭐️ ГЛАВНОЕ ИЗМЕНЕНИЕ: Устанавливаем темный, контрастный фон для демонстрации эффекта стекла,
  // как в вашем примере с картой.
  return (
      <div id={secion2Scroll} className="bg-gray-50 py-2 md:py-20 min-h-screen">
      <section className="m-auto">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Адаптивная сетка карточек */}
          <div className="flex flex-wrap justify-center items-center gap-[30px]">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ----------------------------------------------------------------------------------
// ⭐️ КОМПОНЕНТ КАРТОЧКИ С НОВЫМ СТИЛЕМ GLASS EFFECT
// ----------------------------------------------------------------------------------

const FeatureCard = ({ feature }) => {
  // ⭐️ Стили Glassmorphism, перенесенные из вашего примера
  const glassmorphismStyle = {
    // Стиль фона из вашего .container .box
    backgroundColor: "rgba(255, 255, 255, 0.074)",
    border: "1px solid rgba(255, 255, 255, 0.222)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  };

  // Декоративный стиль для псевдоэлемента ::before (желтый круг)
  const beforeStyle = {
    content: '""', // Необходимо для ::before
    backgroundColor: "rgba(0, 255, 0, 0.3)", // #fab5704c
    borderRadius: "50%",
    width: "6rem",
    height: "6rem",
    top: "30%",
    right: "7%",
  };

  // Декоративный стиль для псевдоэлемента ::after (желтая линия)
  const afterStyle = {
    content: '""', // Необходимо для ::after
    backgroundColor: "transparent", // Устанавливаем прозрачный фон
    border: "1px solid rgba(250, 181, 112, 0.3)", // Используем границу для создания линии
    height: "3rem",
    top: "8%",
    right: "5%",
    width: "1px", // Делаем его тонкой линией
  };

  return (
    // ⭐️ Контейнер, имитирующий .container из вашего Styled-Components
    <div className="relative text-white font-sans">
      
      {/* ⭐️ ИМИТАЦИЯ ::BEFORE (Желтый круг) */}
      <div 
        className="absolute z-0" 
        style={beforeStyle}
      ></div>

      {/* ⭐️ ИМИТАЦИЯ ::AFTER (Желтая линия) */}
      <div 
        className="absolute z-0" 
        style={afterStyle}
      ></div>

      {/* ⭐️ КАРТОЧКА (.box) */}
      <div
        className="w-[300px] h-[400px] p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center 
                   relative z-10 overflow-hidden transition duration-300 
                   hover:shadow-glow" // Имитация box-shadow: 0px 0px 20px 1px #ffbb763f
        style={glassmorphismStyle}
      >
        {/* Заголовок "GLASS EFFECT" не нужен, заменяем его на вашу иконку */}

        {/* Иконка (относительное позиционирование для z-index) */}
        <div className={`relative z-10 mb-6 p-4 rounded-full bg-white/10 shadow-inner`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-10 h-10 ${feature.iconColor}`} // Увеличен размер иконки
          >
            {/* Используем простой путь для иконки */}
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.532-2.354-2.353a.75.75 0 1 0-1.06 1.06l2.94 2.94a.75.75 0 0 0 1.082.016l3.87-5.419z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Заголовок */}
        <h3 className="relative text-[#2C3850] z-10 text-2xl font-semibold mb-3">
          {feature.title}
        </h3>

        {/* Описание */}
        <p className="relative z-10 mb-8 flex-grow text-[#687683]">
          {feature.description}
        </p>

        {/* Кнопка */}
        <a
          href={feature.buttonLink}
          className="relative z-10 inline-block px-6 py-3 text-sm font-medium rounded-full 
                     text-gray-900 bg-white border border-white 
                     transition duration-200 ease-in-out mt-auto 
                     hover:bg-gray-100 hover:text-gray-900"
        >
          {feature.buttonText}
        </a>
      </div>
    </div>
  );
};

export default Secion2;