import { Request, Response } from 'express';

let productoyMercancia = [
    { nombre: "mate", modelo: "yerba", Precio: 90, paisOrigen: "Argentina" },
    { nombre: "cafe", modelo: "grano", Precio: 250, paisOrigen: "Chile" },
    { nombre: "te", modelo: "saco", Precio: 360, paisOrigen: "Peru" },
];

export function getProducts(_,res: Response) {
    res.send(productoyMercancia)
}