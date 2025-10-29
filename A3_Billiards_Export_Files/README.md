# A3 Billiards Academy - Booking and WhatsApp Integration

This project allows customers to book snooker tables, confirm payments with a screenshot, and send automatic WhatsApp alerts via Twilio API.

## Files Included
- index.html
- vercel.json
- /api/send-whatsapp.js
- /api/send-whatsapp-status.js

## Deployment
1. Push all files to a new GitHub repository.
2. Import the repo into Vercel.
3. Add these Environment Variables:
   - TWILIO_ACCOUNT_SID
   - TWILIO_AUTH_TOKEN
   - TWILIO_WHATSAPP_FROM
   - ADMIN_WHATSAPP_TO
4. Deploy. You’ll get booking notifications on WhatsApp automatically.
