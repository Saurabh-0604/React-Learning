import React from 'react'
import useTheme from '../Context/theme'

function ThemeBtn() {


    const {themeMode, lightTheme, darkTheme}=useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus)
        {
            darkTheme()
        }else{
            lightTheme()
        }
    }
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChangeBtn}
          checked ={themeMode ==="dark"}
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
      </label>

      <span className="font-medium">Toggle Theme</span>
    </div>
  )
}

export default ThemeBtn
