import init from './common';
import { events } from "../constants";
import * as db from "../db";
import * as menu from "./menu";
import * as session from "./session";

const services = init(db.services, events.SERVICES);
const users = init(db.users, events.USERS);

export {
    menu,
    services,
    session,
    users,
}