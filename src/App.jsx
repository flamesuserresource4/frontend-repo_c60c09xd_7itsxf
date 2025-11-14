import React from 'react'
import Spline from '@splinetool/react-spline'

function SectionTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-slate-800 border-b border-slate-200 pb-2">
      {children}
    </h2>
  )
}

function InfoRow({ label, value, href }) {
  const content = href ? (
    <a href={href} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-blue-600 transition-colors">
      {value}
    </a>
  ) : (
    <span className="text-slate-700">{value}</span>
  )
  return (
    <div className="flex gap-3 text-sm">
      <span className="w-24 text-slate-500">{label}</span>
      <span className="flex-1">{content}</span>
    </div>
  )
}

export default function App() {
  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Next.js'],
    Backend: ['Node.js', 'Laravel'],
    Databases: ['MySQL', 'PostgreSQL'],
    'Tools / DevOps': ['Git', 'Docker'],
    Others: ['WordPress'],
  }

  const experiences = [
    {
      company: 'TechNova Labs',
      position: 'Full Stack Developer',
      period: '2023 – Present',
      bullets: [
        'Build and maintain scalable web applications across the stack.',
        'Collaborate with designers and PMs to deliver features on time.',
        'Implement component-based UIs and RESTful services.',
      ],
    },
    {
      company: 'CloudBridge Studio',
      position: 'Software Engineer (Contract)',
      period: '2022 – 2023',
      bullets: [
        'Developed responsive interfaces with React and Tailwind CSS.',
        'Created backend APIs with Node.js and Laravel.',
        'Optimized database queries on MySQL/PostgreSQL.',
      ],
    },
  ]

  const projects = [
    {
      name: 'Project Atlas',
      description:
        'Modular admin dashboard for analytics and content operations with role-based access and audit trails.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      purpose: 'Internal tooling to streamline reporting and data management.',
    },
    {
      name: 'ShopSphere',
      description:
        'Headless e-commerce storefront with server-rendered product pages and secure checkout integration.',
      stack: ['Next.js', 'Laravel', 'MySQL'],
      purpose: 'Enable fast product discovery and reliable order processing.',
    },
    {
      name: 'TaskFlow',
      description:
        'Kanban-style task manager with drag-and-drop boards and team collaboration.',
      stack: ['Vue', 'Node.js', 'PostgreSQL'],
      purpose: 'Improve team productivity through clear task ownership.',
    },
    {
      name: 'ContentPress',
      description:
        'Customized WordPress theme and plugin suite for editorial workflows and SEO.',
      stack: ['WordPress', 'PHP', 'Docker'],
      purpose: 'Deliver a flexible content platform with modern authoring experience.',
    },
  ]

  const certs = [
    { name: 'Full-Stack Web Development', issuer: 'Coursera', year: '2023' },
    { name: 'Docker Essentials', issuer: 'IBM Skills Network', year: '2022' },
  ]

  const handlePrint = () => window.print()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header / Hero */}
      <header className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">M. Ridwan</h1>
            <p className="mt-1 text-lg text-slate-600">Full Stack Developer</p>
            <div className="mt-6 space-y-2 text-sm">
              <InfoRow label="Location" value="Jakarta" />
              <InfoRow label="Email" value="mridwan07072002@gmail.com" href="mailto:mridwan07072002@gmail.com" />
              <InfoRow label="Phone" value="089503412994" href="tel:089503412994" />
              <InfoRow label="GitHub" value="github.com/MuhRidwaan" href="https://github.com/MuhRidwaan" />
            </div>
            <div className="mt-6 flex gap-3 print:hidden">
              <button onClick={handlePrint} className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-800">
                Download PDF
              </button>
              <a href="#contact" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-slate-900 text-sm font-medium border border-slate-300 hover:bg-slate-50">
                Contact
              </a>
            </div>
          </div>
          <div className="h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent"></div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <section className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Full Stack Developer with a strong focus on building clean, efficient, and maintainable web applications. Experienced across modern frontend frameworks and robust backend architectures. Comfortable translating product goals into scalable solutions, improving performance, and delivering reliable user experiences.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <SectionTitle>Experience</SectionTitle>
              <div className="mt-4 space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="rounded-lg border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">{exp.position}</h3>
                        <p className="text-sm text-slate-600">{exp.company}</p>
                      </div>
                      <span className="text-xs text-slate-500 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <SectionTitle>Projects</SectionTitle>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((p, idx) => (
                  <div key={idx} className="rounded-lg border border-slate-200 p-4">
                    <h3 className="text-sm font-semibold text-slate-900">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-700">{p.description}</p>
                    <p className="mt-2 text-xs text-slate-500"><span className="font-medium">Stack:</span> {p.stack.join(', ')}</p>
                    <p className="mt-1 text-xs text-slate-500"><span className="font-medium">Purpose:</span> {p.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Right column */}
          <aside className="space-y-8">
            {/* Technical Skills */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <SectionTitle>Technical Skills</SectionTitle>
              <div className="mt-4 space-y-4">
                {Object.entries(skills).map(([category, list]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-slate-900">{category}</h4>
                    <p className="mt-1 text-sm text-slate-700">{list.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {certs.map((c, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span>{c.name} — {c.issuer}</span>
                    <span className="text-xs text-slate-500">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div id="contact" className="bg-white rounded-xl border border-slate-200 p-6">
              <SectionTitle>Contact</SectionTitle>
              <div className="mt-3 space-y-2 text-sm">
                <InfoRow label="Email" value="mridwan07072002@gmail.com" href="mailto:mridwan07072002@gmail.com" />
                <InfoRow label="Phone" value="089503412994" href="tel:089503412994" />
                <InfoRow label="GitHub" value="github.com/MuhRidwaan" href="https://github.com/MuhRidwaan" />
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-12 text-xs text-slate-500">
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} M. Ridwan • Jakarta • Full Stack Developer
          </p>
          <p className="print:hidden">
            This page is optimized for export to PDF. Use the Download PDF button.
          </p>
        </div>
      </footer>
    </div>
  )
}
