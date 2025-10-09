import React, { useState } from 'react';

// ====================================================================
// КОНСТАНТЫ - Убедитесь, что они верны!
// ====================================================================
const GOOGLE_FORM_URL = "https://script.google.com/macros/s/AKfycbwlppllR6Tal8HhIw3AbE5o-CwejkwBljZvhcLa-vJNG3hA4PPYTvH_r3Fe0aVeL-Mg/exec";
const ENTRY_NAME_ID = 'entry.1234567890'; // ID поля для имени
const ENTRY_CONTACT_ID = 'entry.9876543210'; // ID поля для контакта

// Главный компонент
const Form = ({formId}) => {
    // Состояние формы и Toast
    const [formData, setFormData] = useState({ name: '', contact: '' });
    const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Функция для отображения Toast-уведомления
    const showToast = (message, type = 'success', duration = 4000) => {
        setToast({ isVisible: true, message, type });
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

    // Функция для отправки данных (логика не менялась, так как она рабочая)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setToast({ ...toast, isVisible: false });

        if (!formData.name || !formData.contact) {
            showToast('Пожалуйста, заполните оба поля.', 'error');
            setIsSubmitting(false);
            return;
        }

        const data = new URLSearchParams();
        data.append(ENTRY_NAME_ID, formData.name);
        data.append(ENTRY_CONTACT_ID, formData.contact);

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                body: data,
                mode: 'no-cors', 
            });

            showToast('✅ Данные успешно отправлены!', 'success');
            setFormData({ name: '', contact: '' });

        } catch (error) {
            console.error('Ошибка отправки:', error);
            showToast('❌ Произошла ошибка при отправке данных.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div 
            id={formId} 
            className="w-full min-h-screen p-4 py-10 bg-gray-50 flex items-center justify-center 
                       sm:p-8 lg:py-20" // Общие отступы
        >
            
            {/* Форма: БОЛЬШЕ РАЗМЕР, АКЦЕНТНЫЙ ЦВЕТ, БОЛЕЕ ГЛАДКИЙ ВИД */}
            <form 
                onSubmit={handleSubmit} 
                className="w-full bg-white shadow-2xl rounded-2xl p-6 flex flex-col gap-6 
                           max-w-xs-3xs sm:max-w-md lg:max-w-lg" // Адаптивная ширина
            >
                <h1 className="text-3xl font-extrabold text-gray-900 text-center">
                    Свяжитесь с нами
                </h1>
                <p className="text-center text-gray-500 mb-2">
                    Оставьте свои данные, и мы свяжемся с вами в течение часа.
                </p>
                
                {/* Поле для имени */}
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                    className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg 
                               focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all 
                               text-lg" // Увеличенный размер шрифта
                />
                
                {/* Поле для контакта */}
                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Телефон или Email"
                    required
                    className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg 
                               focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all
                               text-lg"
                />
                
                {/* Кнопка отправки с акцентным цветом */}
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 mt-2 bg-indigo-600 text-white rounded-lg 
                               hover:bg-indigo-700 transition duration-300 font-bold text-xl 
                               disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>

                <div className="text-center text-sm text-gray-500">
                    Нажимая "Отправить заявку", вы соглашаетесь на обработку персональных данных.
                </div>

            </form>
            
            {/* =============================================== */}
            {/* ⭐ КОМПОНЕНТ TOAST-УВЕДОМЛЕНИЯ */}
            {/* Адаптирован для более красивого вида */}
            {/* =============================================== */}
            <div 
                className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-2xl transition-all duration-300 z-50 
                    w-[90%] max-w-sm 
                    ${toast.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                    ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`
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

        </div>
    );
};

export default Form;