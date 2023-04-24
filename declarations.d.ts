declare module '*.png' {
    const value: any;
    export default value;
  }

interface ImportMeta {
  env: {
    VITE_PRIMARY_COLOR: string;
    // definir el resto de variables de entorno
  };
}