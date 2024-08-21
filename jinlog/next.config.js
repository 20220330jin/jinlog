/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React's Strict Mode for improved error handling and performance
    reactStrictMode: true,

    // Custom webpack configuration
    webpack: (config) => {
        // Add a new rule to the existing webpack rules
        config.module.rules.push({
            // This rule will apply to all files that end with .css
            test: /\.css$/i,

            // Use these loaders to process CSS files
            use: [
                // "style-loader" injects CSS into the DOM
                "style-loader",
                // "css-loader" resolves @import and url() like import/require()
                "css-loader"
            ],
        });

        // Return the modified config
        return config;
    },
}

// Export the Next.js configuration
module.exports = nextConfig