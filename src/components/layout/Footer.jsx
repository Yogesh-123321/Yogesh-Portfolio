import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { PROFILE } from '../../data/resumeData';

export function Footer() {
  return (
    <footer className="relative px-6 lg:px-24 py-10 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-ink">{PROFILE.name}</p>
          <p className="font-mono text-xs text-mute mt-1">
            built with React · &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" data-magnetic className="text-mute hover:text-signal transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-magnetic className="text-mute hover:text-signal transition-colors">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${PROFILE.email}`} data-magnetic className="text-mute hover:text-signal transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <motion.button
          whileHover={{ y: -3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-magnetic
          className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-mute hover:text-signal hover:border-signal transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
