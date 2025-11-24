import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, Droplets, Wind, TreeDeciduous, Recycle, Users, GraduationCap, Heart } from "lucide-react";

const Awareness = () => {
  const campaigns = [
    {
      icon: Wind,
      title: "Air Pollution Awareness",
      description: "Educating communities about the health impacts of air pollution and promoting cleaner alternatives.",
      initiatives: [
        "Public workshops on air quality",
        "Anti-firecracker campaigns",
        "Green transportation advocacy",
        "Indoor air quality awareness"
      ],
      reach: "50,000+ people educated"
    },
    {
      icon: Droplets,
      title: "Clean Water Campaign",
      description: "Raising awareness about water conservation and preventing water pollution.",
      initiatives: [
        "Water testing drives",
        "Rainwater harvesting promotion",
        "River cleaning initiatives",
        "Water-saving techniques training"
      ],
      reach: "100+ water bodies protected"
    },
    {
      icon: TreeDeciduous,
      title: "Climate Change Education",
      description: "Building understanding of climate change impacts and solutions through community engagement.",
      initiatives: [
        "Climate literacy workshops",
        "Carbon footprint calculators",
        "Sustainable lifestyle promotion",
        "Youth climate summits"
      ],
      reach: "200+ educational sessions"
    },
    {
      icon: Recycle,
      title: "Waste Segregation Drives",
      description: "Teaching proper waste management and promoting a circular economy mindset.",
      initiatives: [
        "Door-to-door awareness",
        "School segregation programs",
        "Composting demonstrations",
        "Plastic-free challenges"
      ],
      reach: "75 communities trained"
    },
    {
      icon: GraduationCap,
      title: "School Eco-Clubs",
      description: "Empowering students to become environmental champions in their communities.",
      initiatives: [
        "Eco-club establishment",
        "Environmental competitions",
        "Nature walks and field trips",
        "Student-led campaigns"
      ],
      reach: "50 schools, 5,000+ students"
    },
    {
      icon: Heart,
      title: "Health Hygiene Workshops",
      description: "Promoting personal and community hygiene for better health outcomes.",
      initiatives: [
        "Handwashing campaigns",
        "Sanitation awareness",
        "Nutrition education",
        "Mental health sensitization"
      ],
      reach: "10,000+ community members"
    }
  ];

  const infographics = [
    {
      title: "Plastic Pollution Facts",
      stats: [
        "8 million tons of plastic enter oceans annually",
        "Single-use plastics take 500+ years to decompose",
        "91% of plastic isn't recycled",
        "1 million marine animals die yearly from plastic"
      ]
    },
    {
      title: "Tree Plantation Impact",
      stats: [
        "1 mature tree absorbs 48 lbs of CO2 per year",
        "Trees reduce urban temperatures by 5-10°F",
        "A single tree provides oxygen for 4 people",
        "Urban trees increase property values by 15%"
      ]
    },
    {
      title: "Water Conservation",
      stats: [
        "Only 0.5% of Earth's water is usable freshwater",
        "A dripping tap wastes 3,000 liters annually",
        "Rainwater harvesting can meet 50% of water needs",
        "1.1 billion people lack access to clean water"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Megaphone className="w-5 h-5 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Building Awareness</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Awareness Campaigns
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Transforming communities through knowledge, education, and collective action 
              for a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Our Campaign Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-faceted awareness programs driving behavioral change and community action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl gradient-nature flex items-center justify-center mb-6">
                    <campaign.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                    {campaign.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {campaign.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Initiatives:</h4>
                    <ul className="space-y-2">
                      {campaign.initiatives.map((initiative, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                          {initiative}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{campaign.reach}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infographics Section */}
      <section className="py-20 gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Knowledge That Drives Change
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Facts and figures that highlight the urgency of environmental action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infographics.map((info, index) => (
              <Card key={index} className="shadow-card border-0 bg-card">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-center mb-8 text-foreground">
                    {info.title}
                  </h3>
                  <div className="space-y-6">
                    {info.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-primary">{idx + 1}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {stat}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Collective Impact of Awareness
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-5xl font-heading font-bold mb-2">50K+</div>
                <div className="text-primary-foreground/80">People Educated</div>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold mb-2">200+</div>
                <div className="text-primary-foreground/80">Workshops Conducted</div>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold mb-2">75</div>
                <div className="text-primary-foreground/80">Communities Engaged</div>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold mb-2">50</div>
                <div className="text-primary-foreground/80">School Partnerships</div>
              </div>
            </div>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Through education and awareness, we're building a movement of informed citizens 
              committed to environmental stewardship and sustainable living.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card border-0 overflow-hidden">
              <CardContent className="p-12 text-center">
                <Megaphone className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Help Us Spread Awareness
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Partner with us to organize awareness campaigns in your community, 
                  school, or organization. Together, we can create lasting change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="inline-block">
                    <button className="gradient-nature text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-hover transition-smooth">
                      Partner With Us
                    </button>
                  </a>
                  <a href="/volunteer" className="inline-block">
                    <button className="bg-muted text-foreground px-8 py-4 rounded-full font-semibold hover:bg-muted/80 transition-smooth">
                      Join as Volunteer
                    </button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awareness;
