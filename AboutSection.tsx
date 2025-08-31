import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on quality. Every project receives our full attention to detail.",
    icon: "⭐"
  },
  {
    title: "Innovation",
    description: "Using cutting-edge technologies to build future-ready digital solutions.",
    icon: "🚀"
  },
  {
    title: "Partnership",
    description: "We work as your trusted partner, not just a service provider.",
    icon: "🤝"
  },
  {
    title: "Results",
    description: "Focused on delivering measurable results that grow your business.",
    icon: "📈"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              About EverBranch
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a passionate team of designers and developers who believe in the power 
              of great digital experiences. Since our founding, we've helped businesses 
              transform their online presence with beautiful, functional websites and 
              reliable cloud infrastructure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our end-to-end approach means you get everything you need in one place - 
              from initial concept and design to deployment and ongoing maintenance. 
              We're not just building websites; we're building digital foundations 
              for your success.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-2xl lg:text-3xl font-bold mb-1"
                    style={{ color: '#2E7D32' }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NTY1MTkyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team collaboration"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Our Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and help us deliver 
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-border hover:shadow-md transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="text-3xl">{value.icon}</div>
                  <h4 className="font-semibold text-card-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}