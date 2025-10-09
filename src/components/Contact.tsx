import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background/50 to-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vamos trabalhar juntos? Entre em contato e vamos conversar!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">Email</h3>
                  <a href="mailto:elisiomassaqui8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    elisiomassaqui8@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: [0, 10, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">Telefone</h3>
                  <a href="tel:+244975093074" className="text-muted-foreground hover:text-primary transition-colors">
                    +244 975 093 074
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0"
                  whileHover={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                >
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">Localização</h3>
                  <p className="text-muted-foreground">Luanda, Angola</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            className="glass-card p-8 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                animate={focusedField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all"
                placeholder="Seu nome"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                animate={focusedField === 'email' ? { scale: 1.02 } : { scale: 1 }}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all"
                placeholder="seu@email.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                animate={focusedField === 'message' ? { scale: 1.02 } : { scale: 1 }}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all resize-none"
                placeholder="Sua mensagem..."
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="btn-primary w-full group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enviar Mensagem
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
