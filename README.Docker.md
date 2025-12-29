# 🐳 Docker Setup

Docker se utiliza en este proyecto exclusivamente para levantar el entorno
de desarrollo de forma reproducible.

## 📦 Requisitos

- Docker Desktop (v4+)
- Docker Compose v2
- Node.js 18+

## 🧩 Servicios

| Servicio | Descripción | Puerto |
|--------|------------|--------|
| frontend | Angular  | 4200 |
| backend | Node.js | 3000 |
| db | MySQL 8 | 3306 |

## 🔐 Variables de entorno

El proyecto utiliza un archivo `.env` a nivel raíz.

```bash
cp .env.example .env
```

---

## 🚀 Primer arranque

```bash
docker compose up --build
```

---

## Flujo de desarrollo diario

Levantar servicios:
```bash
docker compose up
```

Detener servicios:
```bash
docker compose down
```

## 🔌 Conexiones

### Backend
http://localhost:3000

### Frontend
http://localhost:4200
