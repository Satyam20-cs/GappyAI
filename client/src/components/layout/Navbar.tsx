import { Link } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed left-1/2 top-5 z-50 flex w-[92%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-8 py-4 shadow-lg backdrop-blur-xl"
        >
            <Link
                to="/"
                className="flex items-center gap-2 text-xl font-semibold"
            >
                <BriefcaseBusiness size={24} />
                GappyAI
            </Link>

            <div className="flex items-center gap-8 text-sm font-medium">
                <a href="#features">Features</a>
              

                
                <Link
                    to="/about"
                    className="transition hover:text-black"
                >
                    About
                </Link>

                <Link
                    to="/login"
                    className="rounded-xl bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-xl"
                >
                    Login
                </Link>

            </div>
        </motion.nav>
    );
}

export default Navbar;