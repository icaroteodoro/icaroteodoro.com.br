"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Plus, Laptop } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-6 inset-x-0 z-50 px-6 max-w-6xl mx-auto w-full flex items-center justify-between pointer-events-none">
      
      {/* Name (Left, inside pill) */}
      <div className="pointer-events-auto px-6 py-3 border border-zinc-200 dark:border-zinc-800/50 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-2xl hidden sm:flex items-center text-zinc-900 dark:text-white transition-colors duration-300">
        <span className="font-bold tracking-tight text-lg">Ícaro Teodoro</span>
      </div>

      {/* Floating Navbar (Right) */}
      <div className="pointer-events-auto flex items-center gap-2">
        
        {/* Menu Container */}
        <div 
          className={`flex items-center border border-zinc-200 dark:border-zinc-800/50 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-2xl transition-all duration-500 overflow-hidden ${
            isOpen ? "max-w-[500px] opacity-100 px-2" : "max-w-[52px] opacity-100"
          }`}
        >
          {/* Animated Links - Visible only when open */}
          <nav 
            className={`flex items-center gap-6 text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-500 ${
              isOpen ? "w-auto opacity-100 translate-x-0 mr-4 pl-4" : "w-0 opacity-0 translate-x-10 mr-0 pl-0"
            }`}
          >
            <a href="#home" onClick={() => setIsOpen(false)} className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Início</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Sobre</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Experiência</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Contato</a>
          </nav>

          {/* Toggle Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-[50px] h-[50px] flex-shrink-0 flex items-center justify-center rounded-full text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-500 ${isOpen ? "rotate-45" : "rotate-0"}`}>
              <Plus size={24} />
            </div>
          </button>
        </div>

        {/* Theme Toggle Container */}
        <div 
          className={`flex items-center border border-zinc-200 dark:border-zinc-800/50 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-2xl transition-all duration-500 overflow-hidden h-[52px] ${
            isThemeOpen ? "max-w-[150px] px-1" : "max-w-[52px] px-0"
          }`}
        >
          {/* Expanded Theme Buttons - Visible only when open */}
          <div 
            className={`flex items-center transition-all duration-500 ${
              isThemeOpen ? "w-[126px] opacity-100 gap-1 translate-x-0" : "w-0 opacity-0 gap-0 translate-x-10 pointer-events-none"
            }`}
          >
            <button 
              onClick={() => { setTheme("light"); setIsThemeOpen(false); }} 
              className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-colors ${mounted && theme === 'light' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
              title="Light Mode"
            >
              <Sun size={18} />
            </button>
            <button 
              onClick={() => { setTheme("system"); setIsThemeOpen(false); }} 
              className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-colors ${mounted && theme === 'system' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
              title="System Theme"
            >
              <Laptop size={18} />
            </button>
            <button 
              onClick={() => { setTheme("dark"); setIsThemeOpen(false); }} 
              className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-colors ${mounted && theme === 'dark' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
              title="Dark Mode"
            >
              <Moon size={18} />
            </button>
          </div>

          {/* Toggle Theme Button (Shows when closed) */}
          <button 
            onClick={() => setIsThemeOpen(true)} 
            className={`flex-shrink-0 flex items-center justify-center rounded-full text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-500 ${
              isThemeOpen ? 'w-0 h-0 opacity-0 pointer-events-none overflow-hidden' : 'w-[50px] h-[50px] opacity-100'
            }`}
            aria-label="Toggle theme menu"
          >
            {mounted ? (
              theme === 'dark' ? <Moon size={20} /> : 
              theme === 'light' ? <Sun size={20} /> : 
              <Laptop size={20} />
            ) : null}
          </button>
        </div>

      </div>
    </header>
  );
}
