export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Essay Writing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Dissertation Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Assignment Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Research Paper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Thesis Writing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Online Exam Help
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Our Experts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Copyright
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-300 mb-6">
              <p>
                <strong>Email:</strong>
                <br />
                <a href="mailto:info@myassignmenthelp.my" className="hover:text-orange-400 transition">
                  info@myassignmenthelp.my
                </a>
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                <a href="tel:+60123456789" className="hover:text-orange-400 transition">
                  +60 (123) 456 789
                </a>
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 w-8 h-8 flex items-center justify-center rounded transition"
              >
                f
              </a>
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 w-8 h-8 flex items-center justify-center rounded transition"
              >
                t
              </a>
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 w-8 h-8 flex items-center justify-center rounded transition"
              >
                in
              </a>
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 w-8 h-8 flex items-center justify-center rounded transition"
              >
                ig
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          {/* Disclaimer */}
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            <strong>Disclaimer:</strong> The Reference papers provided by the My Assignment Help Malaysia serve as model
            and sample papers for students and are not to be submitted as it is. These papers are intended to be used
            for reference and research purposes only. Copying or submitting our papers as your own is considered
            plagiarism and a violation of academic integrity policy.
          </p>

          {/* Copyright */}
          <p className="text-gray-400 text-xs text-center">
            © 2025 My Assignment Help Malaysia. All Rights Reserved. | Designed with{" "}
            <span className="text-orange-400">❤</span> by My Assignment Help
          </p>
        </div>
      </div>
    </footer>
  )
}
