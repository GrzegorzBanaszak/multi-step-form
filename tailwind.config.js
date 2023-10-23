/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sidebarMobile: 'url("/bg-sidebar-mobile.svg")',
        sidebarDesktop: 'url("/bg-sidebar-desktop.svg")',
      },
      colors: {
        purplishBlue: "hsl(243, 100%, 62%)",
        marineBlue: "hsl(213, 96%, 18%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        magnolia: "hsl(217, 100%, 97%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
      },
    },
  },
  plugins: [],
};
