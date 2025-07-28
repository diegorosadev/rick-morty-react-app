# rick-morty-react-app
Aplicação React com TypeScript e Material UI para explorar personagens da série Rick and Morty via API pública.

| Camada     | Stack                                                            |
| ---------- | ---------------------------------------------------------------- |
| ⚙️ Core    | Vite + React 18 + TypeScript                                     |
| 🎨 UI      | Material UI (MUI)                                                |
| 🌐 API     | TanStack Query (`@tanstack/react-query`)                         |
| 🧠 Estado  | Zustand (gerenciar favoritos, contador, etc)                     |
| 🧭 Rotas   | React Router DOM                                                 |
| 📦 Estilos | SCSS (ou pode usar o `sx` do MUI se quiser 100% com Material UI) |
| 💅 Extra   | Axios (requisições) + React Hook Form (se usar forms de filtro)  |
| 🚀 Deploy  | Vercel (fácil e rápido)                                          |


# UI + estilo
npm install @mui/material @emotion/react @emotion/styled

# Rotas
npm install react-router-dom

# API requests
npm install axios

# TanStack Query
npm install @tanstack/react-query

# Gerenciador de estado
npm install zustand

# Formulários (opcional, se for usar filtros com validação)
npm install react-hook-form

src/
├── components/         # Cards, filtros, header, etc
├── pages/              # Home, Detalhes, Favoritos
├── store/              # Zustand (ex: useFavoritesStore.ts)
├── services/           # api.ts, hooks de TanStack Query
├── styles/             # SCSS globais (se usar)
├── App.tsx
├── main.tsx

