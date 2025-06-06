const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    apiUrl: isDevelopment 
        ? 'http://localhost:4000'
        : 'https://admin-dashboard-api-nine.vercel.app' // Aquí pondremos la URL de tu API cuando la despleguemos
};

export default config; 