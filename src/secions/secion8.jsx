import React from 'react';

// Данные для карточек наград
const awardsData = [
  {
    id: 1,
    year: '2024/25',
    title: 'Freedom Genius Expert Awards',
    text: 'Победитель федеральной премии «Freedom Genius Expert Awards 2024/25» в номинации «ЗОЖ-персона года»',
    colorClass: 'text-amber-500', // Золотистый
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-500',
    type: 'gold-seal'
  },
  {
    id: 2,
    year: '2021',
    title: 'Green Awards',
    text: 'Победитель премии «Green Awards 2021» в номинациях «Персона года» и «Блогер года в сфере омоложения»',
    colorClass: 'text-green-700', // Зеленый
    bgColor: 'bg-green-100',
    borderColor: 'border-green-700',
    type: 'green-wreath'
  },
  {
    id: 3,
    year: '2020',
    title: 'Green Awards',
    text: 'Победитель премии «Green Awards 2020» в номинациях «ЗОЖ-персона года» и «Лучший осознанный блог года»',
    colorClass: 'text-lime-600', // Светло-зеленый
    bgColor: 'bg-lime-100',
    borderColor: 'border-lime-600',
    type: 'gold-wreath'
  },
  {
    id: 4,
    year: '2020',
    title: 'Live Organic Awards',
    text: 'Победитель премии «Live Organic Awards 2020» в номинации «Лучший образовательный ЗОЖ-проект года»',
    colorClass: 'text-gray-900', // Черный
    bgColor: 'bg-gray-200',
    borderColor: 'border-gray-900',
    type: 'black-logo'
  }
];

// Вспомогательный компонент для отображения значка награды с помощью стилизованного div/SVG
const AwardBadge = ({ data }) => {
  const { year, colorClass, borderColor, type } = data;

  // Рендеринг разных типов значков с помощью Tailwind классов и встроенного SVG
  if (type === 'gold-seal') {
    return (
      <div className={`w-32 h-32 p-1.5 rounded-full border-4 ${borderColor} ${colorClass} bg-white shadow-xl flex items-center justify-center`}>
        <div className="w-full h-full rounded-full border-4 border-current bg-gradient-to-br from-yellow-300 to-yellow-600 flex flex-col items-center justify-center text-gray-800">
          <span className="text-xl font-extrabold">{year}</span>
          <span className="text-[8px] font-medium tracking-widest mt-0.5">ПОБЕДИТЕЛЬ</span>
          <span className="text-[7px] font-bold text-center mt-1 leading-tight">FREEDOM GENIUS<br/>EXPERT AWARDS</span>
        </div>
      </div>
    );
  }

  if (type === 'green-wreath') {
    return (
      <div className={`w-32 h-32 p-1 rounded-full border-4 ${borderColor} ${colorClass} bg-white shadow-xl flex items-center justify-center`}>
        <div className="w-full h-full rounded-full border-4 border-current bg-gradient-to-br from-green-300 to-green-600 flex flex-col items-center justify-center text-white">
          <span className="text-sm font-bold tracking-widest">GREEN</span>
          <span className="text-xl font-extrabold -mt-1">AWARDS</span>
          <span className="text-[10px] font-bold tracking-wider -mt-1">{year}</span>
          <span className="text-[8px] font-bold tracking-widest mt-1">ПОБЕДИТЕЛЬ</span>
        </div>
      </div>
    );
  }

  if (type === 'gold-wreath') {
    return (
      <div className={`w-32 h-32 p-1 rounded-full border-4 ${borderColor} ${colorClass} bg-white shadow-xl flex items-center justify-center`}>
        <div className="w-full h-full rounded-full border-4 border-current bg-gradient-to-br from-lime-300 to-lime-600 flex flex-col items-center justify-center text-white">
          <span className="text-sm font-bold tracking-widest">GREEN</span>
          <span className="text-xl font-extrabold -mt-1">AWARDS</span>
          <span className="text-[10px] font-bold tracking-wider -mt-1">{year}</span>
          <span className="text-[8px] font-bold tracking-widest mt-1">ПОБЕДИТЕЛЬ</span>
        </div>
      </div>
    );
  }

  if (type === 'black-logo') {
    return (
      <div className={`w-32 h-32 p-1.5 rounded-full border-4 ${borderColor} ${colorClass} bg-white shadow-xl flex items-center justify-center`}>
        <div className="w-full h-full rounded-full border-2 border-gray-900 bg-gray-900 flex flex-col items-center justify-center text-white">
            {/* Имитация органического листа/логотипа с помощью SVG */}
            <svg className="w-8 h-8 text-lime-400 mb-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.657 16.657L13.414 12.414L14.828 11L19.071 15.243L17.657 16.657ZM12 4.00001L13.414 5.41401L12 6.82801L10.586 5.41401L12 4.00001ZM8 12.0001L9.414 13.4141L8 14.8281L6.586 13.4141L8 12.0001ZM16 12.0001L17.414 13.4141L16 14.8281L14.586 13.4141L16 12.0001ZM14.828 9.58601L13.414 11.0001L12 9.58601L10.586 11.0001L12 12.4141L13.414 11.0001L14.828 9.58601ZM12 16.0001C14.2091 16.0001 16 14.2091 16 12.0001C16 9.79109 14.2091 8.00009 12 8.00009C9.79086 8.00009 8 9.79109 8 12.0001C8 14.2091 9.79086 16.0001 12 16.0001ZM12 14.0001C13.1046 14.0001 14 13.1046 14 12.0001C14 10.8955 13.1046 10.0001 12 10.0001C10.8954 10.0001 10 10.8955 10 12.0001C10 13.1046 10.8954 14.0001 12 14.0001Z" />
                <path fill="#ffffff" d="M12 21.0001C16.9706 21.0001 21 16.9706 21 12.0001C21 7.02945 16.9706 3.00005 12 3.00005C7.02944 3.00005 3 7.02945 3 12.0001C3 16.9706 7.02944 21.0001 12 21.0001ZM12 19.0001C8.13401 19.0001 5 15.8661 5 12.0001C5 8.13405 8.13401 5.00005 12 5.00005C15.866 5.00005 19 8.13405 19 12.0001C19 15.8661 15.866 19.0001 12 19.0001Z" opacity="0.1"/>
            </svg>
            <span className="text-[10px] font-extrabold tracking-widest">LIVE ORGANIC</span>
            <span className="text-xl font-extrabold leading-none -mt-0.5">AWARDS</span>
            <span className="text-[10px] font-bold tracking-wider">{year}</span>
            <span className="text-[8px] font-bold tracking-widest mt-1">ПОБЕДИТЕЛЬ</span>
        </div>
      </div>
    );
  }


  // Fallback
  return (
    <div className={`w-32 h-32 rounded-full ${data.bgColor} border-4 ${borderColor} flex items-center justify-center p-4`}>
        <span className="text-center text-sm font-semibold p-2">
            Награда
        </span>
    </div>
  );
};


// Компонент отдельной карточки награды
const AwardCard = ({ data }) => {
  return (
    // Карточка с белым фоном, закругленными углами и тенью
    <div className="p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center text-center h-full transition-transform duration-300 hover:scale-[1.03]">
      {/* Значок Награды */}
      <div className="mb-6">
        <AwardBadge data={data} />
      </div>
      
      {/* Текст Награды */}
      <p className="text-gray-700 text-lg font-medium leading-relaxed">
        {data.text}
      </p>
    </div>
  );
};

// Главный компонент, который вы просили (переименован для удобства в Section8)
const Section8 = () => {
  return (
    // Общий контейнер секции с легким серым фоном, соответствующим изображению
    <section className="py-12 md:py-20 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10 md:mb-16">
          Наши награды
        </h2>
        
        {/* Адаптивная сетка:
            grid-cols-1: по умолчанию (мобильные)
            md:grid-cols-2: от 640px (планшеты)
            xl:grid-cols-4: от 1024px (десктоп)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {awardsData.map((award) => (
            <AwardCard key={award.id} data={award} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Section8