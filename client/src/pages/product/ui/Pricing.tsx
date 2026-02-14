import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    description: "Perfect for side projects and learning.",
    features: ["Unlimited public projects", "Community support", "Basic analytics", "1GB storage"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For professional developers and freelancers.",
    features: ["Unlimited private projects", "Priority support", "Advanced analytics", "20GB storage", "Custom domain"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    description: "Collaborate with your team effectively.",
    features: ["Unlimited team members", "Dedicated success manager", "SSO Authentication", "100GB storage", "Audit logs"],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="flex-1 bg-background text-foreground font-sans p-6 pb-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Simple, transparent <span className="text-primary">pricing</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-primary bg-card shadow-xl scale-105 z-10' : 'border-border bg-card/50 shadow-sm'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-muted-foreground uppercase tracking-widest mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <FaCheck size={10} className="text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-95 ${plan.popular ? 'bg-primary text-primary-foreground hover:brightness-110 shadow-md' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;