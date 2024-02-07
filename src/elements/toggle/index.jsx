import React from 'react'

export default function Toggle() {
    return (
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-[#9F9F9F] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#fff] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#fff] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#fff] after:border-[#fff] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-forestGreen"></div>
        </label>
    )
}
