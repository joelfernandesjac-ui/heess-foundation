import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, BookOpen, Users, TreePine, Droplets, Stethoscope, GraduationCap, Award, ArrowRight } from "lucide-react";
import ImpactCounter from "@/components/ImpactCounter";
import heroImage from "@/assets/hero-nature.jpg";
import volunteersImage from "@/assets/volunteers.jpg";
import educationImage from "@/assets/education.jpg";
import healthImage from "@/assets/health-camp.jpg";

const Home = () => {
  const focusAreas = [
    {
      icon: TreePine,
      title: "Environmental Conservation",
      description: "Protecting ecosystems through tree plantation drives, water conservation, and pollution control initiatives.",
      color: "bg-primary"
    },
    {
      icon: GraduationCap,
      title: "Education & Learning",
      description: "Empowering communities with knowledge through school programs, workshops, and awareness campaigns.",
      color: "bg-secondary"
    },
    {
      icon: Stethoscope,
      title: "Health & Wellness",
      description: "Providing free health checkups, medical camps, and wellness programs for underserved communities.",
      color: "bg-accent"
    },
    {
      icon: Users,
      title: "Community Campaigns",
      description: "Building awareness and driving action through impactful community engagement initiatives.",
      color: "bg-nature"
    }
  ];

  const programs = [
    {
      title: "Tree Plantation Drives",
      description: "Massive afforestation programs to combat climate change and restore green cover.",
      image: volunteersImage,
      impact: "10,000+ trees planted"
    },
    {
      title: "School Awareness Workshops",
      description: "Interactive sessions educating students about environmental responsibility.",
      image: educationImage,
      impact: "5,000+ students reached"
    },
    {
      title: "Free Health Camps",
      description: "Accessible healthcare services for rural and underserved communities.",
      image: healthImage,
      impact: "800+ camps conducted"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "School Teacher",
      content: "HEESS Foundation's workshops have transformed how our students view environmental conservation. They're now passionate advocates for change!",
      image: "/placeholder.svg"
    },
    {
      name: "Rajesh Kumar",
      role: "Village Head",
      content: "The free health camps have been a blessing for our community. Quality healthcare is now accessible to everyone, regardless of their economic status.",
      image: "/placeholder.svg"
    },
    {
      name: "Anjali Mehta",
      role: "Volunteer",
      content: "Being part of HEESS's tree plantation drives has been incredibly rewarding. Together, we're creating a greener future for generations to come.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Building a Better Tomorrow</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Building a Healthier, Smarter,<br />
              <span className="text-nature">and Greener Future for All</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              HEESS Foundation empowers communities through education, health initiatives, and environmental conservation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/volunteer">
                <Button size="lg" className="gradient-nature text-lg px-8 py-6 hover:shadow-hover transition-smooth">
                  Join Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About HEESS Foundation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a non-profit organization dedicated to creating lasting positive change through three core pillars: environmental conservation, quality education, and accessible healthcare. Our holistic approach ensures sustainable development and community empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-card hover:shadow-hover transition-smooth border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To build resilient communities through sustainable environmental practices, quality education, and universal healthcare access.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where every individual has access to a healthy environment, quality education, and comprehensive healthcare.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-nature/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-nature-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, transparency, community empowerment, environmental stewardship, and compassionate care guide everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs addressing the interconnected challenges of environmental sustainability, education, and health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0 overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className={`${area.color} p-6 text-center`}>
                    <area.icon className="w-12 h-12 mx-auto mb-4 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <Link to="/programs" className="text-primary font-medium text-sm inline-flex items-center group-hover:gap-2 transition-smooth">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Impact */}
      <section className="py-20 gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Programs & Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tangible action creating measurable impact in communities across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {program.impact}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Counters */}
          <div className="bg-card rounded-3xl shadow-card p-12">
            <h3 className="font-heading text-3xl font-bold text-center mb-12">Our Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ImpactCounter end={10000} label="Trees Planted" />
              <ImpactCounter end={5000} label="Students Educated" />
              <ImpactCounter end={800} label="Health Camps" />
              <ImpactCounter end={50} label="Villages Reached" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the people whose lives have been transformed by our initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-lg">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Whether through volunteering, donations, or spreading awareness, every contribution counts towards building a better future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/volunteer">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6">
                  Become a Volunteer
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
                  Support Our Cause
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
