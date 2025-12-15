import { Building2, Calendar } from 'lucide-react';

const careerHistory = [
  {
    company: 'Piwik PRO',
    role: 'Director of Engineering',
    period: '2024 - Present',
    description:
      'Responsible for delivering quality product on time while shaping technology strategy alongside CTO, staff engineers, and engineering managers. Focused on making sure tech decisions support where the company and product are heading.',
    highlights: ['Technology Strategy', 'Product Delivery', 'Engineering Leadership', "Budget Management"],
  },
  {
    company: 'Piwik PRO',
    role: 'Product / Engineering Manager',
    period: '2021 - 2024',
    description:
      'Led the DevOps team building the Piwik PRO Analytics Suite platform. Managed feature backlog, handled releases and deployments, and kept Azure costs and capacity in check. Servant leadership approach - helping the team do their best work.',
    highlights: ['DevOps', 'Azure', 'Release Management', 'Platform Engineering', 'Team Leadership'],
  },
  {
    company: 'Fujitsu Technology Solutions',
    role: 'R&D Business Consultant / Project Manager',
    period: '2019 - 2021',
    description:
      'Worked with an international product team on cloud-native services and digital transformation. Ran BI and analytics projects, helped shape strategy for a 1200+ person organization - governance, automation, and how teams communicate.',
    highlights: ['Business Intelligence', 'Cloud', 'Digital Transformation', 'Strategy'],
  },
  {
    company: 'Fujitsu Technology Solutions',
    role: 'Process Manager',
    period: '2018 - 2019',
    description:
      'Led optimization projects across multiple countries, creating standards and processes that worked at scale. Built reporting and automation tools, advised teams on ITIL practices, and ran internal audits to keep things on track.',
    highlights: ['Process Optimization', 'ITIL', 'Automation'],
  },
  {
    company: 'Fujitsu Technology Solutions',
    role: 'Service Desk / Service Process Controller',
    period: '2016 - 2018',
    description:
      'Started on 1st line IT support, quickly moved into service process controller role - coordinating the team, handling major incidents, and building tools to automate manual work. This is where I discovered I liked fixing how things work, not just fixing things.',
    highlights: ['IT Support', 'Process Control', 'Excel & Power BI', 'Team Coordination'],
  },
];

export default function Career() {
  return (
    <section id="career" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
            Career Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
            From technical support through project management to engineering leadership - 
            each role taught me something different about how teams and products actually work.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 hidden md:block transition-colors duration-300" />

          <div className="space-y-12">
            {careerHistory.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className="hidden md:flex absolute left-0 w-16 h-16 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-full items-center justify-center z-10 transform-gpu transition-colors duration-300"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Building2 className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>

                <div
                  className="md:ml-24 bg-white dark:bg-slate-900 rounded-xl p-6 md:p-8 ring-1 ring-slate-200 dark:ring-slate-800 hover:ring-slate-300 dark:hover:ring-slate-700 transition-all duration-200 transform-gpu"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">{item.role}</h3>
                      <p className="text-accent-600 dark:text-accent-400 font-medium">{item.company}</p>
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed transition-colors duration-300">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full transform-gpu transition-colors duration-300"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
