import React from 'react';
import './styles.css';

const LOGO_URL = 'https://cdn.prod.website-files.com/67766e0e4e4f74f02f5ddaa0/6778da6f69cc7a0553180b7c_Navbar%20Brand%20white.svg';

export function JustFuckingUseQBraid() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Geist Mono', 'JetBrains Mono', monospace" }}>
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Just Fucking Use{' '}
          <img src={LOGO_URL} alt="qBraid" className="inline-block h-10 md:h-12 align-middle" />
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
          Stop overthinking your quantum computing platform. Stop wasting weeks configuring
          environments. Stop expensing another overpriced quantum cloud service.
        </p>

        {/* Why qBraid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why qBraid?</h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300">
            <p>Because you're trying to solve quantum problems, not wrestle with fifteen different SDKs, conflicting dependency versions, and cryptic installation errors.</p>
            <p>Because your PhD advisor doesn't care about your beautiful Qiskit virtual environment setup. They care about results.</p>
            <p>Because "it works on my machine" is even more embarrassing when you're working with quantum computers.</p>
          </div>
        </section>

        {/* What You Get */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What You Get</h2>
          <ul className="space-y-4 text-lg md:text-xl text-gray-300 list-disc list-inside">
            <li>Pre-configured environments that actually work</li>
            <li>Access to real quantum hardware without selling a kidney</li>
            <li>Support for Qiskit, Cirq, PyQuil, Braket—all in one place</li>
            <li>JupyterLab that doesn't shit the bed when you import numpy</li>
            <li>Reproducible quantum code (yes, it's actually possible)</li>
            <li>A community that isn't gatekeeping behind academic paywalls</li>
          </ul>
        </section>

        {/* But I Already Use... */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">But I Already Use...</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">"I use IBM Quantum"</h3>
              <p className="text-lg md:text-xl text-gray-300">Great. qBraid works with Qiskit. You can still use IBM's hardware. Now you also have access to everyone else's hardware too.</p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">"I use AWS Braket"</h3>
              <p className="text-lg md:text-xl text-gray-300">Congratulations on your AWS bill. qBraid supports Braket too, plus gives you educational credits and better debugging tools.</p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">"I built my own quantum computing framework"</h3>
              <p className="text-lg md:text-xl text-gray-300">No you didn't. You pip installed Cirq and added a wrapper class. Use qBraid.</p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">"I use local simulators"</h3>
              <p className="text-lg md:text-xl text-gray-300">Cool story. Let me know how that scales when you need more than 20 qubits and your laptop sounds like a jet engine.</p>
            </div>
          </div>
        </section>

        {/* Stop Making Excuses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Stop Making Excuses</h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300">
            <p>You're not going to build a better quantum development environment than the team that literally built it for this exact purpose.</p>
            <p>You're not going to figure out the perfect quantum hardware provider by reading another seventeen comparison blog posts.</p>
            <p>You're not going to achieve quantum advantage by spending three weeks debugging your local quantum simulator installation.</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold mt-8">Just. Fucking. Use. qBraid.</p>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
          <ol className="space-y-4 text-lg md:text-xl text-gray-300 list-decimal list-inside">
            <li>Go to <a href="https://qbraid.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">qbraid.com</a></li>
            <li>Sign up (it's free for educational use, you absolute walnut)</li>
            <li>Start coding quantum algorithms instead of fighting with pip</li>
            <li>Actually finish your quantum computing project for once</li>
          </ol>
        </section>

        {/* Real Talk */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Real Talk</h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300">
            <p>Quantum computing is hard enough without adding tool complexity. qBraid removes the infrastructure headaches so you can focus on the actual quantum algorithms and research.</p>
            <p>It's not about being locked into a platform. It's about having a unified interface to access multiple quantum providers, frameworks, and resources without reinventing the wheel every single time.</p>
            <p>Use what works. Ship code that runs. Get results. Stop bikeshedding your development environment.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-zinc-800 pt-12 mt-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://account.qbraid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-bold px-8 py-4 text-lg hover:bg-zinc-200 transition-colors text-center rounded-lg"
            >
              Launch qBraid Lab →
            </a>
            <a
              href="https://docs.qbraid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-zinc-700 text-white font-bold px-8 py-4 text-lg hover:border-zinc-500 transition-colors text-center rounded-lg"
            >
              Read the Docs
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-800 pt-12 mt-16">
          <p className="text-base mb-6 text-gray-500">
            This site is a parody inspired by the{' '}
            <a href="https://justfuckinguse.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              justfuckinguse.com
            </a>{' '}
            collection. Not officially affiliated with qBraid, but they should probably hire whoever made this.
          </p>
          <p className="text-base mb-8 text-gray-500">
            Made with frustration, caffeine, and a genuine appreciation for tools that just fucking work.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <img src={LOGO_URL} alt="qBraid" className="h-6" />
            <div className="flex gap-6 text-base text-gray-500">
              <a href="https://docs.qbraid.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Docs</a>
              <span className="text-zinc-800">|</span>
              <a href="https://github.com/qBraid" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
              <span className="text-zinc-800">|</span>
              <a href="https://discord.gg/qbraid" target="_blank" rel="noopener noreferrer" className="hover:text-white">Discord</a>
              <span className="text-zinc-800">|</span>
              <a href="https://www.qbraid.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">qBraid.com</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default JustFuckingUseQBraid;
