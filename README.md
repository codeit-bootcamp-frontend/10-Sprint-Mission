# skill

React + Html + CSS + JavaScript
Retrieving json data from the backend server using axios.

# 배포링크

https://leafy-profiterole-1b850b.netlify.app/

# 1.mainpage

After receiving product json data with axios, it retrieves product photo, name, price, and number of likes information and arranges them as shown on the screen. Then, when you click on the product, the detailed screen appears.

# 2.Sort

Sort by latest and likes. Set parameters in backend to retrieve by latest or likes and then arrange. Registering a product could not be set because backend function is not provided.

# 3.Detialpage

Clicking on the product will take you to the details screen. This is also arranged by fetching JSON data from the backend API server. And the comments are also fetched from the backend API server.

# 4.Product Registration

When you click the second-hand market navigation button, the product registration page appears. You can register an image, enter the product name, product introduction, sales price, and tags. After entering the tag and pressing Enter, the tag below appears. When all inputs are completed, the background color of the registration button in the upper right corner changes.

# 5.Pagination

Below is the pagination. When you click on the number button, it is passed as a url parameter, and the corresponding url json data is fetched, and then the products are arranged again. Once you go through all the pages, it will not go any further. For example, if there are 139 products, a total of 14 pages will be composed, and it will not go beyond page 14.
