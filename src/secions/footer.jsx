import React from 'react';

// Моковые данные для Футера
const footerData = {
  sections: [
    {
      title: 'Обучение',
      links: [
        { label: 'Вебинары', href: '#' },
        { label: 'Видеокурсы', href: '#' },
        { label: 'Марафон. Перезагрузка', href: '#' },
        { label: 'Процедуры', href: '#' },
      ],
    },
    {
      title: 'Документы',
      links: [
        { label: 'Противопоказания', href: '#' },
        { label: 'Договор публичной оферты', href: '#' },
        { label: 'Патенты', href: '#' },
        { label: 'Политика в отношении обработки персональных данных', href: '#' },
      ],
    },
    {
      title: 'Ревитоника',
      links: [
        { label: 'О Ревитонике', href: '#' },
        { label: 'Специалисты', href: '#' },
        { label: 'Карта сайта', href: '#' },
      ],
    },
  ],
  contacts: {
    clinicPhone: '+7 (495) 118 22 79',
    clientEmail: 'orders@revitonica.ru',
    address: 'Москва, улица Трёхгорный Вал, 12с1',
    supportEmail: 'help@revitonica.ru',
    prEmail: 'pr@revitonica.ru',
    socials: [
      { icon: 'telegram', href: '#' }, // Условные названия иконок
      { icon: 'vk', href: '#' },
      { icon: 'youtube', href: '#' },
      { icon: 'ok', href: '#' },
      { icon: 'zen', href: '#' },
    ],
  },
};

// Компонент для секции ссылок
const LinkSection = ({ title, links }) => (
  <div className="mb-8 lg:mb-0">
    <h3 className="text-white font-bold mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors text-base"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Компонент иконки соцсети (имитация SVG/Icon)
const SocialIcon = ({ type }) => {
  // Используем placeholder SVG для имитации известных иконок
  const getIconPath = (iconType) => {
    switch (iconType) {
      case 'telegram': return "M17.477 18.068L18 24l-3.279-3.414L12 21.524l-2.721-3.476L6 24l.523-5.932-6.523-4.148 23.499-9.919-2.522 17.067z";
      case 'vk': return "M18.8 9.5c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1H5.2c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h13.6zM18.8 14.5c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1H5.2c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h13.6zM18.8 19.5c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1H5.2c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h13.6z";
      case 'youtube': return "M19.615 3.184c-3.136-.247-9.878-.248-13.014 0-2.454.192-3.877 1.76-4.07 4.195-.152 1.8.03 3.6.46 5.385.193 2.435 1.616 4.003 4.07 4.195 3.136.247 9.878.248 13.014 0 2.454-.192 3.877-1.76 4.07-4.195.152-1.8-.03-3.6-.46-5.385-.193-2.435-1.616-4.003-4.07-4.195zM10.8 15.684V8.316L16.2 12l-5.4 3.684z";
      case 'ok': return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z";
      case 'zen': return "M14.9 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z";
      default: return "";
    }
  };

  return (
    <div className="w-8 h-8 rounded-lg border border-gray-500 hover:border-white transition-colors duration-200 flex items-center justify-center">
      <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d={getIconPath(type)} />
      </svg>
    </div>
  );
};

// Главный компонент Футера
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white font-inter">
      {/* Верхняя секция (Ссылки и Контакты) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Секции ссылок (Обучение, Документы, Ревитоника) */}
          {footerData.sections.map((section, index) => (
            <LinkSection key={index} title={section.title} links={section.links} />
          ))}

          {/* Секция Контактов 1 (Клиника, Отдел по работе, Адрес) */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <h3 className="text-white font-bold mb-4">Клиника (процедуры)</h3>
            <p className="text-xl font-extrabold text-white mb-6 leading-tight">
              {footerData.contacts.clinicPhone}
            </p>

            <h3 className="text-white font-bold mb-4">Отдел по работе с клиентами</h3>
            <a href={`mailto:${footerData.contacts.clientEmail}`} className="text-red-400 hover:text-red-300 transition-colors text-base mb-4 block">
              {footerData.contacts.clientEmail}
            </a>
            
            <p className="text-gray-400 text-base">
              {footerData.contacts.address}
            </p>
          </div>

          {/* Секция Контактов 2 (Онлайн-школа, Поддержка, Сотрудничество, Соцсети) */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold mb-4">Онлайн-школа</h3>
            
            <h4 className="text-white font-bold text-lg mb-2">Техническая поддержка</h4>
            <a href={`mailto:${footerData.contacts.supportEmail}`} className="text-red-400 hover:text-red-300 transition-colors text-base mb-6 block">
              {footerData.contacts.supportEmail}
            </a>

            <h4 className="text-white font-bold text-lg mb-2">Сотрудничество</h4>
            <a href={`mailto:${footerData.contacts.prEmail}`} className="text-red-400 hover:text-red-300 transition-colors text-base mb-6 block">
              {footerData.contacts.prEmail}
            </a>

            {/* Соцсети */}
            <div className="flex space-x-2 mb-6">
              {footerData.contacts.socials.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.icon}>
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>

            {/* Кнопка "Дзен" */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded-lg text-white hover:bg-slate-700 transition-colors text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.9 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              <span>Дзен</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Нижняя секция (Права, Награды, ИНН) */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm">
          
          {/* Язык и Валюта */}
          <div className="flex space-x-6 items-center flex-wrap justify-center lg:justify-start">
            <div className="flex items-center space-x-2 text-gray-400 cursor-pointer hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17c-3.31 0-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 3.31-2.69 6-6 6zm6-6h-2c0-2.21-1.79-4-4-4s-4 1.79-4 4H5c0-3.31 2.69-6 6-6s6 2.69 6 6z"/></svg>
              <span className="font-bold">РОССИЯ (RU)</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </div>
            <div className="text-gray-400 font-bold">RUB</div>
          </div>

          {/* Копирайт и ИНН */}
          <div className="text-gray-400 text-center lg:text-left order-3 lg:order-2 space-y-1">
            <p>© 2011–2025 Revitonica</p>
            <p className="text-xs">
              ООО «Ревитоника» ИНН 772501001. ИНН 7725285652
            </p>
          </div>

          {/* Награды */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 order-2 lg:order-3">
            {/* Первая награда */}
            <div className="flex items-start max-w-xs">
              <img 
                src="https://placehold.co/50x50/B8B8B8/FFFFFF?text=НАГРАДА" 
                alt="Green Awards 2020" 
                className="w-10 h-10 object-cover rounded-full mr-3 flex-shrink-0"
              />
              <p className="text-gray-400 text-xs">
                Победитель премии «Green Awards 2020» в номинациях «ЗОЖ-персона года» и «Лучший осознанный блог года»
              </p>
            </div>
            {/* Вторая награда */}
            <div className="flex items-start max-w-xs">
              <img 
                src="https://placehold.co/50x50/333333/FFFFFF?text=НАГРАДА" 
                alt="Live Organic Awards 2020" 
                className="w-10 h-10 object-cover rounded-full mr-3 flex-shrink-0"
              />
              <p className="text-gray-400 text-xs">
                Победитель премии «Live Organic Awards 2020» в номинации «Лучший образовательный ЗОЖ-проект года»
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
