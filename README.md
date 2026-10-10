# Store NG

Tienda en línea de práctica hecha con **Angular 20**: catálogo por categorías, detalle de producto y carrito, con renderizado en el servidor (SSR). Sirve para ejercitar las APIs modernas de Angular: signals, `resource`/`rxResource`, detección de cambios zoneless y pre-renderizado.

Los datos vienen de la API pública [Platzi Fake Store](https://fakeapi.platzi.com/) (`https://api.escuelajs.co`).

## Qué incluye

- **Catálogo** con filtro por categoría en la URL (`/category/:slug`) y carga con `rxResource`.
- **Detalle de producto** (`/product/:slug`) con galería de imágenes y meta tags dinámicos (título, descripción y Open Graph).
- **Carrito** en memoria con signals (`CartService`): contador en la cabecera, panel lateral y total.
- **Ubicaciones** (`/locations`): tiendas cercanas según la geolocalización del navegador.
- **About** (`/about`): página de pruebas con `input`/`model` signals, interoperabilidad RxJS ↔ signals y un reproductor de audio con WaveSurfer.
- **SSR y pre-renderizado** con `@angular/ssr`: `/about` se pre-renderiza, `/locations` se pinta solo en el cliente y el resto en el servidor.
- Imágenes con `NgOptimizedImage`, rutas con carga diferida y precarga.
- ESLint (`angular-eslint`), Prettier y Tailwind CSS.

## Cómo ejecutar

Requiere Node.js 20 o superior.

```bash
npm install
npm start
```

La aplicación queda en `http://localhost:4800`.

Para probar la versión con SSR:

```bash
npm run build
npm run serve:ssr:store-ng
```

## Scripts

| Comando | Qué hace |
|---|---|
| `npm start` | Servidor de desarrollo en el puerto 4800 |
| `npm run build` | Compila para producción en `dist/` (navegador y servidor) |
| `npm run serve:ssr:store-ng` | Sirve la compilación con SSR |
| `npm test` | Tests unitarios (Karma y Jasmine) |
| `npm run lint` | ESLint |
| `npm run format` | Formatea el código con Prettier |

## Estructura

```
src/app/
  domains/
    products/   Catálogo, tarjeta de producto y detalle
    info/       About, ubicaciones, página 404 y reproductor de audio
    shared/     Cabecera, layout, modelos, pipes y servicios (carrito, productos, categorías, meta tags)
  app.routes.ts          Rutas del navegador
  app.routes.server.ts   Modo de renderizado de cada ruta
```

[`APUNTES.md`](APUNTES.md) reúne las notas tomadas durante el desarrollo.

## Limitaciones

- El carrito no se guarda: se pierde al recargar la página.
- No hay checkout ni cuentas de usuario.
- La URL usada en los meta tags (`domain` en `src/environments`) apunta a `localhost`; hay que cambiarla al desplegar.

## Autor

Leonardo Medina — [github.com/leomedinadev](https://github.com/leomedinadev)
