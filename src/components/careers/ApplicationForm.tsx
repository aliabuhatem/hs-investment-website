'use client';

import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { Input, Textarea, Select } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import { positions } from '@/content/careers';
import { ease } from '@/lib/motion';

type Errors = Record<string, string>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: string, value: string): string {
  switch (name) {
    case 'name':
      return value.trim().length < 2 ? 'Please enter your full name.' : '';
    case 'email':
      return !emailRe.test(value) ? 'Enter a valid email address.' : '';
    case 'role':
      return value ? '' : 'Please select a role.';
    case 'message':
      return value.trim().length < 20
        ? 'Tell us a little more (20+ characters).'
        : '';
    default:
      return '';
  }
}

export function ApplicationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const t = e.target as unknown as HTMLInputElement;
    if (!t.name) return;
    const msg = validateField(t.name, t.value);
    setErrors((prev) => ({ ...prev, [t.name]: msg }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    ['name', 'email', 'role', 'message'].forEach((f) => {
      const msg = validateField(f, String(data.get(f) ?? ''));
      if (msg) next[f] = msg;
    });
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  if (submitted) {
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
          Application received
        </h3>
        <p className="mt-3 max-w-md text-sand-300">
          Thank you for your interest in HS Investment Group. Our team will be in
          touch if your profile matches an opportunity.
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
        <Select
          label="Role of interest"
          name="role"
          required
          error={errors.role}
          defaultValue=""
          options={[
            { value: '', label: 'Select a position…' },
            ...positions.map((p) => ({ value: p.id, label: p.title })),
            { value: 'general', label: 'General / Future opportunities' },
          ]}
        />
        <Input
          label="LinkedIn / Portfolio"
          name="link"
          type="url"
          placeholder="https://"
          hint="Optional"
        />
      </div>
      <Textarea
        label="Why HS Investment Group?"
        name="message"
        required
        error={errors.message}
        placeholder="Tell us about your experience and what draws you to the Group."
      />
      <AnimatePresence>
        {Object.values(errors).some(Boolean) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-400"
            role="alert"
          >
            Please correct the highlighted fields.
          </motion.p>
        )}
      </AnimatePresence>
      <div>
        <Button type="submit" icon={<Send size={16} />}>
          Submit Application
        </Button>
      </div>
    </form>
  );
}
