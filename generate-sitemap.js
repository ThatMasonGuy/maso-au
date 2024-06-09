import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, readFileSync } from 'fs';
import path, { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { transformSync } from '@babel/core';

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve path aliases
const resolvePathAlias = (importPath) => {
  if (importPath.startsWith('@/')) {
    return resolve(__dirname, 'src', importPath.slice(2));
  }
  return importPath;
};

// Read and preprocess the router file
const preprocessRouterFile = (filePath) => {
  const fileContent = readFileSync(filePath, 'utf-8');
  const transformedContent = fileContent.replace(/@\/([^';]+)/g, (_, aliasPath) => {
    return resolvePathAlias(`@/${aliasPath}`);
  });

  return transformedContent;
};

// Resolve the router path
const routerPath = resolve(__dirname, 'src/router.js');
const preprocessedRouter = preprocessRouterFile(routerPath);

// Write the preprocessed router content to a temporary file
const tempRouterPath = resolve(__dirname, 'temp-router.js');
require('fs').writeFileSync(tempRouterPath, preprocessedRouter, 'utf-8');

// Import the routes from the temporary file
const { routes } = await import(tempRouterPath);

// Remove the temporary file
require('fs').unlinkSync(tempRouterPath);

const hostname = 'https://maso.au';
const sitemap = new SitemapStream({ hostname });

const writeStream = createWriteStream(join(process.cwd(), 'dist', 'sitemap.xml'));
sitemap.pipe(writeStream);

const formatRoutes = (routes, baseUrl = '') => {
  return routes.flatMap(route => {
    const path = route.path.startsWith('/') ? route.path : `/${route.path}`;
    const fullPath = `${baseUrl}${path}`.replace('//', '/');
    const formattedRoute = {
      url: fullPath,
      changefreq: 'monthly',
      priority: 0.5,
    };
    if (route.children) {
      return [formattedRoute, ...formatRoutes(route.children, fullPath)];
    }
    return formattedRoute;
  });
};

const pages = formatRoutes(routes).map(route => {
  if (route.url === '/') {
    return { ...route, changefreq: 'daily', priority: 1.0 };
  }
  return route;
});

pages.forEach(page => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('Sitemap created successfully!'))
  .catch(err => console.error('Error creating sitemap:', err));
