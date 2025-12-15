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
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              About Me
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
              <p>
                As Director of Engineering, I work closely with CTO, staff engineers, engineering managers, and developers 
                to deliver great products. I care about how teams operate 
                day to day - the technology, the processes, the communication, the things that 
                make or break delivery, and most importantly, the people.
              </p>
              <p>
                I started in technical support, then moved into process management and project 
                management - mostly on BI and data migration products. That path gave me a good 
                mix of technical and business perspective. Later, as engineering manager, I worked 
                hands-on with developers and DevOps engineers, which deepened my technical side.
              </p>
              <p>
                If you're into personality frameworks - my top 5 CliftonStrengths are Responsibility, 
                Maximizer, Harmony, Relator, and Analytical. 
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-accent-600 dark:text-accent-400">9+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Years in IT</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-600 dark:text-accent-400">7+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Years in leadership</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-600 dark:text-accent-400">60+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Engineers across 7 teams</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 group transform-gpu"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="w-12 h-12 bg-accent-600/10 dark:bg-accent-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-600/20 dark:group-hover:bg-accent-600/30 transition-colors">
                  <item.icon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
