/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-quill$': 'react-quill/dist/react-quill.js',
        }
        return config
    },
}

module.exports = nextConfig