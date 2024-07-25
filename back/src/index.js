import 'reflect-metadata';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

// ... el resto de tu código de inicialización de la aplicación

