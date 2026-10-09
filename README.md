# Store NG

Base para una tienda en línea con **Angular 20**. Por ahora contiene solo la configuración del proyecto: todavía no tiene pantallas ni lógica de tienda.

## Qué incluye

- Angular 20 con componentes standalone y detección de cambios **zoneless** (`provideZonelessChangeDetection`).
- **ESLint** (`angular-eslint`) para TypeScript y plantillas, con reglas de accesibilidad.
- **Prettier** integrado con ESLint.
- Tests con Karma y Jasmine.
- [`APUNTES.md`](APUNTES.md): notas de cómo se configuraron ESLint y Prettier.

## Cómo ejecutar

Requiere Node.js 20 o superior.

```bash
npm install
npm start
```

La aplicación queda en `http://localhost:4800`.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm start` | Servidor de desarrollo en el puerto 4800 |
| `npm run build` | Compila para producción en `dist/` |
| `npm test` | Tests unitarios |
| `npm run lint` | ESLint |
| `npm run format` | Formatea el código con Prettier |

## Pendiente

- Catálogo de productos, detalle y carrito.
- Reemplazar la página de inicio de ejemplo del CLI.
