'use client';

import { useState, useMemo } from 'react';
import portfolios, { PortfolioItem } from '../../data/data';
import PortfolioModal from '../../components/PortfolioModal';
import FilterControls from '../../components/FilterControls';

export default function Portfolio() {
  const [selectedPortfolio, setSelectedPortfolio] =
    useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter states (default sort by date descending)
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProjectType, setSelectedProjectType] = useState<string>('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    [],
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Get unique categories, project types and technologies for filter
  const categories = useMemo(() => {
    const cats = portfolios.map((p) => p.category);
    return [...new Set(cats)].sort();
  }, []);

  const projectTypes = useMemo(() => {
    const types = portfolios.map((p) => p.projectType);
    return [...new Set(types)].sort();
  }, []);

  const technologies = useMemo(() => {
    const techs = portfolios.flatMap((p) => p.technologies);
    return [...new Set(techs)].sort();
  }, []);

  // Filter and sort portfolios
  const filteredAndSortedPortfolios = useMemo(() => {
    let filtered = portfolios;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by project type
    if (selectedProjectType) {
      filtered = filtered.filter((p) => p.projectType === selectedProjectType);
    }

    // Filter by technologies
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter((p) =>
        selectedTechnologies.some((tech) => p.technologies.includes(tech)),
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.desc.toLowerCase().includes(query) ||
          p.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
          p.category.toLowerCase().includes(query) ||
          p.projectType.toLowerCase().includes(query),
      );
    }

    // Sort portfolios by date (newest first)
    filtered.sort((a, b) => {
      const dateA = new Date(a.info.date.split('/').reverse().join('-'));
      const dateB = new Date(b.info.date.split('/').reverse().join('-'));
      return dateB.getTime() - dateA.getTime(); // descending order (newest first)
    });

    return filtered;
  }, [
    selectedCategory,
    selectedProjectType,
    selectedTechnologies,
    searchQuery,
  ]);

  const handlePortfolioClick = (portfolio: PortfolioItem) => {
    setSelectedPortfolio(portfolio);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolio(null);
  };

  // Function to get project type badge color
  const getProjectTypeColor = (projectType: string) => {
    // Using consistent dark blue gradient for all project types
    return 'bg-gradient-to-r from-[#1c3646] to-[#2a4a5c]';
  };

  return (
    <>
      <main className="container pt-28 font-Source_Sans_Pro overflow-x-hidden flex flex-col items-center modern-scrollbar">
        <h2 className="text-2xl mb-4 uppercase">Portfolio</h2>
        <h5 className="text-4xl mb-8 uppercase font-Josefin_Sans">
          Latest works
        </h5>

        {/* Filter Controls */}
        <FilterControls
          categories={categories}
          projectTypes={projectTypes}
          technologies={technologies}
          selectedCategory={selectedCategory}
          selectedProjectType={selectedProjectType}
          selectedTechnologies={selectedTechnologies}
          onCategoryChange={setSelectedCategory}
          onProjectTypeChange={setSelectedProjectType}
          onTechnologiesChange={setSelectedTechnologies}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Results count */}
        <div className="mb-4 text-gray-300">
          Showing {filteredAndSortedPortfolios.length} of {portfolios.length}{' '}
          projects
        </div>

        {/* Portfolio Grid */}
        <div className="w-full mb-20">
          {(() => {
            const groupedItems = [];
            let currentGroup = [];
            let currentGroupTitle = '';

            filteredAndSortedPortfolios.forEach((portfolio, index) => {
              // Group by year since we're sorting by date
              const groupTitle = new Date(
                portfolio.info.date.split('/').reverse().join('-'),
              )
                .getFullYear()
                .toString();

              if (currentGroupTitle !== groupTitle) {
                if (currentGroup.length > 0) {
                  groupedItems.push({
                    title: currentGroupTitle,
                    items: currentGroup,
                  });
                }
                currentGroup = [portfolio];
                currentGroupTitle = groupTitle;
              } else {
                currentGroup.push(portfolio);
              }

              // Push the last group
              if (index === filteredAndSortedPortfolios.length - 1) {
                groupedItems.push({
                  title: currentGroupTitle,
                  items: currentGroup,
                });
              }
            });

            return groupedItems.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-8">
                {/* Group Separator */}
                <div className="flex items-center mb-6">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2EE0D0]"></div>
                  <h3 className="px-6 text-2xl font-bold text-[#2EE0D0] font-Source_Sans_Pro">
                    {group.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2EE0D0]"></div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-responsivePortfolio justify-center gap-8">
                  {group.items.map((portfolio) => (
                    <div
                      key={portfolio.name + portfolio.info.date}
                      className="w-full item rounded-tr-3xl rounded-bl-3xl border-2 border-[#2EE0D0] p-4 bg-[#1c3646] hover:scale-95 hover:rounded-3xl transition-all duration-300 group cursor-pointer"
                      onClick={() => handlePortfolioClick(portfolio)}
                    >
                      <figure className="w-full">
                        <div
                          className={`relative item-image aspect-[5/3] rounded-2xl mb-2 overflow-hidden bg-cover bg-center`}
                          style={{
                            backgroundImage: `url(${portfolio.image})`,
                          }}
                        >
                          {/* Project Type Badge */}
                          <div className="absolute top-2 right-2 z-10">
                            <span
                              className={`px-2 py-1 ${getProjectTypeColor(
                                portfolio.projectType,
                              )} text-[#2EE0D0] text-xs font-bold rounded-full shadow-lg`}
                            >
                              {portfolio.projectType}
                            </span>
                          </div>

                          <div className="w-full h-full bg-black opacity-0 absolute top-0 left-0 flex justify-center items-center group-hover:opacity-50 transition-all duration-300">
                            <div className="text-3xl text-white translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-100">
                              View Detail
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <p className="text-xl text-[#2EE0D0] text-left font-bold">
                            {portfolio.name}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 bg-[#2EE0D0] text-black text-sm font-bold rounded-full">
                              {portfolio.category}
                            </span>
                          </div>
                          <p className="text-sm text-white font-medium">
                            {portfolio.info.date}
                          </p>
                          <div className="flex flex-wrap items-center gap-1">
                            {portfolio.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs bg-[#2EE0D0] text-black px-2 py-1 rounded-full font-bold"
                              >
                                {tech}
                              </span>
                            ))}
                            {portfolio.technologies.length > 3 && (
                              <span className="text-xs text-[#2EE0D0] font-medium">
                                +{portfolio.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            ));
          })()}
        </div>

        {/* No results message */}
        {filteredAndSortedPortfolios.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400 mb-4">No projects found</p>
            <p className="text-gray-500">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </main>

      {/* Portfolio Modal */}
      <PortfolioModal
        portfolio={selectedPortfolio}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
