import {defineField, defineType} from 'sanity'
import {Rule} from 'sanity'


export const climbingType = defineType({
  name: 'climbing',
  title: 'Climbing',
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
      name: 'climbingArea',
      title: 'Climbing Area',
      type: 'string',
      options: {
        list: [
          { title: 'Kilimanjaro', value: 'kilimanjaro' },
          { title: 'Oldnoyo Lengai', value: 'oldnoyoLengai' },
          { title: 'Meru', value: 'meru' },
        ]
      },
      validation: (Rule: Rule) => Rule.required().error('Climbing Area is required')
    }),

    defineField({
      name: 'duration',
      title: 'Duration (days)',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required()
          .min(1)
          .error('Duration must be at least 1 day')
    }),
    defineField({
      name: 'tripType',
      title: 'Trip Type',
      type: 'array',
      of: [{
        type: 'string',
        options: {
          list: [
            { title: 'Safari', value: 'safari' },
            { title: 'Zanzibar', value: 'zanzibar' },
            { title: 'Honeymoon', value: 'honeymoon' },
            { title: 'Family-friendly', value: 'familyFriendly' },
            { title: 'Diamond Luxury', value: 'diamondLuxury' },
            { title: 'Kilimanjaro', value: 'kilimanjaro' }
          ]
        }
      }],
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
  ],
})