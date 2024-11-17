import { footerData, socialMediaLinks } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-gray-800 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {section.links.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Social Media */}
        <div className="mt-8 border-t-2 border-b-2 border-gray-300 pt-8 pb-6 border-dashed flex flex-row justify-between items-center space-y-4">
          <p className="text-gray-800 text-center">Join our official channels</p>
          <div className="flex space-x-4">
            {socialMediaLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon} {/* React Icon Component is directly rendered here */}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-gray-500 text-start">
          &copy; 2024 EduPath. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


