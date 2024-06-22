export function contactMailTemplate(
  name: string,
  email: string,
  message: string
) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Confirmation</title>
  <style>
    /* Reset default styles */
    body, html {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    /* Container */
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
    /* Header */
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .header h1 {
      color: #333;
    }
    /* Content */
    .content {
      margin-bottom: 20px;
    }
    /* Footer */
    .footer {
      text-align: center;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Contact Form Confirmation</h1>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>Thank you for contacting us. We have received your message and will respond to you as soon as possible.</p>
      <p>Here are the details of your message:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p>If you have any further questions or concerns, feel free to contact us again.</p>
      <p>Best regards,<br>Manpreet Singh</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;
}

export function adminContactMail(name: string, email: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Notification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f5f5f5;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h2 {
      color: #333333;
    }
    p {
      margin-bottom: 10px;
    }
    .details {
      margin-top: 20px;
      padding: 15px;
      background-color: #f0f0f0;
      border-radius: 6px;
    }
    .footer {
      margin-top: 20px;
      font-size: 0.8em;
      color: #666666;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Contact Form Notification</h2>
    <p>Hello,</p>
    
    <p>You have received a new contact from your website's contact form.</p>

    <div class="details">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Reason for Contact:</strong> ${message}</p>
    </div>

    <p>Please review this information at your earliest convenience and take appropriate action if necessary.</p>

    <p>If you have any questions or need further information, feel free to contact the person directly.</p>

    <div class="footer">
      <p>Best regards,</p>
      <p>Manpreet Singh</p>
    </div>
  </div>
</body>
</html>
`;
}
