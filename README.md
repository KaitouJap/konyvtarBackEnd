# Konyvtar BackEnd

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd konyvtarBackEnd

2. **Install dependecies:**
   ```bash
   npm install

3. **Install XAMPP:**
  - Download and install XAMPP from https://www.apachefriends.org/index.html.

4. **Start XAMPP SQL Server:**
  - Open XAMPP Control Panel.
  - Start the Apache and MySQL servers.

5. **Configure environment variables:**
  - Rename .env.example to .env .
  - Edit the .env file to set up the database connection string.

6. **Push the Prisma scheme to the database:**
  ```bash
  npx prisma db push

7. **Seed the database:**
  ```bash
  npx prisma db seed

8. **Start the development server:**
  ```bash
  npm run start:dev