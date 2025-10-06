import React from 'react'
import Header from './../components/headrComponents/drawer';

const Head = () => {
    // Шапка сделана липкой (sticky) и имеет высокий z-index, чтобы быть поверх контента
    // h-[80px] - высота шапки
    // sticky top-0 - фиксирует шапку вверху при прокрутке
    // z-30 - обеспечивает, что шапка будет поверх секции
    // bg-white - перекрывает контент, когда секция заезжает под шапку
    return (
        <div className='w-[100%] h-[80px] flex justify-between items-center sticky top-0 z-30 bg-white'> 
            <Header/>
        </div>
    )
}

export default Head