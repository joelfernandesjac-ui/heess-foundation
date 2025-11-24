import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart, Calendar, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    { icon: Heart, title: "Compassion", description: "We approach every initiative with empathy and care for all living beings." },
    { icon: Target, title: "Impact-Driven", description: "Every action is measured by its positive effect on communities and environment." },
    { icon: Users, title: "Community First", description: "We empower communities to become leaders of their own transformation." },
    { icon: Award, title: "Transparency", description: "Open communication and accountable practices in all our operations." },
  ];

  const timeline = [
    { year: "2018", event: "Foundation Established", description: "HEESS Foundation was born with a vision to create sustainable change." },
    { year: "2019", event: "First Major Initiative", description: "Launched our flagship tree plantation program, planting 1,000 trees." },
    { year: "2020", event: "Health Program Launch", description: "Started free health camps serving 100+ families monthly." },
    { year: "2021", event: "Education Expansion", description: "Reached 50 schools with environmental awareness workshops." },
    { year: "2022", event: "10,000 Trees Milestone", description: "Celebrated planting our 10,000th tree with community volunteers." },
    { year: "2023", event: "Regional Recognition", description: "Received state-level award for environmental conservation efforts." },
  ];

  const team = [
    { name: "Balakrishna Rao", role: "President", description: "Environmental scientist with 20+ years of conservation experience." },
    { name: "Dr. Parvez Ahmed Shaikh", role: "Secretary", description: "Education specialist focused on community empowerment." },
    { name: "Dr. Mukhtar Ahmed Shaikh", role: "Treasurer", description: "Medical professional dedicated to accessible healthcare." },
    { name: "Salma", role: "Community Outreach", description: "Building bridges between HEESS and local communities." },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              About HEESS Foundation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              A holistic approach to creating sustainable positive change through environmental conservation, 
              education, and community health initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                HEESS Foundation was born from a simple yet powerful realization: true community development 
                requires a holistic approach that addresses environmental health, education, and physical wellbeing 
                simultaneously. These three pillars are interconnected, and progress in one area supports growth in the others.
              </p>
              <p>
                Founded in 2018 by a group of passionate environmentalists, educators, and healthcare professionals, 
                HEESS has grown from a small local initiative into a recognized force for positive change. Our name 
                represents our core values: <span className="text-primary font-semibold">Holistic</span> approaches, 
                <span className="text-primary font-semibold">Environmental</span> consciousness, 
                <span className="text-primary font-semibold">Educational</span> empowerment, and 
                <span className="text-primary font-semibold">Sustainable</span> solutions.
              </p>
              <p>
                Today, we work with communities across the region, implementing programs that create lasting impact. 
                From planting thousands of trees to conducting free health camps and environmental education workshops, 
                every initiative is designed to empower communities to take charge of their own sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">HEESS Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our approach is rooted in the belief that environmental health, education, and physical wellness 
              are interconnected pillars of thriving communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that mark our growth and the expanding impact of our mission.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-card relative z-10">
                      <Calendar className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <Card className="flex-grow shadow-card hover:shadow-hover transition-smooth border-0">
                      <CardContent className="p-6">
                        <div className="text-sm font-semibold text-primary mb-1">{item.year}</div>
                        <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                          {item.event}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals united by a shared passion for creating positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary">{member.name[0]}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-1 text-foreground">
                    {member.name}
                  </h3>
                  <div className="text-sm text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-heading font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Transparent Operations</div>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-heading font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Active Volunteers</div>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-heading font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Recognition Awards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
