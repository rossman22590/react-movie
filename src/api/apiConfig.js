const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6e0caa523cc2fd7a4503bc85382a59cc',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;