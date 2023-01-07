import type { NextApiRequest, NextApiResponse } from "next";
import { transporter, type ContactForm } from "../../config/nodemailer";
import { env } from "../../env/client.mjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, subject, company, message } =
      req.body as ContactForm;
    if (!firstName || !lastName || !email || !company || !message)
      return res.status(400).json({ error: "Missing fields" });

    try {
      await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${email}>`,
        to: env.NEXT_PUBLIC_EMAIL_USER,
        subject: `New message from ${firstName} ${lastName} - ${subject}`,
        html: `
          <p>Name: ${firstName} ${lastName}</p>
          <p>Email: ${email}</p>
          <p>Company: ${company}</p>
          <p>Message: ${message}</p>
        `,
      });

      await transporter.sendMail({
        from: `"Daniil Robnikov" <${env.NEXT_PUBLIC_EMAIL_USER}>`,
        to: email,
        subject: `Your message received${subject ? ` - ${subject}` : ""}`,
        html: `
            <div
              style="
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
                  Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
                font-size: 14px;
                line-height: 1.5;
                color: #24292e;
                background-color: #eee;
                padding: 0 48px 64px 48px;
              "
            >
              <table
                align="center"
                width="100%"
                style="
                  box-sizing: border-box;
                  border-radius: 0 0 24px 24px !important;
                  border-spacing: 0;
                  border-collapse: collapse;
                  max-width: 544px;
                  margin-right: auto;
                  margin-left: auto;
                  width: 100% !important;
                  background-color: #fff;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
                    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji' !important;
                "
              >
                <tbody>
                  <tr
                    style="
                      box-sizing: border-box;
                      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                        'Segoe UI Emoji' !important;
                    "
                  >
                    <td
                      align="center"
                      valign="top"
                      style="
                        box-sizing: border-box;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                          Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                          'Segoe UI Emoji' !important;
                        padding: 36px;
                      "
                    >
                      <center
                        style="
                          box-sizing: border-box;
                          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                            Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                            'Segoe UI Emoji' !important;
                        "
                      >
                        <table
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          align="center"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            border-spacing: 0;
                            border-collapse: collapse;
                            max-width: 768px;
                            margin-right: auto;
                            margin-left: auto;
                            width: 100% !important;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                              'Segoe UI Emoji' !important;
                          "
                        >
                          <tbody>
                            <tr
                              style="
                                box-sizing: border-box;
                                font-family: -apple-system, BlinkMacSystemFont,
                                  'Segoe UI', Helvetica, Arial, sans-serif,
                                  'Apple Color Emoji', 'Segoe UI Emoji' !important;
                              "
                            >
                              <td
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-family: -apple-system, BlinkMacSystemFont,
                                    'Segoe UI', Helvetica, Arial, sans-serif,
                                    'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                  padding: 0;
                                "
                              >
                                <table
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                  align="left"
                                  width="100%"
                                  style="
                                    box-sizing: border-box;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    font-family: -apple-system, BlinkMacSystemFont,
                                      'Segoe UI', Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                  "
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        font-family: -apple-system, BlinkMacSystemFont,
                                          'Segoe UI', Helvetica, Arial, sans-serif,
                                          'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                      "
                                    >
                                      <td
                                        style="
                                          box-sizing: border-box;
                                          text-align: left !important;
                                          font-family: -apple-system, BlinkMacSystemFont,
                                            'Segoe UI', Helvetica, Arial, sans-serif,
                                            'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                          padding: 0;
                                        "
                                        align="left"
                                      >
                                        <h2
                                          style="
                                            box-sizing: border-box;
                                            margin-top: 8px !important;
                                            margin-bottom: 16px;
                                            font-size: 24px;
                                            font-weight: 400 !important;
                                            line-height: 1.25 !important;
                                            font-family: -apple-system,
                                              BlinkMacSystemFont, 'Segoe UI', Helvetica,
                                              Arial, sans-serif, 'Apple Color Emoji',
                                              'Segoe UI Emoji' !important;
                                          "
                                        >
                                          Your message received${
                                            subject
                                              ? ` -
                                          ${subject}`
                                              : ""
                                          }
                                        </h2>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          width="100%"
                          style="
                            box-sizing: border-box;
                            border-spacing: 0;
                            border-collapse: collapse;
                            width: 100% !important;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                              'Segoe UI Emoji' !important;
                          "
                        >
                          <tbody>
                            <tr
                              style="
                                box-sizing: border-box;
                                font-family: -apple-system, BlinkMacSystemFont,
                                  'Segoe UI', Helvetica, Arial, sans-serif,
                                  'Apple Color Emoji', 'Segoe UI Emoji' !important;
                              "
                            >
                              <td
                                style="
                                  box-sizing: border-box;
                                  border-radius: 16px !important;
                                  display: block !important;
                                  font-family: -apple-system, BlinkMacSystemFont,
                                    'Segoe UI', Helvetica, Arial, sans-serif,
                                    'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                  padding: 0;
                                  border: 1px solid #e1e4e8;
                                "
                              >
                                <table
                                  align="center"
                                  style="
                                    box-sizing: border-box;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    width: 100% !important;
                                    text-align: center !important;
                                    font-family: -apple-system, BlinkMacSystemFont,
                                      'Segoe UI', Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                  "
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        font-family: -apple-system, BlinkMacSystemFont,
                                          'Segoe UI', Helvetica, Arial, sans-serif,
                                          'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                      "
                                    >
                                      <td
                                        style="
                                          box-sizing: border-box;
                                          font-family: -apple-system, BlinkMacSystemFont,
                                            'Segoe UI', Helvetica, Arial, sans-serif,
                                            'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                          padding: 24px;
                                        "
                                      >
                                        <table
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          align="center"
                                          width="100%"
                                          style="
                                            box-sizing: border-box;
                                            border-spacing: 0;
                                            border-collapse: collapse;
                                            width: 100% !important;
                                            font-family: -apple-system,
                                              BlinkMacSystemFont, 'Segoe UI', Helvetica,
                                              Arial, sans-serif, 'Apple Color Emoji',
                                              'Segoe UI Emoji' !important;
                                          "
                                        >
                                          <tbody>
                                            <tr
                                              style="
                                                box-sizing: border-box;
                                                font-family: -apple-system,
                                                  BlinkMacSystemFont, 'Segoe UI',
                                                  Helvetica, Arial, sans-serif,
                                                  'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                              "
                                            >
                                              <td
                                                align="center"
                                                style="
                                                  box-sizing: border-box;
                                                  font-family: -apple-system,
                                                    BlinkMacSystemFont, 'Segoe UI',
                                                    Helvetica, Arial, sans-serif,
                                                    'Apple Color Emoji',
                                                    'Segoe UI Emoji' !important;
                                                  padding: 0;
                                                "
                                              >
                                                <table
                                                  style="
                                                    box-sizing: border-box;
                                                    border-spacing: 0;
                                                    border-collapse: collapse;
                                                    width: 100% !important;
                                                    font-family: -apple-system,
                                                      BlinkMacSystemFont, 'Segoe UI',
                                                      Helvetica, Arial, sans-serif,
                                                      'Apple Color Emoji',
                                                      'Segoe UI Emoji' !important;
                                                  "
                                                >
                                                  <tbody
                                                    style="
                                                      box-sizing: border-box;
                                                      font-family: -apple-system,
                                                        BlinkMacSystemFont, 'Segoe UI',
                                                        Helvetica, Arial, sans-serif,
                                                        'Apple Color Emoji',
                                                        'Segoe UI Emoji' !important;
                                                    "
                                                  >
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont, 'Segoe UI',
                                                          Helvetica, Arial, sans-serif,
                                                          'Apple Color Emoji',
                                                          'Segoe UI Emoji' !important;
                                                      "
                                                    >
                                                      <td
                                                        style="
                                                          box-sizing: border-box;
                                                          font-family: -apple-system,
                                                            BlinkMacSystemFont,
                                                            'Segoe UI', Helvetica, Arial,
                                                            sans-serif,
                                                            'Apple Color Emoji',
                                                            'Segoe UI Emoji' !important;
                                                          padding: 0;
                                                        "
                                                      >
                                                        <table
                                                          style="
                                                            box-sizing: border-box;
                                                            border-spacing: 0;
                                                            border-collapse: collapse;
                                                            font-family: -apple-system,
                                                              BlinkMacSystemFont,
                                                              'Segoe UI', Helvetica,
                                                              Arial, sans-serif,
                                                              'Apple Color Emoji',
                                                              'Segoe UI Emoji' !important;
                                                          "
                                                        >
                                                          <tbody>
                                                            <tr
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: -apple-system,
                                                                  BlinkMacSystemFont,
                                                                  'Segoe UI', Helvetica,
                                                                  Arial, sans-serif,
                                                                  'Apple Color Emoji',
                                                                  'Segoe UI Emoji' !important;
                                                              "
                                                            >
                                                              <td
                                                                style="
                                                                  box-sizing: border-box;
                                                                  text-align: left !important;
                                                                  font-family: -apple-system,
                                                                    BlinkMacSystemFont,
                                                                    'Segoe UI',
                                                                    Helvetica, Arial,
                                                                    sans-serif,
                                                                    'Apple Color Emoji',
                                                                    'Segoe UI Emoji' !important;
                                                                  padding: 0;
                                                                "
                                                                align="left"
                                                              >
                                                                <p
                                                                  style="
                                                                    box-sizing: border-box;
                                                                    margin-top: 0;
                                                                    margin-bottom: 10px;
                                                                    font-family: -apple-system,
                                                                      BlinkMacSystemFont,
                                                                      'Segoe UI',
                                                                      Helvetica, Arial,
                                                                      sans-serif,
                                                                      'Apple Color Emoji',
                                                                      'Segoe UI Emoji' !important;
                                                                  "
                                                                >
                                                                  Hi ${firstName}
                                                                  ${lastName},
                                                                </p>
        
                                                                <p
                                                                  style="
                                                                    box-sizing: border-box;
                                                                    margin-top: 0;
                                                                    margin-bottom: 10px;
                                                                    text-align: justify;
                                                                    font-family: -apple-system,
                                                                      BlinkMacSystemFont,
                                                                      'Segoe UI',
                                                                      Helvetica, Arial,
                                                                      sans-serif,
                                                                      'Apple Color Emoji',
                                                                      'Segoe UI Emoji' !important;
                                                                  "
                                                                >
                                                                  Thank you for reaching
                                                                  out to me. I have
                                                                  received your message
                                                                  and will be in touch
                                                                  as soon as possible.
                                                                  The time it will take
                                                                  me to get back to you
                                                                  depends on my
                                                                  availability and the
                                                                  complexity of your
                                                                  request. I will do my
                                                                  best to respond to you
                                                                  within 24 hours. If
                                                                  you have an urgent
                                                                  request, please call
                                                                  me at
                                                                  <a
                                                                    href="tel:+37251996683"
                                                                    style="
                                                                      color: black;
                                                                    "
                                                                    >+372 5199 6683</a
                                                                  >.
                                                                </p>
        
                                                                <p
                                                                  style="
                                                                    box-sizing: border-box;
                                                                    margin-top: 0;
                                                                    margin-bottom: 10px;
                                                                    font-family: -apple-system,
                                                                      BlinkMacSystemFont,
                                                                      'Segoe UI',
                                                                      Helvetica, Arial,
                                                                      sans-serif,
                                                                      'Apple Color Emoji',
                                                                      'Segoe UI Emoji' !important;
                                                                  "
                                                                >
                                                                  Hope you enjoy using
                                                                  my blog!
                                                                </p>
                                                                <p
                                                                  style="
                                                                    box-sizing: border-box;
                                                                    margin-top: 0;
                                                                    margin-bottom: 10px;
                                                                    font-family: -apple-system,
                                                                      BlinkMacSystemFont,
                                                                      'Segoe UI',
                                                                      Helvetica, Arial,
                                                                      sans-serif,
                                                                      'Apple Color Emoji',
                                                                      'Segoe UI Emoji' !important;
                                                                  "
                                                                >
                                                                  Best Regards,
                                                                </p>
                                                                <p
                                                                  style="
                                                                    box-sizing: border-box;
                                                                    margin-top: 0;
                                                                    margin-bottom: 10px;
                                                                    font-family: -apple-system,
                                                                      BlinkMacSystemFont,
                                                                      'Segoe UI',
                                                                      Helvetica, Arial,
                                                                      sans-serif,
                                                                      'Apple Color Emoji',
                                                                      'Segoe UI Emoji' !important;
                                                                  "
                                                                >
                                                                  Daniil Robnikov
                                                                </p>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          align="center"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            border-spacing: 0;
                            border-collapse: collapse;
                            width: 100% !important;
                            text-align: center !important;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                              'Segoe UI Emoji' !important;
                          "
                        >
                          <tbody>
                            <tr
                              style="
                                box-sizing: border-box;
                                font-family: -apple-system, BlinkMacSystemFont,
                                  'Segoe UI', Helvetica, Arial, sans-serif,
                                  'Apple Color Emoji', 'Segoe UI Emoji' !important;
                              "
                            >
                              <td
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-family: -apple-system, BlinkMacSystemFont,
                                    'Segoe UI', Helvetica, Arial, sans-serif,
                                    'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                  padding: 0;
                                "
                              >
                                <p
                                  style="
                                    box-sizing: border-box;
                                    margin-top: 32px;
                                    margin-bottom: 10px;
                                    color: #6a737d !important;
                                    font-size: 12px !important;
                                    font-family: -apple-system, BlinkMacSystemFont,
                                      'Segoe UI', Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji' !important;
                                  "
                                >
                                  Daniil Robnikov ・ Tallinn, Estonia
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          style="margin: 12px; color: #6a737d;"
                        >
                          <tbody>
                            <tr>
                              <td
                                align="right"
                                style="
                                  font-size: 0;
                                  word-break: break-word;
                                  margin: auto;
                                "
                              >
                                <table
                                  align="right"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="float: none; display: inline-table;"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          padding: 0 24px 0 0;
                                          vertical-align: middle;
                                        "
                                      >
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="border-radius: 0; width: 20px;"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  font-size: 0;
                                                  height: 20px;
                                                  vertical-align: middle;
                                                  width: 20px;
                                                "
                                              >
                                                <a
                                                  href="https://twitter.com/daniilrobnikov"
                                                  target="_blank"
                                                  style="color: #6a737d;"
                                                >
                                                  <img
                                                    alt="Twitter"
                                                    height="20"
                                                    width="20"
                                                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                                    style="
                                                      border-radius: 0;
                                                      display: block;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
        
                                <table
                                  align="right"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="float: none; display: inline-table;"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          padding: 0 24px 0 0;
                                          vertical-align: middle;
                                        "
                                      >
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="border-radius: 0; width: 20px;"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  font-size: 0;
                                                  height: 20px;
                                                  vertical-align: middle;
                                                  width: 20px;
                                                "
                                              >
                                                <a
                                                  href="https://github.com/daniilrobnikov"
                                                  target="_blank"
                                                  style="color: #6a737d;"
                                                >
                                                  <img
                                                    alt="GitHub"
                                                    height="20"
                                                    width="20"
                                                    src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                                                    style="
                                                      border-radius: 0;
                                                      display: block;
                                                    "
                                                /></a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
        
                                <table
                                  align="right"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="float: none; display: inline-table;"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          padding: 0 24px 0 0;
                                          vertical-align: middle;
                                        "
                                      >
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="border-radius: 0; width: 20px;"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  font-size: 0;
                                                  height: 20px;
                                                  vertical-align: middle;
                                                  width: 20px;
                                                "
                                              >
                                                <a
                                                  href="https://www.linkedin.com/in/daniilrobnikov/"
                                                  target="_blank"
                                                  style="color: #6a737d;"
                                                >
                                                  <img
                                                    alt="LinkedIn"
                                                    height="20"
                                                    width="20"
                                                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                                    style="
                                                      border-radius: 0;
                                                      display: block;
                                                    "
                                                /></a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
        
                                <table
                                  align="right"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="float: none; display: inline-table;"
                                >
                                  <tbody>
                                    <tr>
                                      <td style="padding: 0; vertical-align: middle;">
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="border-radius: 0; width: 20px;"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  font-size: 0;
                                                  height: 20px;
                                                  vertical-align: middle;
                                                  width: 20px;
                                                "
                                              >
                                                <a
                                                  href="https://stackoverflow.com/users/18722511/daniil-rõbnikov"
                                                  target="_blank"
                                                  style="color: #6a737d;"
                                                >
                                                  <img
                                                    alt="Stack Overflow"
                                                    height="20"
                                                    width="20"
                                                    src="https://cdn-icons-png.flaticon.com/512/2111/2111628.png"
                                                    style="
                                                      border-radius: 0;
                                                      display: block;
                                                    "
                                                /></a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </center>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        `,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }
  res.status(400).json({ message: "Bad Request" });
}
