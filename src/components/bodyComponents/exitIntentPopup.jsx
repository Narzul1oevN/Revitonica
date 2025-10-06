import React, { useState, useEffect } from 'react';

// ⭐️ Список работающих, безопасных и случайных YouTube ID для демонстрации
const randomVideoIds = [
    '5qap5aO4i9A', // Музыка для фокуса
    't5QpA_T4-K4', // Красивый таймлапс
    'n_Dv4JMiwK8', // Природа
    'H48i_iP49V4', // Технологии
];

const getRandomVideoUrl = () => {
    const randomId = randomVideoIds[Math.floor(Math.random() * randomVideoIds.length)];
    // Встраиваем рандомный ID в URL-шаблон
    return `https://www.youtube.com/embed/${randomId}`;
};

const ExitVideoPopup = () => {
    const [videoUrl] = useState(getRandomVideoUrl());

    // ⭐️ Новые состояния для управления формой
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // Для сообщения об успехе

    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (event) => {
            // Показываем, только если курсор уходит вверх и попап еще не видим
            if (event.clientY < 20 && !isVisible) {
                setIsVisible(true);
                setTimeout(() => setIsAnimating(true), 10);
                // Удаляем обработчик, чтобы попап не появлялся снова
                document.removeEventListener('mouseleave', handleMouseLeave);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        // Функция очистки (cleanup)
        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    // Функция для плавного закрытия
    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => setIsVisible(false), 300);
    };

    // ⭐️ Обработка отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь должна быть логика отправки данных на сервер (API, CRM и т.д.)
        console.log('Данные отправлены:', { name, email });
        
        // Показываем сообщение об успехе
        setIsSubmitted(true);
        
        // Опционально: можно закрыть попап через несколько секунд
        // setTimeout(handleClose, 3000); 
    };

    if (!isVisible) {
        return null;
    }

    // ⭐️ Увеличенный размер для размещения двух колонок
    const modalClasses = `
        relative bg-white rounded-xl shadow-2xl p-0 
        w-[95%] max-w-5xl h-[550px] md:h-[650px] 
        transition-all duration-300 ease-in-out transform 
        ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
    `;

    // Классы для затемняющего оверлея
    const overlayClasses = `
        fixed inset-0 z-[9999] flex items-center justify-center p-4 
        transition-opacity duration-300 
        ${isAnimating ? 'bg-black/80 opacity-100' : 'bg-black/0 opacity-0 pointer-events-none'}
    `;

    return (
        <div 
            className={overlayClasses} 
            onClick={handleClose} 
        >
            {/* ⭐️ Контент попапа */}
            <div 
                className={modalClasses} 
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    className="absolute top-3 right-3 text-gray-800 hover:text-gray-500 text-3xl z-20 p-2"
                    onClick={handleClose} 
                    aria-label="Закрыть"
                >
                    &times;
                </button>
                
                {/* ⭐️ Основной контейнер с разделением на две колонки */}
                <div className="flex flex-col md:flex-row h-full">
                    
                    {/* 1. ЛЕВАЯ КОЛОНКА: Видео (Занимает 60% ширины на больших экранах) */}
                    <div className="md:w-3/5 h-1/2 md:h-full relative overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                        <iframe
                            src={`${videoUrl}?autoplay=1&rel=0`} 
                            title="Exit Intent Video Offer"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                        {/* ⭐️ Стильный заголовок поверх видео */}
                        <div className="absolute top-0 left-0 w-full p-4 bg-black/50 text-white text-center text-lg font-semibold">
                            Не упустите это! Смотрите короткое видео
                        </div>
                    </div>

                    {/* 2. ПРАВАЯ КОЛОНКА: Форма для сбора лидов (Занимает 40% ширины) */}
                    <div className="md:w-2/5 flex flex-col justify-center items-center p-6 text-center h-1/2 md:h-full">
                        
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                            Получите БОНУС!
                        </h2>
                        
                        {isSubmitted ? (
                            // ⭐️ Сообщение об успешной отправке
                            <div className="text-green-600 text-xl font-semibold mt-4">
                                Спасибо! Ваши данные успешно отправлены. Проверьте почту!
                            </div>
                        ) : (
                            // ⭐️ Форма ввода данных
                            <form onSubmit={handleSubmit} className="w-full space-y-4">
                                <p className="text-gray-600 mb-6">
                                    Оставьте свои данные, чтобы получить секретный гайд в подарок и ссылку на видео:
                                </p>
                                
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Ваше Имя"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Ваш Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg 
                                               hover:bg-red-700 transition duration-200 uppercase tracking-wider"
                                >
                                    Забрать Гайд и Ссылку
                                </button>
                                
                                <p className="text-xs text-gray-400 mt-2">
                                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                                </p>
                            </form>
                        )}
                        
                        <button 
                            onClick={handleClose} 
                            className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline transition duration-200"
                        >
                            Нет, спасибо, я хочу уйти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExitVideoPopup;