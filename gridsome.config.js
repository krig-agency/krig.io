// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
  .loader('style-resources-loader')
  .options({
    patterns: [
      path.resolve(__dirname, './src/assets/sass/_globals.sass'),
      // or if you use scss
      path.resolve(__dirname, './src/assets/sass/_globals.scss'),
      // you can also use a glob if you'd prefer
      path.resolve(__dirname, './src/assets/sass/*.sass'),
      // or scss
      path.resolve(__dirname, './src/assets/sass/*.scss'),
    ],
  })
}

module.exports = {

  siteName: 'KRIG',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: '@zefman/gridsome-source-instagram',
      options: {
        username: 'krig_agency', // Instagram username
        typeName: 'InstagramPhoto' // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`
      }
    },
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
}
