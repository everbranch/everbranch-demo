import logoImage from 'figma:asset/484cb006e6721962e5838cc530957797be426c0e.png';

// EverBranch Logo Component
const EverBranchLogo = () => (
  <div className="flex items-center space-x-3">
    <img 
      src={logoImage} 
      alt="EverBranch Logo" 
      className="w-6 h-6"
    />
    <span className="text-lg font-semibold text-secondary-foreground">EverBranch</span>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <EverBranchLogo />
            <p className="text-muted-foreground text-sm leading-relaxed">
              End-to-end web solutions that help your business grow. 
              From design to deployment, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                💻
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Cloud Deployment</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Full-Stack Development</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-secondary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-secondary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Support Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 EverBranch. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}