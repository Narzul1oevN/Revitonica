import React, { useState, useEffect } from 'react';

// ====================================================================
// КОНСТАНТЫ
// ⚠️ ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА СВОИ!
// ====================================================================

// Ключ для localStorage и максимальное количество показов
const POPUP_COUNT_KEY = 'exitFormPopupShowCount';
const MAX_SHOW_COUNT = 1; // Максимальное количество показов

// URL веб-приложения Google Apps Script
const GOOGLE_FORM_URL = "https://script.google.com/macros/s/AKfycbwlppllR6Tal8HhIw3AbE5o-CwejkwBljZvhcLa-vJNG3hA4PPYTvH_r3Fe0aVeL-Mg/exec";
// ID полей ввода из Google Forms (name атрибуты)
const ENTRY_NAME_ID = 'entry.1234567890'; // ID поля для имени
const ENTRY_CONTACT_ID = 'entry.9876543210'; // ID поля для контакта

// ====================================================================
// КОМПОНЕНТ ФОРМЫ (ВНУТРИ ПОПАПА)
// ====================================================================

const ExitIntentForm = ({ onClose }) => {
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
            showToast('Пожалуйста, заполните оба поля.', 'error');
            setIsSubmitting(false);
            return;
        }

        // 1. Создаем объект URLSearchParams для кодирования данных формы
        const data = new URLSearchParams();
        data.append(ENTRY_NAME_ID, formData.name);
        data.append(ENTRY_CONTACT_ID, formData.contact);

        try {
            // 2. Отправляем POST-запрос на URL Google Apps Script
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                body: data,
                // Важно: для Google Apps Script используем 'no-cors'
                mode: 'no-cors', 
            });

            // Отправка прошла успешно
            showToast('✅ Данные отправлены! Скоро свяжемся с вами.', 'success');
            setFormData({ name: '', contact: '' }); // Очистка формы
            
            // ⭐ Дополнительно: Закрываем попап после успешной отправки
            setTimeout(onClose, 2000); 

        } catch (error) {
            console.error('Ошибка отправки:', error);
            showToast('❌ Произошла ошибка при отправке данных.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full h-full bg-white p-8 flex flex-col justify-center gap-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
                Подождите! Не уходите! ✋
            </h2>
            <p className="text-center text-gray-600 mb-4 text-lg">
                Оставьте контакты, чтобы получить специальное предложение!
            </p>
            
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
                className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
            />
            
            <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Телефон или Email"
                required
                className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
            />
            
            <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 mt-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold text-lg disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
                {isSubmitting ? 'Отправка...' : 'Получить предложение'}
            </button>

            <div className="text-center text-sm text-gray-500 mt-2">
                Мы гарантируем конфиденциальность ваших данных.
            </div>

            {/* =============================================== */}
            {/* ⭐ КОМПОНЕНТ TOAST-УВЕДОМЛЕНИЯ */}
            {/* Используем портал, если это не попап, но для простоты оставляем внутри */}
            {/* =============================================== */}
            <div 
                className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-2xl transition-all duration-300 z-[10000] 
                    w-[80%] max-w-sm 
                    ${toast.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                    ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`
                }
            >
                <p className="text-white font-medium flex items-center gap-3">
                    {toast.type === 'success' ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    )}
                    <span className="text-base">{toast.message}</span>
                </p>
            </div>
        </form>
    );
};

// ====================================================================
// ГЛАВНЫЙ КОМПОНЕНТ ПОПАПА
// ====================================================================

const ExitFormPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClose = () => {
        setIsAnimating(false);
        // Задержка для анимации закрытия (300ms)
        setTimeout(() => setIsVisible(false), 300);
    };

    useEffect(() => {
        let currentCount = parseInt(localStorage.getItem(POPUP_COUNT_KEY) || '0', 10);
        let eventListenerAdded = true;

        const handleMouseLeave = (event) => {
            // Проверяем, не превышен ли лимит или попап уже открыт
            if (currentCount >= MAX_SHOW_COUNT || isVisible) {
                if (currentCount >= MAX_SHOW_COUNT && eventListenerAdded) {
                    document.removeEventListener('mouseleave', handleMouseLeave);
                    eventListenerAdded = false;
                }
                return;
            }
            
            // Если курсор уходит вверх (exit intent)
            if (event.clientY < 20) {
                // Увеличиваем счетчик и сохраняем его
                currentCount += 1;
                localStorage.setItem(POPUP_COUNT_KEY, currentCount.toString());
                
                // Показываем попап
                setIsVisible(true);
                // Задержка для запуска анимации после того, как попап отрендерится
                setTimeout(() => setIsAnimating(true), 10);
                
                // Если лимит достигнут, удаляем обработчик, чтобы он не срабатывал больше
                if (currentCount >= MAX_SHOW_COUNT && eventListenerAdded) {
                    document.removeEventListener('mouseleave', handleMouseLeave);
                    eventListenerAdded = false;
                }
            }
        };

        // Добавляем обработчик
        document.addEventListener('mouseleave', handleMouseLeave);
        
        // Функция очистки (cleanup)
        return () => {
            if (eventListenerAdded) {
                document.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isVisible]); 
    // Зависимость от isVisible гарантирует, что мы не откроем попап дважды, 
    // если пользователь быстро уведет мышь, а также позволяет логике cleanup работать корректно.

    if (!isVisible) {
        return null;
    }

    const modalClasses = `
        relative bg-white rounded-xl shadow-2xl p-0 
        w-[90vw] max-w-lg min-h-[450px] 
        transition-all duration-300 ease-in-out transform 
        ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
    `;

    const overlayClasses = `
        fixed inset-0 z-[9999] flex items-center justify-center p-4 
        transition-opacity duration-300 
        ${isAnimating ? 'bg-black/70 opacity-100' : 'bg-black/0 opacity-0 pointer-events-none'}
    `;

    return (
        <div 
            className={overlayClasses} 
            onClick={handleClose} // Закрытие при клике на оверлей
        >
            <div 
                className={modalClasses} 
                onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри модального окна
            >
                <button 
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-800 text-4xl z-20 p-2 leading-none"
                    onClick={handleClose} 
                    aria-label="Закрыть"
                >
                    &times;
                </button>
                
                <div className="w-full h-full relative overflow-hidden rounded-xl">
                    <ExitIntentForm onClose={handleClose} />
                </div>
            </div>
        </div>
    );
};

export default ExitFormPopup;