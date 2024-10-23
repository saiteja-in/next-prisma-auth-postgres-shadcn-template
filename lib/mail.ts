import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

// export const sendTwoFactorTokenEmail = async (
//   email: string,
//   token: string
// ) => {
//   await resend.emails.send({
//     from: "mail@auth-masterclass-tutorial.com",
//     to: email,
//     subject: "2FA Code",
//     html: `<p>Your 2FA code: ${token}</p>`
//   });
// };

// export const sendPasswordResetEmail = async (
//   email: string,
//   token: string,
// ) => {
//   const resetLink = `${domain}/auth/new-password?token=${token}`

//   await resend.emails.send({
//     from: "mail@auth-masterclass-tutorial.com",
//     to: email,
//     subject: "Reset your password",
//     html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
//   });
// };

export const sendVerificationEmail = async (
  email: string, 
  token: string
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification</title>
        </head>
        <body style="
          margin: 0;
          padding: 0;
          background-color: #f0f4f8;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        ">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <!-- Main Container -->
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="
                  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
                  border-radius: 16px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
                  max-width: 90%;
                ">
                  <!-- Header Section -->
                  <tr>
                    <td style="padding: 40px 40px 30px 40px;">
                      <div style="
                        background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                        border-radius: 12px;
                        padding: 30px;
                        text-align: center;
                        margin-bottom: 30px;
                      ">
                      
                        <h1 style="
                          color: #ffffff;
                          font-size: 28px;
                          font-weight: 700;
                          margin: 0;
                          letter-spacing: -0.5px;
                        ">
                          Verify Your Email Address
                        </h1>
                      </div>
                      
                      <!-- Welcome Message -->
                      <p style="
                        color: #1e293b;
                        font-size: 18px;
                        line-height: 1.6;
                        margin: 0 0 24px;
                        text-align: center;
                        padding: 0 20px;
                      ">
                        Welcome to our community! 🎉
                        <br/>
                        Please verify your email to get started.
                      </p>

                      <!-- Verification Button -->
                      <div style="text-align: center; padding: 20px 0;">
                        <a href="${confirmLink}" style="
                          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                          border-radius: 12px;
                          color: #ffffff;
                          display: inline-block;
                          font-size: 16px;
                          font-weight: 600;
                          line-height: 1;
                          padding: 20px 40px;
                          text-decoration: none;
                          text-align: center;
                          transition: all 0.3s ease;
                          box-shadow: 0 4px 6px rgba(79, 70, 229, 0.25);
                        ">
                          Verify My Email
                        </a>
                      </div>

                      <!-- Security Note -->
                      <div style="
                        background-color: #f8fafc;
                        border-radius: 12px;
                        padding: 20px;
                        margin: 30px 0;
                      ">
                        <p style="
                          color: #64748b;
                          font-size: 14px;
                          line-height: 1.6;
                          margin: 0;
                          text-align: center;
                        ">
                          🔒 For security reasons, this link will expire in 24 hours.
                          <br/>
                          If you didn't create an account, you can safely ignore this email.
                        </p>
                      </div>

                      <!-- Footer -->
                      <div style="
                        border-top: 1px solid #e2e8f0;
                        margin-top: 30px;
                        padding-top: 30px;
                      ">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center">
                              <p style="
                                color: #94a3b8;
                                font-size: 13px;
                                line-height: 1.5;
                                margin: 0;
                              ">
                                Having trouble with the button?
                                <br/>
                                Copy and paste this URL into your browser:
                              </p>
                              <p style="
                                margin: 8px 0 0;
                                font-size: 13px;
                              ">
                                <a href="${confirmLink}" style="
                                  color: #4f46e5;
                                  text-decoration: none;
                                  border-bottom: 1px solid #4f46e5;
                                ">
                                  ${confirmLink}
                                </a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Footer Branding -->
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 90%;">
                  <tr>
                    <td style="padding: 24px 0; text-align: center;">
                      <p style="
                        color: #64748b;
                        font-size: 12px;
                        margin: 0;
                        font-weight: 500;
                      ">
                        Made with ❤️ by Sai Teja
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
  });
};
