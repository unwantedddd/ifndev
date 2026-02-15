import { useAuth } from "@/pages/auth/model/useAuth";
import { useLogout } from "@/pages/auth/model/useLogOut";
import { Button } from "@/shared/ui/base";
import {
    FaMapMarkerAlt,
    FaLink,
    FaCalendarAlt,
    FaEdit,
    FaSignOutAlt,
    FaCode,
    FaFileAlt,
    FaCog,
    FaUser
} from "react-icons/fa";
import { useState } from "react";
import { Navigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePage = () => {
    const { data, isLoading, isAuthenticated } = useAuth();
    const { logout, isLoading: isLoggingOut } = useLogout();
    const [activeTab, setActiveTab] = useState<'overview' | 'settings'>('overview');

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">Loading profile...</div>;
    }

    if (!isAuthenticated || !data?.user) {
        return <Navigate to="/auth/log-in" />;
    }

    const stats = [
        { label: "Reputation", value: 1250 },
        { label: "Problems Solved", value: 42 },
        { label: "Articles", value: 5 },
    ];

    return (
        <div className="flex-1 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="relative mb-6 flex flex-col md:flex-row items-end md:items-end gap-6">
                    <div className="relative group">
                        <div className="h-32 w-32 rounded-full ring-4 ring-background bg-card overflow-hidden relative">
                            <div className="h-32 w-32 rounded-full ring-4 ring-background bg-card overflow-hidden relative">
                                <Avatar className="h-full w-full">
                                    <AvatarImage
                                        src={data?.user?.avatar}
                                        className="object-cover"
                                        alt="User Avatar"
                                    />

                                    <AvatarFallback className="bg-muted flex items-center justify-center text-muted-foreground">
                                        <FaUser className="h-12 w-12" />
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                            <FaEdit size={12} />
                        </button>
                    </div>

                    <div className="flex-1 mb-2">
                        <h1 className="text-3xl font-bold text-foreground">{data.user.username}</h1>
                        <p className="text-muted-foreground font-medium">@{data.user.username || data.user.email}</p>
                    </div>

                    <div className="flex gap-3 mb-2">
                        <Button className="gap-2 border-border bg-background">
                            <FaCog /> Edit Profile
                        </Button>
                        <Button
                            onClick={() => logout()}
                            disabled={isLoggingOut}
                            className="gap-2 bg-destructive/10 text-destructive hover:bg-destructive hover:text-white border-none"
                        >
                            <FaSignOutAlt /> {isLoggingOut ? "..." : "Logout"}
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="space-y-4">
                            <p className="text-sm text-foreground/80 leading-relaxed">
                                Full-stack developer passionate about React, Node.js, and clean code. Building the future of dev communities.
                            </p>

                            <div className="space-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-primary" />
                                    <span>Kyiv, Ukraine</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLink className="text-primary" />
                                    <a href="#" className="hover:text-primary transition-colors">github.com/ifndev</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-primary" />
                                    <span>Joined February 2026</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 py-4 border-y border-border">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                                    <div className="text-[10px] uppercase text-muted-foreground font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-6">
                        <div className="flex items-center gap-6 border-b border-border">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`pb-3 text-sm font-medium transition-all relative ${activeTab === 'overview'
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <span className="flex items-center gap-2"><FaFileAlt /> Overview</span>
                                {activeTab === 'overview' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />}
                            </button>

                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`pb-3 text-sm font-medium transition-all relative ${activeTab === 'settings'
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <span className="flex items-center gap-2"><FaCog /> Settings</span>
                                {activeTab === 'settings' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />}
                            </button>
                        </div>

                        <div className="min-h-75">
                            {activeTab === 'overview' ? (
                                <div className="space-y-6">
                                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                            <span className="w-1 h-6 bg-primary rounded-full" />
                                            Pinned Projects
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[1, 2].map((i) => (
                                                <div key={i} className="p-4 rounded-lg border border-border/50 bg-secondary/10 hover:border-primary/50 transition-colors cursor-pointer">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className="font-bold text-foreground">IFN Dev Platform</h4>
                                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-500 border border-green-500/20">PUBLIC</span>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground mb-4">
                                                        A modern platform for developers to share knowledge and solve problems.
                                                    </p>
                                                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-400" /> TypeScript</span>
                                                        <span className="flex items-center gap-1"><FaCode /> 1.2k stars</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-bold mb-4">Recent Contribution</h3>
                                        <div className="flex flex-col gap-4">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="flex gap-4 items-start pb-4 border-b border-border last:border-0 last:pb-0">
                                                    <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                                                    <div>
                                                        <p className="text-sm font-medium">Solved "Two Sum" problem</p>
                                                        <p className="text-xs text-muted-foreground">2 hours ago in <span className="text-primary">Algorithms</span></p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-card border border-border rounded-xl p-6 shadow-sm max-w-xl">
                                    <h3 className="text-lg font-bold mb-6">Account Settings</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase text-muted-foreground">User Name</label>
                                                <input type="text" defaultValue={data.user.username} className="w-full p-2 rounded-md bg-background border border-border focus:ring-2 focus:ring-primary/20 outline-none" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase text-muted-foreground">Email</label>
                                            <input type="email" defaultValue={data.user.email} disabled className="w-full p-2 rounded-md bg-secondary/50 border border-border text-muted-foreground cursor-not-allowed" />
                                        </div>
                                        <div className="pt-4">
                                            <Button>Save Changes</Button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;