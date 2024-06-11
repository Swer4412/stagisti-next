/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        scrollRestoration: true, //Perfetto, fa in modo che se passo da una pagina all'altra, lo scroll non si resetta
      },
};

export default nextConfig;
