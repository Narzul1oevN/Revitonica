import React, { useState, useRef } from 'react'; // 1. Добавлен useRef

// ----------------------------------------------------
// 1. ДАННЫЕ ДЛЯ МЕНЮ
// ----------------------------------------------------
// Цвета:
// Основной темный текст/акцент: [#2d4156]
// Зеленый акцент логотипа: [#00b07e]

const methodologyMenuItems = [
    { name: 'О методе «Ревитоника»', href: '/about' },
    { name: 'История метода', href: '/history' },
    { name: 'Научная деятельность', href: '/science' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'Контакты', href: '/contacts' },
    { name: 'Противопоказания', href: '/contraindications' },
];

const methodologyMenuItemsSecond = [
    { name: 'Весь каталог видеокурсов', href: '/all-courses' },
    { name: 'Турбо-омоложение', href: '/turbo' },
    { name: 'Экспресс-курсы', href: '/express' },
    { name: 'Углубленные курсы', href: '/deep' },
    { name: 'Клуб', href: '/club' },
];


// ----------------------------------------------------
// 2. КОМПОНЕНТ ВЫПАДАЮЩЕГО МЕНЮ ДЛЯ DESKTOP (DropdownMenu) - ИЗМЕНЕНИЯ ЗДЕСЬ
// ----------------------------------------------------
/**
 * Компонент выпадающего меню с красивым дизайном карточки.
 * Меню открывается при наведении на текст-триггер.
 */
const DropdownMenu = ({ triggerText = 'Меню', menuItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  // 2. useRef для хранения ID таймера. Это позволяет нам отменять его.
  const timeoutRef = useRef(null);

  // 3. Новые обработчики для управления задержкой
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Отменяем таймер закрытия, если он был
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Устанавливаем таймер на закрытие меню через 150 мс.
    // Это дает пользователю время, чтобы переместить курсор на выпадающее меню.
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  // Классы для кнопки/текста триггера.
  const triggerClasses = `
    inline-flex items-center text-base font-medium transition-colors duration-200
    ${isOpen ? 'text-[#2d4156]' : 'text-gray-700 hover:text-[#2d4156]'}
    py-2 px-3 focus:outline-none 
  `;

  return (
    <div
      className="relative inline-block"
      // 4. Используем новые обработчики событий
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Текст, который вызывает меню */}
      <div className="h-full flex items-center">
        <button
          type="button"
          className={triggerClasses}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {triggerText}
          {/* Иконка стрелки: меняет цвет и поворачивается */}
          <svg
            className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#2d4156]' : 'text-[#2d4156]'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Само выпадающее меню */}
      {isOpen && menuItems.length > 0 && (
        <div
          // Усиленный стиль карточки
          className="absolute top-full left-0 mt-6 rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 z-30"
          style={{ minWidth: '16rem', transform: 'translateX(-10%)' }} // Небольшое смещение влево
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {/* Внутренний контейнер с отступами */}
          <div className="p-2" role="none">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                // Стиль ссылок: более крупный текст, плавный hover
                className="text-gray-800 block px-4 py-3 text-base font-semibold rounded-xl hover:bg-gray-50 hover:text-[#2d4156] transition-all duration-200 whitespace-nowrap"
                role="menuitem"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// ----------------------------------------------------
// 3. КОМПОНЕНТ МОБИЛЬНОГО МЕНЮ (MobileDrawer)
// ----------------------------------------------------

// Компонент для элемента меню в Drawer с логикой сворачивания/разворачивания
const MobileMenuItem = ({ item, defaultExpanded = false }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    
    // Если это выпадающий список (как "Видеокурсы" или "Методика")
    if (item.items) {
        return (
            <div className="border-b border-gray-100">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex justify-between items-center w-full py-4 px-6 text-xl font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                    {item.name}
                    {/* Иконка стрелки */}
                    <svg className={`h-5 w-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180 text-gray-800' : 'text-gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                {isExpanded && (
                    <div className="bg-gray-50 p-2">
                        {item.items.map((subItem, index) => (
                            <a
                                key={index}
                                href={subItem.href}
                                className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#2d4156] rounded-lg transition-colors"
                            >
                                {subItem.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        );
    }
    
    // Если это обычная ссылка (как "Интенсивы" или "Блог")
    return (
        <div className="border-b border-gray-100">
            <a
                href={item.href}
                className="block py-4 px-6 text-xl font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
                {item.name}
            </a>
        </div>
    );
};


// Главный компонент мобильной навигации (Drawer)
const MobileDrawer = ({ isOpen, onClose }) => {
    
    // Консолидированная структура меню для мобильной версии
    const mobileNavItems = [
        { name: 'Методика', items: methodologyMenuItems },
        { name: 'Видеокурсы', items: methodologyMenuItemsSecond },
        { name: 'Интенсивы', href: '#' },
        { name: 'Клуб', href: '#club' }, // Добавлен "Клуб"
        { name: 'Клиника', href: '#' },
        { name: 'Блог', href: '#' },
    ];
    
    // Промо-элемент (Турбо-омоложение) из изображения
    const TurboPromo = () => (
        <div className="p-4 mx-4 my-4 rounded-xl bg-purple-50">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Новинка</h3>
            <p className="text-lg font-semibold text-purple-700">Турбо-омоложение</p>
            <div className="mt-2 flex items-center justify-start">
                <span className="px-3 py-1 text-xs font-semibold rounded-full text-white bg-purple-500 flex items-center">
                    Один поток. Старт 30 сентября <span className="ml-1">⚡️</span>
                </span>
            </div>
        </div>
    );

    return (
        // 1. Главный контейнер: управляет видимостью всей системы Drawer (оверлей + контент)
        <div 
            className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            {/* Overlay (задний фон): контролирует затемнение */}
            <div 
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`} 
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Содержимое Drawer */}
            <div 
                // ИЗМЕНЕНИЕ: Позиционирование СЛЕВА (left-0)
                // ИЗМЕНЕНИЕ: Трансформация ВЛЕВО-НАПРАВО (скрыто: -translate-x-full, показано: translate-x-0)
                className={`fixed left-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                
                {/* Header Drawer (Close, Logo, User Icon) */}
                <div className="flex justify-between items-center p-4 border-b border-gray-100 h-[80px]">
                    <button onClick={onClose} className="text-gray-500 hover:text-[#2d4156] transition-colors p-2 rounded-full">
                        {/* Иконка закрытия (X) */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    {/* Логотип в Drawer */}
                    <div className="flex items-center gap-1">
                        <span className="text-2xl font-extrabold text-[#2d4156]">revi</span>
                        <span className="text-2xl font-extrabold text-[#00b07e]">tonica</span>
                    </div>

                    <a href="/profile" className="text-gray-500 hover:text-[#2d4156] transition-colors p-2 rounded-full">
                         {/* Иконка пользователя */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </a>
                </div>

                {/* Body Content */}
                <div className="py-4">
                    {/* Кнопка "Войти" в Drawer */}
                    <div className="p-4">
                        <button className="w-full py-3 text-[#2d4156] text-sm font-semibold rounded-[5px] hover:bg-[#2d4156] hover:text-white transition-colors border-2 border-[#2d4156]">
                            Войти
                        </button>
                    </div>

                    {/* Промо-элемент */}
                    <TurboPromo />

                    {/* Главные Навигационные Ссылки */}
                    <div className="mt-4">
                        {mobileNavItems.map((item, index) => (
                            // Для демонстрации развернем "Видеокурсы" по умолчанию, как на изображении
                            <MobileMenuItem key={index} item={item} defaultExpanded={item.name === 'Видеокурсы'} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};


// ----------------------------------------------------
// 4. ГЛАВНЫЙ КОМПОНЕНТ (Header)
// ----------------------------------------------------

/**
 * Главный компонент шапки (Header) с интегрированным DropdownMenu и MobileDrawer.
 */
const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <div className="w-[100%] h-[80px] flex justify-between items-center px-4 sm:px-6 md:px-10 bg-white border-b border-gray-100">
                
                {/* Левая часть: Гамбургер, Логотип, Десктоп Меню */}
                <div className="flex items-center gap-8">
                    
                    {/* Кнопка Мобильного Меню (показывается ТОЛЬКО на экранах < md/640px) */}
                    <button 
                        onClick={() => setIsDrawerOpen(true)}
                        className="p-2 md:hidden text-gray-700 hover:text-[#2d4156] transition-colors rounded-full"
                        aria-label="Открыть меню"
                    >
                        {/* Иконка меню (Гамбургер) */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>

                    {/* Логотип */}
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2d4156]">
                        <span className="text-[#00b07e]">revi</span>tonica
                    </h1>

                    {/* Десктоп Меню (скрывается на экранах < md/640px) */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Методика Dropdown */}
                        <DropdownMenu
                            triggerText="Методика"
                            menuItems={methodologyMenuItems}
                        />
                        {/* Видеокурсы Dropdown */}
                        <DropdownMenu
                            triggerText="Видеокурсы"
                            menuItems={methodologyMenuItemsSecond}
                        />
                        {/* Другие элементы меню */}
                        <a
                            href="#"
                            className="text-gray-700 hover:text-[#2d4156] transition-colors text-base font-medium"
                        >
                            Интенсивы
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-[#2d4156] transition-colors text-base font-medium"
                        >
                            Клиника
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-[#2d4156] transition-colors text-base font-medium"
                        >
                            Блог
                        </a>
                    </div>
                </div>

                {/* Правая часть: Кнопка входа и Иконка пользователя */}
                <div className="flex items-center gap-4">
                    {/* Кнопка входа (показывается только на десктопе/планшете) */}
                    <button className="hidden md:block px-8 py-3 text-[#2d4156] text-sm font-semibold rounded-[5px] hover:bg-[#2d4156] hover:text-white transition-colors border-2 border-[#2d4156]">
                        Войти
                    </button>
                    {/* Иконка пользователя (показывается только на десктопе/планшете) */}
                    <a href="/profile" className="block md:hidden text-gray-500 hover:text-[#2d4156] transition-colors p-2 rounded-full">
                         {/* Иконка пользователя (simple SVG) */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </a>
                </div>
            </div>

            {/* Мобильный Drawer (появляется только при isDrawerOpen) */}
            <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
};

export default Header;