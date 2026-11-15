# design-reference — утверждённый дизайн-эталон

Эталон, по которому верстается сайт. Правила — в `../CLAUDE.md`.

- `src/prototype.html` — утверждённый прототип: вход → тестирование (вариант «Карточки») → админ-панель (вариант «Аналитика»). Открыть в браузере: любой логин — тестирование, логин `admin` — админ-панель.
- `src/login.html` — страница входа отдельно, с картой авиатрасс и анимацией.
- `src/test-variants.html`, `src/admin-variants.html` — все варианты (A, B, C), включая отклонённые. Только для справки.
- `src/common.css` — общие токены и базовые стили; `src/fonts.css` — подключение DIN Pro из `../design/fonts`.
- `src/vendor/morphicons-element.iife.js` — сборка morphicons 2.0.2 (MIT) для прототипа. В Next.js используйте пакет `morphicons` напрямую.
- `tailwind/ertos-preset.js` — те же значения для Tailwind.
- `screenshots/` — снимки каждого экрана, 2x: `*-desktop.png` (1440×900) и `*-mobile.png` (390 px).

Иконки: Phosphor Icons (MIT), начертание fill. В прототипе пути иконок вшиты в константу `PH`, в проекте используйте `@phosphor-icons/react`.
