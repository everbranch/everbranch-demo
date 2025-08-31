import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "Website Design",
    description: "Custom, responsive designs that captivate your audience and drive conversions.",
    features: ["Custom UI/UX Design", "Responsive Layout", "Brand Integration", "User Experience Focus"],
    icon: "🎨"
  },
  {
    title: "Cloud Deployment",
    description: "Reliable, scalable cloud hosting solutions with 99.9% uptime guarantee.",
    features: ["Auto-scaling", "Global CDN", "SSL Security", "Performance Monitoring"],
    icon: "☁️"
  },
  {
    title: "Full-Stack Development",
    description: "Complete web applications built with modern technologies and best practices.",
    features: ["Modern Frameworks", "Database Design", "API Integration", "Performance Optimization"],
    icon: "⚡"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to bring your digital vision to life, 
            from concept to deployment and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#2E7D32' }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full hover:bg-accent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-sm border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-6">
                Our Process
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1"
                    style={{ backgroundColor: '#2E7D32' }}
                  >
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Discovery & Planning</h4>
                    <p className="text-muted-foreground text-sm">We understand your goals and create a detailed project roadmap.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1"
                    style={{ backgroundColor: '#2E7D32' }}
                  >
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Design & Development</h4>
                    <p className="text-muted-foreground text-sm">Custom design and robust development tailored to your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1"
                    style={{ backgroundColor: '#2E7D32' }}
                  >
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Deploy & Launch</h4>
                    <p className="text-muted-foreground text-sm">Seamless deployment to the cloud with ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NTY1NzcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cloud computing servers"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}