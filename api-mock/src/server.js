const jsonServer = require("json-server");
const auth = require('json-server-auth');
const cors = require('cors');


const app = jsonServer.create();
const router = jsonServer.router('./src/data/db.json');
const middlewares = jsonServer.defaults();

app.db = router.db;

app.use(cors());
app.use(middlewares);
app.use(jsonServer.bodyParser);

const rules = auth.rewriter({
    users: 600,
    orders: 660,
    cart: 660,
    products: 444,
    categories: 444,
    saleProducts: 660,
    notifications: 660,
});

app.use(rules);
app.use(auth);
app.use(router);

console.log('Rotas disponiveis')
router.db.getState();


app.listen(3001, () => {
    console.log('rodando...')
})