import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Users, Heart, Award, Clock, TreePine, GraduationCap, Stethoscope, Camera } from "lucide-react";
import { toast } from "sonner";
import volunteersImage from "@/assets/volunteers.jpg";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    interests: [] as string[],
    availability: "",
    experience: "",
    message: ""
  });

  const roles = [
    {
      icon: TreePine,
      title: "Environmental Volunteer",
      description: "Participate in tree plantation drives, clean-up campaigns, and conservation activities.",
      commitment: "Flexible - Event-based"
    },
    {
      icon: GraduationCap,
      title: "Education Coordinator",
      description: "Help organize and conduct workshops in schools and communities.",
      commitment: "4-8 hours per month"
    },
    {
      icon: Stethoscope,
      title: "Health Camp Assistant",
      description: "Support medical professionals during health camps and wellness programs.",
      commitment: "Event-based"
    },
    {
      icon: Camera,
      title: "Content Creator",
      description: "Document our initiatives through photography, videography, or writing.",
      commitment: "2-4 hours per week"
    }
  ];

  const benefits = [
    { icon: Heart, title: "Make a Difference", description: "Create tangible positive impact in communities" },
    { icon: Users, title: "Build Connections", description: "Meet like-minded individuals passionate about change" },
    { icon: Award, title: "Gain Experience", description: "Develop skills in sustainability and community work" },
    { icon: Clock, title: "Flexible Timing", description: "Choose activities that fit your schedule" }
  ];

  const interestOptions = [
    "Environmental Conservation",
    "Education & Teaching",
    "Health & Wellness",
    "Community Outreach",
    "Event Organization",
    "Content Creation",
    "Technical Support",
    "Fundraising"
  ];

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received! We'll contact you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      location: "",
      interests: [],
      availability: "",
      experience: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${volunteersImage})` }}
        >
          <div className="absolute inset-0 gradient-hero"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Volunteer With Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Join our community of changemakers and contribute your time, skills, 
            and passion to create a better world.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Why Volunteer with HEESS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Volunteering with HEESS is more than just giving your time—it's about being part of a movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the role that best matches your interests and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-2xl gradient-nature flex items-center justify-center flex-shrink-0">
                      <role.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                        {role.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {role.description}
                      </p>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium">{role.commitment}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Join Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get in touch with you about volunteer opportunities.
              </p>
            </div>

            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        required
                        min="16"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="18"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="City, State"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Select value={formData.availability} onValueChange={(value) => setFormData({ ...formData, availability: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                        <SelectItem value="events-only">Events Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Areas of Interest * (Select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {interestOptions.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={() => handleInterestChange(interest)}
                          />
                          <label htmlFor={interest} className="text-sm text-foreground cursor-pointer">
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Previous Volunteering Experience (Optional)</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="Tell us about any previous volunteering or relevant experience"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Why do you want to volunteer? *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your motivation for joining HEESS Foundation"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-nature">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary-foreground">A</span>
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-heading text-primary-foreground mb-6 italic">
              "Volunteering with HEESS has been one of the most rewarding experiences of my life. 
              I've not only made a difference but also grown personally and professionally."
            </blockquote>
            <div className="text-primary-foreground/90">
              <div className="font-semibold">Anjali Mehta</div>
              <div className="text-sm">Volunteer since 2020</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
