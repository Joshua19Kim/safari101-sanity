import {defineField, defineType} from 'sanity'

export const climbingAreaListType = defineType({
  name: 'climbingAreaList',
  title: 'Climbing Area List',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
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