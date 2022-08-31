const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '79aa5b943a058ca5aa55f77137ef4058',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`
}

export default apiConfig