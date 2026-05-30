import { useState,useEffect } from "react";

export function useTheme(): {theme: string, toggleTheme: () => void} {
const [Theme, setThem] = useState(
    ()=> localStorage.getItem("theme") ?? "light",  
);
useEffect(()=>{
    doucment.documentElement.setAttribute("data-theme",Theme);
    localStorage.setItem("theme",Theme);
},[Theme]);

const toggle = () => { SetThem((prev) => (prev === "light" ? "dark" : "light"))};

return {theme: Theme, toggleTheme: toggle};
}