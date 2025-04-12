import { Resend } from 'resend';

const resend = new Resend('re_LPS8fWMD_E1bpqA5x8wqJLY1gXUoEEyWP');

const MailPage = async () => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'drasko.kosovic@icloud.com',
    subject: 'Drasko, welcome to Resend!',
    html: '<p>Drasko</p>',
  });

  return (
    <div>
      <h1>Email Sent</h1>
      <p>Check your inbox for the welcome email.</p>
    </div>
  );
};

export default MailPage;