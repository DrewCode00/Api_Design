import { Router } from "express";
import { body, validationResult } from "express-validator";
import { getOneProduct, getProducts } from "./src/handlers/product";
import { updateUpdate } from "./src/handlers/update";
import { handleInputErrors } from "./src/modules/middleware";

const router =Router()

/**Products */
router.get('/product', getProducts) 
    
router.get('/product/:id', ()=> {})
router.put('/product/:id', body('name').isString(),handleInputErrors,(req, res)=> {
    const errors = validationResult(req);

})
router.post('/product/:id',body('name').isString(),handleInputErrors,(req, res)=> {

})
router.delete('/product/:id', ()=> {})



/**Update */


router.get('/update', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id', 
body('title').optional(),
body('body').optional(), 
body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
body('version').optional(), 
updateUpdate

)
router.post('/update',
body('title').exists().isString(),
body('body').exists().isString(), 
body('productId').exists().isString(),
createUpdate
)
router.delete('/update/:id', deleteUpdate)





/**Update Point */


/**Update */


router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', ()=> {})
router.put('/updatepoint/:id', 
body('name').optional().isString(),
body('description').optional().isString(),
 () => {})




router.post('/update',
body('name').optional().isString(),
body('description').optional().isString(),
body('updateId').exists().isString(),
 () => {})
router.delete('/updatepoint/:id', ()=> {})

export default router