import { useState, type FormEvent } from 'react';
import { Award, Mail, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui';

interface CertificationCardProps {
  courseTitle: string;
  courseId: string;
}

export function CertificationCard({ courseTitle, courseId }: CertificationCardProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [delivery, setDelivery] = useState<'digital' | 'printed'>('digital');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `CraftC ₹99 Certificate Request — ${courseTitle}`;
    const body = [
      'Hello CraftC team,',
      '',
      'I have completed the course and would like to request my certificate.',
      '',
      `Name: ${fullName.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim() || 'Not provided'}`,
      `Course: ${courseTitle} (${courseId})`,
      `Certificate format: ${delivery === 'printed' ? 'Printed certificate (shipping details to follow)' : 'Digital certificate'}`,
      'Fee: ₹99 (payment instructions requested)',
      '',
      'Please share the next steps for verification and payment.',
    ].join('\n');
    const mailto = `mailto:ashutoshpalhare@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section className="mt-10" aria-labelledby="certification-title">
      <Card hover={false} className="overflow-hidden border-[var(--color-primary)]/40">
        <div className="p-5 sm:p-7 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-[var(--color-accent)]/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <Award size={26} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">Course completed</p>
              <h2 id="certification-title" className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mt-1">Request your CraftC certificate</h2>
              <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                You have marked every lesson in {courseTitle} as complete. Submit a request for a manually reviewed certificate.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4 flex items-center gap-3">
              <Mail size={19} className="text-[var(--color-primary)] shrink-0" />
              <div><p className="text-sm font-semibold text-[var(--color-text)]">Digital certificate</p><p className="text-xs text-[var(--color-text-muted)]">Delivered by email after review</p></div>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4 flex items-center gap-3">
              <Truck size={19} className="text-[var(--color-primary)] shrink-0" />
              <div><p className="text-sm font-semibold text-[var(--color-text)]">Printed certificate</p><p className="text-xs text-[var(--color-text-muted)]">Shipping details collected later</p></div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-semibold text-[var(--color-text)]">Certificate application</h3>
            <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-bold text-[var(--color-primary)]">₹99</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">Full name <span aria-hidden="true">*</span></span>
              <input required autoComplete="name" maxLength={100} value={fullName} onChange={(event) => setFullName(event.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20" />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">Email address <span aria-hidden="true">*</span></span>
              <input required type="email" autoComplete="email" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20" />
            </label>
          </div>
          <label className="block">
            <span className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">Phone number (optional)</span>
            <input type="tel" autoComplete="tel" maxLength={20} value={phone} onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20" />
          </label>
          <fieldset>
            <legend className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">Preferred certificate format</legend>
            <div className="grid sm:grid-cols-2 gap-3">
              <label className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer ${delivery === 'digital' ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'border-[var(--color-border)]'}`}>
                <input type="radio" name={`delivery-${courseId}`} value="digital" checked={delivery === 'digital'} onChange={() => setDelivery('digital')} className="accent-[var(--color-primary)]" />
                <span className="text-sm text-[var(--color-text)]">Digital · Email</span>
              </label>
              <label className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer ${delivery === 'printed' ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'border-[var(--color-border)]'}`}>
                <input type="radio" name={`delivery-${courseId}`} value="printed" checked={delivery === 'printed'} onChange={() => setDelivery('printed')} className="accent-[var(--color-primary)]" />
                <span className="text-sm text-[var(--color-text)]">Printed · Physical delivery</span>
              </label>
            </div>
          </fieldset>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3 flex items-start gap-2">
            <ShieldCheck size={17} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              This opens a pre-filled email draft; it does not send automatically or process payment. The ₹99 fee and payment instructions will be confirmed by email after manual review. For printed delivery, your postal address will be requested separately.
            </p>
          </div>
          <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] transition-colors">
            Prepare certificate request <ArrowRight size={17} />
          </button>
        </form>
      </Card>
    </section>
  );
}
