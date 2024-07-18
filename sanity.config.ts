import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'safari101',

  projectId: 'oeam3q7c',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),


  ],

  schema: {
    types: schemaTypes,
  },
})

