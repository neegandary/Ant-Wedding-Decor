import { FacebookIcon, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
        }

        function onKey(e) {
            if (e.key === "Escape") setSearchOpen(false);
        }

        function onClickOutside(e) {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setSearchOpen(false);
            }
        }

        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onClickOutside);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClickOutside);
        };
    }, [searchOpen]);

    return (
        <header className="bg-[#f7f6eb] py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 items-center">
                {/* Left: hotline */}
                <div className="text-sm text-gray-700">
                        Hotline: <span className="text-red-700">079 467 2928</span>
                </div>

                {/* Center: logo */}
                <div className="flex justify-center">
                    <a href="/"><img src="/logo.png" alt="Company logo" className="h-24 w-24 rounded-full" /></a>
                </div>

                {/* Right: icons */}
                <div ref={containerRef} className="flex justify-end items-center space-x-4 cursor-pointer">
                    <a
                        href="https://www.facebook.com/antweddingteam"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                        className="text-gray-700 hover:text-blue-600"
                    >
                        <FacebookIcon className="w-6 h-6" />
                    </a>

                    <button
                        type="button"
                        aria-label="Search"
                        onClick={() => setSearchOpen((s) => !s)}
                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                    >
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Search input (toggle) */}
                    {searchOpen && (
                        <div className="relative">
                            <input
                                ref={inputRef}
                                type="search"
                                name="q"
                                placeholder="Search..."
                                className="ml-2 px-3 py-1 rounded-md border border-gray-200 bg-white text-sm shadow-sm focus:outline-none "
                                aria-label="Search site"
                            />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};