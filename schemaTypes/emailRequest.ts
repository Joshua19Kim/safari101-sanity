import {defineField, defineType} from 'sanity'

export const emailRequest = defineType({
  name: 'emailRequest',
  title: 'Email Request',
  type: 'document',
  preview: {
    select: {
      title: 'clientEmail',
      subtitle: 'createdAt'
    }
  },
  fields: [
    defineField({
      name: 'adults',
      title: 'Adult',
      type: 'string',
    }),
    defineField({
      name: 'children',
      title: 'Children',
      type: 'string',
    }),
    defineField({
      name: 'clientEmail',
      title: 'Client Email',
      type: 'string',
    }),
    defineField({
      name: 'arrivalDate',
      title: 'Arrival Date',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'selectedOptions',
      title: 'Selected Options',
      type: 'string',
    }),
    defineField({
      name: 'selectedTripName',
      title: 'Selected Trip Name by User',
      type: 'string',
    }),
    defineField({
      name: 'selectedTripPrice',
      title: 'Selected Trip Price by User',
      type: 'string',
    }),
    defineField({
      name: 'selectedTripDescription',
      title: 'Selected Trip Description by User',
      type: 'string',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'string',
    }),
    defineField({
      name: 'emailSent',
      title: 'Email Sent',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})