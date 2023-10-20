import {Router} from "express";

const router: Router = Router();

router.get ("/", (_,res) =>{

    res.send ("si ves esto es porque funciono la muda y river sigue siendo el mas grande");
});

export default router