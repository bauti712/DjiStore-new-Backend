import { Router, Request, Response } from "express";
const router: Router = Router();

router.get("/", (_, res) => {
    res.send("Si ves esto es porque funcionó la ruta y River sigue siendo el más grande");
});

let productoyMercancia = [
    { nombre: "producto1", modelo: "modelo1", precio: 1, paisOrigen: "pais1" },
    { nombre: "producto2", modelo: "modelo2", precio: 2, paisOrigen: "pais2" },
    { nombre: "producto3", modelo: "modelo3", precio: 3, paisOrigen: "pais3" },
];

//punto (1)
router.get("/productos", (_: Request, res: Response) => {
    res.send(productoyMercancia);
    
});
//punto (2)

export default router;

