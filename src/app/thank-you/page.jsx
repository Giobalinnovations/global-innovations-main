import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-xl mb-8">
        Your message has been received. We'll get back to you shortly.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
