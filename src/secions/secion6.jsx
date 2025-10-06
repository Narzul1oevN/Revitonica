import React from 'react'

const Secion6 = () => {
  return (
    // Внешний контейнер для секции. Используем мягкий фон (bg-gray-50 или bg-gray-100) 
    // для имитации светло-серого фона на изображении.
    <section className="bg-gray-50 py-12 px-4 sm:py-16 sm:px-6 md:py-20 lg:py-24">
      
      {/* Контейнер, имитирующий "карточку" с содержимым. */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden p-8 md:p-10 lg:p-12 2xl:p-16">

        {/* Заголовок: Уменьшил размер шрифта на больших экранах (md:text-5xl вместо md:text-6xl). */}
        <h2 className="text-4xl font-normal mb-8 sm:text-5xl md:text-5xl text-gray-800">
          Клиника в Москве
        </h2>

        {/* Основной контент-блок. */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 xl:space-x-16">

          {/* Блок текста и контактов. */}
          <div className="lg:w-7/12 lg:pr-4">
            
            {/* Первый блок текста: Размер текста уменьшен (sm:text-lg вместо sm:text-xl). */}
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Единственный в России медицинский центр, работающий по научно 
              доказанной и запатентованной методике омолаживающего 
              <strong className="text-gray-900"> миофасциального массажа лица и тела</strong>.
            </p>

            {/* Второй блок текста: Размер текста уменьшен (sm:text-lg вместо sm:text-xl). */}
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              Это инновационный метод коррекции эстетических нарушений внешности и 
              неврологических расстройств, включающий в себя мануальное 
              воздействие на <strong className="text-gray-900">миофасциальные триггерные точки</strong> в области лица и шеи.
            </p>

            {/* Адрес: Размер текста уменьшен (text-sm/sm:text-base). */}
            <p className="text-sm sm:text-base text-gray-700 mb-2 font-normal">
              Адрес: г. Москва, улица Трёхгорный Вал, 12, с. 1
            </p>

            {/* Телефон: Размер текста уменьшен (text-sm/sm:text-base). */}
            <p className="text-sm sm:text-base text-gray-700 mb-10">
              Запись на процедуры: <a href="tel:+74951182279" className="text-[#9333ea] hover:text-purple-700 transition duration-300 font-semibold">+7 (495) 118 22 79</a>
            </p>

            {/* Ссылка "Подробнее": Размер текста уменьшен (text-sm/sm:text-base). */}
            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-300 font-normal text-sm sm:text-base group"
            >
              Подробнее 
              {/* Стрелка вправо */}
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          {/* Блок изображения. */}
          <div className="lg:w-5/12 mt-8 lg:mt-0 order-first lg:order-last">
            {/* Изображение: имеет скругленные углы и тень, как в макете. */}
            <div className="relative pt-[66.666%] overflow-hidden rounded-xl shadow-xl">
              {/* Заглушка, замените на <img /> */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center" 
                style={{backgroundImage: `url('https://via.placeholder.com/800x533?text=Clinic+Massage+Image')`}}
                aria-hidden="true"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Secion6