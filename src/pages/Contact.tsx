import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Green Street", "Eco City, EC 12345", "India"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Mon-Sat: 9 AM - 6 PM"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@heessfoundation.org", "volunteer@heessfoundation.org", "Response within 24 hours"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 10 AM - 4 PM", "Sunday: Closed"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, url: "https://youtube.com", label: "YouTube" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Have questions about our programs? Want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full gradient-nature flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <Card className="shadow-card border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="volunteer">Volunteering</SelectItem>
                          <SelectItem value="donation">Donations</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-nature">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Social */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Find Us
              </h2>
              
              {/* Map Placeholder */}
              <Card className="shadow-card border-0 mb-8 overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-80 bg-muted flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 leaf-pattern"></div>
                    <div className="relative z-10 text-center">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground">123 Green Street</p>
                      <p className="text-muted-foreground">Eco City, EC 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-card border-0">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-semibold mb-4 text-foreground text-center">
                    Connect With Us
                  </h3>
                  <p className="text-muted-foreground text-center mb-6 text-sm">
                    Follow our journey and stay updated with our latest initiatives
                  </p>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How can I volunteer with HEESS Foundation?",
                  a: "Visit our Volunteer page to fill out an application form. We'll contact you with available opportunities that match your interests and availability."
                },
                {
                  q: "Are donations tax-deductible?",
                  a: "Yes! HEESS Foundation is a registered non-profit organization. All donations are 100% tax-deductible. We provide official receipts for tax purposes."
                },
                {
                  q: "Can my organization partner with HEESS?",
                  a: "Absolutely! We welcome partnerships with corporations, NGOs, and educational institutions. Contact us to discuss collaboration opportunities."
                },
                {
                  q: "How can I organize a tree plantation drive in my area?",
                  a: "Reach out to us with details about your location and preferred date. We'll provide saplings, guidance, and support to make your drive successful."
                }
              ].map((faq, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-0">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Subscribe to our newsletter for updates on programs, events, and success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
