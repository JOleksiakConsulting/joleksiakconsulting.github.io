import { Users, Code, Boxes, Lightbulb, TrendingUp, Layers } from 'lucide-react';

const expertise = [
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Growing and supporting engineering teams of 60+ people through team of engineering managers',
  },
  {
    icon: Code,
    title: 'Technical Strategy',
    description: 'Defining technology roadmaps and aligning technical decisions with product goals',
  },
  {
    icon: Boxes,
    title: 'Platform Engineering',
    description: 'Working with teams on infrastructure, CI/CD, and developer experience',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Exploring new technologies and driving R&D initiatives',
  },
  {
    icon: TrendingUp,
    title: 'Agile Delivery',
    description: 'Improving processes to help teams ship faster and more reliably',
  },
  {
    icon: Layers,
    title: 'Product Architecture',
    description: 'Deep understanding of complex product architecture and how systems fit together',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-32 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
              About Me
            </h2>
            <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed max-w-prose transition-colors duration-300">
              <p>
                As Director of Engineering, I work closely with CTO, staff engineers, engineering managers, and developers 
                to deliver great products. I care about how teams operate 
                day to day — the technology, the processes, the communication, the things that 
                make or break delivery, and most importantly, the people.
              </p>
              <p>
              My background spans technical support and process management. Working on BI and data migration projects 
              gave me a solid mix of technical and business perspective. Later, as an engineering manager, 
              I worked hands-on with developers and DevOps engineers, which deepened my technical side.
              </p>
              <p>
                If you're into personality frameworks — my top 5 CliftonStrengths are Responsibility, 
                Maximizer, Harmony, Relator, and Analytical. 
              </p>
              <p>
                Outside of work, I'm probably lifting weights, listening to classic 
                rock, or rolling dice in an RPG session.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="border-l-2 border-accent-600 dark:border-accent-400 pl-4">
                <p className="text-4xl font-extrabold text-accent-600 dark:text-accent-400">9+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Years in IT</p>
              </div>
              <div className="border-l-2 border-accent-600 dark:border-accent-400 pl-4">
                <p className="text-4xl font-extrabold text-accent-600 dark:text-accent-400">7+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Years in leadership</p>
              </div>
              <div className="border-l-2 border-accent-600 dark:border-accent-400 pl-4">
                <p className="text-4xl font-extrabold text-accent-600 dark:text-accent-400">60+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Engineers across 7 teams</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-accent-600/30 dark:hover:border-accent-400/30 hover:shadow-sm transition-all duration-200 group transform-gpu"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-accent-600/10 dark:bg-accent-600/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent-600/20 dark:group-hover:bg-accent-600/30 transition-colors">
                    <item.icon className="w-[18px] h-[18px] text-accent-600 dark:text-accent-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white transition-colors duration-300">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
