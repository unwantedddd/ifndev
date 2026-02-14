import { FaDiscord, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

const Community = () => {
    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6 flex items-center justify-center text-center">
            <div className="max-w-2xl space-y-8">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-6">
                    <FaUsers size={40} />
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight">Join the Club</h1>
                <p className="text-xl text-muted-foreground">
                    Connect with 10,000+ developers. Share your projects, get feedback, and find your next co-founder.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="https://discord.gg/9J5ZQvVFZ6" className="flex items-center gap-2 px-8 py-3 bg-[#5865F2] text-white font-bold rounded-xl shadow-md hover:brightness-110 transition-all">
                        <FaDiscord size={20} /> Join Discord
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Community;