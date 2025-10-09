import React, { useState, useEffect } from 'react';
// Импортируем компоненты Swiper и нужные модули
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Импортируйте стили Swiper в ваш главный файл, если это не сделано:
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// --- Данные для карточек курсов ---
const courses = [
  {
    id: 1,
    title: "Базовый курс «Основы омоложения»",
    duration: "4 недели",
    exercises: "42 упражнения",
    description: "Миофасциальный самомассаж лица и восстановительная гимнастика от второго подбородка, морщин и заломов, отеков и «брылей». Альтернатива агрессивной косметологии и пластической хирургии.",
    priceOld: "18 890 ₽",
    priceNew: "9 445 ₽",
    discount: "Скидка 50%",
    image: "https://placehold.co/400x400/FFE7EB/333333?text=Лифтинг+лица", 
  },
  {
    id: 2,
    title: "Лифтинг лица. Продвинутый курс",
    duration: "6 недель",
    exercises: "58 упражнений",
    description: "Безоперационная подтяжка лица, восстановление упругости кожи, уменьшение резорбции костной ткани, устранение возрастных изменений.",
    priceOld: "18 890 ₽",
    priceNew: "9 445 ₽",
    discount: "Скидка 50%",
    image: "https://placehold.co/400x400/FFE7EB/333333?text=Продвинутый+курс",
  },
  {
    id: 3,
    title: "Шея и осанка. Здоровый позвоночник",
    duration: "3 недели",
    exercises: "30 упражнений",
    description: "Улучшение кровотока, снятие напряжения, устранение сутулости и головных болей. Важнейшая основа для молодости лица.",
    priceOld: "14 990 ₽",
    priceNew: "7 495 ₽",
    discount: "Скидка 50%",
    image: "https://placehold.co/400x400/FFE7EB/333333?text=Осанка+и+Шея",
  },
  {
    id: 4,
    title: "Дыхательные практики и медитация",
    duration: "2 недели",
    exercises: "15 упражнений",
    description: "Снижение стресса, улучшение сна, повышение концентрации и общего уровня энергии. Дополнение к физическим упражнениям.",
    priceOld: "9 990 ₽",
    priceNew: "4 995 ₽",
    discount: "Скидка 50%",
    image: "https://placehold.co/400x400/FFE7EB/333333?text=Дыхательные+практики",
  },
];

// Кастомное модальное окно (без изменений)
const customAlert = (message) => {
  const existingAlert = document.getElementById('custom-alert');
  if (existingAlert) existingAlert.remove();
  
  const alertDiv = document.createElement('div');
  alertDiv.id = 'custom-alert';
  alertDiv.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4 font-sans';
  alertDiv.innerHTML = `
    <div class="bg-white p-6 rounded-xl shadow-2xl max-w-sm text-center">
      <p class="text-lg font-semibold text-gray-800 mb-4">${message}</p>
      <button id="close-alert" class="px-4 py-2 bg-[#FF5051] text-white rounded-lg hover:bg-red-600 transition">Закрыть</button>
    </div>
  `;
  document.body.appendChild(alertDiv);
  document.getElementById('close-alert').onclick = () => alertDiv.remove();
};


// *****************************************************************
//              КОМПОНЕНТ КАРТОЧКИ (CourseCard)
// *****************************************************************
const CourseCard = ({ course }) => {
  const PRIMARY_COLOR = '#ff5051'; 
  const DISCOUNT_BG_COLOR = '#9c6cbf'; 
  const BG_CARD_COLOR = 'white'; 
  const BORDER_COLOR = '#e5e7eb'; 

  const isMetaPresent = course.duration || course.exercises;
  
  return (
    <div 
      className="rounded-xl border duration-300 h-full flex flex-col sm:flex-row shadow-sm overflow-hidden"
      style={{ backgroundColor: BG_CARD_COLOR, borderColor: BORDER_COLOR }}
    >
      
      {/* 1. Блок изображения */}
      <div 
        className="relative w-full sm:w-[180px] flex-shrink-0 overflow-hidden" 
        style={{ aspectRatio: '1/1' }} 
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        
        {/* Градиентный оверлей */}
        <div className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, rgba(255, 220, 224, 1) 100%)' 
          }}
        ></div> 

        {/* Блок скидки */}
        <div 
          className="absolute bottom-3 left-3 text-white text-xs font-bold py-1 px-2 rounded-lg shadow-lg" 
          style={{ backgroundColor: DISCOUNT_BG_COLOR }}
        >
          {course.discount}
        </div>
      </div>

      {/* 2. Текстовое содержимое */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Заголовок */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-snug">
          {course.title}
        </h3>
        
        {/* Мета-информация */}
        {isMetaPresent && (
          <div className="flex space-x-3 text-gray-500 text-xs mb-3"> 
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16 3.422a12.083 12.083 0 01.665 1.11L12 21.75l-7.816-4.225c.071-.2.163-.404.28-.63l6.115-3.322z" />
              </svg>
              <span>{course.exercises}</span>
            </div>
          </div>
        )}

        {/* Описание */}
        <p className="text-gray-600 text-xs mb-4 flex-grow overflow-hidden">
          {course.description}
        </p>

        {/* 3. Нижний блок: Цены и Кнопка */}
        <div className="mt-auto flex flex-col justify-between items-start">
          
          {/* Узнать подробнее */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); customAlert(`Подробности о курсе: ${course.title}`); }} 
            className="flex items-center text-gray-700 font-semibold text-sm hover:text-gray-900 transition mb-3" 
          >
            Узнать подробнее 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
          
          {/* Цены и кнопка В корзину */}
          <div className="flex justify-between items-center w-full">
            {/* Цены */}
            <div className="flex items-baseline space-x-2"> 
              <span className="text-lg font-bold text-gray-900">{course.priceNew}</span>
              <span className="text-sm text-gray-400 line-through">{course.priceOld}</span>
            </div>
            
            {/* Кнопка "В корзину" */}
            <button
              onClick={() => customAlert(`Добавлено в корзину: ${course.title}`)}
              className="flex items-center justify-center py-2 px-3 rounded-lg shadow-md transition-colors whitespace-nowrap"
              style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M7.5 6V5.25a3.75 3.75 0 117.5 0V6h3.75a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H7.5zm.375-3.75a2.25 2.25 0 014.5 0V6h-4.5V2.25z" clipRule="evenodd" />
              </svg>
              <span className="ml-1 text-sm font-semibold hidden sm:inline">В корзину</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// *****************************************************************
//              КОМПОНЕНТ СЕКЦИИ (Secion5) СО SWIPER JS
// *****************************************************************

const Secion5 = ({videoCours}) => {
  return (
    <section id={videoCours} className="py-12 md:py-20 bg-gray-50 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Заголовок секции */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1a3d]">
            Видеокурсы
          </h2>
        </div>
        
        {/* Контейнер Swiper */}
        {/* Добавляем класс 'swiper-container-custom' для стилизации пагинации и навигации */}
        <div className="relative swiper-container-custom">
            
          <Swiper
            // Модули, которые будем использовать
            modules={[Navigation, Pagination, A11y]}
            
            // Настройки адаптивности (Breakpoints)
            // Swiper берет управление адаптивностью на себя
            breakpoints={{
              // На экранах < 768px (мобильные)
              0: {
                slidesPerView: 1,
                spaceBetween: 24,
                centeredSlides: true, // Ключевое свойство для центрирования на мобильных
                // Добавляем отступы контейнера для центрирования
                slidesOffsetBefore: 20, 
                slidesOffsetAfter: 20,
              },
              // На экранах >= 768px (десктоп)
              768: {
                slidesPerView: 1,
                spaceBetween: 24,
                centeredSlides: true, // Ключевое свойство для центрирования на мобильных
                // Добавляем отступы контейнера для центрирования
                slidesOffsetBefore: 20, 
                slidesOffsetAfter: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: false, // На десктопе не центрируем
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
            }}
            
            loop={false}
            // Включаем навигацию и пагинацию
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
                el: '.swiper-pagination-custom',
                clickable: true,
                renderBullet: function (index, className) {
                    // Кастомный рендеринг точек пагинации
                    return `<span class="${className} h-2 rounded-full transition-all duration-300 w-2 hover:bg-gray-400"></span>`;
                }
            }}
            
            className="w-full pb-10" // Добавляем отступ снизу для пагинации
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                {/* Компонент CourseCard занимает всю доступную ширину слайда */}
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Кастомные кнопки навигации (должны быть вне Swiper, но внутри относительного контейнера) */}
          <div className="hidden lg:block">
            {/* Кнопка "Назад" */}
            <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 z-20 -left-4 p-3 rounded-full bg-[#FF5051] shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white transform rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            {/* Кнопка "Вперед" */}
            <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 z-20 -right-4 p-3 rounded-full bg-[#FF5051] shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
          </div>
          
        </div>

        {/* Кастомная пагинация */}
        {/* Swiper JS автоматически добавляет сюда точки. Нам нужно только стилизовать их. */}
        <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>

        {/* Дополнительные стили для Swiper JS, чтобы он выглядел как в вашем примере */}
        <style jsx global>{`
          /* Стилизация активной точки пагинации */
          .swiper-pagination-custom .swiper-pagination-bullet-active {
            background-color: #FF5051 !important;
            width: 24px !important; /* w-6 */
            border-radius: 9999px !important; /* rounded-full */
          }
          /* Общая стилизация точек */
          .swiper-pagination-custom .swiper-pagination-bullet {
            background-color: #d1d5db; /* bg-gray-300 */
            opacity: 1; /* Убрать стандартный opacity */
            transition: all 0.3s;
          }
          .swiper-pagination-custom {
             position: static !important; /* Перемещаем пагинацию из Swiper */
             margin-top: 2rem; /* mt-8 */
          }
          
          /* Скрытие стандартных кнопок Swiper */
          .swiper-button-prev, .swiper-button-next {
            display: none !important;
          }
          
          /* Отключение кнопок, когда слайдер в начале/конце */
          .swiper-button-prev-custom.swiper-button-disabled, 
          .swiper-button-next-custom.swiper-button-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Secion5;