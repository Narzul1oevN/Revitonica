import React from 'react'

const Secion7 = () => {
  return (
    // Внешний контейнер для секции.
    <section className="bg-gray-50 py-12 px-4 sm:py-16 sm:px-6 md:py-20 lg:py-24">
      
      {/* Заголовок секции */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-10 lg:mb-12 2xl:mb-16">
        <h2 className="text-4xl font-normal text-gray-800 sm:text-5xl md:text-6xl">
          О методе
        </h2>
      </div>

      {/* Контейнер-карточка с содержимым. 
          ВАЖНО: Убран overflow-hidden, чтобы изображение могло выступать.
          Установлено relative для позиционирования абсолютно расположенного изображения.
      */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-10 lg:p-12 2xl:p-16 relative">

        {/* Основной контент-блок.
            На десктопе мы используем grid-сетку (или flex, как раньше) и абсолютное позиционирование.
            Я оставил flex, но основную работу делает абсолютное позиционирование изображения.
        */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 xl:space-x-16 items-start">
            
          {/* Блок текста и ссылок. Занимает примерно 60% ширины. На десктопе он слева. */}
          <div className="lg:w-7/12 lg:pr-4 order-last lg:order-first">
            
            {/* Первый блок текста - выделен крупным и жирным. */}
            <p className="text-xl sm:text-2xl text-gray-800 font-normal mb-8 leading-normal">
              Метод **«Ревитоника»** позволяет **избавиться от морщин, заломов и отеков, восстановить осанку и вернуть ровный цвет лица**.
            </p>

            {/* Второй блок текста - стандартный размер и цвет. */}
            <p className="text-base sm:text-lg text-gray-700 mb-12 leading-relaxed">
              Массажными техниками и специальной гимнастикой мы расслабляем и снимаем спазмы 
              лица и шеи, восстанавливаем кровообращение и лимфодренаж, улучшаем осанку и статику 
              шеи.
            </p>

            {/* Ссылка "Узнать подробнее" */}
            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-300 font-normal text-base sm:text-lg group"
            >
              Узнать подробнее 
              {/* Стрелка вправо */}
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          {/* Блок-заглушка для мобильного изображения.
             На мобильном изображение должно быть СВЕРХУ и занимать всю ширину.
          */}
          <div className="w-full mb-8 lg:hidden order-first">
            <img 
              src="https://revitonica.ru/images/new_main/proceduri_seminari_1.webp"
              alt="Специалист демонстрирует метод Ревитоника"
              className="w-full h-auto rounded-xl "
            />
          </div>
          
        </div>
        
        {/* Изображение для ДЕСКТОПА: Абсолютное позиционирование */}
        {/* Изображение должно быть справа, прижато к низу и занимать всю высоту (или выступать) */}
        <div className="hidden lg:block absolute right-0 bottom-0 top-0 lg:w-5/12 pointer-events-none">
            <img 
              src="https://revitonica.ru/images/new_main/proceduri_seminari_1.webp"
              alt="Специалист демонстрирует метод Ревитоника"
              // Стили, имитирующие прижатое к низу и вытянутое по высоте изображение
              className="absolute right-0 bottom-0 h-full w-auto max-h-full object-cover rounded-r-3xl"
              // На большом экране оно должно быть прижато к правому краю и низу
            />
        </div>

      </div>
    </section>
  )
}

export default Secion7