### 🚀 Guía de instalación y ejecución

---

### 🔧 Requisitos previos
1. **Servidor MySQL**: instalado y en ejecución
2. **Node.js**: v18 o superior
3. **npm**: Gestor de paquetes
4. **Docker & Docker Compose** (opcional)

---

### 📦 Instalación

#### 1. Clonar el repositorio
```bash
git clone https://github.com/BarreraJoel/fifa-players-manager
cd backend
```

#### 2. Instalar dependencias
```bash
npm install
```

---

### 📝 Migraciones (tablas)

```bash
npm run db:migrate
```
> para deshacer las migraciones:

```bash
npm run db:migrate:undo:all
```

### 🐳 Migraciones (Docker)

```bash
npm run db:migrate:docker
```
> para deshacer las migraciones:
```bash
npm run db:migrate:docker:undo:all
```

### 🌱 Seeders (registros)

```bash
npm run db:seed
```

> para deshacer los seeders:

```bash
npm run db:seed:rollback
```

### 🐳 Seeders (Docker)
```bash
npm run db:seed:docker
```
> para deshacer los seeders:
```bash
npm run db:seed:docker:rollback
```

---

### 🧪 Desarrollo
Ejecutar el servidor en modo desarrollo:
```bash
npm run dev
```
> Usa nodemon + ts-node para recarga automática.

---

### 📦 Build

Generar archivos compilados:
```bash
npm run build
```

---

### ▶️ Producción

Ejecutar la aplicación compilada:
```bash
npm start
```