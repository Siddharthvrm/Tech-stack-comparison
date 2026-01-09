// Tech Compare Application Logic
// Inspired by neeranjan-bhardwaj's clean approach with enhanced functionality

class TechCompare {
    constructor() {
        this.currentComparison = null;
        this.currentRequirements = {};
        this.currentView = 'selection';
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.showView('selection');
    }

    bindEvents() {
        // Comparison card clicks
        document.querySelectorAll('.comparison-card').forEach(card => {
            card.addEventListener('click', () => {
                const comparisonId = card.dataset.comparison;
                this.selectComparison(comparisonId);
            });
        });

        // Navigation buttons
        document.getElementById('back-to-selection').addEventListener('click', () => {
            this.showView('selection');
        });

        document.getElementById('back-to-requirements').addEventListener('click', () => {
            this.showView('requirements');
        });

        document.getElementById('skip-requirements').addEventListener('click', () => {
            this.currentRequirements = {};
            this.showComparison();
        });

        document.getElementById('apply-requirements').addEventListener('click', () => {
            this.collectRequirements();
            this.showComparison();
        });

        document.getElementById('new-comparison').addEventListener('click', () => {
            this.resetAndGoHome();
        });

        // Export and share buttons
        document.getElementById('share-comparison').addEventListener('click', () => {
            this.shareComparison();
        });

        document.getElementById('export-comparison').addEventListener('click', () => {
            this.exportComparison();
        });

        // Add hover effects to comparison cards
        this.addCardHoverEffects();
    }

    addCardHoverEffects() {
        document.querySelectorAll('.comparison-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    selectComparison(comparisonId) {
        this.currentComparison = DataProcessor.getComparison(comparisonId);
        if (!this.currentComparison) {
            console.error('Comparison not found:', comparisonId);
            return;
        }

        // Update the requirements view title
        document.getElementById('comparison-title').textContent = this.currentComparison.name;
        
        this.showView('requirements');
    }

    collectRequirements() {
        this.currentRequirements = {
            budget: document.getElementById('budget').value,
            scale: document.getElementById('scale').value,
            performance: document.getElementById('performance').value,
            experience: document.getElementById('experience').value
        };
    }

    showView(viewName) {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        // Show target view
        document.getElementById(`${viewName}-view`).classList.add('active');
        this.currentView = viewName;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showComparison() {
        if (!this.currentComparison) return;

        // Update title
        document.getElementById('result-title').textContent = this.currentComparison.name;

        // Generate and show recommendation if requirements provided
        this.showRecommendation();

        // Populate comparison content
        this.populateComparisonContent();

        // Show trade-offs
        this.showTradeoffs();

        this.showView('comparison');
    }

    showRecommendation() {
        const banner = document.getElementById('recommendations-banner');
        const text = document.getElementById('recommendation-text');

        // Check if we have any requirements
        const hasRequirements = Object.values(this.currentRequirements).some(val => val);

        if (hasRequirements) {
            const recommendation = DataProcessor.getRecommendation(
                this.currentComparison.id, 
                this.currentRequirements
            );

            if (recommendation) {
                text.innerHTML = recommendation.text;
                banner.style.display = 'block';
            } else {
                banner.style.display = 'none';
            }
        } else {
            banner.style.display = 'none';
        }
    }

    populateComparisonContent() {
        const optionA = this.currentComparison.options[0];
        const optionB = this.currentComparison.options[1];

        // Populate Option A
        this.populateOptionColumn('option-a', optionA);
        
        // Populate Option B
        this.populateOptionColumn('option-b', optionB);
    }

    populateOptionColumn(columnId, option) {
        const column = document.getElementById(columnId);
        
        column.innerHTML = `
            <div class="option-header">
                <h3 class="option-name">${option.name}</h3>
                <p class="option-description">${option.description}</p>
            </div>

            <div class="pros-cons-section pros-section">
                <h4>✅ Advantages</h4>
                <ul>
                    ${option.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
            </div>

            <div class="pros-cons-section cons-section">
                <h4>⚠️ Considerations</h4>
                <ul>
                    ${option.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
            </div>

            <div class="when-to-choose">
                <h4>💡 Choose ${option.name} when:</h4>
                <ul>
                    ${option.whenToChoose.map(scenario => `<li>${scenario}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    showTradeoffs() {
        const container = document.getElementById('tradeoffs-container');
        
        container.innerHTML = this.currentComparison.tradeoffs.map(tradeoff => `
            <div class="tradeoff-item">
                <div class="tradeoff-header">${tradeoff.aspect}</div>
                <div class="tradeoff-description">${tradeoff.description}</div>
                <div class="tradeoff-comparison">
                    <div class="tradeoff-side">
                        <h5>${this.currentComparison.options[0].name}</h5>
                        <p>${tradeoff.optionA}</p>
                    </div>
                    <div class="tradeoff-side">
                        <h5>${this.currentComparison.options[1].name}</h5>
                        <p>${tradeoff.optionB}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    shareComparison() {
        if (!this.currentComparison) return;

        const url = `${window.location.origin}${window.location.pathname}?comparison=${this.currentComparison.id}`;
        
        if (navigator.share) {
            navigator.share({
                title: `Tech Compare: ${this.currentComparison.name}`,
                text: `Check out this technology comparison: ${this.currentComparison.description}`,
                url: url
            }).catch(err => {
                console.log('Error sharing:', err);
                this.fallbackShare(url);
            });
        } else {
            this.fallbackShare(url);
        }
    }

    fallbackShare(url) {
        // Copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            this.showToast('Link copied to clipboard!');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showToast('Link copied to clipboard!');
        });
    }

    exportComparison() {
        if (!this.currentComparison) return;

        const exportData = {
            comparison: this.currentComparison,
            requirements: this.currentRequirements,
            recommendation: DataProcessor.getRecommendation(
                this.currentComparison.id, 
                this.currentRequirements
            ),
            exportDate: new Date().toISOString(),
            url: window.location.href
        };

        // Generate markdown report
        const markdown = this.generateMarkdownReport(exportData);
        
        // Download as file
        this.downloadFile(markdown, `${this.currentComparison.id}-comparison.md`, 'text/markdown');
    }

    generateMarkdownReport(data) {
        const { comparison, requirements, recommendation } = data;
        
        let markdown = `# ${comparison.name}\n\n`;
        markdown += `**Category:** ${comparison.category}\n`;
        markdown += `**Description:** ${comparison.description}\n\n`;
        
        // Requirements section
        if (Object.values(requirements).some(val => val)) {
            markdown += `## Your Requirements\n\n`;
            Object.entries(requirements).forEach(([key, value]) => {
                if (value) {
                    markdown += `- **${key.charAt(0).toUpperCase() + key.slice(1)}:** ${value}\n`;
                }
            });
            markdown += '\n';
        }

        // Recommendation section
        if (recommendation) {
            markdown += `## Recommendation\n\n`;
            markdown += `${recommendation.text}\n\n`;
        }

        // Options comparison
        markdown += `## Detailed Comparison\n\n`;
        
        comparison.options.forEach(option => {
            markdown += `### ${option.name}\n\n`;
            markdown += `${option.description}\n\n`;
            
            markdown += `**Advantages:**\n`;
            option.pros.forEach(pro => {
                markdown += `- ${pro}\n`;
            });
            markdown += '\n';
            
            markdown += `**Considerations:**\n`;
            option.cons.forEach(con => {
                markdown += `- ${con}\n`;
            });
            markdown += '\n';
            
            markdown += `**Choose ${option.name} when:**\n`;
            option.whenToChoose.forEach(scenario => {
                markdown += `- ${scenario}\n`;
            });
            markdown += '\n';
        });

        // Trade-offs section
        markdown += `## Key Trade-offs\n\n`;
        comparison.tradeoffs.forEach(tradeoff => {
            markdown += `### ${tradeoff.aspect}\n\n`;
            markdown += `${tradeoff.description}\n\n`;
            markdown += `**${comparison.options[0].name}:** ${tradeoff.optionA}\n\n`;
            markdown += `**${comparison.options[1].name}:** ${tradeoff.optionB}\n\n`;
        });

        markdown += `---\n*Generated by Tech Compare on ${new Date().toLocaleDateString()}*`;
        
        return markdown;
    }

    downloadFile(content, filename, contentType) {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        this.showToast('Comparison exported successfully!');
    }

    showToast(message) {
        // Create toast notification
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent-secondary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            font-weight: 500;
            animation: slideIn 0.3s ease;
        `;
        toast.textContent = message;
        
        // Add slide-in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(toast);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
                if (style.parentNode) {
                    style.parentNode.removeChild(style);
                }
            }, 300);
        }, 3000);
    }

    resetAndGoHome() {
        this.currentComparison = null;
        this.currentRequirements = {};
        
        // Reset form
        document.getElementById('budget').value = '';
        document.getElementById('scale').value = '';
        document.getElementById('performance').value = '';
        document.getElementById('experience').value = '';
        
        this.showView('selection');
    }

    // Handle URL parameters for direct links
    handleUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const comparisonId = urlParams.get('comparison');
        
        if (comparisonId && DataProcessor.getComparison(comparisonId)) {
            this.selectComparison(comparisonId);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new TechCompare();
    
    // Handle URL parameters
    app.handleUrlParams();
    
    // Make app globally accessible for debugging
    window.techCompare = app;
});

// Add some smooth scrolling and performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.comparison-card, .tradeoff-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});