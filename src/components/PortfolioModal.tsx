'use client';

import { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Calendar,
  User,
  Wrench,
  Briefcase,
} from 'lucide-react';
import { PortfolioItem } from '../data/data';
import MediaCarousel from './MediaCarousel';

interface PortfolioModalProps {
  portfolio: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({
  portfolio,
  isOpen,
  onClose,
}: PortfolioModalProps) {
  // Handle escape key and scroll lock
  useEffect(() => {
    if (isOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden';

      // Handle escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !portfolio) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen
          ? 'bg-black bg-opacity-75 backdrop-blur-sm'
          : 'bg-transparent pointer-events-none'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] bg-[#1c3646] rounded-2xl border-2 border-[#2EE0D0] overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#2EE0D0] text-[#1c3646] rounded-full hover:bg-[#FF4444] hover:text-white transition-all duration-300 hover:scale-110"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[90vh] modern-scrollbar">
          {/* Header Media Carousel */}
          <div className="relative">
            <MediaCarousel
              images={portfolio.images}
              videos={portfolio.videos}
              alt={portfolio.name}
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1c3646] to-transparent pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-6 text-3xl md:text-4xl font-bold text-white font-Source_Sans_Pro">
              {portfolio.name}
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            {portfolio.desc && portfolio.desc !== '-' && (
              <div>
                <h3 className="text-xl font-bold text-[#2EE0D0] mb-3 font-Source_Sans_Pro">
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed font-Josefin_Sans">
                  {portfolio.desc}
                </p>
              </div>
            )}

            {/* Project Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date */}
              <div className="flex items-start space-x-3">
                <Calendar className="text-[#2EE0D0] mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1 font-Source_Sans_Pro">
                    Date
                  </h4>
                  <p className="text-gray-300 font-Josefin_Sans">
                    {portfolio.info.date}
                  </p>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-start space-x-3">
                <User className="text-[#2EE0D0] mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1 font-Source_Sans_Pro">
                    Category
                  </h4>
                  <p className="text-gray-300 font-Josefin_Sans">
                    {portfolio.category}
                  </p>
                </div>
              </div>

              {/* Project Type */}
              <div className="flex items-start space-x-3">
                <Briefcase className="text-[#2EE0D0] mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1 font-Source_Sans_Pro">
                    Project Type
                  </h4>
                  <p className="text-[#2EE0D0] font-medium font-Josefin_Sans">
                    {portfolio.projectType}
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex items-start space-x-3">
              <Wrench className="text-[#2EE0D0] mt-1" size={20} />
              <div className="flex-1">
                <h4 className="font-bold text-white mb-3 font-Source_Sans_Pro">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {portfolio.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#2EE0D0] text-black rounded-full text-sm font-bold font-Josefin_Sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={portfolio.info.web}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#2EE0D0] text-[#1c3646] rounded-lg font-bold hover:bg-[#FF4444] hover:text-white transition-all duration-300 font-Source_Sans_Pro"
              >
                <ExternalLink size={20} />
                <span>Visit Website</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 border-2 border-[#2EE0D0] text-[#2EE0D0] rounded-lg font-bold hover:bg-[#2EE0D0] hover:text-[#1c3646] transition-all duration-300 font-Source_Sans_Pro"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
