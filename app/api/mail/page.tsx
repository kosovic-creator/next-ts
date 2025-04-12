import { Resend } from 'resend';
import options from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { Session } from "next-auth";
const resend = new Resend('re_LPS8fWMD_E1bpqA5x8wqJLY1gXUoEEyWP');

const MailPage = async () => {
  const session = await getServerSession(options);
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: session?.user?.email || 'no-reply@example.com',
    subject: session?.user?.name || 'Welcome to Resend',
    html: `<p>${session?.user?.name}</p>`,
  });

  return (
    <div>
      <h1>Email Sent</h1>
      {/* {session?.user?.email ? <p>{session.user.email}</p> : <p>No email available</p>} */}
      <p>Check your inbox for the welcome email.</p>
    </div>
  );
};

export default MailPage;