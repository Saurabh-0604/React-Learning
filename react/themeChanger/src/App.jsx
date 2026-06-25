import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./Context/theme";


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = ()=>{
    setThemeMode("light")
  }

    const darkTheme = ()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)    
  },[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <section id="center">
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <div className="w-full max-w-sm mx-auto">
                  {/* theme button */}
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm-mx-auto">
                  {/* Card */}
                  <Card/>
              </div>

            </div>
        </div>
      </section>
      </ThemeProvider>
    </>
  );
}

export default App;
