import twilio from "twilio";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, table, date, hours, amount, paymentMode } = req.body;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.ADMIN_WHATSAPP_TO,
      body: `🎱 New Booking at A3 Billiards Academy\nName: ${name}\nTable: ${table}\nDate/Time: ${date}\nHours: ${hours}\nAmount: ₹${amount}\nPayment Mode: ${paymentMode}`,
    });

    res.status(200).json({ success: true, sid: message.sid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
