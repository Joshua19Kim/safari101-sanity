import {defineField, defineType} from 'sanity'
import {Rule} from 'sanity'


export const activityListType = defineType({
  name: 'activityList',
  title: 'Activity List',
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
      validation: (Rule: Rule) => Rule.required().error('Short description is required')
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
      name: 'url',
      type: 'url',
    }),
  ],
})