# Usage


<!-- ### Deployment

Please check this [reading](./temp/deployment.md). 
-->

---
### Development

1. **Set Up Environment Variables**  
   In the backend, rename `.env.example` to `.env` and set the following values:
   ```env
   MONGO_URI_DEV=<your_dev_mongo_uri>
   MONGO_URI_PROD=<your_prod_mongo_uri>
   TEST_MONGO_URI=<your_test_mongo_uri>
   SECRET=<your_secret_key>
   ```

2. **Install Backend Dependencies**  
   Navigate to the `backend` directory and install the necessary dependencies:
   ```sh
   npm install
   npm run dev
   ```

3. **Install Frontend Dependencies & Start the App**  
   Navigate to the `frontend` directory, install dependencies, and start the application:
   ```sh
   npm install
   npm run dev
   ```

4. **Access the App**  
   Open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

### Production

1. **Backend**  
   When you deploy the backend to Render, add a new environment variable named `ALLOWED_ORIGIN` and set its value to the URL of your frontend (e.g., `https://your-frontend-url.onrender.com`).

2. **Frontend**  
   When you deploy the frontend to Render, add a new environment variable named `VITE_API_URL` and set its value to the URL of your backend (e.g., `https://your-backend-url.onrender.com`).

---

### Notes:

- **Backend Environment Variables**: Ensure that your `.env` file contains the correct MongoDB connection strings (`MONGO_URI_DEV`, `MONGO_URI_PROD`, `TEST_MONGO_URI`) and any secret keys you need (`SECRET`).
- **Frontend Environment Variables**: Make sure you configure the correct API URL (`VITE_API_URL`) in your frontend's environment variables when deploying to production.
- **CORS Configuration**: You can use `ALLOWED_ORIGIN` to control which frontend is allowed to communicate with the backend in production. 

