import {defineField, defineType} from 'sanity'
import {Rule} from 'sanity'

export const eastAfricaType = defineType({
  name: 'eastAfrica',
  title: 'East Africa',
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
      name: 'tripCategory',
      title: 'Trip Category',
      type: 'string',
      options: {
        list: [
          { title: 'Uganda', value: 'uganda' },
          { title: 'Rwanda', value: 'rwanda' },
          { title: 'Kenya', value: 'kenya' },
          { title: 'Tanzania', value: 'tanzania' },
        ]
      },
      validation: (Rule: Rule) => Rule.required().error('Region is required')
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