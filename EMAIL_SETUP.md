# Email Setup Guide

The contact form is configured to send emails to **tamir@angeldiamond.com**. There are two options for implementation:

## Option 1: Web3Forms (Recommended - Free & Easy)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up and get your free access key
3. Open `src/components/Contact.jsx`
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key
5. The form will now send emails directly to tamir@angeldiamond.com

**Pros:**
- Free for up to 250 submissions/month
- No backend needed
- Spam protection included
- Works immediately

## Option 2: Custom Backend API

If you prefer to use your own backend:

1. Create an API endpoint that accepts POST requests
2. Update the fetch URL in `src/components/Contact.jsx` from:
   ```javascript
   'https://api.web3forms.com/submit'
   ```
   to your API endpoint:
   ```javascript
   'https://your-api.com/contact'
   ```

3. The form sends the following data:
   ```javascript
   {
     userType: string,
     name: string,
     email: string,
     message: string
   }
   ```

## Current Fallback

If the API call fails, the form automatically opens the user's email client with a pre-filled email to tamir@angeldiamond.com. This ensures no message is lost.

## Testing

1. Fill out the form on your local site
2. Submit it
3. Check that you receive the email at tamir@angeldiamond.com

## Security Notes

- All form fields are validated on the client side
- Server-side validation should also be implemented
- Consider adding reCAPTCHA for production use
- Rate limiting is recommended to prevent spam
