'use client';

import { useState, useEffect, useRef } from 'react';

interface TechnologiesDropdownProps {
  technologies: string[];
  selectedTechnologies: string[];
  onTechnologiesChange: (technologies: string[]) => void;
}

function TechnologiesDropdown({
  technologies,
  selectedTechnologies,
  onTechnologiesChange,
}: TechnologiesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTechnologyChange = (technology: string) => {
    if (selectedTechnologies.includes(technology)) {
      onTechnologiesChange(
        selectedTechnologies.filter((t) => t !== technology),
      );
    } else {
      onTechnologiesChange([...selectedTechnologies, technology]);
    }
  };

  return (
    <div className="relative z-20" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-[#0f2027] border-2 border-[#2EE0D0]/50 rounded-xl text-white focus:outline-none focus:ring-4 focus:ring-[#2EE0D0]/30 focus:border-[#2EE0D0] transition-all duration-300 hover:border-[#2EE0D0]/80 shadow-lg appearance-none cursor-pointer flex justify-between items-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%232EE0D0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 12px center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '16px',
        }}
      >
        <span>
          {selectedTechnologies.length === 0
            ? 'Select Technologies'
            : `${selectedTechnologies.length} selected`}
        </span>
      </div>

      {isOpen && (
        <div
          className="fixed z-20 mt-2 bg-[#0f2027] border-2 border-[#2EE0D0]/50 rounded-xl max-h-60 overflow-y-auto shadow-2xl backdrop-blur-sm small-scrollbar"
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            zIndex: 99999,
            width: '100%',
          }}
        >
          {technologies.map((technology) => (
            <div
              key={technology}
              onClick={() => handleTechnologyChange(technology)}
              className={`flex items-center space-x-2 px-4 py-3 hover:bg-[#1c3646] cursor-pointer transition-all duration-200 ${
                selectedTechnologies.includes(technology)
                  ? 'bg-[#1c3646] border-l-4 border-[#2EE0D0]'
                  : ''
              }`}
            >
              <span
                className={`text-sm transition-all duration-200 ${
                  selectedTechnologies.includes(technology)
                    ? 'text-[#2EE0D0] font-bold'
                    : 'text-white'
                }`}
              >
                {selectedTechnologies.includes(technology) ? '✓ ' : ''}
                {technology}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface FilterControlsProps {
  categories: string[];
  projectTypes: string[];
  technologies: string[];
  selectedCategory: string;
  selectedProjectType: string;
  selectedTechnologies: string[];
  onCategoryChange: (category: string) => void;
  onProjectTypeChange: (projectType: string) => void;
  onTechnologiesChange: (technologies: string[]) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function FilterControls({
  categories,
  projectTypes,
  technologies,
  selectedCategory,
  selectedProjectType,
  selectedTechnologies,
  onCategoryChange,
  onProjectTypeChange,
  onTechnologiesChange,
  searchQuery,
  onSearchChange,
}: FilterControlsProps) {
  return (
    <div className="mb-8 w-full max-w-6xl mx-auto relative z-10">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-[#2EE0D0]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search projects, technologies, categories..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-[#1c3646] to-[#2a4a5c] border-2 border-[#2EE0D0] rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#2EE0D0]/30 focus:border-[#2EE0D0] transition-all duration-300 shadow-lg backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Filter Panel */}
      <div className="bg-gradient-to-br from-[#1c3646] via-[#2a4a5c] to-[#1c3646] border-2 border-[#2EE0D0] rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Filter */}
          <div className="space-y-3">
            <label className="text-[#2EE0D0] font-bold text-lg font-Source_Sans_Pro flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-4 py-3 bg-[#0f2027] border-2 border-[#2EE0D0]/50 rounded-xl text-white focus:outline-none focus:ring-4 focus:ring-[#2EE0D0]/30 focus:border-[#2EE0D0] transition-all duration-300 hover:border-[#2EE0D0]/80 shadow-lg appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%232EE0D0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 12px center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '16px',
              }}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Project Type Filter */}
          <div className="space-y-3">
            <label className="text-[#2EE0D0] font-bold text-lg font-Source_Sans_Pro flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Project Type
            </label>
            <select
              value={selectedProjectType}
              onChange={(e) => onProjectTypeChange(e.target.value)}
              className="w-full px-4 py-3 bg-[#0f2027] border-2 border-[#2EE0D0]/50 rounded-xl text-white focus:outline-none focus:ring-4 focus:ring-[#2EE0D0]/30 focus:border-[#2EE0D0] transition-all duration-300 hover:border-[#2EE0D0]/80 shadow-lg appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%232EE0D0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 12px center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '16px',
              }}
            >
              <option value="">All Project Types</option>
              {projectTypes.map((projectType) => (
                <option key={projectType} value={projectType}>
                  {projectType}
                </option>
              ))}
            </select>
          </div>

          {/* Technologies Filter */}
          <div className="space-y-3">
            <label className="text-[#2EE0D0] font-bold text-lg font-Source_Sans_Pro flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Technologies
            </label>
            <TechnologiesDropdown
              technologies={technologies}
              selectedTechnologies={selectedTechnologies}
              onTechnologiesChange={onTechnologiesChange}
            />
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory ||
          selectedProjectType ||
          selectedTechnologies.length > 0 ||
          searchQuery) && (
          <div className="mt-8 pt-6 border-t border-[#2EE0D0]/30">
            <h4 className="text-[#2EE0D0] font-bold mb-4 font-Source_Sans_Pro flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                />
              </svg>
              Active Filters
            </h4>
            <div className="flex flex-wrap gap-3">
              {selectedCategory && (
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#2EE0D0] to-[#4AEEE0] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <span>{selectedCategory}</span>
                  <button
                    onClick={() => onCategoryChange('')}
                    className="ml-1 hover:text-[#FF4444] font-bold transition-colors duration-200 hover:scale-110"
                  >
                    ×
                  </button>
                </div>
              )}
              {selectedProjectType && (
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#2EE0D0] to-[#4AEEE0] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <span>{selectedProjectType}</span>
                  <button
                    onClick={() => onProjectTypeChange('')}
                    className="ml-1 hover:text-[#FF4444] font-bold transition-colors duration-200 hover:scale-110"
                  >
                    ×
                  </button>
                </div>
              )}
              {selectedTechnologies.map((technology) => (
                <div
                  key={technology}
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#2EE0D0] to-[#4AEEE0] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>{technology}</span>
                  <button
                    onClick={() =>
                      onTechnologiesChange(
                        selectedTechnologies.filter((t) => t !== technology),
                      )
                    }
                    className="ml-1 hover:text-[#FF4444] font-bold transition-colors duration-200 hover:scale-110"
                  >
                    ×
                  </button>
                </div>
              ))}
              {searchQuery && (
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#2EE0D0] to-[#4AEEE0] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <span>Search: {searchQuery}</span>
                  <button
                    onClick={() => onSearchChange('')}
                    className="ml-1 hover:text-[#FF4444] font-bold transition-colors duration-200 hover:scale-110"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
