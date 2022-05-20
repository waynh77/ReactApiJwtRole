import Express from "express";
import { getusers,Register,Login,Logout, getuserbyid, getuserbyname, UpdateUser, DeleteUser, AddUser, UpdatePassword } from "../controllers/Users.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { AddProduk, DeleteProduk, getProduk, getProdukbyid, getProdukbyname, UpdateProduk } from "../controllers/Produk.js";
import { AddRoles, DeleteRoles, getRoles, getRolesbyid, getRolesbyname, UpdateRoles } from "../controllers/Roles.js";
const router= Express.Router();

router.get('/users',verifyToken,getusers);
router.get('/users/:id',verifyToken,getuserbyid);
router.get('/userbyname',verifyToken,getuserbyname);
router.post('/users',Register);
router.post('/adduser',verifyToken,AddUser);
router.put('/users/:id',verifyToken,UpdateUser);
router.put('/resetpassword/:id',verifyToken,UpdatePassword);
router.delete('/users/:id',verifyToken,DeleteUser);
router.post('/login',Login);
router.get('/token',refreshToken);
router.delete('/logout',Logout);

//route produk
router.get('/produk',verifyToken,getProduk);
router.get('/produk/:id',verifyToken,getProdukbyid);
router.get('/produkbyname',verifyToken,getProdukbyname);
router.post('/produk',verifyToken,AddProduk);
router.put('/produk/:id',verifyToken,UpdateProduk);
router.delete('/produk/:id',verifyToken,DeleteProduk);

//route roles
router.get('/roles',getRoles);
router.get('/roles/:id',getRolesbyid);
router.get('/rolesbyname',getRolesbyname);
router.post('/roles',verifyToken,AddRoles);
router.put('/roles/:id',verifyToken,UpdateRoles);
router.delete('/roles/:id',verifyToken,DeleteRoles);

export default router;