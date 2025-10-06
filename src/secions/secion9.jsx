import React from 'react';
// Импорт компонентов и стилей Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 
// Tailwind используется для стилей, внешний CSS-файл не нужен

// --- Данные для отзывов ---
const doctorReviews = [
  {
    id: 1,
    name: 'Змазова В. Г.',
    title: 'Пластический хирург, заведующая отделением медицинской реабилитации Клиники Активного Долголетия «Институт красоты на Арбате»',
    reviewText: 'Как пластический хирург с тридцатилетним стажем подтверждаю, что Ревитоника – логична с точки зрения физиологии человека и эффективна в борьбе со старением лица и шеи.',
    imageUrl: 'https://placehold.co/100x100/A3E4D7/000000?text=ЗВ',
  },
  {
    id: 2,
    name: 'Верясова Н. Б.',
    title: 'Врач-остеопат, невролог, врач ЛФК, идеолог по эстетической коррекции лица и тела методом остеопатии',
    reviewText: 'Всем своим пациенткам, которые не готовы на инвазивные процедуры и готовы трудиться над своей красотой я советую именно курсы Ревитоники. Базовый курс способен удовлетворить любой запрос, в нем собраны упражнения не только на лицо, но и на шею, мышцы трапеции и грудные мышцы. При регулярных занятиях эффект будет заметен быстро, говорю как пользователь. ' + 'Это очень длинный текст отзыва, специально добавленный для тестирования скролла. Он должен быть достаточно длинным, чтобы превысить максимальную высоту области отзыва и активировать вертикальную прокрутку (скролл). Это гарантирует, что карточка не растянется слишком сильно и макет страницы останется чистым и аккуратным.',
    imageUrl: 'https://placehold.co/100x100/F5CBA7/000000?text=ВН',
  },
  {
    id: 3,
    name: 'Иванова С. А.',
    title: 'Дерматолог, косметолог',
    reviewText: 'Я регулярно рекомендую упражнения Ревитоники своим пациентам, как естественный метод поддержания тонуса и молодости. Это отличная неинвазивная альтернатива!',
    imageUrl: 'https://placehold.co/100x100/D6EAF8/000000?text=ИС',
  },
  // Добавим еще один для наглядности при 3 слайдах
    {
    id: 4,
    name: 'Петров Д. В.',
    title: 'Врач-терапевт, специалист по ЗОЖ',
    reviewText: 'Ревитоника - это не просто упражнения, это целостный подход к омоложению и здоровью, который я одобряю и рекомендую.',
    imageUrl: 'https://placehold.co/100x100/A3E4D7/000000?text=ПД',
  },
];

// --- Вспомогательный компонент для карточки отзыва ---
// Используются исключительно классы Tailwind для стилизации
const ReviewCard = ({ name, title, reviewText, imageUrl }) => (
  // min-h-[350px] - Уменьшенная минимальная высота карточки для баланса
  <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col min-h-[360px] lg:min-h-[380px]">
    <div className="flex items-start gap-4 relative pb-4 border-b border-gray-100">
      {/* Иконка кавычек (позиционируется абсолютно) */}
      {/* Смещаю кавычки, чтобы они лучше центрировались над изображением */}
      <span className="absolute text-5xl lg:text-7xl text-gray-200 top-[-10px] left-[60px] md:left-[80px] z-10 font-serif">“</span> 
      
      {/* Изображение доктора */}
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0 z-20" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/cccccc/333333?text=Doctor"}}
      />
      
      {/* Информация о докторе */}
      <div className="pt-2">
        {/* Уменьшаю размер шрифта для title на мобильных устройствах */}
        <h3 className="text-lg md:text-xl font-semibold text-[#0b1a3d]">{name}</h3>
        <p className="text-xs md:text-sm text-gray-500 mt-1">{title}</p>
      </div>
    </div>
    
    {/* Область для скролла текста */}
    {/* max-h-[140px] - Уменьшенная максимальная высота для активации скролла, увеличена на md/lg */}
    <div className="overflow-y-auto max-h-[140px] md:max-h-[160px] lg:max-h-[180px] mt-4 pr-3 flex-grow review-text-scrollable-tailwind">
      <p className="text-sm md:text-base text-gray-700 leading-relaxed">{reviewText}</p>
      {/* Комментарий про стилизацию скроллбара оставлен, но удален блок <style> */}
    </div>
  </div>
);

// --- Основной компонент Секции ---
const Section9 = () => {
  return (
    // bg-[#f7f9fc] - Имитация цвета фона, увеличенные отступы по вертикали
    <section className="bg-[#f7f9fc] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1a3d] text-center lg:text-left mb-8 md:mb-12">
          Отзывы врачей
        </h2>

        {/* Обертка карусели со стрелками */}
        {/* На мобильных устройствах делаем padding-x: 0, а вместо этого добавляем отступ к самой стрелке */}
        <div className="relative">
          <Swiper
            modules={[Navigation]} 
            // НАСТРОЙКИ SWIPER: 
            // 0px: 1 слайд, небольшой отступ (px-5 из контейнера)
            // md (768px): 2 слайда, увеличенный отступ
            // lg (1024px): 3 слайда, еще больший отступ
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 24 }, // Увеличил spaceBetween для мобильных
              768: { slidesPerView: 2, spaceBetween: 32 }, 
              1024: { slidesPerView: 2, spaceBetween: 32 }, // Добавил 3 слайда для больших экранов
            }}
            loop={true} 
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            className="mySwiper px-10 md:px-0" // px-10 для свайпера, чтобы спрятать стрелки по бокам (на мобильном)
          >
            {doctorReviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Кастомные элементы навигации Swiper (Стрелки) */}
          {/* Стилизация: абсолютное позиционирование, розовый цвет, тень */}
          {/* left-1/2 и right-1/2 + transform-x-1/2 для позиционирования на мобильных */}
          <div className="swiper-button-prev-custom custom-arrow absolute top-1/2 -translate-y-1/2 z-20 left-4 md:left-0 lg:-left-12 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-[#e8587a] flex items-center justify-center cursor-pointer transition-all hover:shadow-lg">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4">
              <path d="M9 1L1 9L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="swiper-button-next-custom custom-arrow absolute top-1/2 -translate-y-1/2 z-20 right-4 md:right-0 lg:-right-12 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-[#e8587a] flex items-center justify-center cursor-pointer transition-all hover:shadow-lg">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4">
              <path d="M1 17L9 9L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;