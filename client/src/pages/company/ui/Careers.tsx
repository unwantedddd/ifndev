import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const jobs = [
    { id: 1, title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
    { id: 2, title: "Product Designer", department: "Design", location: "Kyiv, Ukraine", type: "Full-time" },
    { id: 3, title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Contract" },
    { id: 4, title: "Community Manager", department: "Marketing", location: "London, UK", type: "Part-time" },
];

const Careers = () => {
    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6 pb-20">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight">Join the <span className="text-primary">#ifndev</span> team</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        We are building the future of developer communities. Join us in our mission to connect coders worldwide.
                    </p>
                </div>

                <div className="grid gap-4">
                    {jobs.map((job) => (
                        <div key={job.id} className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-card border border-border rounded-2xl shadow-sm hover:border-primary/50 transition-all cursor-pointer">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                    <span className="bg-secondary px-2 py-1 rounded text-secondary-foreground">{job.department}</span>
                                    <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.location}</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <button className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                    Apply Now <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Careers;