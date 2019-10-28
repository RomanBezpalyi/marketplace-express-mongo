const Product = require('../../db/schemas/product')

const productsRoute = (request, response) => {
    const category = request.query.category;
    response.removeHeader('X-Powered-By');
    const sendResponse = (product) => {
        if (!product || product.length === 0) {
            sendError()
        } else {
            response.status(200);
            response.json({
                status: 'success',
                product
            });
        }
    };
    const sendError = () => {
        response.status(404);
        response.json({
            status: 'not found'
        });
    };
    const findProduct = Product.find({
        categories: category
    });

    findProduct
        .then(sendResponse)
        .catch(err => {
            console.log(err.message);
            sendError();
        });
};

module.exports = productsRoute;