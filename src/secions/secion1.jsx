import React from "react";

// Импортируем компоненты Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Импортируем необходимые стили и модули Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// --- Иконки (оставляем без изменений) ---
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 md:h-6 md:w-6 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const Secion1 = () => {
  // Данные для карточек уроков
  const lessons = [
    {
      title: "Урок 1",
      description: "Разглаживаем морщины",
      imageUrl:
        "https://images.unsplash.com/photo-1580281657527-47f249e0f4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFjZSx5b2dhLHNraW5jYXJlfHx8fHx8MTcxMTc0MjMyMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    },
    {
      title: "Урок 2",
      description: "Ликвидируем отеки",
      imageUrl:
        "https://images.unsplash.com/photo-1607214914272-5c22293d828a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFjZSxtYXNzYWdlLHNwYXx8fHx8fDE3MTE3NDIzNDQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    },
    {
      title: "Урок 3",
      description: "Устраняем сутулость",
      imageUrl:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8eW9nYSxzdHJldGNoLGJhY2t8fHx8fHwxNzExNzQyMzc0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    },
  ];

  const primaryColor = "#2d4156";
  const bannerImageUrl = "https://i.imgur.com/4qK4R8l.png";

  return (
    <section className="bg-gray-50 pb-1 sm:pb-2 pt-0 sm:pt-0">
      <div className="container mx-auto px-4 relative max-w-7xl">
        {/* --- СЛАЙДЕР БАННЕРОВ (ОСТАВЛЯЕМ БЕЗ ИЗМЕНЕНИЙ) --- */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={false}
          navigation={false}
          className="rounded-2xl overflow-hidden h-[450px] md:h-[550px]"
        >
          {/* Слайд 1 */}
          <SwiperSlide className="h-full">
            <div
              className="relative w-full h-full bg-cover bg-center text-white p-8 md:p-12 flex flex-col justify-center"
              style={{ backgroundImage: `url('${bannerImageUrl}')` }}
            >
              <div className="relative z-10 max-w-lg text-white">
                <span className="inline-block bg-white text-sm font-semibold px-4 py-1 rounded-md mb-4 text-[#C04245]">
                  Только до 10 октября
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  ОСЕННЯЯ РАСПРОДАЖА РЕВИТОНИКИ
                </h2>
                <div className="flex items-baseline gap-4 my-6">
                  <span className="text-6xl md:text-7xl font-bold text-[#FF5051]">
                    от 50%
                  </span>
                  <span className="text-4xl font-light text-white opacity-70">
                    |
                  </span>
                  <span className="text-5xl md:text-6xl font-bold text-[#FF5051] opacity-90">
                    х2
                  </span>
                </div>
                <div className="flex gap-10">
                  <div className="max-w-[150px]">
                    <p className="font-semibold text-sm">Скидываем</p>
                    <p className="font-semibold text-sm">цены на курсы</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Увеличиваем</p>
                    <p className="font-semibold text-sm">доступ</p>
                  </div>
                </div>
                <p className="text-xs mt-3 opacity-90 text-shadow">
                  В рассрочку от 1000 руб./мес.*
                </p>
                <button className="absolute bottom-10 right-10 w-[90px] h-[90px] bg-white/30 backdrop-blur-sm text-white rounded-full flex flex-col items-center justify-center font-semibold text-sm shadow-xl hover:bg-white/40 transition-all">
                  Подробнее
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Слайд 2 */}
          <SwiperSlide className="h-full">
            <div
              className="relative w-full h-full bg-cover bg-center text-white p-8 md:p-12 flex flex-col justify-center"
              style={{ backgroundImage: `url('${bannerImageUrl}')` }}
            >
              <div className="relative z-10 max-w-lg text-white">
                <span className="inline-block bg-white text-sm font-semibold px-4 py-1 rounded-md mb-4 text-[#C04245]">
                  Только до 10 октября
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  ОСЕННЯЯ РАСПРОДАЖА РЕВИТОНИКИ
                </h2>
                <div className="flex items-baseline gap-4 my-6">
                  <span className="text-6xl md:text-7xl font-bold text-[#FF5051]">
                    от 50%
                  </span>
                  <span className="text-4xl font-light text-white opacity-70">
                    |
                  </span>
                  <span className="text-5xl md:text-6xl font-bold text-[#FF5051] opacity-90">
                    х2
                  </span>
                </div>
                <div className="flex gap-10">
                  <div className="max-w-[150px]">
                    <p className="font-semibold text-sm">Скидываем</p>
                    <p className="font-semibold text-sm">цены на курсы</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Увеличиваем</p>
                    <p className="font-semibold text-sm">доступ</p>
                  </div>
                </div>
                <p className="text-xs mt-3 opacity-90 text-shadow">
                  В рассрочку от 1000 руб./мес.*
                </p>
                <button className="absolute bottom-10 right-10 w-[90px] h-[90px] bg-white/30 backdrop-blur-sm text-white rounded-full flex flex-col items-center justify-center font-semibold text-sm shadow-xl hover:bg-white/40 transition-all">
                  Подробнее
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* --- СЕКЦИЯ С 3 УРОКАМИ (АДАПТИВНОСТЬ) --- */}
        <div
          className="w-full bg-white rounded-xl shadow-2xl p-6 md:p-8 transform -translate-y-24 md:-translate-y-32 z-20 relative max-w-[calc(100%-2rem)] mx-auto"
          style={{
            boxShadow:
              "0 8px 16px -4px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Содержимое блока уроков */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            {/* --- ЛЕВЫЙ БЛОК: Текст и кнопка (ДЕКСТОПНАЯ ВЕРСИЯ) --- */}
            {/* На больших экранах lg: текст слева, кнопка под ним */}
            <div className="hidden lg:flex flex-col text-left flex-shrink-0">
              <h3 className="text-xl md:text-2xl font-bold text-[#444] max-w-xs leading-snug">
                Пройдите 3 урока и ощутите моментальный эффект
              </h3>
              <button
                className="mt-6 px-10 py-3 text-white font-semibold rounded-md transition-colors shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Смотреть
              </button>
            </div>

            {/* --- ПРАВЫЙ БЛОК: КАРТОЧКИ УРОКОВ (ДЕКСТОПНАЯ ВЕРСИЯ) --- */}
            {/* На больших экранах lg: 3 карточки в Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-4 w-full lg:w-3/4">
              {lessons.map((lesson) => (
                <div
                  key={lesson.title}
                  className="relative group w-full h-48 rounded-lg overflow-hidden cursor-pointer shadow-md"
                >
                  <img
                    src={lesson.imageUrl}
                    alt={lesson.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <PlayIcon />
                  </div>
                  <div className="absolute bottom-0 left-0 p-3 text-white">
                    <p className="font-bold text-sm leading-none">
                      {lesson.title}
                    </p>
                    <p className="text-sm leading-none">{lesson.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* --- МОБИЛЬНАЯ ВЕРСИЯ (ДО lg:) --- */}
            {/* Этот блок виден только на экранах < lg: */}
            <div className="flex flex-col lg:hidden w-full items-center">
              {/* Заголовок мобильной версии */}
              <h3 className="text-xl font-bold text-[#444] text-left w-full mb-6">
                Пройдите 3 урока и ощутите моментальный эффект
              </h3>

              {/* Свайпер для карточек на мобильных */}
              {/* Сделаем его поуже, как на картинке, с margin-x: auto */}
              <div className="w-[calc(100%+2rem)] -mx-4">
                {" "}
                {/* Расширяем для визуального эффекта за пределы padding */}
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={1.2} // Показываем 1.2 карточки, чтобы намекнуть на скролл
                  spaceBetween={16} // Увеличим spaceBetween
                  pagination={{ clickable: true }}
                  centeredSlides={true} // Центрируем активный слайд
                  className="h-48 pb-8" // pb-8 для пагинации
                >
                  {lessons.map((lesson) => (
                    <SwiperSlide key={lesson.title} className="h-full">
                      <div className="relative group w-full h-full rounded-lg overflow-hidden cursor-pointer shadow-md">
                        <img
                          src={lesson.imageUrl}
                          alt={lesson.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                        <div className="absolute top-3 right-3 opacity-90">
                          <PlayIcon />
                        </div>
                        <div className="absolute bottom-0 left-0 p-3 text-white">
                          <p className="font-bold text-sm leading-none">
                            {lesson.title}
                          </p>
                          <p className="text-sm leading-none">
                            {lesson.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Кнопка "Смотреть" мобильной версии */}
              <button
                className="mt-8 px-10 py-3 w-full max-w-xs text-white font-semibold rounded-md transition-colors shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Смотреть
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secion1;
