const AboutPage = () => {
    return (   
        <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
            {/* Intro */}
            <div className="flex flex-colmd:flex-row md:items-start items-center gap-10 mb-12">
                <img 
                    src="/images/profile.jpg" 
                    alt='profile' 
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md" 
                />
                <div>
                    <h1 className='text-3xl font-bold text-white mb-2'>Hey, I'm Daniel</h1>
                    <p className="text-gray-300 text-lg">I'm a passionate web developer and content creator who loves building friendly digital experiences.</p>
                </div>
            </div>
            {/* Bio Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                    I am a young professional with a passion for learning and growing as a developer. I was born in Lowell MA and attended The University of Massachusetts Lowell. I moved to Colorado in 2021 where I began my career as a software developer.
                </p>
                {/* Tech Stack*/}
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Tech I Use
                </h2>
                <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                    {[
                        'React',
                            'Next.js',
                            'Tailwind CSS',
                            'Node.js',
                            'Laravel',
                            'Prisma',
                            'MongoDB',
                            'PostgreSQL',
                            'Appwrite',
                            'Docker',

                    ].map((tech) => (
                        <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
                            {tech}
                        </li>
                    ))}
                </ul>

            </div>
        </div>  
    );
};
 
export default AboutPage;