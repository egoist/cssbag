import postcss from 'postcss'
import kebabCase from 'kebab-case'

// list of all plugins
const plugins = [
  {
    name: 'postcss-smart-import',
    namespace: 'smart-import',
    defaults: {}
  },
  {
    name: 'postcss-calc',
    namespace: 'calc',
    defaults: {}
  },
  {
    name: 'postcss-mixins',
    namespace: 'mixins',
    defaults: {}
  },
  {
    name: 'postcss-advanced-variables',
    namespace: 'advanced-variables',
    defaults: {}
  },
  {
    name: 'postcss-custom-media',
    namespace: 'custom-media',
    defaults: {}
  },
  {
    name: 'postcss-custom-properties',
    namespace: 'custom-properties',
    defaults: {}
  },
  {
    name: 'postcss-media-minmax',
    namespace: 'media-minmax',
    defaults: {}
  },
  {
    name: 'postcss-nested',
    namespace: 'nested',
    defaults: {}
  },
  {
    name: 'postcss-custom-selectors',
    namespace: 'custom-selectors',
    defaults: {}
  },
  {
    name: 'postcss-property-lookup',
    namespace: 'property-lookup',
    defaults: {
      logLevel: 'warn'
    }
  },
  {
    name: 'postcss-selector-matches',
    namespace: 'selector-matches',
    defaults: {}
  },
  {
    name: 'postcss-selector-not',
    namespace: 'selector-not',
    defaults: {}
  }
]

// load all plugins
export default postcss.plugin('cssbag', (options = {}) => {
  const instance = postcss()

  // for each plugin
  for (const plugin of plugins) {
    const userOptions = options[plugin.namespace] || options[kebabCase(plugin.namespace)]

    const pluginOptions = Object.assign({}, plugin.defaults, userOptions)

    if (!pluginOptions.disable) {
      instance.use(require(plugin.name)(pluginOptions))
    }
  }

  return instance
})

