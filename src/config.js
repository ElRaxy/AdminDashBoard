const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    apiUrl: isDevelopment ? 'http://localhost:4000' : '/api',
};

export default config; 