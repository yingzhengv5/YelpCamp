# YelpCamp

https://yelpcamp-hvd0.onrender.com/

YelpCamp is a web application that allows users to view, create, and review campgrounds. It includes user authentication, authorization, and basic CRUD functionalities for campgrounds and reviews.

## Features

-   **User Authentication:** Users can register, login, and logout securely using Passport.js with Local Strategy.
-   **Campground Management:** Registered users can create, edit, and delete campgrounds.
-   **Review System:** Registered users can leave reviews/ratings for campgrounds.
-   **Image Upload:** Campground images can be uploaded and deleted using Cloudinary for cloud storage.
-   **Geocoding:** Integrated with MapTiler for converting location strings into geographic coordinates.
-   **Error Handling:** Implemented both client-side and server-side validation to ensure secure user interactions.
-   **Security:** Includes security features like helmet middleware for HTTP headers and mongo-sanitize to prevent MongoDB injection attacks.
-   **Content Security Policy (CSP):** Implemented CSP using Helmet to enhance security against XSS attacks.

## Technologies Used

-   **Backend:** Node.js, Express.js, MongoDB (via Mongoose)
-   **Frontend:** HTML/CSS, Bootstrap 5, EJS (Embedded JavaScript templates)
-   **Authentication:** Passport.js with Local Strategy
-   **Image Storage:** Cloudinary for image upload and storage
-   **Mapping:** MapTiler for geocoding and map display

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yingzhengv5/YelpCamp.git
    cd YelpCamp
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Set up environment variables

-   Create a .env file in the root directory.
-   Add the following environment variables:
    ```bash
    DB_URL=<your_mongodb_url>
    SECRET=<your_session_secret>
    MAPTILER_API_KEY=<your_maptiler_api_key>
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
    CLOUDINARY_KEY=<your_cloudinary_key>
    CLOUDINARY_SECRET=<your_cloudinary_secret>
    ```

4. Run the application
    ```bash
    node app.js
    ```
5. View the application
   Open your web browser and go to http://localhost:4000 to see the application running.
   <br/>

    Thanks for reading :)
