import React from 'react';

// Моковые данные для раздела "Блог"
const blogData = {
  // Большая карточка слева
  mainCard: {
    id: 1,
    date: '17 Сентября 2025 г.',
    title: 'Как подтянуть кожу на животе упражнениями?',
    description: 'Здоровый вес — это не единственное условие хорошей фигуры: как правило, без тренировок, специального массажа и других вспомогательных...',
    imageUrl: 'https://placehold.co/800x450/E7FBE7/1C3A1C?text=КАКИЕ+УПРАЖНЕНИЯ+СДЕЛАЮТ+ЖИВОТ+КРАСИВЫМ'
  },
  // Три маленькие карточки справа
  sideCards: [
    {
      id: 2,
      date: '15 Сентября 2025 г.',
      title: 'Какие упражнения надо делать, чтобы убрать живот?',
      imageUrl: 'https://placehold.co/400x200/F0E7FB/201C3A?text=УПРАЖНЕНИЯ,+КОТОРЫЕ+ПОМОГУТ+УБРАТЬ+ЖИВОТ'
    },
    {
      id: 3,
      date: '11 Сентября 2025 г.',
      title: 'Какими упражнениями можно убрать живот в домашних условиях?',
      imageUrl: 'https://placehold.co/400x200/E7FBE7/1C3A1C?text=ПРОСТЫЕ+УПРАЖНЕНИЯ,+КОТОРЫЕ+СДЕЛАЮТ+ЖИВОТ+КРАСИВЫМ'
    },
    {
      id: 4,
      date: '9 Сентября 2025 г.',
      title: 'Как убрать жир с боков и живота?',
      imageUrl: 'https://placehold.co/400x200/F0E7FB/201C3A?text=КАК+ИЗБАВИТЬСЯ+ОТ+ЖИРА+НА+ЖИВОТЕ+В+ДОМАШНИХ+УСЛОВИЯХ'
    },
  ]
};

/**
 * Карточка для основной статьи (слева, крупная)
 */
const MainBlogCard = ({ date, title, description, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
    {/* Изображение занимает всю ширину карточки */}
    <div className="w-full h-80 overflow-hidden rounded-t-xl">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x450/8C9EFF/FFFFFF?text=Нет+изображения" }}
      />
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      {/* Дата */}
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      
      {/* Заголовок */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
        {title}
      </h3>
      
      {/* Описание */}
      <p className="text-gray-600 mb-6 flex-grow">
        {description}
      </p>
      
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
);

/**
 * Карточка для второстепенной статьи (справа, мелкая)
 */
const SideBlogCard = ({ date, title, imageUrl }) => (
  <div className="flex items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-3 h-full">
    
    {/* Изображение справа, небольшое */}
    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg mr-4">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x200/8C9EFF/FFFFFF?text=Нет+изображения" }}
      />
    </div>
    
    {/* Текст контента */}
    <div className="flex flex-col justify-between flex-grow min-w-0">
      {/* Дата */}
      <div className="text-xs text-gray-500 mb-1">{date}</div>
      
      {/* Заголовок (усекается, если не помещается) */}
      <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 line-clamp-3">
        {title}
      </h3>
      
      {/* Ссылка "Читать полностью" */}
      <a href="#" className="flex items-center text-red-500 font-semibold text-sm hover:text-red-700 transition-colors duration-200">
        Читать полностью
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
);

/**
 * Основной компонент Secion12
 */
const Secion12 = () => {
  return (
    <section className="py-12 bg-gray-50">
      
      {/* Центрированный контейнер */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Заголовок и ссылка "Все статьи" */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
            Блог
          </h2>
          
          {/* Ссылка "Все статьи" */}
          <a href="#" className="flex items-center text-red-500 font-semibold text-lg hover:text-red-700 transition-colors duration-200 mt-2 md:mt-0">
            Все статьи
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </header>
        
        {/* Основной адаптивный макет */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Левая колонка (Большая карточка) */}
          <div className="lg:col-span-2">
            <MainBlogCard {...blogData.mainCard} />
          </div>
          
          {/* Правая колонка (Три маленькие карточки) */}
          <div className="lg:col-span-1 flex flex-col space-y-8">
            {blogData.sideCards.map(card => (
              <SideBlogCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Secion12
