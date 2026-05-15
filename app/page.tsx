export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Interview Prep
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Practice Code Reviews<br />
          <span className="text-[#58a6ff]">Before the Interview</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Get AI-generated buggy code snippets across multiple languages. Spot the issues, submit your review, and get instant expert feedback — just like a real senior dev interview.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Practicing — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* Sample snippet preview */}
      <section className="mb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-[#8b949e] text-xs">review_challenge.py</span>
          </div>
          <pre className="text-sm text-[#c9d1d9] overflow-x-auto leading-relaxed">
            <code>{
`def get_user_data(user_id):
    conn = db.connect("prod")
    query = f"SELECT * FROM users WHERE id = {user_id}"
    result = conn.execute(query)
    return result[0]

# Can you spot the issues?`
            }</code>
          </pre>
          <div className="mt-4 pt-4 border-t border-[#30363d] flex flex-wrap gap-2">
            <span className="bg-[#1f2937] text-[#f85149] text-xs px-2 py-1 rounded">SQL Injection</span>
            <span className="bg-[#1f2937] text-[#e3b341] text-xs px-2 py-1 rounded">No error handling</span>
            <span className="bg-[#1f2937] text-[#58a6ff] text-xs px-2 py-1 rounded">Connection leak</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited AI-generated code challenges',
              'Python, JS, Go, Rust, Java & more',
              'Instant feedback on your reviews',
              'Difficulty levels: junior to staff eng',
              'Track your improvement over time',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What kinds of bugs are included?',
              a: 'Real-world issues: SQL injection, race conditions, off-by-one errors, memory leaks, improper error handling, insecure defaults, and logic bugs — the exact things interviewers look for.'
            },
            {
              q: 'Which programming languages are supported?',
              a: 'Python, JavaScript/TypeScript, Go, Rust, Java, and C++. More languages are added regularly based on user demand.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        © {new Date().getFullYear()} Code Review Simulator. Built for senior devs who want to stay sharp.
      </footer>
    </main>
  )
}
