import React, { useState, useEffect } from 'react';

// Константа для ключа в localStorage и максимального количества показов
const POPUP_COUNT_KEY = 'exitPopupShowCount';
const MAX_SHOW_COUNT = 3; // Максимальное количество показов

// ... (остальной код для randomVideoIds и getRandomVideoUrl можно удалить, если вы используете свой ID,
// но я оставлю его для совместимости, хотя в текущей версии он не используется)

const randomVideoIds = [
    '5qap5aO4i9A', 
    't5QpA_T4-K4', 
    'n_Dv4JMiwK8', 
    'H48i_iP49V4', 
];

const getRandomVideoUrl = () => {
    const randomId = randomVideoIds[Math.floor(Math.random() * randomVideoIds.length)];
    return `https://www.youtube.com/embed/${randomId}`;
};

const ExitVideoPopup = () => {
    // ⭐️ ИСПОЛЬЗУЙТЕ СВОЙ ID ВИДЕО ЗДЕСЬ (или getRandomVideoUrl())
    const [videoUrl] = useState(getRandomVideoUrl()); 
    // Если вы хотите свое видео, замените строку выше на:
    // const YOUR_YOUTUBE_VIDEO_ID = 'ВАШ_ID_ВИДЕО_ЗДЕСЬ';
    // const [videoUrl] = useState(`https://www.youtube.com/embed/${YOUR_YOUTUBE_VIDEO_ID}`);
    
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // 1. Проверяем счетчик при загрузке
        let currentCount = parseInt(localStorage.getItem(POPUP_COUNT_KEY) || '0', 10);

        const handleMouseLeave = (event) => {
            // 2. Сначала проверяем, не превышен ли лимит
            if (currentCount >= MAX_SHOW_COUNT) {
                // Если лимит превышен, просто выходим и удаляем обработчик
                document.removeEventListener('mouseleave', handleMouseLeave);
                return;
            }
            
            // Если курсор уходит вверх (exit intent) и попап не виден
            if (event.clientY < 20 && !isVisible) {
                // 3. Увеличиваем счетчик и сохраняем его
                currentCount += 1;
                localStorage.setItem(POPUP_COUNT_KEY, currentCount.toString());
                
                // 4. Показываем попап
                setIsVisible(true);
                setTimeout(() => setIsAnimating(true), 10);
                
                // 5. Если это был второй (последний) показ, удаляем обработчик
                if (currentCount >= MAX_SHOW_COUNT) {
                    document.removeEventListener('mouseleave', handleMouseLeave);
                }
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        // Функция очистки (cleanup) - удаляем обработчик при демонтаже или повторном запуске, 
        // если он еще существует
        return () => {
             // Проверяем, был ли обработчик уже удален внутри handleMouseLeave, 
             // и если нет, удаляем его
             document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]); // Зависимость от isVisible нужна для корректной логики показа/скрытия

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => setIsVisible(false), 300);
    };

    if (!isVisible) {
        return null;
    }

    const modalClasses = `
        relative bg-white rounded-xl shadow-2xl p-0 
        w-[90vw] h-[500px] 
        transition-all duration-300 ease-in-out transform 
        ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
    `;

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
                
                <div className="w-full h-full relative overflow-hidden rounded-xl">
                    <iframe
                        src={`${videoUrl}?autoplay=1&rel=0`} 
                        title="Exit Intent Video Offer"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full object-cover"
                    ></iframe>
                    <div className="absolute top-0 left-0 w-full p-4 bg-black/50 text-white text-center text-lg font-semibold">
                        Не упустите это! Смотрите короткое видео
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExitVideoPopup;