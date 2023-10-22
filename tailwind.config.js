/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sidebarMobile: 'url("/bg-sidebar-mobile.svg")',
        sidebarDesktop: 'url("/bg-sidebar-desktop.svg")',
      },
    },
  },
  plugins: [],
};
