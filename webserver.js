'use strict'
import {Application} from "https://deno.land/x/oak@v6.3.1/mod.ts";
import {apiRoutes} from "./backend/api.js"
import { frontendFiles } from "./backend/fileserver.js";
import {
    viewEngine,
    engineFactory,
    adapterFactory,
} from "https://deno.land/x/view_engine@v1.5.0/mod.ts"

const app = new Application();

const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

app.use(viewEngine(oakAdapter, ejsEngine));

app.use(apiRoutes);
app.use(frontendFiles);

app.listen({port: 8000});