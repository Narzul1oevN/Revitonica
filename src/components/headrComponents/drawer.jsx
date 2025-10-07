import React, { useState } from "react";

const MobileDrawer = ({ isOpen, onClose }) => {
  // Функция для обработки клика по ссылке
  // Она вызывает onClose, чтобы закрыть Drawer
  const handleLinkClick = () => {
    onClose();
  };

  return (
    // 1. Главный контейнер
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay (задний фон) */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Содержимое Drawer */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header Drawer (Close, Logo, User Icon) */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 h-[80px]">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#2d4156] transition-colors p-2 rounded-full"
          >
            {/* Иконка закрытия (X) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Логотип в Drawer */}
          <div className="flex items-center gap-1">
            <span className="text-2xl font-extrabold text-[#2d4156]">revi</span>
            <span className="text-2xl font-extrabold text-[#00b07e]">
              tonica
            </span>
          </div>
        </div>

        <div className="py-4">
          {/* Главные Навигационные Ссылки */}
          <div className="mt-4">
            {/* ДОБАВЛЯЕМ onClick={handleLinkClick} К КАЖДОЙ ССЫЛКЕ */}
            <a
              href="#secion-scroll-id"
              className="block px-4 py-2 text-[18px] font-medium text-gray-700 hover:bg-gray-100 hover:text-[#2d4156] rounded-lg transition-colors"
              onClick={handleLinkClick} // <-- Изменение
            >
              Секция №1
            </a>

            <a
              href="#secion-scroll-id2"
              className="block px-4 py-2 text-[18px] font-medium text-gray-700 hover:bg-gray-100 hover:text-[#2d4156] rounded-lg transition-colors"
              onClick={handleLinkClick} // <-- Изменение
            >
              Секция №2
            </a>

            <a
              href="#secion-scroll-id4"
              className="block px-4 py-2 text-[18px] font-medium text-gray-700 hover:bg-gray-100 hover:text-[#2d4156] rounded-lg transition-colors"
              onClick={handleLinkClick} // <-- Изменение
            >
              Секция №3
            </a>

            <a
              href="#sectionId"
              className="block px-4 py-2 text-[18px] font-medium text-gray-700 hover:bg-gray-100 hover:text-[#2d4156] rounded-lg transition-colors"
              onClick={handleLinkClick} // <-- Изменение
            >
              Секция №4
            </a>

            <a
              href="#videoCoursScrioling"
              className="block px-4 py-2 text-[18px] font-medium text-gray-700 hover:bg-gray-100 hover:text-[#2d4156] rounded-lg transition-colors"
              onClick={handleLinkClick} // <-- Изменение
            >
              Секция №5
            </a>

            <a
              href="#secion-scroll-id8"
              className="block px-4 py-2 text-[18px] font-medium text-gray-700 hover:bg-gray-100 hover:text-[#2d4156] rounded-lg transition-colors"
              onClick={handleLinkClick} // <-- Изменение
            >
              Секция №6
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ... Компонент Header остается без изменений ...
// ----------------------------------------------------
// 4. ГЛАВНЫЙ КОМПОНЕНТ (Header) - КЛЮЧЕВЫЕ ИЗМЕНЕНИЯ ЗДЕСЬ
// ----------------------------------------------------

/**
 * Главный компонент шапки (Header) с простыми ссылками (без DropdownMenu) и MobileDrawer.
 */
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="w-[100%] h-[80px] flex justify-between items-center px-4 sm:px-6 md:px-10 bg-white border-b border-gray-100">
        {/* Левая часть: Гамбургер, Логотип, Десктоп Меню */}
        <div className="flex items-center gap-8">
          {/* Кнопка Мобильного Меню */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 md:hidden text-gray-700 hover:text-[#2d4156] transition-colors rounded-full"
            aria-label="Открыть меню"
          >
            {/* Иконка меню (Гамбургер) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Логотип */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2d4156]">
            <span className="text-[#00b07e]">revi</span>tonica
          </h1>

          {/* Десктоп Меню: Заменено DropdownMenu на простые ссылки <a> */}
          <div className="hidden md:flex items-center gap-4">
            {/* Оставляем только основные, чтобы не переполнять шапку */}
            <a
              href="#secion-scroll-id"
              className="text-gray-700 hover:text-[#2d4156] transition-colors text-base font-medium"
            >
              Секция №1
            </a>
            <a
              href="#secion-scroll-id2"
              className="text-gray-700 hover:text-[#2d4156] transition-colors text-base font-medium"
            >
              Секция №2
            </a>
            <a
              href="#secion-scroll-id4"
              className="text-gray-700 hover:text-[#2d4156] transition-colors text-base font-medium"
            >
              Секция №3
            </a>
            <a
              href="#sectionId"
              className="text-gray-700 hover:text-[#2d4156] transition-colors text-base font-medium"
            >
              Секция №4
            </a>
            <a
              href="#videoCoursScrioling"
              className="text-gray-700 hover:text-[#2d4156] transition-colors text-base font-medium"
            >
              Секция №5
            </a>

            <a
              href="#secion-scroll-id8"
              className="text-gray-700 hover:text-[#2d4156] transition-colors text-base font-medium"
            >
              Секция №6
            </a>
          </div>
        </div>
      </div>

      {/* Мобильный Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Header;
