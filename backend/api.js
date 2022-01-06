'use strict'
import { Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { ProductService } from './product-service.js';

const router = new Router();
const produtService = new ProductService();

router
    .get("/", (context) => {
        context.render("./frontend/index.ejs", { products: ProductService.getProducts() })
    })
    .delete("/api/product/delete/:id", context => {
        taskService.removeTask(parseInt(context.params["id"]));
    })
    .post("/api/product/add/:name", context => {
        taskService.addTask(String(context.params["name"]));
    })

export const apiRoutes = router.routes();