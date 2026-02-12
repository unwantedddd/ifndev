import { Logo } from '@/shared/ui/base';

const mockData = {
	articles: [
		{ id: 1, title: 'Deep Dive into Rust Ownership', tags: ['Rust', 'Memory'] },
		{ id: 2, title: 'Deep Dive into Rust Ownership', tags: ['Rust', 'Memory'] },
		{ id: 3, title: 'Deep Dive into Rust Ownership', tags: ['Rust', 'Memory'] },
	],
	challenges: [
		{ id: 1, title: 'Two Sum II', difficulty: 'Medium' },
		{ id: 2, title: 'Two Sum II', difficulty: 'Medium' },
		{ id: 3, title: 'Two Sum II', difficulty: 'Medium' },
	],
	discussions: [
		{ id: 1, title: 'Best practices for API design?', replies: 25, user: 'Alex' },
		{ id: 2, title: 'Best practices for API design?', replies: 25, user: 'Ben' },
		{ id: 3, title: 'Best practices for API design?', replies: 25, user: 'Charlie' },
	],
};

const Home = () => {
	return (
		<div className="flex-1 bg-background text-foreground font-sans px-4 py-12 flex flex-col items-center">

			<div className="max-w-6xl w-full mb-16 mt-8">
				<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
					Unlock Your Potential <br />
					with <Logo className='inline text-5xl md:text-6xl text-primary' />.
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
					The community platform for developers to learn,
					compete, and connect.
				</p>
			</div>

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="bg-card text-card-foreground p-6 rounded-2xl shadow-sm border border-border">
					<h2 className="text-xl font-bold mb-6 text-card-foreground">Trending Articles</h2>
					<div className="space-y-6">
						{mockData.articles.map((item, index) => (
							<div key={`${item.id}-${index}`} className="border-b-2 border-border last:border-0 pb-4 last:pb-0">
								<h3 className="font-semibold text-foreground mb-2 hover:text-primary cursor-pointer transition-colors">
									{item.title}
								</h3>
								<div className="flex gap-2">
									{item.tags.map(tag => (
										<span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-md">
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-card text-card-foreground p-6 rounded-2xl shadow-sm border border-border">
					<h2 className="text-xl font-bold mb-6 text-card-foreground">Daily Challenges</h2>
					<div className="space-y-6">
						{mockData.challenges.map((item, index) => (
							<div key={`${item.id}-${index}`} className="flex justify-between items-center border-b-2 border-border last:border-0 pb-4 last:pb-0">
								<div>
									<h3 className="font-bold text-foreground">{item.title}</h3>
									<p className="text-sm text-muted-foreground mt-1">
										Difficulty: <span className="text-primary font-medium bg-secondary px-2 py-0.5 rounded text-xs">{item.difficulty}</span>
									</p>
								</div>
								<button className="px-5 py-2 rounded-lg border border-input text-primary bg-background font-bold text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
									Solve
								</button>
							</div>
						))}
					</div>
				</div>

				<div className="bg-card text-card-foreground p-6 rounded-2xl shadow-sm border border-border">
					<h2 className="text-xl font-bold mb-6 text-card-foreground">Active Discussions</h2>
					<div className="space-y-6">
						{mockData.discussions.map((item, index) => (
							<div key={`${item.id}-${index}`} className="flex gap-4 border-b-2 border-border last:border-0 pb-4 last:pb-0">
								<div className="w-12 h-12 rounded-full bg-muted border border-border overflow-hidden">
									<img
										src={`https://i.pravatar.cc/150?u=${index + 10}`}
										alt="Avatar"
										className="w-full h-full object-cover grayscale opacity-80"
									/>
								</div>
								<div>
									<h3 className="font-semibold text-foreground leading-tight mb-1 hover:text-primary cursor-pointer transition-colors">
										{item.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{item.replies} replies
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

			</div>
		</div>
	);
};

export default Home;