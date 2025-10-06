import React from 'react';

// Моковые данные для раздела "Социальные сети"
const socialMediaData = [
  {
    id: 1,
    platform: '@revitonica_ru',
    icon: '🚀', // Иконка для Telegram
    description: 'Научные факты о самоомоложении, специальные акции, бесплатные упражнения, советы от экспертов',
    imageUrl: 'https://placehold.co/400x300/E5E8FB/3D3A89?text=Омоложение+и+эксперты',
    tag: 'telegram',
    bgColor: 'bg-blue-500' // Синий для Telegram
  },
  {
    id: 2,
    platform: '@REVITONICA',
    icon: '▶️', // Иконка для YouTube
    description: 'Видео с упражнениями, познавательные лекции, развенчивание мифов',
    imageUrl: 'https://placehold.co/400x300/FBE8E5/893D3A?text=Вся+правда+о+коже',
    tag: 'youtube',
    bgColor: 'bg-red-600' // Красный для YouTube
  },
  {
    id: 3,
    platform: '@REVITONICA',
    icon: '🅡', // Иконка для Rutube (пример)
    description: 'Видео-лекции, открытые уроки, приемы Ревитоника. Все, для того, чтобы сохранить красоту и здоровье на долгие годы',
    imageUrl: 'https://placehold.co/400x300/E5E8FB/3D3A89?text=Отеки+прощайте',
    tag: 'rutube',
    bgColor: 'bg-red-700' // Красный для Rutube
  },
  {
    id: 4,
    platform: '@REVITONICA (Ревитоника) OFFICIAL',
    icon: '✉️', // Иконка для VK (пример)
    description: 'Конкурсы, акции, специальные предложения, фотографии «до» и «после»',
    imageUrl: 'https://placehold.co/400x300/FBE8E5/893D3A?text=До+и+после',
    tag: 'vk',
    bgColor: 'bg-blue-700' // Синий для VK
  },
];

/**
 * Карточка социальной сети
 */
const SocialMediaCard = ({ platform, icon, description, imageUrl, bgColor }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    
    {/* Контейнер для изображения с текстом поверх */}
    <div className="relative w-full overflow-hidden rounded-t-xl h-48">
      <img 
        src={imageUrl} 
        alt={`Канал ${platform}`} 
        className="w-full h-full object-cover" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/8C9EFF/FFFFFF?text=Нет+изображения" }}
      />
      {/* Прямоугольник с текстом (как на примере) */}
      <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-md max-w-[70%]">
        {/* Это просто моковый текст, имитирующий заголовок на изображении */}
        <p className="text-sm font-bold text-gray-800 leading-tight">
          {platform === '@REVITONICA' && icon === '▶️' ? 'Вся правда о сухой коже' : 'Полезный контент'}
        </p>
      </div>
    </div>
    
    {/* Основное содержание карточки */}
    <div className="p-4 flex flex-col flex-grow">
      
      <div className="flex items-center mb-3">
        {/* Иконка платформы */}
        <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center mr-3 text-2xl`}>
          {icon}
        </div>
        {/* Имя платформы/канала */}
        <span className="text-lg font-bold text-gray-900">{platform}</span>
      </div>
      
      {/* Описание */}
      <p className="text-gray-600 mb-4 flex-grow text-sm">
        {description}
      </p>
      
      {/* Кнопка "Подписаться" */}
      <button className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200 mt-auto shadow-md">
        ПОДПИСАТЬСЯ
      </button>
    </div>
  </div>
);


/**
 * Основной компонент Secion13
 */
const Secion13 = () => {
  return (
    <section className="py-12 bg-gray-50">
      
      {/* Центрированный контейнер */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Заголовок */}
        <header className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Мы в социальных сетях, подписывайтесь!
          </h2>
        </header>
        
        {/* Основная адаптивная сетка (2x2 на десктопе, 1x4 на мобильном) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {socialMediaData.map(card => (
            <SocialMediaCard key={card.id} {...card} />
          ))}
          
        </div>
      </div>
      
    </section>
  )
}

export default Secion13
