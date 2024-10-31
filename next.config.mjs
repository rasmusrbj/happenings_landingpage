/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['happenings.dk', 'share.happenings.dk', 'happenings.s3.fr-par.scw.cloud'],
    },
    experimental: {
        serverActions: true,
    },
}


export default nextConfig;
