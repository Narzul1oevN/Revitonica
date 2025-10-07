import React from 'react'

const Form = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center mt-[-150px] mb-[-50px]">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">Оставьте контакты</h1>
        
        <input
          type="text"
          placeholder="Как вас зовут?"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
        />
        
        <input
          type="text"
          placeholder="Оставьте контакты..."
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
        />
        
        <button className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition font-medium">
          Отправить
        </button>
      </div>
    </div>
  )
}

export default Form
