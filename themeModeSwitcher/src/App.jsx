import { useEffect, useState } from "react";
import  {ThemeProvider}  from "./Contexts/ThemeContext";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";
import ProfilePictureUpdate from "./Components/Profile";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme= ()=>{
    setThemeMode("light");
  };
  const darkTheme = () =>{
    setThemeMode("dark");
  };
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode]);

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
      {/* <ProfilePictureUpdate/> */}
    </ThemeProvider>
  );
}

export default App;

