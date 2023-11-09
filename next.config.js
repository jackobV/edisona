/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pocketbase-production-ab0e.up.railway.app',
                port: '',
                pathname: '/api/**',
            },
        ],
    },
}

module.exports = nextConfig
