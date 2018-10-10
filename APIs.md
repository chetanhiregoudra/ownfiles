# RESTFul APIS


Public APIs

We need below minimalist APIs, that should be mapped to lambdas through API Gateways. 

APIs shall be accessible from React Application. Personalized APIs to be secured, need user to be logged in in order to get the personal information like amount etc. Public API doesn't need user login, useful for users to access content without login



Public APIs

To get list of all categories from the server.


    GET /categories

To get specific category by resource id

    GET /api/categories/id

to get 

    GET /api/products 

GET /api/products?categoryId=1234

GET /api/products/?pagination parameter

GET /api/brands

GET /api/brands/id get specific brand information, list all gift cards

GET /api/brands?parameters..

GET /api/brands/giftcards       List al gift cards from brands

GET /api/brands/giftcards/id   Get one specic gift card from brand

GET /api/giftcard/id/comments    should have pagination support

GET /api/giftcard/id/rating   should return aggregated


/api/products
    POST  - update - create


Popular products/gifts {
    {
        number of times transaction from PRODUCTS TABLE (option 1)
        number of times transaction can be there in redis cache (option 2)
        number of times the products has been bought 
    }
}

**Recommended products/gifts {
    {
            by search history
            by using what other users are buying
            by transaction history
     }
}

--

Home
    GET /api/popular-products
    GET /api/popular-gifts
    * /images for banner?



-- 
# My Gifts

    SECURED
        token based authentication, logged in
        user could access only their specific information

    GET /api/my-gifts 
        return all the products (cross ref from transactionProducts where receiverID == user id)


--
Admin APIS

    creating new products, gift cards, retailers

    users with certain roles can post/delete/update the models