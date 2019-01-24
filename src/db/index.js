import { init } from "./crud";

const menu = init('menu');
const services = init('services');
const users = init('users');

export {
    menu,
    services,
    users,
}