import React, { useState } from "react";

function Navbar({ page }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav>
      <ul className="flex items-center gap-6 text-base font-medium text-gray-700">
        <li>
          <a
            href="index.html"
            className={`hover:text-blue-600 transition ${
              page === "home" ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Home
          </a>
        </li>

        <li>
          <a href="index.html#features" className="hover:text-blue-600 transition">
            Features
          </a>
        </li>

        <li className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className={`flex items-center gap-1 hover:text-blue-600 transition ${
              ["blog-grid", "blog-single", "signin", "signup", "404"].includes(page)
                ? "text-blue-600 font-semibold"
                : ""
            }`}
          >
            Pages
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                dropdown ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 
              12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 
              86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 
              32.8 0 45.3l192 192z" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {dropdown && (
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50">
              {[
                { href: "blog-grid.html", name: "Blog Grid", key: "blog-grid" },
                { href: "blog-single.html", name: "Blog Single", key: "blog-single" },
                { href: "signin.html", name: "Sign In", key: "signin" },
                { href: "signup.html", name: "Sign Up", key: "signup" },
                { href: "404.html", name: "404", key: "404" },
              ].map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className={`block px-4 py-2 hover:bg-gray-100 transition ${
                      page === item.key ? "text-blue-600 font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <a href="index.html#support" className="hover:text-blue-600 transition">
            Support
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar