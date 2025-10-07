import React from 'react';

// Данные для карточек преимуществ обучения
const benefitsData = [
  {
    id: 1,
    title: 'Быстрый Старт и Первый Доход',
    text: 'Научим, как "заработать первые 500 рублей" в первые дни. Мы не просто даем знания — мы даем работающий алгоритм для монетизации навыков веб-разработки.',
    colorClass: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    borderColor: 'border-indigo-600',
    type: 'money-rocket'
  },
  {
    id: 2,
    title: 'Веб-Разработка с Нуля до PRO',
    text: 'Полный курс по "современной веб-разработке". Вы освоите HTML, CSS, JavaScript, React/Vue и научитесь создавать профессиональные проекты с нуля.',
    colorClass: 'text-teal-600',
    bgColor: 'bg-teal-100',
    borderColor: 'border-teal-600',
    type: 'code-gear'
  },
  {
    id: 3,
    title: 'Обучение на Реальных Заказах',
    text: 'Больше никакой теории в вакууме. Практика на "реальных клиентских проектах", которые можно смело добавить в портфолио. Выпускники получают работу!',
    colorClass: 'text-amber-600',
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-600',
    type: 'portfolio-case'
  },
  {
    id: 4,
    title: 'Поддержка и Сообщество 24/7',
    text: 'Вы не останетесь один на один с ошибками. Наша команда и сообщество "наставников 24/7" готовы помочь, ответить на вопросы и подсказать решение.',
    colorClass: 'text-pink-600',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-600',
    type: 'community-chat'
  }
];

// Вспомогательный компонент для отображения значка преимущества с помощью SVG
const BenefitBadge = ({ data }) => {
  const { colorClass, borderColor, type } = data;

  const renderIcon = () => {
    // Иконка: Быстрый Старт / Деньги
    if (type === 'money-rocket') {
      return (
        <svg className={`w-10 h-10 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L12 22M12 22C17 22 21 18 21 13C21 8 17 4 12 4M12 2C7 2 3 6 3 11C3 16 7 20 12 20M16 10L14 12L16 14M8 10L10 12L8 14M12 12V16" />
        </svg>
      );
    }

    // Иконка: Код / Технологии
    if (type === 'code-gear') {
      return (
        <svg className={`w-10 h-10 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    }

    // Иконка: Портфолио / Кейс
    if (type === 'portfolio-case') {
      return (
        <svg className={`w-10 h-10 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      );
    }

    // Иконка: Сообщество / Чат
    if (type === 'community-chat') {
      return (
        <svg className={`w-10 h-10 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      );
    }

    // Fallback
    return (
      <div className={`w-12 h-12 rounded-full ${data.bgColor} border-4 ${borderColor} flex items-center justify-center p-4`}>
        <span className="text-center text-sm font-semibold p-2">!</span>
      </div>
    );
  };

  return (
    <div className={`w-25 h-25 p-1.5 rounded-full border-4 ${borderColor} ${colorClass} bg-white shadow-xl flex items-center justify-center`}>
      <div className={`w-full h-full rounded-full border-4 border-current ${data.bgColor} flex flex-col items-center justify-center`}>
        {renderIcon()}
      </div>
    </div>
  );
};

// Компонент отдельной карточки преимущества
const BenefitCard = ({ data }) => {
  return (
    // Карточка с белым фоном, закругленными углами и тенью
    <div className="p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center text-center h-full transition-transform duration-300 hover:scale-[1.03]">
      {/* Значок Преимущества */}
      <div className="mb-6">
        <BenefitBadge data={data} />
      </div>
      
      {/* Заголовок */}
      <h3 className={`text-xl font-bold mb-3 ${data.colorClass}`}>{data.title}</h3>

      {/* Текст Описания */}
      <p className="text-gray-700 text-[16px] text-cebter text-lg font-medium leading-relaxed">
        {data.text}
      </p>
    </div>
  );
};

// Главный компонент
const Section8 = ({secion8Title}) => {
  return (
    // Общий контейнер секции с легким серым фоном
    <section id={secion8Title} className="py-12 md:py-20 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#0b1a3d] text-start mb-10 md:mb-16">
          Наши преимущества:
        </h2>
        
        {/* Адаптивная сетка */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {benefitsData.map((benefit) => (
            <BenefitCard key={benefit.id} data={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8;