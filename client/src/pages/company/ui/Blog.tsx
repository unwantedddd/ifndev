import { Link } from 'react-router';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

const posts = [
  {
    id: 1,
    title: "Announcing ifndev v2.0: A New Era for Developers",
    excerpt: "We are thrilled to announce the biggest update in our history. Dark mode, new problem solver, and a completely redesigned community hub.",
    category: "Product",
    author: "Yevhen Trisunov",
    date: "Feb 14, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Q1 2026 Engineering Roadmap",
    excerpt: "Here is what our team is working on for the next three months. Spoiler: Rust support is coming.",
    category: "Engineering",
    author: "Team",
    date: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Community Spotlight: How Alex got hired at Google",
    excerpt: "From solving 'Two Sum' to leading a frontend team. Read Alex's inspiring journey.",
    category: "Community",
    author: "Sarah J.",
    date: "Feb 05, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Why we switched from Webpack to Vite",
    excerpt: "A technical deep dive into our build system migration and the performance wins we achieved.",
    category: "Engineering",
    author: "Dev Team",
    date: "Jan 28, 2026",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
];

const Blog = () => {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <div className="flex-1 bg-background text-foreground font-sans p-6 pb-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center md:text-left border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Inside <span className="text-primary">#ifndev</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            News, engineering deep dives, and stories from our team and community.
          </p>
        </div>

        {featuredPost && (
          <div className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-96 overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                 <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded-full">
                        Featured
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        <FaCalendar size={10} /> {featuredPost.date}
                    </span>
                </div>
                
                <Link to={`/blog/${featuredPost.id}`} className="space-y-4 block">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
                        {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {featuredPost.excerpt}
                    </p>
                </Link>

                <div className="pt-6 flex items-center justify-between border-t border-border/50">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">
                            {featuredPost.author[0]}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider">{featuredPost.author}</span>
                    </div>
                    <Link to={`/blog/${featuredPost.id}`} className="text-sm font-bold flex items-center gap-2 text-primary hover:gap-3 transition-all">
                        Read Story <FaArrowRight />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="h-52 overflow-hidden relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-2 py-1 bg-background/90 backdrop-blur text-foreground border border-border text-[10px] font-bold uppercase tracking-widest rounded">
                                {post.category}
                            </span>
                        </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1 space-y-4">
                        <div className="flex items-center gap-3 text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                            <span className="flex items-center gap-1"><FaCalendar size={10} /> {post.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><FaUser size={10} /> {post.author}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground line-clamp-3">
                            {post.excerpt}
                        </p>

                        <div className="mt-auto pt-4 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                            Read More <FaArrowRight size={10} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 text-center border border-border mt-12">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don't miss an update</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Subscribe to our newsletter to get the latest news, engineering stories, and community highlights delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-2">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all">
                    Subscribe
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Blog;