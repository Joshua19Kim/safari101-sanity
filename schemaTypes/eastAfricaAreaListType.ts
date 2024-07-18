import {defineField, defineType} from 'sanity'
import {Rule} from 'sanity'

export const eastAfricaAreaListType = defineType({
  name: 'eastAfricaAreaList',
  title: 'East Africa Area List',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required')
    }),
    defineField({
      name: 'shortDescription',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      validation: (Rule: Rule) => Rule.required().error('Main image is required')

    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
})