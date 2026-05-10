import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center pt-20 px-6">
        <h1 className="text-6xl font-bold tracking-tighter mb-6">Stop Feeling Behind Everyone Else</h1>
        <p className="text-2xl text-zinc-400 mb-10">AI that shows you exactly what your peers are doing differently — and helps you catch up in 7 days.</p>
        
        <form id="cta-form" className="max-w-md mx-auto space-y-4" action="https://xfkziloyyotnnxkypgmb.supabase.co/functions/v1/capture-signal" method="POST">
          <input type="hidden" name="experiment_id" value="f2e0a8f5" />
          <input type="email" name="email" placeholder="your@email.com" required 
                 className="w-full px-8 py-5 bg-zinc-900 border border-zinc-700 rounded-3xl text-xl focus:outline-none focus:border-white" />
          <button type="submit" 
                  className="w-full bg-white hover:bg-zinc-100 text-black py-5 px-8 rounded-3xl font-semibold text-2xl transition">
            Get My 7-Day Catch-Up Plan — $29
          </button>
        </form>
        <p className="text-xs text-zinc-500 mt-6">$29 one-time early access</p>
      </div>

      {/* PROBLEM SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">You're working hard but still falling behind</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-zinc-900 p-8 rounded-3xl">LinkedIn makes you feel invisible</div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Everyone else seems to be leveling up faster</div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">You don't know what to do next</div>
          
        </div>
      </div>

      {/* SOLUTION + BENEFITS (simplified for speed) */}
      <div className="bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">The solution you've been waiting for</h2>
          <p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-12">Our AI scans public signals and gives you personalized, actionable steps.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Daily insights</div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Peer comparison</div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">7-day action plan</div>
            
          </div>
        </div>
      </div>

      <div className="text-center py-12 text-zinc-500 text-sm">
        Powered by PMF Autopilot • Experiment #f2e0a8f5
      </div>
    </main>
  );
}