/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true
            }
        ]
    },
    reactStrictMode: true,
    images: {
        domains: ['hidropol-frontend.vercel.app']
    }
}

module.exports = nextConfig
