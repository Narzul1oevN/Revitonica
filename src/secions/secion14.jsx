import React from 'react';

// Моковый URL для фонового видео. 
// В реальном проекте замените на свой путь к видеофайлу.
const VIDEO_URL = "https://cdn.pixabay.com/v/video/2021/04/14/66870-544111304_large.mp4";

const Secion14 = () => {
  return (
    <section className="py-12 bg-gray-50">
      
      {/* Центрированный контейнер с ограниченной шириной */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Контейнер для секции с видео. Обеспечивает относительное позиционирование для видео и контента. */}
        <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-xl">
          
          {/* 1. Видео на заднем плане */}
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            src={VIDEO_URL}
            autoPlay 
            loop 
            muted 
            playsInline // Важно для автовоспроизведения на мобильных устройствах
            poster="https://placehold.co/1200x500/D0D7DE/6A7B8E?text=Загрузка+видео..." // Изображение, пока видео загружается
          />

          {/* 2. Наложение (оверлей) для улучшения читаемости текста */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900/40 z-20"></div>

          {/* 3. Основной контент (Текст и Кнопка) */}
          <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center p-6 sm:p-12 lg:p-16">
            
            {/* Адаптивный контейнер для текста и карточки */}
            <div className="w-full lg:w-3/5 text-white">
              <h2 className="sm:text-[20px] lg:text-[32px] mb-6">
                Ревитоника — единственная в мире научно доказанная методика омоложения лица и шеи без уколов и операций
              </h2>
              
              {/* Карточка-призыв (белая) */}
              <div className="bg-white text-gray-900 p-6 rounded-xl shadow-2xl max-w-sm">
                <span className="inline-block bg-yellow-400 text-sm font-bold px-3 py-1 rounded mb-4">
                  Бесплатно до 7 октября!
                </span>
                <p className="text-lg font-semibold mb-6">
                  Пройдите 3 урока и ощутите моментальный эффект!
                </p>
                
                {/* Кнопка CTA */}
                <button className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md">
                  Получить 3 урока
                </button>
              </div>
            </div>
            
            {/* Кнопка "Устраняем сутулость" в правом нижнем углу (видна только на десктопе) */}
            <div className="hidden lg:block absolute bottom-10 right-10">
                <button className="px-5 py-3 bg-white/80 text-gray-800 font-semibold rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
                    Устраняем сутулость
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Secion14;
