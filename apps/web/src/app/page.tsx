export default function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white mb-4">
                    Welcome to Noraizen
                </h1>
                <p className="text-xl text-slate-300 mb-8">
                    Your Business Operating System
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Get Started
                    </button>
                    <button className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
