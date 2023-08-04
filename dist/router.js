"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
/**Products */
router.get('/product', function (req, res) {
    res.json({ message: "Hello" });
});
router.get('/product/:id', function () { });
router.put('/product/:id', function () { });
router.post('/product/:id', function () { });
router.delete('/product/:id', function () { });
/**Update */
router.get('/updatepoint', function () { });
router.get('/updatepoint/:id', function () { });
router.put('/updatepoint/:id', function () { });
router.post('/updatepoint/:id', function () { });
router.delete('/updatepoint/:id', function () { });
exports.default = router;
//# sourceMappingURL=router.js.map