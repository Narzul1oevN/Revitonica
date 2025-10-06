import React from "react";
import bgImage from "../assets/www.png";

// Компонент, который выводит кастомное модальное окно вместо alert()
const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#FF5051] text-white rounded-lg hover:bg-red-600 transition"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

const Secion4 = ({secion4Scrolid}) => {
  const [showAlert, setShowAlert] = React.useState(false);

  // Имитация действия кнопки
  const handleButtonClick = () => {
    console.log("Кнопка 'Узнать' нажата");
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  // Цвета, взятые с изображений
  const primaryPurple = "#59559C";
  const buttonYellow = "#FFD700"; // Ярко-желтый

  return (
    // ИЗМЕНЕНИЕ ЗДЕСЬ: фон секции теперь bg-gray-50
    <section id={secion4Scrolid} className="py-8 md:py-12 bg-gray-50 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/*
          Основной контейнер CTA: 
          - Фон фиолетового цвета
          - Закругленные углы
          - Flex-контейнер для мобильных устройств (стек)
          - Grid для десктопов (текст слева, изображение справа)
        */}
        <div
          className="relative overflow-hidden p-8 md:p-12 lg:p-16 rounded-3xl"
          style={{ backgroundColor: primaryPurple }}
        >
          {/* Фон: Крупные вопросительные знаки (только для декора) */}
          <div className="absolute inset-0 opacity-10">
            {/* Большая вопросительный знак вверху справа */}
            <span className="absolute top-4 right-10 text-[100px] md:text-[200px] font-black text-white transform rotate-12">
              ?
            </span>
            {/* Вопросительный знак поменьше внизу слева */}
            <span className="absolute bottom-4 left-10 text-[60px] md:text-[120px] font-black text-white transform -rotate-12">
              ?
            </span>
            {/* Ещё один вопросительный знак в центре */}
            <span className="absolute top-1/3 left-1/2 text-[80px] md:text-[150px] font-black text-white opacity-5">
              ?
            </span>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* --- ЛЕВЫЙ БЛОК: Заголовок и Кнопка --- */}
            <div className="lg:col-span-2 z-10 text-white max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Не знаете, какой видеокурс вам подойдёт?
              </h2>
              <button
                onClick={handleButtonClick}
                className="py-4 px-10 text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75"
                style={{ backgroundColor: buttonYellow, color: primaryPurple }}
              >
                Узнать
              </button>
            </div>

            {/* --- ПРАВЫЙ БЛОК: Изображение человека --- */}
            <div className="relative lg:col-span-1 flex justify-center lg:justify-end mt-4 lg:mt-0">
              {/* Изображение вставляется с помощью заглушки. 
                  На оригинальном изображении: девушка в очках, задумавшаяся, с вопросительными знаками вокруг.
              */}
                           {" "}
              <img
                src={bgImage}
                alt="" // ✅ ИЗМЕНЕНИЕ ЗДЕСЬ: Убраны 'opacity-0' и 'hidden', //                     теперь изображение всегда видимое (но только на больших экранах, как вы и хотели с 'lg:block')
                className="w-full max-w-[500px] h-auto object-cover lg:block"
              />
              {/* На мобильных устройствах изображение не показываем, чтобы сохранить место, или показываем меньший элемент. 
                  Оставим только текст и кнопку для мобильных версий для чистоты. */}
            </div>

            {/* Добавляем белые вопросительные знаки, которые видны на изображении */}
            <span
              className="absolute top-8 right-8 text-[80px] font-black text-white opacity-100 hidden lg:block"
              style={{ transform: "rotate(15deg)" }}
            >
              ?
            </span>
            <span
              className="absolute bottom-1/4 right-1/4 text-[60px] font-black text-white opacity-100 hidden lg:block"
              style={{ transform: "rotate(-20deg)" }}
            >
              ?
            </span>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {showAlert && (
        <CustomAlert
          message="Вы переходите к опросу для подбора курса."
          onClose={handleCloseAlert}
        />
      )}
    </section>
  );
};

export default Secion4;
