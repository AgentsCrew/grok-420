'use client';

import { useState } from 'react';
import { Send, Terminal, AlertTriangle, CheckCircle } from 'lucide-react';

export default function BuyDomainPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        offer: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const offerAmount = parseFloat(formData.offer);
        if (offerAmount < 420) {
            setErrorMessage('Offers under $420 are not considered.');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) throw new Error('Failed to send offer');

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', offer: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-24 bg-background px-4">
            <div className="w-full max-w-xl space-y-8 rounded-xl border border-white/10 bg-black/50 p-8 shadow-[0_0_50px_rgba(57,255,20,0.1)] backdrop-blur-md">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon/10 border border-neon/20 mb-4">
                        <Terminal className="h-8 w-8 text-neon" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter text-white">Buy This Domain</h1>
                    <p className="text-gray-400">Make an offer for grok-420.com</p>
                </div>

                {status === 'success' ? (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center space-y-2">
                        <div className="flex justify-center mb-2">
                            <CheckCircle className="h-10 w-10 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-green-500">Offer Sent!</h3>
                        <p className="text-gray-300">We will review your offer and get back to you shortly.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-4 text-sm text-gray-400 hover:text-white underline"
                        >
                            Submit another offer
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neon">Full Name</label>
                                <input
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-white placeholder:text-gray-600 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neon">Phone</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-white placeholder:text-gray-600 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neon">Email Address</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-white placeholder:text-gray-600 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neon">Offer Amount ($)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-2 text-gray-500">$</span>
                                <input
                                    required
                                    type="number"
                                    name="offer"
                                    min="420"
                                    step="0.01"
                                    value={formData.offer}
                                    onChange={handleChange}
                                    placeholder="420.00"
                                    className="w-full rounded-md border border-white/10 bg-black/50 pl-8 pr-4 py-2 text-white placeholder:text-gray-600 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
                                />
                            </div>
                            {errorMessage && (
                                <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                    <AlertTriangle className="h-3 w-3" />
                                    {errorMessage}
                                </p>
                            )}
                            <p className="text-xs text-gray-500">Minimum offer starts at $420.</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neon">Message (Optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Any additional details..."
                                className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-white placeholder:text-gray-600 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon resize-none"
                            />
                        </div>

                        <button
                            disabled={status === 'loading'}
                            type="submit"
                            className="w-full rounded-md bg-neon py-3 font-bold text-black transition-all hover:bg-[#2bff05] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === 'loading' ? 'Submitting...' : 'SUBMIT OFFER'}
                            {!status && <Send className="h-4 w-4" />}
                        </button>
                    </form>
                )}
            </div>
        </main>
    );
}
