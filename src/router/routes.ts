import { Router, Request, Response } from "express";
const router: Router = Router();

router.get("/", (_, res) => {
    res.send("El server funca");
});


let productoyMercancia = [
    { nombre: "mate", modelo: "yerba", Precio: 90, paisOrigen: "Argentina" },
    { nombre: "cafe", modelo: "grano", Precio: 250, paisOrigen: "Chile" },
    { nombre: "te", modelo: "saco", Precio: 360, paisOrigen: "Peru" },
];

//punto (1)
router.get("/productos", (_: Request, res: Response) => {
    res.send(productoyMercancia);
    
});
//punto (2)
router.get("/productosMas100", (_: Request, res: Response) => {
    const productosFiltrados = productoyMercancia.filter(producto => producto.Precio > 100);
    res.send(productosFiltrados);
});

//punto(3)


//punto(4)
router.get('/productos/:modelo', (req: Request, res: Response) => {
    const {modelo}= req.params;
    const longitud = productoyMercancia.length;
    productoyMercancia = productoyMercancia.filter(producto => producto.modelo !== modelo);

    if (productoyMercancia.length === longitud){
        res.status(404).send ('No existe el producto');
        console.log('no existe elproducto');

    }else {
        res.send('producto eliminado exitosamente');
        console.log ('producto eliminado exitosamente')
    }
});



//punto(5)

router.get('/productos/porPais/:pais',(req: Request, res: Response) =>{
    const {pais}= req.params;
    const productoaEncontrar = productoyMercancia.find(productoyMercancia => productoyMercancia.paisOrigen === pais);

    if (productoaEncontrar ){
        res.json(productoaEncontrar);

    } else{
        res.status(404).send('no se encontro el producto');
    }

});

//punto(6)
router.get('/productos/porPrecio/:Precio',(req: Request, res: Response) =>{
    const {Precio}= req.params;
    const precioaEncontrar = productoyMercancia.filter(productoyMercancia =>productoyMercancia.Precio === parseInt(Precio));

    if (precioaEncontrar.length !=0 ){
        res.json(precioaEncontrar);

    } else{
        res.status(404).send('PRECIO NO ENCONTRADO');
    }

});

export default router;

//punto(7)

