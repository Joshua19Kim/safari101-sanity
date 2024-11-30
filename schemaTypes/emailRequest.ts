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
      validation: Rule => Rule.custom((adults) => {
        if (!adults || parseInt(adults) <= 0) {
          return 'There should be at least one adult'
        }
        return true
      })
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
      validation: Rule => Rule.custom((email) => {
        if (!email || email === "safari101@tour.com") {
          return 'Valid email is required'
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          return 'Please enter a valid email'
        }
        return true
      })
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
      validation: Rule => Rule.custom((description) => {
        if (!description || description === "Please describe your plan!") {
          return 'Please describe your trip for a request'
        }
        return true
      })
    }),
    defineField({
      name: 'selectedOptions',
      title: 'Selected Options',
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