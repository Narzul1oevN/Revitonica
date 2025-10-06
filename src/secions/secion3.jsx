import React, { useRef } from "react";
// Импортируем компоненты и модули Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Импортируем стили Swiper, если они не импортированы глобально
// import "swiper/css"; 
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// --- Данные для слайдера ---
const testimonials = [
  {
    id: 1,
    count: "1/3",
    name: "Ольга, 60 лет",
    quote:
      "Благодарю команду Ревитоники за возможность улучшить свой внешний вид, и вообще — качество жизни. Даже и не мечтала о тех результатах, которые получила за эти 5 недель. Когда загрузила фото \"после\", была очень приятно удивлена",
    imageBefore: "https://placehold.co/400x500/F0F0F0/000000?text=ДО",
    imageAfter: "https://placehold.co/400x500/D1D5DB/000000?text=ПОСЛЕ",
  },
  {
    id: 2,
    count: "2/3",
    name: "Мария, 45 лет",
    quote:
      "Я занимаюсь всего месяц, но уже вижу потрясающие изменения! Ушли отеки, кожа стала упругой, а главное, перестала болеть шея. Это настоящая находка для тех, кто заботится о здоровье и красоте.",
    imageBefore: "https://placehold.co/400x500/E5E5E5/000000?text=ДО",
    imageAfter: "https://placehold.co/400x500/C8C8C8/000000?text=ПОСЛЕ",
  },
  {
    id: 3,
    count: "3/3",
    name: "Елена, 52 года",
    quote:
      "Программа оказалась на удивление простой и эффективной. За полгода я избавилась от межбровной морщины, которая меня очень беспокоила. Рекомендую всем, кто ищет безопасный способ омоложения.",
    imageBefore: "https://placehold.co/400x500/DCDCDC/000000?text=ДО",
    imageAfter: "https://placehold.co/400x500/B0B0B0/000000?text=ПОСЛЕ",
  },
];

// Кастомная стрелка для Swiper (цвет #FF5051)
// const SwiperArrow = ({ direction, onClick }) => {
//   const isNext = direction === "next";
//   const Icon = () => (
//     <ArrowBackIosIcon/>
//   );

//   return (
//     <button
//       onClick={onClick}
//       className={`absolute top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-white text-[#FF5051] 
//                 shadow-md transition-all duration-300 hover:bg-gray-100 focus:outline-none 
//                 ${isNext ? "right-4" : "left-4"}`}
//       aria-label={isNext ? "Следующий отзыв" : "Предыдущий отзыв"}
//     >
//       <Icon />
//     </button>
//   );
// };

// Компонент одного слайда с отзывом
const TestimonialSlide = ({ testimonial }) => {
  const { name, quote, imageBefore, imageAfter, count } = testimonial;

  // Кастомное модальное окно вместо alert()
  const customAlert = (message) => {
    const existingAlert = document.getElementById('custom-alert');
    if (existingAlert) existingAlert.remove();
    
    const alertDiv = document.createElement('div');
    alertDiv.id = 'custom-alert';
    alertDiv.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4';
    alertDiv.innerHTML = `
      <div class="bg-white p-6 rounded-xl shadow-2xl max-w-sm text-center">
        <p class="text-lg font-semibold text-gray-800 mb-4">${message}</p>
        <button id="close-alert" class="px-4 py-2 bg-[#FF5051] text-white rounded-lg hover:bg-red-600 transition">Закрыть</button>
      </div>
    `;
    document.body.appendChild(alertDiv);
    document.getElementById('close-alert').onclick = () => alertDiv.remove();
  };

  // Функция для обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена");
    customAlert("Форма отправлена. (Тут должна быть логика отправки данных)");
  };

  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* --- ЛЕВЫЙ БЛОК: Изображения "До/После" --- */}
        <div className="relative flex justify-center space-x-4">
          <div className="flex flex-col items-center">
            <img
              src={imageBefore}
              alt="До"
              className="w-full max-w-[200px] md:max-w-[250px] h-auto object-cover rounded-lg shadow-lg"
              style={{ aspectRatio: "4/5" }}
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/F0F0F0/000000?text=ДО (Заглушка)"; }}
            />
            <p className="mt-2 text-base font-semibold text-gray-700">ДО</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={imageAfter}
              alt="После"
              className="w-full max-w-[200px] md:max-w-[250px] h-auto object-cover rounded-lg shadow-lg"
              style={{ aspectRatio: "4/5" }}
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/D1D5DB/000000?text=ПОСЛЕ (Заглушка)"; }}
            />
            <p className="mt-2 text-base font-semibold text-gray-700">ПОСЛЕ</p>
          </div>
        </div>

        {/* --- ПРАВЫЙ БЛОК: Текст и Форма --- */}
        <div className="flex flex-col">
          {/* Счетчик */}
          <span className="text-sm font-semibold text-gray-500 mb-2">
            {count}
          </span>
          {/* Имя и возраст */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {name}
          </h3>
          {/* Отзыв */}
          <p className="text-gray-600 italic mb-6 border-l-4 border-[#FF5051] pl-4">
            {quote}
          </p>

          {/* Заголовок CTA */}
          <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Подобрать курс для достижения аналогичного результата
          </h4>

          {/* Форма */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Введите ваш e-mail"
              required
              className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:border-[#FF5051] focus:ring-1 focus:ring-[#FF5051] transition"
            />
            <button
              type="submit"
              className="w-full py-4 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
              style={{ backgroundColor: "#FF5051" }}
            >
              Получить
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Нажимая, вы принимаете условия соглашения
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// Основной компонент секции
const Secion3 = () => {
  // Используем один ref для самого экземпляра Swiper
  const swiperRef = useRef(null);

  // Обработчики кликов, которые вызывают методы Swiper
  const slideNext = () => {
    // Безопасный вызов метода slideNext()
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    // Безопасный вызов метода slidePrev()
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">
        <Swiper
          // Присваиваем реф для получения доступа к экземпляру Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          // Встроенная навигация Swiper не используется, так как у нас кастомные кнопки
          // navigation={{}}
          className="rounded-3xl h-full pb-10" // pb-10 для пагинации
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialSlide testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кастомные кнопки навигации, использующие функции slideNext/slidePrev */}
        <div className="absolute top-1/2 left-0 right-0 max-w-7xl mx-auto hidden sm:block pointer-events-none">
          <div className="relative h-0">
            {/* Кнопка "Назад" */}
            <div className="absolute -left-4 pointer-events-auto z-10">
                {/* <SwiperArrow direction="prev" onClick={slidePrev} /> */}
            </div>
            {/* Кнопка "Вперед" */}
            <div className="absolute -right-4 pointer-events-auto z-10">
                {/* <SwiperArrow direction="next" onClick={slideNext} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secion3;
