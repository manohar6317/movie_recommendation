# Movie Recommend

**Short Description:** 

This movie recommendation engine, developed using the MERN stack, includes a Netflix-inspired UI.

Browse personalized suggestions with a familiar and intuitive interface.

Ensure your MongoDB URI is correctly configured in the .env file to get started.

## Installation Instructions

Follow these steps to set up the project on your local machine:

**Step 1: Download the zip file.**

Download the repository as a ZIP file.

**Step 2: Remove the `node_modules` from the parent directory.**

If you have a `node_modules` folder in the parent directory of this project, please remove it. This ensures a clean installation of dependencies for this specific project.

**Step 3: Navigate to the parent directory in your terminal and run the build command.**

Open your terminal or command prompt, navigate to the parent directory of this project, and execute the following command:

```bash
npm run build
```

**Step 3: Run the start command. **

After the build process is complete, in the same parent directory, run the following command to start the application:

```bash
npm run start
```

## Important Note

* **MongoDB Setup:** You need to create an account on MongoDB Atlas (or set up a local MongoDB instance).
* **`.env` Configuration:** Locate the `.env` file in your project's root directory. Open this file and replace the placeholder value for `MONGO_URI` with the actual connection string you obtain from your MongoDB setup. This is crucial for the application to connect to your database.
