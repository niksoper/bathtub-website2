import { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

const rootPath = (...filePath: string[]) => resolve(__dirname, '..', ...filePath);

const paths = {
  googleServiceAccountKey: rootPath('.secrets', 'bathtub-gatsby-sa-key.json'),
  googleDriveImages: rootPath('static', 'img'),
  pages: rootPath('src/pages'),
};

const config: GatsbyConfig = {
  siteMetadata: {
    siteName: `BathTub Orchestra`,
    siteUrl: `https://bathtuborchestra.com`,
    companyName: `BathTub Orchestra`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        codegen: true,
        // Don't move this inside src/, it'll cause a circular callback
        fileName: `types/graphql-types.ts`,
        documentPaths: ['src/**/*.tsx'],
      },
    },
    {
      resolve: '@fs/gatsby-plugin-drive',
      options: {
        folderId: '1o00sdoWLN5Q3fYEfloS3gOL4jTyJG2lX',
        keyFile: paths.googleServiceAccountKey,
        destination: paths.googleDriveImages,
        exportGDocs: false,
        exportMimeType: 'image/jpeg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: paths.pages,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: paths.googleDriveImages,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024 },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};

export default config;
