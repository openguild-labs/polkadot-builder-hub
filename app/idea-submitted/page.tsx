import Link from "next/link";

export default function IdeaSubmitted() {
  return (
    <div>
      <h1>Idea submitted</h1>
      <p>Your idea has been submitted successfully.</p>
      <p>Thank you for your submission.</p>
      <p>We will review your idea and get back to you soon.</p>
      <p>You can now close this page.</p>
      <Link href="/">Back to teammate finder</Link>
    </div>
  );
}