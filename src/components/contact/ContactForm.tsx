'use client';

import { FormEvent, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { Input, Textarea, Select } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import { ease } from '@/lib/motion';

const intents = [
  { value: 'brief', label: 'Request Investment Brief' },
  { value: 'meeting', label: 'Book a Meeting' },
  { value: 'portfolio', label: 'Download Portfolio / Pitch Deck' },
  { value: 'interest', label: 'Submit Interest' },
  { value: 'general', label: 'General Enquiry' },
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(name: string, value: string): string {
  switch (name) {
    case 'name':
      return value.trim().length < 2 ? 'Please enter your name.' : '';
    case 'email':
      return !emailRe.test(value) ? 'Enter a valid email address.' : '';
    case 'message':
      return value.trim().length < 10 ? 'Please add a short message.' : '';
    default:
      return '';
  }
}

export function ContactForm() {
  const params = useSearchParams();
  const initialIntent = params.get('intent') ?? 'general';
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const t = e.target as unknown as HTMLInputElement;
    if (!t.name) return;
    setErrors((p) => ({ ...p, [t.name]: validate(t.name, t.value) }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    ['name', 'email', 'message'].forEach((f) => {
      const msg = validate(f, String(data.get(f) ?? ''));
      if (msg) next[f] = msg;
    });
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: ease.out }}
        className="flex flex-col items-center rounded-3xl border border-accent/30 bg-accent/[0.06] p-12 text-center"
        role="status"
      >
        <CheckCircle2 size={48} className="text-accent" aria-hidden />
        <h3 className="mt-5 font-display text-2xl font-semibold text-sand">
          Thank you — message sent
        </h3>
        <p className="mt-3 max-w-md text-sand-300">
          Our investor relations team will respond shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onBlur={onBlur}
      noValidate
      className="grid gap-5 rounded-3xl border border-sand/10 bg-charcoal/40 p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Full name" name="name" required error={errors.name} autoComplete="name" />
        <Input
          label="Email"
          name="email"
          type="email"
          required
          error={errors.email}
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Company / Organisation" name="company" autoComplete="organization" />
        <Select
          label="I would like to"
          name="intent"
          defaultValue={initialIntent}
          options={intents}
        />
      </div>
      <Textarea
        label="Message"
        name="message"
        required
        error={errors.message}
        placeholder="How can we help?"
      />
      <div>
        <Button type="submit" icon={<Send size={16} />}>
          Send Message
        </Button>
      </div>
    </form>
  );
}
