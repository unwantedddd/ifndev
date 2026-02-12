import { useState } from 'react';
import { Link } from 'react-router';

const CreateProblem = () => {
  const [testCases, setTestCases] = useState([{ input: '', output: '' }]);

  const addTestCase = () => {
    setTestCases([...testCases, { input: '', output: '' }]);
  };

  const removeTestCase = (index: number) => {
    const newCases = testCases.filter((_, i) => i !== index);
    setTestCases(newCases);
  };

  return (
    <div className="flex-1 bg-background text-foreground font-sans p-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="mb-6">
           <Link to="/problems/test" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
             ← Back to Problems
           </Link>
        </div>

        <div className="flex items-center justify-between mb-8">
           <h1 className="text-3xl font-bold tracking-tight">Create New Problem</h1>
           <div className="flex gap-3">
             <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
               Save Draft
             </button>
             <button className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium shadow-sm transition-colors">
               Publish Problem
             </button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold mb-4">General Information</h2>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Challenge Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Reverse Linked List" 
                  className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Difficulty</label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tags</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Array, DP (comma separated)" 
                    className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                 <h2 className="text-lg font-semibold">Description</h2>
                 <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Markdown Supported</span>
              </div>
              <textarea 
                className="w-full p-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring font-mono text-sm leading-relaxed resize-y"
                placeholder="Write the problem statement here.&#10;&#10;Example:&#10;Given an array of integers nums..."
              ></textarea>
            </div>

          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Test Cases</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Define inputs and expected outputs for the auto-grader.
              </p>

              <div className="space-y-4">
                {testCases.map((tc, index) => (
                  <div key={index} className="p-3 bg-secondary/30 rounded-lg border border-border relative group">
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => removeTestCase(index)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      >
                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <div className="space-y-2">
                       <div>
                         <span className="text-xs font-bold text-muted-foreground uppercase">Input</span>
                         <input 
                            type="text" 
                            className="w-full mt-1 px-2 py-1 text-sm bg-background border border-input rounded focus:outline-none focus:border-primary"
                            placeholder="nums = [2,7,11,15]" 
                         />
                       </div>
                       <div>
                         <span className="text-xs font-bold text-muted-foreground uppercase">Output</span>
                         <input 
                            type="text" 
                            className="w-full mt-1 px-2 py-1 text-sm bg-background border border-input rounded focus:outline-none focus:border-primary"
                            placeholder="[0, 1]" 
                         />
                       </div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={addTestCase}
                className="w-full mt-4 py-2 border border-dashed border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                Add Test Case
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Constraints</h2>
              <div className="space-y-3">
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Time Limit</span>
                    <span className="font-mono bg-secondary px-2 py-0.5 rounded">1000 ms</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Memory Limit</span>
                    <span className="font-mono bg-secondary px-2 py-0.5 rounded">256 MB</span>
                 </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateProblem;