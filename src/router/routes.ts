import { Router, Request, Response } from "express";
import { getProducts } from '../controlers/controlers';
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
// router.get("/productos", (_: Request, res: Response) => {
//     res.send(productoyMercancia);
    
// });

router.get("/productos", getProducts);

//punto (2)
router.get("/productosMas100", (_: Request, res: Response) => {
    const productosFiltrados = productoyMercancia.filter(producto => producto.Precio > 100);
    res.send(productosFiltrados);
});

//punto(3)
router.put("/actualizarProducto/:producto", (req, res) => {
    const { nombre, nuevoProducto } = req.body;
    const indiceProducto = productoyMercancia.findIndex(producto => producto.nombre === nombre);
    if (indiceProducto === -1) {
        console.log("Producto no encontrado.");
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    productoyMercancia[indiceProducto] = nuevoProducto;
    console.log("Producto actualizado exitosamente.");
    res.status(200).json({ mensaje: "Producto actualizado exitosamente" });
});



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



//punto(7)
router.post ('/productos/agregar', (req: Request, res: Response)=>{
    const {nombre, modelo, Precio, paisOrigen} = req.body;
    if (nombre && modelo && Precio && paisOrigen) {
        const productoNuevo ={ nombre, modelo, Precio,paisOrigen};
        productoyMercancia.push(productoNuevo);
        res.send ("el producto fue creado");
    }else {
        res.status(404).send("no se encontro el elemento");
    }

});

export default router;

