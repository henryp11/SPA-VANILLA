//Utilizado en terminal npm run start se ejecuta la aplicación automaticamente en el navegador
import router from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);