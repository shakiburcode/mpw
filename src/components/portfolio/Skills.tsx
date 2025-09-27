import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS',
        'SCSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design'
      ]
    },
    {
      title: 'Backend',
      skills: [
        'Node.js', 'Express.js', 'Python', 'Django', 'PostgreSQL',
        'MongoDB', 'Redis', 'RESTful APIs', 'GraphQL', 'Microservices'
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code',
        'Webpack', 'Vite', 'Jest', 'CI/CD'
      ]
    },
    {
      title: 'Design & UX',
      skills: [
        'UI/UX Design', 'Prototyping', 'User Research', 'Wireframing',
        'Design Systems', 'Accessibility', 'Adobe Creative Suite'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications 
            and digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="bg-card-gradient border-border/50 hover-lift slide-up"
              style={{ animationDelay: `${0.2 * categoryIndex}s` }}
            >
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl flex items-center">
                  <span className="w-2 h-2 bg-accent-gradient rounded-full mr-3"></span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-smooth hover:scale-105 text-sm py-2 px-4 rounded-full border border-border/30"
                      style={{ 
                        animationDelay: `${0.1 * skillIndex}s`,
                        animation: 'fade-in 0.6s ease-out forwards'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card-gradient border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Continuous Learning</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              languages, and methodologies to stay at the forefront of web development. 
              Currently diving deep into AI integration, Web3 technologies, and advanced 
              animation frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;