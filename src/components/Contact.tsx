
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // When Supabase is connected, replace this with actual Supabase code
      // For now, let's simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's start a conversation</p>
        
        <div className="glass p-8 rounded-xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Mail className="text-apple-blue" size={24} />
                <h3 className="text-xl font-bold">Get in Touch</h3>
              </div>
              <p className="mb-4">
                Interested in working together or have a question? Send me a message and I'll get back to you as soon as possible.
              </p>
              <p className="text-apple-gray">
                Alternatively, you can email me directly at <a href="mailto:your.email@example.com" className="text-apple-blue hover:underline">your.email@example.com</a>
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-white/10"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-white/10"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-secondary/50 border-white/10 resize-none"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
