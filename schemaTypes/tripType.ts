import {defineField, defineType} from 'sanity'
import {Rule} from 'sanity'

export const tripType = defineType({
  name: 'trip',
  title: 'Trip',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required')

    }),
    defineField({
      name: 'cost',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().error('Cost is required')

    }),
    defineField({
      name: 'shortDescription',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: Rule) => Rule.required().error('Short Description is required')

    }),
    defineField({
      name: 'longDescription',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: Rule) => Rule.required().error('Long Description is required')

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
      name: 'AreaReference',
      type: 'reference',
      to: [{type: 'eastAfricaAreaList'}],
    }),
    defineField({
      name: 'ActivityReference',
      type: 'reference',
      to: [{type: 'activityList'}],
    }),
    defineField({
      name: 'ClimbingAreaReference',
      type: 'reference',
      to: [{type: 'climbingAreaList'}],
    }),



  ],
})