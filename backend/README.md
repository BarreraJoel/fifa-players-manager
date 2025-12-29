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
> ⚠️ Si el backend corre dentro de Docker, ejecutá los comandos usando Docker.

```bash
docker exec -it fifa_manager_backend npm run db:migrate
```
> para deshacer las migraciones:
```bash
docker exec -it fifa_manager_backend npm run db:migrate:undo:all
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
docker exec -it fifa_manager_backend npm run db:seed
```
> para deshacer los seeders:
```bash
docker exec -it fifa_manager_backend npm run db:seed:rollback
```

### 📝 Migraciones + 🌱 Seeders en un solo paso (opcional)

```bash
npm run db:migrate:seed
```
> Crea las tablas y luego inserta los registros iniciales.

### 🐳 Migraciones + Seeders (Docker)
```bash
docker exec -it fifa_manager_backend npm run db:migrate:seed
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