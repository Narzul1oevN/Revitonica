import React, { useState, useEffect } from 'react';

// ⚠️ ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА СВОИ!
// URL веб-приложения Google Apps Script (как в вашем предыдущем примере)
// Для использования с Google Forms через mode: 'no-cors' вам нужны:
const GOOGLE_FORM_URL = "https://script.google.com/macros/s/AKfycbwlppllR6Tal8HhIw3AbE5o-CwejkwBljZvhcLa-vJNG3hA4PPYTvH_r3Fe0aVeL-Mg/exec"
const ENTRY_NAME_ID = 'entry.1234567890'; // ID поля для имени
const ENTRY_CONTACT_ID = 'entry.9876543210'; // ID поля для контакта
// Чтобы найти эти ID, нужно открыть Google Form, нажать F12 (Инструменты разработчика),
// и посмотреть name атрибут у соответствующих полей ввода.

// Главный компонент
const Form = ({formId}) => {
  // Состояние для хранения значений полей
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
  });

  // Состояние для Toast-уведомления
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success', // 'success' или 'error'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Функция для отображения Toast-уведомления
  const showToast = (message, type = 'success', duration = 4000) => {
    setToast({ isVisible: true, message, type });
    // Автоматическое скрытие тоста
    setTimeout(() => {
      setToast((t) => ({ ...t, isVisible: false }));
    }, duration);
  };


  // Обновление состояния при вводе данных
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Функция для отправки данных
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast({ ...toast, isVisible: false }); // Скрываем предыдущий тост

    if (!formData.name || !formData.contact) {
      showToast('Пожалуйста, заполните оба поля.', 'error', 4000);
      setIsSubmitting(false);
      return;
    }

    // 1. Создаем объект URLSearchParams для кодирования данных формы
    const data = new URLSearchParams();
    data.append(ENTRY_NAME_ID, formData.name);
    data.append(ENTRY_CONTACT_ID, formData.contact);

    try {
      // 2. Отправляем POST-запрос на URL Google Forms
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: data,
        // Важно: Google Forms принимает запросы с заголовком mode: 'no-cors'
        mode: 'no-cors', 
      });

      // При использовании 'no-cors', response.ok всегда будет false,
      // но если исключения не произошло, считаем отправку успешной.
      showToast('✅ Данные отправлены!', 'success');
      setFormData({ name: '', contact: '' }); // Очистка формы

    } catch (error) {
      console.error('Ошибка отправки:', error);
      showToast('❌ Произошла ошибка при отправке данных.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id={formId} className="min-h-screen bg-gray-50 flex items-center justify-center sm:pt-0 sm:pb-0">
      
      {/* Форма */}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">Оставьте контакты</h1>
        
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Как вас зовут?"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
        />
        
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Оставьте контакты (телефон или email)..."
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
        />
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition font-medium disabled:opacity-50"
        >
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </button>

        <div className="text-center text-sm text-gray-500">
          Оставьте контакты, и мы свяжемся с вами в ближайшее время!
        </div>

      </form>
      
      {/* =============================================== */}
      {/* ⭐ КОМПОНЕНТ TOAST-УВЕДОМЛЕНИЯ */}
      {/* =============================================== */}
      <div 
        className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-2xl transition-all duration-300 z-50 
          
          /* Адаптивность: 80% ширины на мобильных, max-width на десктопе */
          w-[80%] max-w-sm sm:max-w-md 
          
          ${toast.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          
          /* Стиль: Используем более глубокие цвета */
          ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}` /* Синий для успеха, глубокий красный для ошибки */
        }
      >
        <p className="text-white font-medium flex items-center gap-3">
          {/* Иконка успеха/ошибки */}
          {toast.type === 'success' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          )}
          <span className="text-base">{toast.message}</span>
        </p>
      </div>

    </div>
  );
};

export default Form;
