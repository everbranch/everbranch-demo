import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactInfo = [
  {
    title: "Email Us",
    content: "hello@everbranch.com",
    description: "Send us a message anytime",
    icon: "📧"
  },
  {
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri 9AM-6PM EST",
    icon: "📞"
  },
  {
    title: "Visit Us",
    content: "123 Tech Street, Digital City",
    description: "Schedule an appointment",
    icon: "📍"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear about your vision 
            and discuss how we can bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center bg-card border-border hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="text-3xl mb-3">{info.icon}</div>
                <CardTitle className="text-lg text-card-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold text-card-foreground">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border shadow-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-card-foreground">Start Your Project</CardTitle>
              <p className="text-muted-foreground">Tell us about your project and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-card-foreground mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-card-foreground mb-2">
                  Project Type
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent">
                  <option value="">Select project type</option>
                  <option value="new-website">New Website</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="cloud-deployment">Cloud Deployment</option>
                  <option value="full-solution">Complete Solution</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  rows={6}
                  className="w-full"
                />
              </div>

              <Button 
                className="w-full py-6 text-lg"
                style={{ backgroundColor: '#2E7D32' }}
              >
                Send Message
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By submitting this form, you agree to our privacy policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}