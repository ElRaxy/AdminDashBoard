const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    apiUrl: isDevelopment ? 'http://localhost:4000' : 'https://admin-dash-board-alex.vercel.app/api',
};

export default config; 