import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Droplets, Stethoscope, GraduationCap, Megaphone, Recycle, Wind, Apple } from "lucide-react";
import volunteersImage from "@/assets/volunteers.jpg";
import educationImage from "@/assets/education.jpg";
import healthImage from "@/assets/health-camp.jpg";

const Programs = () => {
  const environmentalPrograms = [
    {
      icon: TreePine,
      title: "Tree Plantation Drives",
      objective: "Combat deforestation and restore green cover in urban and rural areas.",
      activities: ["Mass plantation events", "Sapling distribution", "Urban forestry projects", "Community nurseries"],
      impact: "10,000+ trees planted across 50+ locations"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      objective: "Preserve water resources through sustainable management practices.",
      activities: ["Rainwater harvesting systems", "Watershed management", "Water body restoration", "Community awareness"],
      impact: "25 water bodies restored, 100+ communities reached"
    },
    {
      icon: Recycle,
      title: "Waste Management",
      objective: "Promote proper waste segregation and recycling practices.",
      activities: ["Waste segregation workshops", "Recycling initiatives", "Composting programs", "Clean-up drives"],
      impact: "50 villages trained in waste management"
    },
    {
      icon: Wind,
      title: "Pollution Control",
      objective: "Reduce air and environmental pollution through community action.",
      activities: ["Anti-pollution campaigns", "Green transportation advocacy", "Air quality monitoring", "Public awareness"],
      impact: "200+ educational sessions conducted"
    }
  ];

  const educationPrograms = [
    {
      icon: GraduationCap,
      title: "School Workshops",
      objective: "Build environmental consciousness in young minds through interactive learning.",
      activities: ["Eco-clubs in schools", "Interactive workshops", "Environmental competitions", "Field trips"],
      impact: "5,000+ students across 50 schools"
    },
    {
      icon: Apple,
      title: "Learning Support",
      objective: "Provide educational resources to underprivileged students.",
      activities: ["Book distribution", "Scholarship programs", "Tutoring support", "Digital literacy"],
      impact: "1,000+ students supported annually"
    }
  ];

  const healthPrograms = [
    {
      icon: Stethoscope,
      title: "Free Health Camps",
      objective: "Make quality healthcare accessible to underserved communities.",
      activities: ["General health checkups", "Specialist consultations", "Medicine distribution", "Health awareness"],
      impact: "800+ camps, 20,000+ beneficiaries"
    },
    {
      icon: Megaphone,
      title: "Wellness Awareness",
      objective: "Promote preventive healthcare and healthy lifestyle practices.",
      activities: ["Nutrition workshops", "Mental health sessions", "Fitness programs", "Hygiene education"],
      impact: "15,000+ community members reached"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Programs & Initiatives
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive programs driving sustainable change through environmental action, 
              educational empowerment, and community health initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <TreePine className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Environmental Conservation</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Protecting Our Planet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic initiatives to preserve ecosystems and promote sustainable environmental practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {environmentalPrograms.map((program, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground">{program.objective}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {program.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-sm font-semibold text-primary">{program.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-card">
            <img 
              src={volunteersImage} 
              alt="Environmental conservation volunteers" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="py-20 gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
              <GraduationCap className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Education & Learning</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Empowering Through Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building knowledge and skills for a sustainable, environmentally conscious future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {educationPrograms.map((program, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground">{program.objective}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {program.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 flex-shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-sm font-semibold text-secondary">{program.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-card">
            <img 
              src={educationImage} 
              alt="Educational programs for children" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Health Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <Stethoscope className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Health & Wellness</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Community Health Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Making quality healthcare accessible and promoting wellness in underserved communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {healthPrograms.map((program, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground">{program.objective}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {program.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-sm font-semibold text-accent">{program.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-card">
            <img 
              src={healthImage} 
              alt="Free health camp programs" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Want to Support Our Programs?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Your contribution can help expand these initiatives and reach more communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/volunteer" className="inline-block">
                <button className="gradient-nature text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-hover transition-smooth">
                  Volunteer With Us
                </button>
              </a>
              <a href="/donate" className="inline-block">
                <button className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/90 transition-smooth">
                  Make a Donation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
