export function testimonialsMail(name: string): string {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Testimonial Submission Confirmation</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                padding-bottom: 20px;
            }
            .header h1 {
                margin: 10px 0;
                font-size: 24px;
                color: #333333;
            }
            .content {
                line-height: 1.6;
                color: #666666;
            }
            .content p {
                margin: 10px 0;
            }
            .content .highlight {
                color: #333333;
            }
            .footer {
                margin-top: 20px;
                text-align: center;
                color: #aaaaaa;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You for Your Testimonial!</h1>
            </div>
            <div class="content">
                <p>Hello <span class="highlight">${name}</span>,</p>
                <p>Thank you for taking the time to submit a testimonial about your experience working with us. We have received your submission and it is currently under review for verification.</p>
                <p>Your feedback is important to us and helps us to maintain a high standard of service. Once your testimonial is verified, it will be added to our website.</p>
                <p>We appreciate your support and look forward to sharing your feedback with others.</p>
                <p>Best regards,</p>
                <p>Manpreet Singh</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Manpreet's Portfolio. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

export function adminTestimonialsMail(
  name: string,
  company: string,
  review: string
) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testimonial Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding-bottom: 20px;
        }
        .header h1 {
            margin: 10px 0;
            font-size: 24px;
            color: #333333;
        }
        .content {
            line-height: 1.6;
            color: #666666;
        }
        .content p {
            margin: 10px 0;
        }
        .content .highlight {
            color: #333333;
            font-weight: bold;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            color: #aaaaaa;
            font-size: 12px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px;
            color: #ffffff;
            background-color: #28a745;
            text-decoration: none;
            border-radius: 5px;
        }
        .button.deny {
            background-color: #dc3545;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Testimonial Submission</h1>
        </div>
        <div class="content">
            <p>Hello Admin,</p>
            <p>A new testimonial has been submitted. Please review the details below:</p>
            <p><span class="highlight">Name:</span> ${name}</p>
            <p><span class="highlight">Company:</span> ${company}</p>
            <p><span class="highlight">Review:</span></p>
            <p>${review}</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Manpreet's Portfolio. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
}
