import React, { useRef, useEffect, useState } from 'react';

// Моковые данные для карточек
const mediaData = [
  {
    id: 1,
    source: 'theDay.ru',
    date: '11 Сентября 2025 г.',
    title: 'Как стресс на самом',
    imageUrl: 'https://placehold.co/400x250/FBE7E7/3A201C?text=Статья+1'
  },
  {
    id: 2,
    source: 'tass.ru',
    date: '9 Сентября 2025 г.',
    title: 'Как красота убивала мужчин',
    imageUrl: 'https://placehold.co/400x250/E7FBFB/1C3A3A?text=Статья+2'
  },
  {
    id: 3,
    source: 'Станислав Черноног',
    date: '29 Августа 2025 г.',
    title: 'Интервью Анастасии',
    imageUrl: 'https://placehold.co/400x250/FBE7E7/3A201C?text=Видео+3'
  },
  {
    id: 4,
    source: 'Алексей Дементьев',
    date: '15 Июня 2025 г.',
    title: 'Анастасия Дубинская',
    imageUrl: 'https://placehold.co/400x250/E7FBFB/1C3A3A?text=Видео+4'
  },
  {
    id: 5,
    source: 'Ведомости',
    date: '10 Мая 2025 г.',
    title: 'Секреты молодости: Почему нужно спать 8 часов',
    imageUrl: 'https://placehold.co/400x250/FBE7E7/3A201C?text=Статья+5'
  },
];

/**
 * Компонент одной карточки СМИ (Swiper Slide)
 */
const MediaCard = ({ source, date, title, imageUrl }) => (
  // Класс swiper-slide позволяет Swiper управлять позицией.
  // pb-[20px] для небольшого отступа снизу, чтобы тень карточки не обрезалась
  <div className="pb-[20px] swiper-slide !w-[90%] sm:!w-[360px] md:!w-[300px] lg:!w-[24.5%] xl:!w-[23%] flex-shrink-0">
    {/* min-h-[380px] и flex flex-col для обеспечения одинаковой высоты карточек */}
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[380px] flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        {/* Изображение с закругленными углами */}
        <div className="h-40 overflow-hidden rounded-lg mb-4">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover" 
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/8C9EFF/FFFFFF?text=Нет+изображения" }}
          />
        </div>
        
        {/* Информация о статье */}
        <div className="text-sm text-gray-500 mb-1">
          <span className="font-semibold text-gray-700">{source}</span>
          <span className="ml-2">|</span> {date}
        </div>
        
        {/* h-16 и overflow-hidden для фиксации высоты заголовка */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug h-16 overflow-hidden">
          {title}
        </h3>
        
        {/* Ссылка "Читать полностью" - mt-auto прижимает ее к низу */}
        <a href="#" className="flex items-center text-red-500 font-semibold text-base hover:text-red-700 transition-colors duration-200 mt-auto">
          Читать полностью
          {/* Иконка стрелки */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

// Основной компонент
const Secion11 = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Динамическая загрузка Swiper JS и CSS через CDN
    const loadSwiper = async () => {
      try {
        if (window.Swiper) {
          initializeSwiper();
          return;
        }

        // Swiper CSS (для стилей)
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.head.appendChild(link);

        // Swiper JS (для логики)
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.onload = initializeSwiper;
        document.body.appendChild(script);

      } catch (error) {
        console.error("Failed to load Swiper assets:", error);
      }
    };

    const initializeSwiper = () => {
      // Инициализация Swiper после загрузки скрипта
      if (window.Swiper && swiperRef.current) {
        new window.Swiper(swiperRef.current, {
          loop: true,
          // Глобальное центрирование удалено, будет управляться брейкпоинтами
          navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          },
          // Адаптивные брейкпоинты
          breakpoints: {
            // 300px (Mobile)
            300: {
              slidesPerView: 1.1, 
              spaceBetween: 16,
              // !!! Центрирование включено для мобильных
              centeredSlides: true, 
            },
            // 480px (Tablet Portrait)
            480: { 
              slidesPerView: 1.5,
              spaceBetween: 24,
              // !!! Центрирование включено для планшетов
              centeredSlides: true,
            },
            // 640px (Tablet Landscape)
            640: {
              slidesPerView: 2.2,
              spaceBetween: 32,
              // !!! Центрирование включено для планшетов
              centeredSlides: true,
            },
            // 1024px (Small Desktop)
            1024: {
              // !!! Центрирование отключено для десктопа (стандартное выравнивание слева)
              slidesPerView: 3.5,
              spaceBetween: 32,
              centeredSlides: false,
            },
            // 1280px (--breakpoint-2xl) и выше (Large Desktop)
            1280: {
              slidesPerView: 4,
              spaceBetween: 32,
              // !!! Центрирование отключено для десктопа
              centeredSlides: false,
            },
          },
        });
      }
    };

    loadSwiper();

    return () => {};
  }, []); 

  return (
    <section className="py-12 bg-gray-50 min-h-[400px]">
      
      {/* Центрированный контейнер с ограниченной шириной (max-w-6xl) */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Заголовок и ссылка "Все статьи" */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
            СМИ о нас
          </h2>
          
          {/* Ссылка "Все статьи" */}
          <a href="#" className="flex items-center text-red-500 font-semibold text-lg hover:text-red-700 transition-colors duration-200 mt-2 md:mt-0">
            Все статьи
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </header>
        
        {/* Контейнер для слайдера/прокрутки */}
        <div className="relative -mx-4 md:-mx-8 lg:-mx-16">
          
          {/* Сам Swiper. */}
          <div ref={swiperRef} className="swiper w-full overflow-hidden">
            <div className="swiper-wrapper">
              {mediaData.map(card => (
                <MediaCard key={card.id} {...card} />
              ))}
            </div>
          </div>

          {/* Навигационные кнопки: адаптированы для всех экранов */}
          <div>
              {/* Custom prev button */}
              <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-20 cursor-pointer 
                  w-10 h-10 flex items-center justify-center -translate-y-1/2
                  sm:w-12 sm:h-12 sm:left-0 sm:-translate-x-1/2" // Desktop style
              >
                  <div className='p-2 sm:p-3 bg-white/90 hover:bg-white text-red-500 rounded-full shadow-lg transition-all duration-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                  </div>
              </div>

              {/* Custom next button */}
              <div className="swiper-button-next-custom absolute top-1/2 right-4 z-20 cursor-pointer 
                  w-10 h-10 flex items-center justify-center -translate-y-1/2
                  sm:w-12 sm:h-12 sm:right-0 sm:translate-x-1/2" // Desktop style
              >
                  <div className='p-2 sm:p-3 bg-white/90 hover:bg-white text-red-500 rounded-full shadow-lg transition-all duration-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                  </div>
              </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Secion11;
