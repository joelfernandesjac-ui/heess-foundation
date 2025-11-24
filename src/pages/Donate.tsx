import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreePine, Heart, Users, Award, DollarSign, CreditCard, Building, QrCode } from "lucide-react";
import ImpactCounter from "@/components/ImpactCounter";

const Donate = () => {
  const impactAreas = [
    {
      icon: TreePine,
      title: "Environmental Projects",
      description: "Fund tree plantations, water conservation, and pollution control initiatives.",
      allocation: "40%"
    },
    {
      icon: Users,
      title: "Education Programs",
      description: "Support school workshops, scholarships, and learning resources.",
      allocation: "35%"
    },
    {
      icon: Heart,
      title: "Health Initiatives",
      description: "Enable free health camps, medical equipment, and wellness programs.",
      allocation: "20%"
    },
    {
      icon: Award,
      title: "Administrative Costs",
      description: "Maintain operations and ensure program effectiveness.",
      allocation: "5%"
    }
  ];

  const donationTiers = [
    {
      amount: "$25",
      title: "Supporter",
      impact: "Plant 10 trees or provide books for 2 students",
      icon: "🌱"
    },
    {
      amount: "$50",
      title: "Contributor",
      impact: "Fund health check-ups for 5 families",
      icon: "💚"
    },
    {
      amount: "$100",
      title: "Champion",
      impact: "Sponsor an entire environmental workshop",
      icon: "🌟"
    },
    {
      amount: "$250",
      title: "Guardian",
      impact: "Support a complete health camp for 50+ people",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Your generous contribution helps us create lasting positive change through 
              environmental conservation, education, and community health programs.
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Award className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground font-medium">100% Tax Deductible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Your Donation Creates Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how your contributions have helped us achieve measurable results.
            </p>
          </div>

          <div className="bg-card rounded-3xl shadow-card p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ImpactCounter end={10000} label="Trees Planted" />
              <ImpactCounter end={5000} label="Students Educated" />
              <ImpactCounter end={800} label="Health Camps" />
              <ImpactCounter end={50} label="Villages Reached" />
            </div>
          </div>

          {/* Fund Allocation */}
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
              Transparent Fund Usage
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in complete transparency. Here's how your donations are utilized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full gradient-nature flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    {area.allocation}
                  </div>
                  <h4 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {area.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Choose Your Impact Level
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every contribution, big or small, makes a meaningful difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTiers.map((tier, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{tier.icon}</div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    {tier.amount}
                  </div>
                  <h4 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    {tier.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {tier.impact}
                  </p>
                  <Button className="w-full gradient-nature">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="shadow-card border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Custom Amount
                </h3>
                <p className="text-muted-foreground mb-6">
                  Choose your own donation amount that fits your budget and impact goals.
                </p>
                <Button size="lg" className="gradient-nature">
                  Enter Custom Amount
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Multiple Ways to Donate
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the donation method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-card hover:shadow-hover transition-smooth border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  Online Payment
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Credit/Debit card, UPI, Net Banking - Secure & Instant
                </p>
                <Button variant="outline" className="w-full">
                  Pay Online
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  Bank Transfer
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Direct transfer to our bank account
                </p>
                <div className="text-left bg-muted p-4 rounded-lg text-xs space-y-1">
                  <div><span className="font-semibold">Bank:</span> Green Bank</div>
                  <div><span className="font-semibold">Account:</span> 123456789</div>
                  <div><span className="font-semibold">IFSC:</span> GRBN0001234</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-nature/20 flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8 text-nature-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  Scan QR Code
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick donation via UPI
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="w-32 h-32 bg-background rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">QR Code</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monthly Giving */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Become a Monthly Donor
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Regular monthly contributions provide us with stable funding to plan and execute 
              long-term initiatives. Join our community of sustaining donors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-heading font-bold text-primary-foreground mb-2">$10/mo</div>
                <div className="text-primary-foreground/80 text-sm">Plant 4 trees monthly</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-heading font-bold text-primary-foreground mb-2">$25/mo</div>
                <div className="text-primary-foreground/80 text-sm">Support education programs</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-heading font-bold text-primary-foreground mb-2">$50/mo</div>
                <div className="text-primary-foreground/80 text-sm">Fund monthly health camps</div>
              </div>
            </div>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Monthly Giving
            </Button>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-12">
              Donor Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-card border-0">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Green Partner</h3>
                  <p className="text-sm text-muted-foreground">$1,000+ annual contribution</p>
                </CardContent>
              </Card>
              <Card className="shadow-card border-0">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🌳</div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Eco Champion</h3>
                  <p className="text-sm text-muted-foreground">$5,000+ annual contribution</p>
                </CardContent>
              </Card>
              <Card className="shadow-card border-0">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🏅</div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Sustainability Leader</h3>
                  <p className="text-sm text-muted-foreground">$10,000+ annual contribution</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
