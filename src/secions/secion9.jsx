import React, { useState } from 'react';
// Импорт компонентов и стилей Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 

// --- Данные для отзывов ---
const doctorReviews = [
  {
    id: 1,
    reviewText: 'Это был просто фантастический период знакомства с собой и своими возможностями — без преувеличений! Начала принимать заказы уже в первую неделю обучения, а во время курса я прошла через множество глубоких заданий, которые помогли мне понять, какие услуги востребованы, и научиться распределять своё время правильно и работать дома, без начальства и бесконечной дороги до работы. Теперь я могу работать из любой точки мира и не зависеть от одного места. Особенно запомнились упражнения по планированию дня. Благодаря этим заданиям я начала по-новому смотреть на свою жизнь и работу, научилась ценить каждое мгновение и жить в соответствии со своими желаниями. Этот курс стал настоящим прорывом для меня.',
  },
  {
    id: 2,
    reviewText: 'Запись второй встречи произвела на меня огромное впечатление. Он делился своими мыслями и опытом с такой энергией и искренностью, что я чувствовала, будто общаюсь с настоящим экспертом. Особенно запомнился его совет о том, как вести переговоры с заказчиками. Этот подход полностью изменил мое восприятие работы и помог понять, что важно, а что не важно, на чем можно быстро и легко заработать, а что принесет только рабский труд. Этот курс помог мне переосмыслить свои цели и найти новые пути для профессионального и личностного роста.',
  },
  {
    id: 3,
    reviewText: 'Этот курс стал для меня настоящим открытием.',
  },
  {
    id: 4,
    reviewText: 'Начала знакомство с курсом и уже ощущаю колоссальный заряд мотивации! Каждое видео и материал вдохновляют на новые достижения. После прохождения курса у меня появилось желание побеждать и достигать успехов.',
  },
  {
    id: 5,
    reviewText: 'Отбил курс в первый же месяц! Материалы курса очень мощные и насыщенные. За короткое время я получил бесценную практическую информацию, которая помогает мне легко находить заказчиков.',
  },
  {
    id: 6,
    reviewText: 'Все прояснилось! Узнала всё, что хотела, и даже больше. На все мои вопросы получили ответы, и теперь я чувствую себя увереннее в своих силах. Благодарю за такой структурированный и понятный подход к обучению.',
  },
  {
    id: 8,
    reviewText: 'Все было на высшем уровне! В очередной раз узнала много полезной информации.',
  },
];

// --- Вспомогательный компонент для карточки отзыва (ИСПРАВЛЕНО) ---
const ReviewCard = ({ reviewText }) => {
    // Состояние для управления видимостью полного текста
    const [isExpanded, setIsExpanded] = useState(false);
    
    const maxWords = 35; // Ограничение в 35 слов для обрезки
    const words = reviewText.split(/\s+/);
    const shouldTruncate = words.length > maxWords;
    
    // Обрезанный текст
    const truncatedText = words.slice(0, maxWords).join(' ') + '...';

    return (
        // ⭐️ Стиль: Фиксированная высота для выравнивания, тень и закругление
        <div className="bg-white rounded-2xl p-8 flex flex-col h-[480px] lg:h-[400px] border border-gray-100 transition duration-300">
            
            {/* Контейнер для текста с возможностью скролла при развороте */}
            <div className="flex-grow relative">
                
                {/* ⭐️ Иконка цитаты для профессионального вида */}
                <svg className="w-8 h-8 text-[#e8587a] mb-4 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.25 15.66c0 1.25.7 2.37 1.74 2.92.35.18.72.27 1.09.27.76 0 1.5-.27 2.15-.8C19.2 17.5 20 16.3 20 14.8V6h-6.75v8.86h3.41c-.04.47-.3.88-.66 1.15a.9.9 0 01-.7.29c-.3 0-.6-.11-.84-.33-.3-.27-.47-.64-.47-1.04v-4.83H13.25v7.75zm-6.75 0c0 1.25.7 2.37 1.74 2.92.35.18.72.27 1.09.27.76 0 1.5-.27 2.15-.8C12.45 17.5 13.2 16.3 13.2 14.8V6H6.45v8.86h3.4c-.03.47-.3.88-.66 1.15a.9.9 0 01-.7.29c-.3 0-.6-.11-.84-.33-.3-.27-.47-.64-.47-1.04v-4.83H6.5v7.75z"/>
                </svg>

                {/* ✅ ИСПРАВЛЕННАЯ ЛОГИКА КЛАССОВ ДЛЯ СКРОЛЛА */}
                <div 
                    className={`text-lg text-gray-700 leading-relaxed 
                        ${shouldTruncate 
                            ? `max-h-[300px] lg:max-h-[250px] ${isExpanded ? 'overflow-y-auto pr-3' : 'overflow-hidden'}` 
                            : ''
                        }`
                    }
                >
                    <p className="font-light">
                        {isExpanded ? reviewText : (shouldTruncate ? truncatedText : reviewText)}
                    </p>
                </div>
                
                {/* ⭐️ Стиль: Эффект градиентного затухания, когда текст обрезан */}
                {!isExpanded && shouldTruncate && (
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                )}
            </div>

            {/* Кнопка "Показать/Скрыть" - всегда внизу карточки */}
            {shouldTruncate && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-6 py-2 px-4 bg-[#e8587a] text-white font-semibold rounded-lg shadow-lg hover:bg-[#c43a5d] transition-all duration-300 focus:outline-none self-start"
                >
                    {isExpanded ? 'Скрыть полный отзыв 👆' : 'Читать полностью 👇'}
                </button>
            )}
        </div>
    );
};

// --- Основной компонент Секции ---
const Section9 = () => {
  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1a3d] text-center mb-8 md:mb-12">
          Отзывы о курсе
        </h2>

        {/* Обертка карусели со стрелками */}
        <div className="relative">
          <Swiper
            modules={[Navigation]} 
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 24 }, 
              768: { slidesPerView: 2, spaceBetween: 32 }, 
              1024: { slidesPerView: 3, spaceBetween: 32 }, 
            }}
            loop={true} 
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            className="mySwiper px-10 md:px-0" 
          >
            {doctorReviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard reviewText={review.reviewText} /> 
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* ⭐️ Стиль: Кастомные элементы навигации Swiper (Стрелки) - Улучшенный дизайн */}
          
          {/* Кнопка "Назад" */}
          <div className="swiper-button-prev-custom custom-arrow absolute top-1/2 -translate-y-1/2 z-20 left-4 md:left-0 lg:-left-12 w-12 h-12 rounded-full bg-white text-[#e8587a] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:bg-gray-50 border border-gray-100">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
              <path d="M9 1L1 9L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Кнопка "Вперед" */}
          <div className="swiper-button-next-custom custom-arrow absolute top-1/2 -translate-y-1/2 z-20 right-4 md:right-0 lg:-right-12 w-12 h-12 rounded-full bg-white text-[#e8587a] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:bg-gray-50 border border-gray-100">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
              <path d="M1 17L9 9L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;