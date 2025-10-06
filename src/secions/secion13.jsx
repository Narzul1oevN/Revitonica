import React from 'react';

// ⭐️ ИЗМЕНЕНИЕ 1: Обновленные моковые данные для Telegram, WhatsApp и Email
const socialMediaData = [
  {
    id: 1,
    platform: '@revitonica_ru',
    icon: '🚀', // Иконка для Telegram
    description: 'Научные факты о самоомоложении, специальные акции, бесплатные упражнения, советы от экспертов.',
    // ⭐️ ИЗМЕНЕНИЕ 2: Замена imageUrl на iconUrl для более простого управления иконкой
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png', // Иконка Telegram
    tag: 'telegram',
    bgColor: 'bg-blue-500', // Синий для Telegram
    link: '#' // Добавьте реальную ссылку
  },
  {
    id: 2,
    platform: 'Написать нам',
    icon: '📞', // Иконка для WhatsApp
    description: 'Быстрый ответ на вопросы по заказу, оплате, доступам к курсам и технической поддержке.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/733/733585.png', // Иконка WhatsApp
    tag: 'whatsapp',
    bgColor: 'bg-green-500', // Зеленый для WhatsApp
    link: '#'
  },
  {
    id: 3,
    platform: 'Почта',
    icon: '✉️', // Иконка для Email
    description: 'Официальные запросы, партнерство, сотрудничество, подробные обращения к администрации.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/542/542689.png', // Иконка Email
    tag: 'email',
    bgColor: 'bg-red-500', // Красный для Email
    link: '#'
  }
];

/**
 * Карточка социальной сети
 */
// ⭐️ ИЗМЕНЕНИЕ 3: Принимаем iconUrl вместо imageUrl
const SocialMediaCard = ({ platform, icon, description, iconUrl, bgColor, link }) => (
  // ⭐️ ИЗМЕНЕНИЕ 4: Добавлен класс 'w-full md:w-1/3 p-4' для установки ширины 1/3 на десктопе и сохранения адаптивности
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full md:w-1/3 p-4 block" // p-4 для внутреннего отступа между карточками
  >
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      
      {/* ⭐️ ИЗМЕНЕНИЕ 5: Круглый контейнер с иконкой вместо квадратного изображения */}
      <div className="p-6 flex justify-center items-center">
        <div 
          className={`w-28 h-28 rounded-full ${bgColor} flex items-center justify-center p-2 shadow-inner`}
        >
          <div 
             className="w-full h-full bg-contain bg-no-repeat bg-center"
             style={{ backgroundImage: `url(${iconUrl})` }}
             aria-label={`Иконка ${platform}`}
          />
        </div>
      </div>
      
      {/* Основное содержание карточки */}
      <div className="p-6 pt-0 flex flex-col flex-grow text-center">
        
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">
          {platform}
        </h3>
        
        {/* Описание */}
        <p className="text-gray-600 mb-6 flex-grow text-base">
          {description}
        </p>
        
        {/* Кнопка "Подписаться" */}
        <button 
          className={`w-full py-3 ${bgColor} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 mt-auto shadow-md`}
        >
          ПЕРЕЙТИ {icon}
        </button>
      </div>
    </div>
  </a>
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
        
        {/* ⭐️ ИЗМЕНЕНИЕ 6: Flex-контейнер для расположения карточек в одну строку (на больших экранах) */}
        {/* justify-center гарантирует центрирование, если карточек меньше 3 */}
        <div className="flex flex-wrap justify-center -mx-4">
          
          {socialMediaData.map(card => (
            // Карточка-ссылка сама задает себе ширину 1/3 (w-1/3) на md и выше
            <SocialMediaCard key={card.id} {...card} />
          ))}
          
        </div>
      </div>
      
    </section>
  )
}

export default Secion13