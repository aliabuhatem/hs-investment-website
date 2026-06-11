import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center bg-ink px-6 text-center">
      <span className="font-display text-[20vw] font-bold leading-none tracking-tight text-charcoal sm:text-[12rem]">
        404
      </span>
      <h1 className="mt-4 font-display text-2xl font-semibold tracking-wide2 text-sand">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sand-400">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
