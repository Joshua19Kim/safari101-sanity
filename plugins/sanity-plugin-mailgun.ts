// plugins/sanity-plugin-mailgun.ts
import { definePlugin } from 'sanity'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

interface EmailPayload {
  to: string
  from: string
  subject: string
  text: string
}

const mailgunPlugin = definePlugin({
  name: 'mailgun',
  document: {
    // This adds a 'Send Email' action in the document pane
    actions: (prev, { schema }) => {
      // Only add the action for document types that should have email functionality
      if (schema.name === 'contact' || schema.name === 'newsletter') {
        return [
          ...prev,
          {
            name: 'send-email',
            title: 'Send Email',
            action: async (props) => {
              const { draft, published } = props
              const doc = draft || published

              if (!doc) {
                return
              }

              const mailgun = new Mailgun(formData)
              const mg = mailgun.client({
                username: 'api',
                key: process.env.SANITY_STUDIO_MAILGUN_API_KEY || ''
              })

              const emailPayload: EmailPayload = {
                to: doc.email,
                from: 'Your Name <you@yourdomain.com>',
                subject: 'Test Email from Sanity',
                text: 'This is a test email sent from Sanity using Mailgun'
              }

              try {
                const result = await mg.messages.create(
                  process.env.SANITY_STUDIO_MAILGUN_DOMAIN || '',
                  emailPayload
                )
                console.log('Email sent successfully:', result)
                return { success: true }
              } catch (error) {
                console.error('Failed to send email:', error)
                return { success: false, error }
              }
            }
          }
        ]
      }
      return prev
    }
  }
})

export default mailgunPlugin