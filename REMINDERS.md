# Project Reminders & Pending Setup

## Email & Domain Setup
- [ ] **Email Forwarding**: Configure your domain registrar to forward emails from `contact@grok-420.com` to `emil9030@gmail.com`.
- [ ] **Resend Domain Verification**: Verify `grok-420.com` in your [Resend Dashboard](https://resend.com/domains) to ensure optimal deliverability.
- [ ] **Update Sender Address**: Once domain is verified, update `src/app/api/send/route.ts`:
  - Change `from: 'Grok-420 Offers <onboarding@resend.dev>'`
  - To: `from: 'Grok-420 Offers <contact@grok-420.com>'`
