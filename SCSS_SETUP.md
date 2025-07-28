# Configuración de SCSS para Carla Beauty

## Comandos disponibles

### Compilar SCSS una vez
```bash
npm run sass
```

### Compilar SCSS en modo watch (recomendado para desarrollo)
```bash
npm run sass:watch
```

### Compilar SCSS para producción (comprimido)
```bash
npm run sass:build
```

## Estructura de archivos SCSS

```
scss/
├── styles.scss          # Archivo principal que importa todos los componentes
└── components/
    ├── _reset.scss      # Reset de estilos
    ├── _common.scss     # Estilos comunes
    ├── _header.scss     # Estilos del header
    ├── _main.scss       # Estilos de la página principal
    ├── _services.scss   # Estilos de servicios
    ├── _top.scss        # Estilos de la sección top
    ├── _footer.scss     # Estilos del footer
    └── _portfolio.scss  # Estilos del portfolio
```

## Flujo de trabajo recomendado

1. **Para desarrollo**: Ejecuta `npm run sass:watch` en una terminal
2. **Edita los archivos SCSS** en la carpeta `scss/components/`
3. **Los cambios se compilan automáticamente** a `assets/css/styles.css`
4. **Para producción**: Ejecuta `npm run sass:build` antes de subir

## Notas importantes

- El archivo `assets/css/styles.css` se genera automáticamente, no lo edites directamente
- Siempre edita los archivos `.scss` en la carpeta `scss/`
- El archivo `styles.css.map` se genera automáticamente para debugging
- Si agregas nuevos archivos SCSS, asegúrate de importarlos en `styles.scss` 