import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="w-full px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Adrien O&apos;Hana
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI Engineer &
              <br />
              <span className="text-blue-600 dark:text-blue-400">Data Scientist</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Expert in Natural Language Processing with 4+ years of experience leading AI projects 
              across luxury, defense, and enterprise sectors. Specialized in LLM development, 
              DevOps, and scalable AI solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/adrien-ohana.jpg"
                alt="Adrien O'Hana"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Expert in Natural Language Processing and Data Science with a Master&apos;s degree from EPFL 
                in Robotics and Data Science. I specialize in leading AI projects across luxury, defense, 
                and enterprise sectors, with expertise ranging from backend development to project management.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Currently managing AI initiatives at Effixis, where I&apos;ve led numerous NLP projects, 
                built LLM-based solutions, and developed scalable AI systems for major clients.
              </p>
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Education</h5>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">MSc Robotics with Data Science Minor</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">EPFL (2023)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Bachelor&apos;s Degree in Microengineering</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">EPFL (2020)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Applied Data Science Certificate</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">EPFL Extension School (2020)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI & Machine Learning</h5>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['LLM', 'NLP', 'PyTorch', 'TensorFlow', 'spaCy', 'Deep Learning', 'MLOps'].map((skill) => (
                      <span 
                        key={skill}
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Development & DevOps</h5>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Python', 'Terraform', 'AWS', 'Azure', 'Docker', 'API Development'].map((skill) => (
                      <span 
                        key={skill}
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Languages</h5>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p><span className="font-medium">English & French:</span> Native</p>
                    <p><span className="font-medium">German, Portuguese, Spanish:</span> Limited working proficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Manager & AI Engineer
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Effixis, an Artefact Company</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Leading AI initiatives and managing cross-functional teams. Specialized in NLP projects 
                across multiple sectors, with expertise in LLM development and deployment.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Recent Projects:</h5>
                  <ul className="space-y-1">
                    <li>• Tech Lead - Large-scale content generation platform</li>
                    <li>• GenAI adoption roadmap for R&D department</li>
                    <li>• Patent analysis agents and RAG development</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-1">DevOps & Infrastructure:</h5>
                  <ul className="space-y-1">
                    <li>• Terraform IaC on AWS & Azure</li>
                    <li>• ECS, Lambda, S3, CloudFront deployment</li>
                    <li>• Multi-environment CI/CD pipelines</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-gray-400 pl-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Training & Workshop Instructor
              </h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">Financial Institutions & Enterprise Clients</p>
              <p className="text-gray-600 dark:text-gray-300">
                Designing and delivering courses on prompt engineering and internal chatbot applications 
                for financial institutions and enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Master&apos;s Thesis
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Comparative study of semantic search models on legal documents corpus. 
                Collaboration with legal experts and performance benchmarking.
              </p>
              <a 
                href="/projects/project1/Master_Thesis_AOHANA.pdf"
                target="_blank"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
              >
                View PDF →
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Drone Vision Datasets
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Alignment & benchmarking project involving metadata extraction, 
                map querying, and semantic segmentation model training.
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">EPFL IVRL Project</span>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Droning Drones
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Theoretical study of melodic drone maneuvers and Python simulation 
                for Crazyflie drones with real-world experimentation.
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">EPFL LCAV Project</span>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                NLP Classification & NER Projects
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Built multiple NLP classifiers and Named Entity Recognition systems 
                on top of intelligent tagging pipeline for news processing and analytics.
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">Product Owner & Engineer</span>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Whisky Sentiment Analysis
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Text cleaning, feature engineering and classifier implementation 
                on TF-IDF and Bag of Words representations.
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">EPFL Capstone Project</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">
            Let&apos;s Work Together
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating or have a project in mind?
          </p>
          <a 
            href="mailto:adrien@adrien.ai"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>&copy; 2025 Adrien O&apos;Hana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}