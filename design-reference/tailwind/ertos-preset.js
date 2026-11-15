/**
 * Tailwind preset сайта конкурса ЭРТОС.
 * Значения взяты 1:1 из design-reference/src/common.css и прототипа.
 * Подключение: tailwind.config.js → presets: [require("./design-reference/tailwind/ertos-preset.js")]
 * Не добавлять новые цвета, скругления и тени без согласования с заказчиком.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          "dark-blue": "#1e2171", // Pantone 2755 C — заголовки, тёмные плашки
          blue: "#0075bf",        // Pantone 2935 C — основная кнопка, акценты
          "light-blue": "#68aee0",// Pantone 284 C — прогресс, трассы на карте
          red: "#ed1c24",         // Pantone 185 C — только акценты
          gray: "#c8c8c8",        // Cool Gray 3 C
          sky: "#73c6dc",         // Pantone 305 C
          "accent-blue": "#4061a6",// Pantone 2728 C — карточка ФАП 178
        },
        ink: { DEFAULT: "#0d1030", 2: "#4a4f63", 3: "#5b6170" },
        line: { DEFAULT: "#e3e6ee", 2: "#c3c8d4" },
        page: "#f4f6fa",          // фон страниц
        "blue-tint": "#eaf4fb",   // фон выбранного ответа, плашки иконок
        "neutral-tint": "#eef2f8",// чипы, фон ключа варианта ответа
        ok: "#0075bf",
        bad: { DEFAULT: "#c4121a", icon: "#e0444b", bg: "#fde8e9" },
        flag: "#e8a400",
      },
      fontFamily: {
        din: ['"DIN Pro"', "Arial", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",          // кнопка внутри поля
        control: "12px",    // поля, кнопки, плашки
        "card-mobile": "20px",
        card: "24px",       // карточки, формы
        "panel-mobile": "22px",
        panel: "28px",      // крупные синие панели
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,33,113,.06), 0 12px 40px rgba(30,33,113,.10)",
        "card-hover": "0 1px 2px rgba(30,33,113,.06), 0 18px 40px rgba(30,33,113,.16)",
        btn: "0 6px 18px rgba(0,117,191,.28)",
        focus: "0 0 0 4px rgba(0,117,191,.18)",
      },
      backgroundImage: {
        "brand-panel": "linear-gradient(160deg,#0075bf 0%,#1e2171 100%)",
        "fap-38": "linear-gradient(150deg,#0075bf,#1e2171)",
        "fap-178": "linear-gradient(150deg,#4061a6,#1e2171)",
        progress: "linear-gradient(90deg,#68aee0,#0075bf)",
      },
      height: { control: "50px", btn: "48px", "btn-lg": "52px" },
      transitionTimingFunction: { out: "cubic-bezier(.2,.8,.2,1)" },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
        "card-in": { from: { opacity: "0", transform: "translateY(28px) scale(.97)" }, to: { opacity: "1", transform: "none" } },
        "panel-in": { from: { opacity: "0", transform: "translateX(-24px) scale(.98)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        rise: "rise .5s cubic-bezier(.2,.8,.2,1) both",
        "card-in": "card-in .9s cubic-bezier(.2,.8,.2,1) both",
        "panel-in": "panel-in .9s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
};
