// Tech Comparison Data
// Inspired by neeranjan-bhardwaj's approach with enhanced structure

const COMPARISONS = {
    'react-vue': {
        id: 'react-vue',
        name: 'React vs Vue.js',
        category: 'Frontend Frameworks',
        description: 'Ecosystem leader vs Beginner-friendly framework',
        options: [
            {
                name: 'React',
                description: 'A JavaScript library for building user interfaces',
                pros: [
                    'Massive ecosystem and community support',
                    'Excellent job market opportunities',
                    'Flexible and unopinionated architecture',
                    'Strong TypeScript support',
                    'Backed by Meta (Facebook)',
                    'Rich developer tools and debugging',
                    'Extensive third-party libraries'
                ],
                cons: [
                    'Steeper learning curve for beginners',
                    'Requires additional libraries for full functionality',
                    'Frequent updates can break compatibility',
                    'JSX syntax may feel unfamiliar initially',
                    'Can be overwhelming with too many choices'
                ],
                whenToChoose: [
                    'Building large-scale applications',
                    'Need maximum flexibility and control',
                    'Team has React experience',
                    'Job market considerations are important',
                    'Planning to use React Native for mobile'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['medium', 'large'],
                    performance: ['medium', 'high'],
                    experience: ['intermediate', 'advanced']
                }
            },
            {
                name: 'Vue.js',
                description: 'The Progressive JavaScript Framework',
                pros: [
                    'Gentle learning curve and beginner-friendly',
                    'Excellent documentation and tutorials',
                    'Great performance out of the box',
                    'Template syntax similar to HTML',
                    'Smaller bundle size than React',
                    'Built-in state management (Vuex/Pinia)',
                    'Single File Components are intuitive'
                ],
                cons: [
                    'Smaller ecosystem compared to React',
                    'Fewer job opportunities',
                    'Less flexibility in architecture decisions',
                    'Smaller community and resources',
                    'Some enterprise adoption concerns'
                ],
                whenToChoose: [
                    'Team is new to modern frameworks',
                    'Need rapid prototyping and development',
                    'Prefer convention over configuration',
                    'Working on small to medium projects',
                    'Want a complete framework solution'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['small', 'medium'],
                    performance: ['medium', 'high'],
                    experience: ['beginner', 'intermediate']
                }
            }
        ],
        tradeoffs: [
            {
                aspect: 'Learning Curve',
                description: 'The time and effort required to become productive with each framework',
                optionA: 'React has a steeper learning curve due to JSX, state management concepts, and the need to make many architectural decisions',
                optionB: 'Vue.js offers a gentler learning curve with HTML-like templates and more guided conventions'
            },
            {
                aspect: 'Ecosystem & Jobs',
                description: 'Community size, available packages, and career opportunities',
                optionA: 'React has the largest ecosystem, most job opportunities, and extensive third-party support',
                optionB: 'Vue.js has a growing but smaller ecosystem with fewer job opportunities but less competition'
            },
            {
                aspect: 'Performance',
                description: 'Runtime performance and optimization capabilities',
                optionA: 'React offers excellent performance with proper optimization, but requires more manual tuning',
                optionB: 'Vue.js provides great performance out of the box with less optimization effort required'
            },
            {
                aspect: 'Flexibility vs Convention',
                description: 'Freedom to make architectural choices vs guided development patterns',
                optionA: 'React is highly flexible and unopinionated, giving you freedom but requiring more decisions',
                optionB: 'Vue.js provides more conventions and structure, making development faster but less flexible'
            }
        ]
    },

    'react-angular': {
        id: 'react-angular',
        name: 'React vs Angular',
        category: 'Frontend Frameworks',
        description: 'Flexible library vs Full-featured framework',
        options: [
            {
                name: 'React',
                description: 'A JavaScript library for building user interfaces',
                pros: [
                    'Lightweight and focused on UI only',
                    'Huge ecosystem and community',
                    'Flexible architecture choices',
                    'Easy to integrate into existing projects',
                    'Strong job market demand',
                    'Excellent developer experience'
                ],
                cons: [
                    'Requires additional libraries for full app',
                    'Many architectural decisions to make',
                    'Can lead to inconsistent codebases',
                    'Steep learning curve for state management'
                ],
                whenToChoose: [
                    'Need maximum flexibility',
                    'Building component libraries',
                    'Integrating into existing applications',
                    'Team prefers JavaScript over TypeScript',
                    'Want to choose your own tools'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['small', 'medium', 'large'],
                    performance: ['medium', 'high'],
                    experience: ['intermediate', 'advanced']
                }
            },
            {
                name: 'Angular',
                description: 'Platform for building mobile and desktop web applications',
                pros: [
                    'Complete framework with everything included',
                    'Strong TypeScript integration',
                    'Excellent for large enterprise applications',
                    'Powerful CLI and development tools',
                    'Built-in testing framework',
                    'Consistent architecture patterns',
                    'Strong Google backing'
                ],
                cons: [
                    'Steep learning curve and complexity',
                    'Heavy framework with large bundle size',
                    'Frequent breaking changes between versions',
                    'Overkill for simple applications',
                    'Less flexibility in architecture'
                ],
                whenToChoose: [
                    'Building large enterprise applications',
                    'Team prefers TypeScript',
                    'Need consistent architecture across teams',
                    'Want everything included out of the box',
                    'Long-term maintenance is priority'
                ],
                matchesCriteria: {
                    budget: ['medium', 'high'],
                    scale: ['large'],
                    performance: ['medium', 'high'],
                    experience: ['advanced']
                }
            }
        ],
        tradeoffs: [
            {
                aspect: 'Complexity & Learning',
                description: 'How much you need to learn to be productive',
                optionA: 'React is simpler to start but requires learning many additional libraries and patterns',
                optionB: 'Angular has a steep initial learning curve but provides everything you need in one package'
            },
            {
                aspect: 'Bundle Size & Performance',
                description: 'Initial load time and runtime performance characteristics',
                optionA: 'React apps can be very lightweight, but size depends on chosen libraries',
                optionB: 'Angular apps tend to be larger initially but include powerful optimization tools'
            },
            {
                aspect: 'Development Speed',
                description: 'How quickly you can build and iterate on features',
                optionA: 'React offers fast development once you know the ecosystem, but setup takes time',
                optionB: 'Angular provides fast development for complex apps with its comprehensive tooling'
            }
        ]
    },

    'vue-svelte': {
        id: 'vue-svelte',
        name: 'Vue.js vs Svelte',
        category: 'Frontend Frameworks',
        description: 'Gentle learning curve vs Performance champion',
        options: [
            {
                name: 'Vue.js',
                description: 'The Progressive JavaScript Framework',
                pros: [
                    'Mature ecosystem and community',
                    'Excellent documentation',
                    'Gradual adoption possible',
                    'Great developer experience',
                    'Strong tooling and IDE support',
                    'Stable and battle-tested'
                ],
                cons: [
                    'Larger runtime bundle',
                    'Virtual DOM overhead',
                    'Less innovative than newer frameworks',
                    'Some performance limitations'
                ],
                whenToChoose: [
                    'Need a mature, stable framework',
                    'Want extensive community support',
                    'Building production applications',
                    'Team needs comprehensive documentation'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['small', 'medium', 'large'],
                    performance: ['medium', 'high'],
                    experience: ['beginner', 'intermediate', 'advanced']
                }
            },
            {
                name: 'Svelte',
                description: 'Cybernetically enhanced web apps',
                pros: [
                    'Exceptional runtime performance',
                    'No virtual DOM overhead',
                    'Smaller bundle sizes',
                    'Compile-time optimizations',
                    'Simple and intuitive syntax',
                    'Built-in state management'
                ],
                cons: [
                    'Smaller ecosystem and community',
                    'Fewer learning resources',
                    'Limited job market',
                    'Less tooling and IDE support',
                    'Newer and less battle-tested'
                ],
                whenToChoose: [
                    'Performance is critical',
                    'Building lightweight applications',
                    'Want cutting-edge technology',
                    'Bundle size matters significantly'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium'],
                    scale: ['small', 'medium'],
                    performance: ['high'],
                    experience: ['intermediate', 'advanced']
                }
            }
        ],
        tradeoffs: [
            {
                aspect: 'Performance vs Maturity',
                description: 'Cutting-edge performance vs proven stability',
                optionA: 'Vue.js offers solid performance with the security of a mature, well-tested framework',
                optionB: 'Svelte provides superior performance but with less real-world testing and stability guarantees'
            },
            {
                aspect: 'Ecosystem Size',
                description: 'Available libraries, tools, and community support',
                optionA: 'Vue.js has a large ecosystem with many plugins, tools, and community resources',
                optionB: 'Svelte has a smaller but growing ecosystem with fewer third-party options'
            }
        ]
    },

    'express-fastapi': {
        id: 'express-fastapi',
        name: 'Express.js vs FastAPI',
        category: 'Backend Frameworks',
        description: 'Node.js flexibility vs Modern Python APIs',
        options: [
            {
                name: 'Express.js',
                description: 'Fast, unopinionated, minimalist web framework for Node.js',
                pros: [
                    'Huge ecosystem and middleware library',
                    'Very flexible and unopinionated',
                    'Large community and job market',
                    'JavaScript/TypeScript throughout stack',
                    'Excellent performance for I/O operations',
                    'Easy to learn and get started'
                ],
                cons: [
                    'Requires many decisions and setup',
                    'Can lead to inconsistent codebases',
                    'No built-in validation or documentation',
                    'Callback hell without proper async handling',
                    'Security requires additional middleware'
                ],
                whenToChoose: [
                    'Team is already using JavaScript/TypeScript',
                    'Need maximum flexibility',
                    'Building real-time applications',
                    'Want to share code between frontend and backend',
                    'Rapid prototyping is important'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['small', 'medium', 'large'],
                    performance: ['medium', 'high'],
                    experience: ['beginner', 'intermediate', 'advanced']
                }
            },
            {
                name: 'FastAPI',
                description: 'Modern, fast web framework for building APIs with Python',
                pros: [
                    'Automatic API documentation generation',
                    'Built-in data validation with Pydantic',
                    'Excellent performance (comparable to Node.js)',
                    'Modern Python features and type hints',
                    'Easy testing and development',
                    'Great developer experience'
                ],
                cons: [
                    'Smaller ecosystem compared to Express',
                    'Python deployment can be more complex',
                    'Fewer hosting options',
                    'Less mature than Express',
                    'Smaller job market'
                ],
                whenToChoose: [
                    'Team prefers Python',
                    'Need automatic API documentation',
                    'Data validation is important',
                    'Building data-heavy applications',
                    'Want modern development experience'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['small', 'medium', 'large'],
                    performance: ['high'],
                    experience: ['intermediate', 'advanced']
                }
            }
        ],
        tradeoffs: [
            {
                aspect: 'Language Ecosystem',
                description: 'The programming language and its ecosystem benefits',
                optionA: 'Express.js leverages JavaScript\'s huge ecosystem and allows full-stack JavaScript development',
                optionB: 'FastAPI uses Python\'s rich ecosystem, especially strong for data science and machine learning'
            },
            {
                aspect: 'Developer Experience',
                description: 'Ease of development, debugging, and maintenance',
                optionA: 'Express.js offers flexibility but requires more setup and architectural decisions',
                optionB: 'FastAPI provides excellent DX with automatic docs, validation, and modern Python features'
            }
        ]
    },

    'django-rails': {
        id: 'django-rails',
        name: 'Django vs Ruby on Rails',
        category: 'Backend Frameworks',
        description: 'Python batteries-included vs Ruby rapid development',
        options: [
            {
                name: 'Django',
                description: 'The web framework for perfectionists with deadlines',
                pros: [
                    'Batteries-included philosophy',
                    'Excellent admin interface',
                    'Strong security features built-in',
                    'Great ORM and database handling',
                    'Excellent documentation',
                    'Large Python ecosystem'
                ],
                cons: [
                    'Can be overkill for simple APIs',
                    'Monolithic architecture',
                    'Learning curve for beginners',
                    'Less flexible than micro-frameworks'
                ],
                whenToChoose: [
                    'Building content management systems',
                    'Need robust admin interface',
                    'Security is a top priority',
                    'Team knows Python well',
                    'Building traditional web applications'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['medium', 'large'],
                    performance: ['medium', 'high'],
                    experience: ['intermediate', 'advanced']
                }
            },
            {
                name: 'Ruby on Rails',
                description: 'A web-application framework that includes everything needed',
                pros: [
                    'Convention over configuration',
                    'Rapid development and prototyping',
                    'Mature ecosystem and gems',
                    'Great for startups and MVPs',
                    'Strong community and best practices',
                    'Excellent testing culture'
                ],
                cons: [
                    'Performance limitations at scale',
                    'Ruby job market is smaller',
                    'Can be opinionated and restrictive',
                    'Deployment complexity',
                    'Learning curve for Ruby language'
                ],
                whenToChoose: [
                    'Rapid MVP development',
                    'Building traditional web applications',
                    'Team values convention over configuration',
                    'Startup environment with quick iterations',
                    'Strong testing requirements'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium'],
                    scale: ['small', 'medium'],
                    performance: ['medium'],
                    experience: ['intermediate', 'advanced']
                }
            }
        ],
        tradeoffs: [
            {
                aspect: 'Development Speed vs Performance',
                description: 'How quickly you can build vs how fast it runs',
                optionA: 'Django offers good development speed with better performance characteristics',
                optionB: 'Rails excels at rapid development but may face performance challenges at scale'
            },
            {
                aspect: 'Philosophy & Flexibility',
                description: 'Framework approach to solving problems',
                optionA: 'Django is more explicit and flexible, following Python\'s "explicit is better than implicit"',
                optionB: 'Rails emphasizes convention over configuration, making decisions for you to speed development'
            }
        ]
    },

    'postgres-mongo': {
        id: 'postgres-mongo',
        name: 'PostgreSQL vs MongoDB',
        category: 'Databases',
        description: 'Enterprise SQL vs Document flexibility',
        options: [
            {
                name: 'PostgreSQL',
                description: 'The world\'s most advanced open source relational database',
                pros: [
                    'ACID compliance and data integrity',
                    'Powerful query capabilities with SQL',
                    'Excellent performance and optimization',
                    'Strong consistency guarantees',
                    'Mature ecosystem and tooling',
                    'JSON support for hybrid approaches'
                ],
                cons: [
                    'Requires schema design upfront',
                    'Vertical scaling limitations',
                    'More complex for simple use cases',
                    'Learning curve for advanced features'
                ],
                whenToChoose: [
                    'Data integrity is critical',
                    'Complex queries and relationships',
                    'Team knows SQL well',
                    'Need strong consistency',
                    'Building financial or enterprise apps'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['small', 'medium', 'large'],
                    performance: ['medium', 'high'],
                    experience: ['intermediate', 'advanced']
                }
            },
            {
                name: 'MongoDB',
                description: 'The database for modern applications',
                pros: [
                    'Flexible schema and document model',
                    'Easy horizontal scaling',
                    'Great for rapid development',
                    'JSON-like documents match app objects',
                    'Built-in replication and sharding',
                    'Good performance for read-heavy workloads'
                ],
                cons: [
                    'Eventual consistency challenges',
                    'No ACID transactions (historically)',
                    'Can lead to data duplication',
                    'Query capabilities less powerful than SQL',
                    'Memory usage can be high'
                ],
                whenToChoose: [
                    'Rapid prototyping and development',
                    'Flexible or evolving data models',
                    'Need horizontal scaling',
                    'Building content management systems',
                    'Team prefers NoSQL approach'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['small', 'medium', 'large'],
                    performance: ['medium', 'high'],
                    experience: ['beginner', 'intermediate', 'advanced']
                }
            }
        ],
        tradeoffs: [
            {
                aspect: 'Data Consistency vs Flexibility',
                description: 'Strict data rules vs adaptable structure',
                optionA: 'PostgreSQL enforces strict data consistency and relationships but requires upfront schema design',
                optionB: 'MongoDB offers flexible schemas that adapt easily but with potential consistency trade-offs'
            },
            {
                aspect: 'Query Power vs Simplicity',
                description: 'Complex query capabilities vs ease of use',
                optionA: 'PostgreSQL provides powerful SQL queries for complex data analysis and relationships',
                optionB: 'MongoDB offers simpler queries that are easier to learn but less powerful for complex operations'
            }
        ]
    },

    'mysql-sqlite': {
        id: 'mysql-sqlite',
        name: 'MySQL vs SQLite',
        category: 'Databases',
        description: 'Reliable workhorse vs Simple local storage',
        options: [
            {
                name: 'MySQL',
                description: 'The world\'s most popular open source database',
                pros: [
                    'Proven reliability and stability',
                    'Excellent performance for web applications',
                    'Large community and ecosystem',
                    'Good replication and clustering',
                    'Wide hosting support',
                    'Mature tooling and administration'
                ],
                cons: [
                    'Requires separate server setup',
                    'More complex configuration',
                    'Limited advanced features vs PostgreSQL',
                    'Licensing considerations for commercial use'
                ],
                whenToChoose: [
                    'Building web applications',
                    'Need multi-user concurrent access',
                    'Require network database access',
                    'Planning for moderate to high traffic',
                    'Team familiar with traditional databases'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['medium', 'large'],
                    performance: ['medium', 'high'],
                    experience: ['beginner', 'intermediate', 'advanced']
                }
            },
            {
                name: 'SQLite',
                description: 'A C library that provides a lightweight disk-based database',
                pros: [
                    'Zero configuration and setup',
                    'Single file database',
                    'Excellent for development and testing',
                    'Very fast for local operations',
                    'No server maintenance required',
                    'Perfect for embedded applications'
                ],
                cons: [
                    'No concurrent write access',
                    'Limited scalability',
                    'No network access',
                    'Fewer advanced features',
                    'Not suitable for high-traffic applications'
                ],
                whenToChoose: [
                    'Building desktop or mobile applications',
                    'Prototyping and development',
                    'Single-user applications',
                    'Embedded systems',
                    'Simple data storage needs'
                ],
                matchesCriteria: {
                    budget: ['low'],
                    scale: ['small'],
                    performance: ['low', 'medium'],
                    experience: ['beginner', 'intermediate']
                }
            }
        ],
        tradeoffs: [
            {
                aspect: 'Scalability vs Simplicity',
                description: 'Growth potential vs ease of use',
                optionA: 'MySQL scales well for web applications but requires server setup and maintenance',
                optionB: 'SQLite is incredibly simple to use but doesn\'t scale beyond single-user scenarios'
            },
            {
                aspect: 'Deployment Complexity',
                description: 'Setup and maintenance requirements',
                optionA: 'MySQL requires server installation, configuration, and ongoing maintenance',
                optionB: 'SQLite requires no setup - just include the file with your application'
            }
        ]
    },

    'vercel-netlify': {
        id: 'vercel-netlify',
        name: 'Vercel vs Netlify',
        category: 'Cloud & Hosting',
        description: 'Frontend-focused vs JAMstack specialist',
        options: [
            {
                name: 'Vercel',
                description: 'The platform for frontend developers',
                pros: [
                    'Excellent Next.js integration',
                    'Zero-config deployments',
                    'Great developer experience',
                    'Fast global CDN',
                    'Automatic HTTPS and domains',
                    'Serverless functions support'
                ],
                cons: [
                    'Can be expensive at scale',
                    'Primarily focused on React/Next.js',
                    'Limited backend capabilities',
                    'Vendor lock-in concerns'
                ],
                whenToChoose: [
                    'Using Next.js or React',
                    'Need fast deployment workflow',
                    'Building frontend-heavy applications',
                    'Want zero-config experience',
                    'Developer experience is priority'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium', 'high'],
                    scale: ['small', 'medium', 'large'],
                    performance: ['high'],
                    experience: ['beginner', 'intermediate', 'advanced']
                }
            },
            {
                name: 'Netlify',
                description: 'Build, deploy, and manage modern web projects',
                pros: [
                    'Excellent for static sites and JAMstack',
                    'Great CI/CD integration',
                    'Form handling and identity management',
                    'Split testing and branch previews',
                    'Generous free tier',
                    'Framework agnostic'
                ],
                cons: [
                    'Limited serverless function capabilities',
                    'Can be slower than specialized platforms',
                    'Less optimized for specific frameworks',
                    'Build time limitations on free tier'
                ],
                whenToChoose: [
                    'Building static sites or JAMstack apps',
                    'Need built-in form handling',
                    'Want framework flexibility',
                    'Budget is a concern',
                    'Need advanced deployment features'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium'],
                    scale: ['small', 'medium'],
                    performance: ['medium', 'high'],
                    experience: ['beginner', 'intermediate', 'advanced']
                }
            }
        ],
        tradeoffs: [
            {
                aspect: 'Framework Optimization vs Flexibility',
                description: 'Specialized performance vs broad compatibility',
                optionA: 'Vercel is highly optimized for Next.js but less flexible for other frameworks',
                optionB: 'Netlify works well with any static site generator but without framework-specific optimizations'
            },
            {
                aspect: 'Cost vs Features',
                description: 'Pricing structure and included features',
                optionA: 'Vercel can become expensive but offers premium performance and developer experience',
                optionB: 'Netlify offers more generous free tiers and competitive pricing with good feature sets'
            }
        ]
    },

    'aws-digitalocean': {
        id: 'aws-digitalocean',
        name: 'AWS vs DigitalOcean',
        category: 'Cloud & Hosting',
        description: 'Enterprise powerhouse vs Developer-friendly',
        options: [
            {
                name: 'AWS',
                description: 'Amazon Web Services - comprehensive cloud platform',
                pros: [
                    'Comprehensive service ecosystem',
                    'Global infrastructure and availability',
                    'Enterprise-grade security and compliance',
                    'Extensive documentation and community',
                    'Pay-as-you-scale pricing model',
                    'Industry standard for cloud computing'
                ],
                cons: [
                    'Complex pricing and billing',
                    'Steep learning curve',
                    'Can be overkill for simple projects',
                    'Easy to overspend without monitoring',
                    'UI/UX can be overwhelming'
                ],
                whenToChoose: [
                    'Building enterprise applications',
                    'Need specific AWS services',
                    'Require global scale and availability',
                    'Compliance requirements are strict',
                    'Team has AWS expertise'
                ],
                matchesCriteria: {
                    budget: ['medium', 'high'],
                    scale: ['large'],
                    performance: ['high'],
                    experience: ['advanced']
                }
            },
            {
                name: 'DigitalOcean',
                description: 'The cloud for developers',
                pros: [
                    'Simple and predictable pricing',
                    'Excellent developer experience',
                    'Great documentation and tutorials',
                    'Fast SSD-based infrastructure',
                    'Easy-to-use control panel',
                    'Strong community and support'
                ],
                cons: [
                    'Limited service ecosystem vs AWS',
                    'Fewer global regions',
                    'Less enterprise features',
                    'Smaller scale capabilities',
                    'Fewer compliance certifications'
                ],
                whenToChoose: [
                    'Building small to medium applications',
                    'Want simple, predictable pricing',
                    'Developer experience is important',
                    'Don\'t need extensive cloud services',
                    'Budget-conscious projects'
                ],
                matchesCriteria: {
                    budget: ['low', 'medium'],
                    scale: ['small', 'medium'],
                    performance: ['medium', 'high'],
                    experience: ['beginner', 'intermediate', 'advanced']
                }
            }
        ],
        tradeoffs: [
            {
                aspect: 'Complexity vs Simplicity',
                description: 'Feature richness vs ease of use',
                optionA: 'AWS offers comprehensive services but with significant complexity and learning curve',
                optionB: 'DigitalOcean prioritizes simplicity and developer experience over extensive feature sets'
            },
            {
                aspect: 'Scale & Enterprise Features',
                description: 'Growth potential and enterprise requirements',
                optionA: 'AWS excels at enterprise scale with extensive compliance and global infrastructure',
                optionB: 'DigitalOcean is perfect for startups and medium-scale applications with simpler needs'
            }
        ]
    }
};

// Utility functions for data processing
const DataProcessor = {
    getComparison: function(id) {
        return COMPARISONS[id] || null;
    },

    getAllComparisons: function() {
        return Object.values(COMPARISONS);
    },

    getComparisonsByCategory: function(category) {
        return Object.values(COMPARISONS).filter(comp => comp.category === category);
    },

    getRecommendation: function(comparisonId, requirements) {
        const comparison = this.getComparison(comparisonId);
        if (!comparison || !requirements) return null;

        const scores = comparison.options.map(option => {
            let score = 0;
            let matchCount = 0;

            // Check each requirement against option criteria
            Object.entries(requirements).forEach(([key, value]) => {
                if (value && option.matchesCriteria[key]) {
                    if (option.matchesCriteria[key].includes(value)) {
                        score += 1;
                    }
                    matchCount += 1;
                }
            });

            return {
                option: option,
                score: matchCount > 0 ? score / matchCount : 0.5,
                matchCount: matchCount
            };
        });

        // Sort by score
        scores.sort((a, b) => b.score - a.score);

        const winner = scores[0];
        const runner = scores[1];

        // Generate recommendation text
        let recommendationText = '';
        
        if (winner.score > runner.score) {
            recommendationText = `Based on your requirements, **${winner.option.name}** appears to be a better fit. `;
            
            // Add specific reasons
            const reasons = [];
            Object.entries(requirements).forEach(([key, value]) => {
                if (value && winner.option.matchesCriteria[key] && winner.option.matchesCriteria[key].includes(value)) {
                    reasons.push(`${key}: ${value}`);
                }
            });
            
            if (reasons.length > 0) {
                recommendationText += `It matches your preferences for ${reasons.join(', ')}.`;
            }
        } else {
            recommendationText = `Both options are equally suitable for your requirements. Consider other factors like team expertise and long-term goals.`;
        }

        return {
            recommended: winner.option,
            confidence: winner.score,
            text: recommendationText,
            scores: scores
        };
    }
};