import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
// VK, YouTube, OK, Zen are no longer used since we are only using MUI imports

// Моковые данные для Футера
const footerData = {
  sections: [
    {
      title: 'Обучение',
      links: [
        { label: 'Секция №1', href: '#secion-scroll-id' },
        { label: 'Секция №2', href: '#secion-scroll-id2' },
        { label: 'Секция №3', href: '#secion-scroll-id4' },
        { label: 'Секция №4', href: '#sectionId' },
        { label: 'Секция №5', href: '#videoCoursScrioling' },
        { label: 'Секция №6', href: '#secion-scroll-id8' },
      ],
    },
    // Тут могли бы быть другие секции: 'Документы', 'Ревитоника', если бы они были в исходных данных
  ],
  contacts: {
    clinicPhone: '+7 (495) 118 22 79',
    clientEmail: 'orders@revitonica.ru',
    address: 'Москва, улица Трёхгорный Вал, 12с1',
    supportEmail: 'help@revitonica.ru',
    prEmail: 'pr@revitonica.ru',
    // Оставляем только те, для которых есть импортированные MUI иконки
    socials: [
      { icon: TelegramIcon, href: '#', label: 'Telegram' }, // Используем сам компонент иконки
      { icon: WhatsAppIcon, href: '#', label: 'WhatsApp' }, // Предполагаем, что нужен WhatsApp, хотя его не было в моках, но он был в импортах
      { icon: EmailIcon, href: ``, label: 'Email' }, // Можно использовать одну из почт
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

// Убираем компонент SocialIcon, так как теперь используются MUI иконки

// Главный компонент Футера
const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white font-inter">
      {/* Верхняя секция (Ссылки и Контакты) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Добавил flex-wrap и скорректировал justify-evenly, чтобы лучше выглядело на разных экранах */}
        <div className="flex flex-wrap justify-between items-start lg:justify-evenly">
          
          {/* Секции ссылок (Обучение, Документы, Ревитоника) */}
          {footerData.sections.map((section, index) => (
            <LinkSection key={index} title={section.title} links={section.links} />
          ))}

          {/* Секция Контактов 1 (Клиника, Отдел по работе, Адрес) */}
          <div className="w-full sm:w-1/2 lg:w-auto mb-8 lg:mb-0 mt-8 lg:mt-0">
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
          <div className="w-full sm:w-1/2 lg:w-auto mt-8 lg:mt-0">
            <h3 className="text-white font-bold mb-4">Онлайн-школа</h3>
            
            <h4 className="text-white font-bold text-lg mb-2">Техническая поддержка</h4>
            <a href={`mailto:${footerData.contacts.supportEmail}`} className="text-red-400 hover:text-red-300 transition-colors text-base mb-6 block">
              {footerData.contacts.supportEmail}
            </a>

            <h4 className="text-white font-bold text-lg mb-2">Сотрудничество</h4>
            <a href={`mailto:${footerData.contacts.prEmail}`} className="text-red-400 hover:text-red-300 transition-colors text-base mb-6 block">
              {footerData.contacts.prEmail}
            </a>

            {/* Соцсети - ИСПОЛЬЗУЕМ MUI ИКОНКИ */}
            <div className="flex space-x-4 mb-6">
              {footerData.contacts.socials.map((social, index) => {
                const IconComponent = social.icon; // Получаем сам компонент иконки
                return (
                  <a 
                    key={index} 
                    href={social.href} 
                    aria-label={social.label}
                    className="text-gray-500 w-[35px] h-[35px] flex justify-center items-center hover:text-gray-400 transition-colors duration-200 rounded-[10px] border-gray-500 border-[2px] hover:border-gray-400"
                  >
                    {/* Используем компонент иконки, устанавливая размер и цвет через Tailwind */}
                    <IconComponent fontSize="medium" className="w-8 h-8" /> 
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Нижняя секция (Права, Награды, ИНН) */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm">
          {/* Здесь можно добавить текст с правами, наградами, ИНН */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;