import { RoadmapItem } from '../types/roadmap';

export const initialRoadmap: RoadmapItem[] = [
  {
    id: '1',
    title: 'Giai đoạn 1: Xây dựng nền tảng vững chắc',
    description: 'Nắm vững kiến thức cơ bản và xây dựng nền tảng vững chắc',
    category: 'Foundation',
    completed: false,
    difficulty: 'Beginner',
    subItems: [
      {
        id: '1.1',
        title: 'Toán học cho khoa học máy tính',
        description: 'Nền tảng toán học cần thiết cho lập trình viên',
        category: 'Mathematics',
        completed: false,
        difficulty: 'Beginner',
        subItems: [
          {
            id: '1.1.1',
            title: 'Toán rời rạc',
            description:
              'Logic mệnh đề, Boolean algebra, logic predicate, lý thuyết tập hợp, hoàn vị, tổ hợp',
            category: 'Discrete Math',
            completed: false,
            difficulty: 'Beginner',
            estimatedTime: 40,
            skills: [
              'Boolean Logic',
              'Set Theory',
              'Combinatorics',
              'Graph Theory',
              'Mathematical Proofs',
            ],
            resources: [
              {
                title: 'Khan Academy - Discrete Mathematics',
                url: 'https://www.khanacademy.org/computing/computer-science/algorithms',
                type: 'video',
              },
              {
                title: 'Discrete Mathematics Course - MIT OpenCourseWare',
                url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/',
                type: 'documentation',
              },
              {
                title: 'Discrete Mathematics Tutorial - GeeksforGeeks',
                url: 'https://www.geeksforgeeks.org/discrete-mathematics-tutorial/',
                type: 'documentation',
              },
              {
                title: 'Discrete Math 1 - TheTrevTutor',
                url: 'https://www.youtube.com/watch?v=tyDKR4FG3Yw&list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz',
                type: 'video',
              },
              {
                title: 'Discrete Mathematics and Its Applications',
                url: 'https://www.amazon.com/Discrete-Mathematics-Applications-Kenneth-Rosen/dp/0072899050',
                type: 'book',
              },
              {
                title: 'Discrete Mathematics - Coursera',
                url: 'https://www.coursera.org/learn/discrete-mathematics',
                type: 'video',
              },
              {
                title: 'LeetCode - Math Problems',
                url: 'https://leetcode.com/tag/math/',
                type: 'link',
              },
              {
                title: 'NeetCode - Math Playlist',
                url: 'https://neetcode.io/practice',
                type: 'video',
              },
            ],
            prerequisites: ['Basic Mathematics', 'Logical Thinking'],
          },
          {
            id: '1.1.2',
            title: 'Đại số tuyến tính',
            description:
              'Ma trận và vector cho AI, hệ phương trình tuyến tính cho quy hoạch',
            category: 'Linear Algebra',
            completed: false,
            difficulty: 'Beginner',
            estimatedTime: 40,
            resources: [
              {
                title: 'Khan Academy - Linear Algebra',
                url: 'https://www.khanacademy.org/math/linear-algebra',
                type: 'video',
              },
              {
                title: '3Blue1Brown - Essence of Linear Algebra',
                url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
                type: 'video',
              },
              {
                title: 'Linear Algebra for Machine Learning - DataCamp',
                url: 'https://www.datacamp.com/courses/linear-algebra-for-machine-learning',
                type: 'video',
              },
              {
                title: 'MIT OpenCourseWare - Linear Algebra',
                url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
                type: 'video',
              },
              {
                title:
                  'Coding the Matrix: Linear Algebra through Computer Science Applications',
                url: 'https://codingthematrix.com/',
                type: 'book',
              },
            ],
          },
          {
            id: '1.1.3',
            title: 'Xác suất và thống kê',
            description:
              'Biến ngẫu nhiên, phân phối, quy tắc Bayes, ứng dụng trong Machine Learning',
            category: 'Statistics',
            completed: false,
            difficulty: 'Beginner',
            estimatedTime: 45,
            resources: [
              {
                title: 'Khan Academy - Statistics & Probability',
                url: 'https://www.khanacademy.org/math/statistics-probability',
                type: 'video',
              },
              {
                title: 'Statistics Fundamentals - StatQuest',
                url: 'https://www.youtube.com/c/joshstarmer',
                type: 'video',
              },
              {
                title: 'Statistics for Data Science - DataCamp',
                url: 'https://www.datacamp.com/tracks/statistics-fundamentals-with-python',
                type: 'video',
              },
              {
                title: 'Probability for Data Science - MIT',
                url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
                type: 'video',
              },
              {
                title:
                  'Think Stats: Probability and Statistics for Programmers',
                url: 'https://greenteapress.com/wp/think-stats-2e/',
                type: 'book',
              },
            ],
          },
        ],
      },
      {
        id: '1.2',
        title: 'Kiến trúc máy tính và hệ điều hành',
        description: 'Hiểu sâu về cách máy tính hoạt động',
        category: 'Computer Architecture',
        completed: false,
        difficulty: 'Beginner',
        subItems: [
          {
            id: '1.2.1',
            title: 'Kiến trúc phần cứng',
            description:
              'CPU, RAM, I/O, bộ nhớ cache, bus system, kiến trúc x86/ARM',
            category: 'Hardware',
            completed: false,
            difficulty: 'Beginner',
            estimatedTime: 45,
            resources: [
              {
                title: 'Computer Architecture - Princeton University',
                url: 'https://www.coursera.org/learn/comparch',
                type: 'video',
              },
              {
                title:
                  'Build a Modern Computer from First Principles - Nand2Tetris',
                url: 'https://www.nand2tetris.org/',
                type: 'video',
              },
              {
                title:
                  'Computer Organization and Design - Patterson and Hennessy',
                url: 'https://www.amazon.com/Computer-Organization-Design-MIPS-Architecture/dp/0124077269',
                type: 'book',
              },
              {
                title: 'Computer Architecture - CMU Course',
                url: 'https://course.ece.cmu.edu/~ece447/s15/doku.php?id=schedule',
                type: 'documentation',
              },
            ],
          },
          {
            id: '1.2.2',
            title: 'Hệ điều hành',
            description:
              'Quản lý tiến trình, bộ nhớ, hệ thống file, scheduling, concurrency',
            category: 'Operating Systems',
            completed: false,
            difficulty: 'Beginner',
            estimatedTime: 50,
            resources: [
              {
                title: 'Operating Systems: Three Easy Pieces',
                url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/',
                type: 'book',
              },
              {
                title: 'Nand to Tetris - Build a Modern Computer',
                url: 'https://www.nand2tetris.org/',
                type: 'video',
              },
              {
                title: 'Linux Journey - Learn Linux',
                url: 'https://linuxjourney.com/',
                type: 'documentation',
              },
              {
                title: 'Operating Systems Course - Boot.dev',
                url: 'https://boot.dev/learn/learn-os',
                type: 'video',
              },
            ],
          },
          {
            id: '1.2.3',
            title: 'Lập trình hệ thống',
            description:
              'Lập trình C/C++, system calls, memory management, threading',
            category: 'Systems Programming',
            completed: false,
            difficulty: 'Beginner',
            estimatedTime: 60,
            resources: [
              {
                title: 'Systems Programming Course - Boot.dev',
                url: 'https://boot.dev/learn/learn-systems-programming',
                type: 'video',
              },
              {
                title: 'The Linux Programming Interface',
                url: 'https://man7.org/tlpi/',
                type: 'book',
              },
              {
                title: 'C Programming Language - Harvard CS50',
                url: 'https://cs50.harvard.edu/x/2023/weeks/1/',
                type: 'video',
              },
              {
                title: 'Advanced Programming in the UNIX Environment',
                url: 'https://stevens.netmeister.org/631/',
                type: 'documentation',
              },
              {
                title: 'Rust Systems Programming - Microsoft Learn',
                url: 'https://learn.microsoft.com/en-us/training/paths/rust-first-steps/',
                type: 'documentation',
              },
            ],
          },
        ],
      },
      {
        id: '1.3',
        title: 'Thuật toán và cấu trúc dữ liệu',
        description: 'Nền tảng cho việc giải quyết vấn đề hiệu quả',
        category: 'Algorithms',
        completed: false,
        difficulty: 'Beginner',
        subItems: [
          {
            id: '1.3.1',
            title: 'Cấu trúc dữ liệu cơ bản',
            description:
              'Array, LinkedList, Stack, Queue, Tree, Graph, Hash Table',
            category: 'Data Structures',
            completed: false,
            difficulty: 'Beginner',
            estimatedTime: 50,
            resources: [
              {
                title: 'Data Structures - NeetCode Course',
                url: 'https://neetcode.io/courses',
                type: 'video',
              },
              {
                title: 'LeetCode - Top Interview Questions',
                url: 'https://leetcode.com/explore/interview/card/top-interview-questions-easy/',
                type: 'link',
              },
              {
                title:
                  'JavaScript Algorithms and Data Structures - freeCodeCamp',
                url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
                type: 'video',
              },
              {
                title: 'Computer Science Career Path - Codecademy',
                url: 'https://www.codecademy.com/learn/paths/computer-science',
                type: 'video',
              },
              {
                title: 'Data Structures Easy to Advanced - freeCodeCamp',
                url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM',
                type: 'video',
              },
              {
                title: 'Grokking Algorithms',
                url: 'https://www.manning.com/books/grokking-algorithms',
                type: 'book',
              },
              {
                title: 'JavaScript Algorithms - ui.dev',
                url: 'https://ui.dev/algorithms',
                type: 'video',
              },
              {
                title: 'Data Structures in JavaScript - ui.dev',
                url: 'https://ui.dev/data-structures',
                type: 'video',
              },
            ],
          },
          {
            id: '1.3.2',
            title: 'Thuật toán nâng cao',
            description:
              'Dynamic Programming, Divide & Conquer, Greedy Algorithms',
            category: 'Advanced Algorithms',
            completed: false,
            difficulty: 'Intermediate',
            estimatedTime: 60,
            resources: [
              {
                title: 'Algorithms Specialization - Stanford',
                url: 'https://www.coursera.org/specializations/algorithms',
                type: 'video',
              },
              {
                title: 'Dynamic Programming - Errichto',
                url: 'https://www.youtube.com/watch?v=YBSt1jYwVfU&list=PLl0KD3g-oDOGJUdmhFk19LaPgrfmAGQfo',
                type: 'video',
              },
              {
                title: 'Competitive Programming Handbook',
                url: 'https://cses.fi/book/book.pdf',
                type: 'book',
              },
              {
                title: 'Advanced Algorithms - MIT OpenCourseWare',
                url: 'https://ocw.mit.edu/courses/6-854j-advanced-algorithms-fall-2008/',
                type: 'video',
              },
              {
                title: 'NeetCode Advanced Algorithms',
                url: 'https://neetcode.io/practice',
                type: 'video',
              },
            ],
          },
          {
            id: '1.3.3',
            title: 'Cấu trúc dữ liệu nâng cao',
            description: 'Trie, Fenwick Tree, Segment Tree, Disjoint Set',
            category: 'Advanced Data Structures',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 50,
            resources: [
              {
                title: 'Advanced Data Structures - MIT OpenCourseWare',
                url: 'https://ocw.mit.edu/courses/6-851-advanced-data-structures-spring-2012/',
                type: 'video',
              },
              {
                title: "Competitive Programmer's Handbook",
                url: 'https://cses.fi/book/book.pdf',
                type: 'book',
              },
              {
                title: 'Advanced Data Structures - William Fiset',
                url: 'https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu',
                type: 'video',
              },
              {
                title: 'CP Algorithms - Advanced Data Structures',
                url: 'https://cp-algorithms.com/',
                type: 'documentation',
              },
              {
                title: 'USACO Guide - Advanced Data Structures',
                url: 'https://usaco.guide/adv/treaps',
                type: 'documentation',
              },
            ],
          },
        ],
      },
      {
        id: '1.4',
        title: 'Thành thạo công cụ',
        description: 'Công cụ phát triển chuyên nghiệp',
        category: 'Tools',
        completed: false,
        difficulty: 'Beginner',
        subItems: [
          {
            id: '1.4.1',
            title: 'Version Control',
            description:
              'Git flow, branching strategies, pull requests, code review',
            category: 'Git',
            completed: false,
            difficulty: 'Beginner',
            estimatedTime: 30,
            resources: [
              {
                title: 'Git & GitHub for Beginners - freeCodeCamp',
                url: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/',
                type: 'video',
              },
              {
                title: 'Advanced Git - Atlassian',
                url: 'https://www.atlassian.com/git/tutorials/advanced-overview',
                type: 'documentation',
              },
              {
                title: 'Git Branching Strategies - GitLab',
                url: 'https://about.gitlab.com/topics/version-control/what-are-git-branching-strategies/',
                type: 'documentation',
              },
              {
                title: 'GitHub Skills',
                url: 'https://skills.github.com/',
                type: 'video',
              },
              {
                title: 'Conventional Commits',
                url: 'https://www.conventionalcommits.org/',
                type: 'documentation',
              },
            ],
          },
          {
            id: '1.4.2',
            title: 'Container',
            description: 'Docker, Kubernetes, container orchestration',
            category: 'Containerization',
            completed: false,
            difficulty: 'Intermediate',
            estimatedTime: 50,
            resources: [
              {
                title: 'Docker & Kubernetes: The Practical Guide',
                url: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
                type: 'video',
              },
              {
                title: 'Kubernetes Learning Path - Microsoft',
                url: 'https://azure.microsoft.com/en-us/resources/kubernetes-learning-path/',
                type: 'documentation',
              },
              {
                title: 'Docker - The Full Course - freeCodeCamp',
                url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
                type: 'video',
              },
              {
                title: 'Kubernetes Patterns',
                url: 'https://k8spatterns.io/',
                type: 'book',
              },
              {
                title: 'Docker & Kubernetes Labs - Play with Docker',
                url: 'https://labs.play-with-docker.com/',
                type: 'documentation',
              },
            ],
          },
          {
            id: '1.4.3',
            title: 'Command Line',
            description:
              'Bash scripting, automation, Linux commands, shell programming',
            category: 'CLI',
            completed: false,
            difficulty: 'Beginner',
            estimatedTime: 30,
            resources: [
              {
                title: 'The Missing Semester of Your CS Education - MIT',
                url: 'https://missing.csail.mit.edu/',
                type: 'video',
              },
              {
                title: 'Bash Scripting - Boot.dev',
                url: 'https://boot.dev/learn/bash-scripting',
                type: 'video',
              },
              {
                title: 'Command Line Power User - Wes Bos',
                url: 'https://commandlinepoweruser.com/',
                type: 'video',
              },
              {
                title: 'Linux Command Line Basics - Linux Journey',
                url: 'https://linuxjourney.com/',
                type: 'documentation',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Giai đoạn 2: Nâng cao và chuyên sâu',
    description: 'Phát triển kỹ năng chuyên sâu trong các lĩnh vực cụ thể',
    category: 'Advanced',
    completed: false,
    difficulty: 'Intermediate',
    subItems: [
      {
        id: '2.1',
        title: 'Backend Development',
        description: 'Phát triển hệ thống phía server',
        category: 'Backend',
        completed: false,
        difficulty: 'Intermediate',
        subItems: [
          {
            id: '2.1.1',
            title: 'API Design',
            description:
              'REST API design, GraphQL schema, API security, versioning',
            category: 'API',
            completed: false,
            difficulty: 'Intermediate',
            estimatedTime: 45,
            resources: [
              {
                title: 'REST API Design - Best Practices',
                url: 'https://www.udemy.com/course/rest-api-design-best-practices/',
                type: 'video',
              },
              {
                title: 'GraphQL - The Complete Guide',
                url: 'https://www.udemy.com/course/graphql-bootcamp/',
                type: 'video',
              },
              {
                title: 'API Security Best Practices - OWASP',
                url: 'https://owasp.org/www-project-api-security/',
                type: 'documentation',
              },
              {
                title: 'API Design Patterns',
                url: 'https://www.manning.com/books/api-design-patterns',
                type: 'book',
              },
              {
                title: 'REST API Security Essentials',
                url: 'https://roadmap.sh/best-practices/api-security',
                type: 'documentation',
              },
              {
                title: 'Learn Backend Development - Boot.dev',
                url: 'https://boot.dev/tracks/backend',
                type: 'video',
              },
              {
                title: 'Go Backend Development - Boot.dev',
                url: 'https://boot.dev/learn/learn-golang',
                type: 'video',
              },
              {
                title: 'APIs and Microservices - freeCodeCamp',
                url: 'https://www.freecodecamp.org/learn/apis-and-microservices/',
                type: 'video',
              },
            ],
          },
          {
            id: '2.1.2',
            title: 'Microservices',
            description:
              'Service discovery, API gateway, event-driven architecture',
            category: 'Architecture',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 55,
            resources: [
              {
                title: 'Microservices Architecture - Martin Fowler',
                url: 'https://martinfowler.com/articles/microservices.html',
                type: 'documentation',
              },
              {
                title: 'Building Microservices - Sam Newman',
                url: 'https://samnewman.io/books/building_microservices/',
                type: 'book',
              },
              {
                title: 'Microservices - Full Course by freeCodeCamp',
                url: 'https://www.youtube.com/watch?v=Ys5t1J6ZgbU',
                type: 'video',
              },
              {
                title: 'Microsoft Microservices Architecture',
                url: 'https://learn.microsoft.com/en-us/azure/architecture/microservices/',
                type: 'documentation',
              },
              {
                title: 'Event-Driven Architecture - ui.dev',
                url: 'https://ui.dev/architecture',
                type: 'video',
              },
            ],
          },
          {
            id: '2.1.3',
            title: 'Message Queues',
            description: 'RabbitMQ, Kafka, event streaming, async processing',
            category: 'Messaging',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 45,
            resources: [
              {
                title: 'Apache Kafka Documentation',
                url: 'https://kafka.apache.org/documentation/',
                type: 'documentation',
              },
              {
                title: 'RabbitMQ Tutorials',
                url: 'https://www.rabbitmq.com/getstarted.html',
                type: 'documentation',
              },
              {
                title: 'Event-Driven Architecture Course - AWS',
                url: 'https://aws.amazon.com/getting-started/hands-on/event-driven-architecture/',
                type: 'video',
              },
              {
                title: 'Kafka: The Definitive Guide',
                url: 'https://www.confluent.io/resources/kafka-the-definitive-guide/',
                type: 'book',
              },
              {
                title: 'Message Queue Systems - Boot.dev',
                url: 'https://boot.dev/learn/message-queues',
                type: 'video',
              },
            ],
          },
        ],
      },
      {
        id: '2.2',
        title: 'Frontend Development',
        description: 'Phát triển giao diện người dùng hiện đại',
        category: 'Frontend',
        completed: false,
        difficulty: 'Intermediate',
        subItems: [
          {
            id: '2.2.1',
            title: 'Modern Frameworks',
            description:
              'React, Vue, Angular, state management, performance optimization',
            category: 'Frameworks',
            completed: false,
            difficulty: 'Intermediate',
            estimatedTime: 60,
            resources: [
              {
                title: 'Full Stack Open 2023',
                url: 'https://fullstackopen.com/en/',
                type: 'documentation',
              },
              {
                title: 'React Documentation (Beta)',
                url: 'https://beta.reactjs.org/',
                type: 'documentation',
              },
              {
                title: 'Epic React by Kent C. Dodds',
                url: 'https://epicreact.dev/',
                type: 'video',
              },
              {
                title: 'Vue.js Documentation',
                url: 'https://vuejs.org/guide/introduction.html',
                type: 'documentation',
              },
              {
                title: 'Next.js Learn Course',
                url: 'https://nextjs.org/learn',
                type: 'documentation',
              },
              {
                title: 'Frontend Masters - Web Development',
                url: 'https://frontendmasters.com/learn/web-development/',
                type: 'video',
              },
              {
                title: 'JavaScript.info',
                url: 'https://javascript.info/',
                type: 'documentation',
              },
              {
                title: 'Web.dev by Google',
                url: 'https://web.dev/learn',
                type: 'documentation',
              },
              {
                title: 'Modern JavaScript - ui.dev',
                url: 'https://ui.dev/modern-javascript',
                type: 'video',
              },
              {
                title: 'TypeScript Course - ui.dev',
                url: 'https://ui.dev/typescript',
                type: 'video',
              },
              {
                title: 'React with TypeScript - ui.dev',
                url: 'https://ui.dev/react-with-typescript',
                type: 'video',
              },
              {
                title: 'React Router - ui.dev',
                url: 'https://ui.dev/react-router',
                type: 'video',
              },
            ],
          },
          {
            id: '2.2.2',
            title: 'Advanced UI',
            description: 'WebGL, Canvas, SVG, animations, responsive design',
            category: 'UI',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 50,
            resources: [
              {
                title: 'Three.js Journey',
                url: 'https://threejs-journey.com/',
                type: 'video',
              },
              {
                title: 'Advanced CSS and Sass - Jonas Schmedtmann',
                url: 'https://www.udemy.com/course/advanced-css-and-sass/',
                type: 'video',
              },
              {
                title: 'SVG Animation - CSS-Tricks',
                url: 'https://css-tricks.com/lodge/svg/',
                type: 'documentation',
              },
              {
                title: 'Creative Coding with Canvas & WebGL - Frontend Masters',
                url: 'https://frontendmasters.com/courses/canvas-webgl/',
                type: 'video',
              },
              {
                title: 'Advanced Animation with Framer Motion',
                url: 'https://www.framer.com/motion/',
                type: 'documentation',
              },
            ],
          },
          {
            id: '2.2.3',
            title: 'Performance',
            description:
              'Code splitting, lazy loading, caching strategies, PWA',
            category: 'Optimization',
            completed: false,
            difficulty: 'Advanced',
            resources: [
              {
                title: 'Web Performance Fundamentals - Google',
                url: 'https://web.dev/learn/performance/',
                type: 'documentation',
              },
              {
                title: 'Frontend Performance Checklist',
                url: 'https://www.smashingmagazine.com/2021/01/front-end-performance-checklist-2021-pdf-pages/',
                type: 'documentation',
              },
              {
                title: 'Performance Testing - TestingJavaScript',
                url: 'https://testingjavascript.com/',
                type: 'video',
              },
              {
                title: 'Web Vitals - Google',
                url: 'https://web.dev/vitals/',
                type: 'documentation',
              },
              {
                title: 'React Performance - ui.dev',
                url: 'https://ui.dev/react-performance',
                type: 'video',
              },
            ],
          },
          {
            id: '2.2.4',
            title: 'Testing',
            description: 'Unit testing, integration testing, E2E testing',
            category: 'Testing',
            completed: false,
            difficulty: 'Intermediate',
            resources: [
              {
                title: 'Testing JavaScript - Kent C. Dodds',
                url: 'https://testingjavascript.com/',
                type: 'video',
              },
              {
                title: 'React Testing Library Documentation',
                url: 'https://testing-library.com/docs/react-testing-library/intro/',
                type: 'documentation',
              },
              {
                title: 'Jest Documentation',
                url: 'https://jestjs.io/docs/getting-started',
                type: 'documentation',
              },
              {
                title: 'Cypress Documentation',
                url: 'https://docs.cypress.io/',
                type: 'documentation',
              },
            ],
          },
        ],
      },
      {
        id: '2.3',
        title: 'Big Data',
        description: 'Xử lý và phân tích dữ liệu lớn',
        category: 'Data',
        completed: false,
        difficulty: 'Advanced',
        subItems: [
          {
            id: '2.3.1',
            title: 'Data Processing',
            description: 'Apache Spark, Hadoop, distributed computing',
            category: 'Processing',
            completed: false,
            difficulty: 'Advanced',
            resources: [
              {
                title: 'Data Engineer with Python - DataCamp',
                url: 'https://www.datacamp.com/tracks/data-engineer-with-python',
                type: 'video',
              },
              {
                title: 'Big Data with PySpark - DataCamp',
                url: 'https://www.datacamp.com/courses/big-data-with-pyspark',
                type: 'video',
              },
              {
                title: 'Data Engineering Career Track - Codecademy',
                url: 'https://www.codecademy.com/learn/paths/data-engineering',
                type: 'video',
              },
              {
                title: 'Apache Spark Course - freeCodeCamp',
                url: 'https://www.freecodecamp.org/news/apache-spark-tutorial/',
                type: 'video',
              },
            ],
          },
          {
            id: '2.3.2',
            title: 'Data Pipelines',
            description: 'ETL processes, data warehousing, data lakes',
            category: 'ETL',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 55,
            resources: [
              {
                title: 'Data Engineering with Python - DataCamp',
                url: 'https://www.datacamp.com/tracks/data-engineer-with-python',
                type: 'video',
              },
              {
                title: 'Building Data Pipelines - AWS',
                url: 'https://aws.amazon.com/getting-started/hands-on/build-log-analytics-solution/',
                type: 'documentation',
              },
              {
                title: 'Modern Data Stack - Snowflake',
                url: 'https://www.snowflake.com/guides/modern-data-stack',
                type: 'documentation',
              },
              {
                title: 'dbt (data build tool) Fundamentals',
                url: 'https://courses.getdbt.com/courses/fundamentals',
                type: 'video',
              },
              {
                title: 'Apache Airflow Tutorial',
                url: 'https://airflow.apache.org/docs/apache-airflow/stable/tutorial.html',
                type: 'documentation',
              },
            ],
          },
          {
            id: '2.3.3',
            title: 'Analytics',
            description: 'Business intelligence, data visualization, reporting',
            category: 'Analytics',
            completed: false,
            difficulty: 'Advanced',
            resources: [
              {
                title: 'Data Analyst with Python - DataCamp',
                url: 'https://www.datacamp.com/tracks/data-analyst-with-python',
                type: 'video',
              },
              {
                title: 'Data Analysis with Python - freeCodeCamp',
                url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/',
                type: 'video',
              },
              {
                title: 'Power BI Fundamentals - DataCamp',
                url: 'https://www.datacamp.com/courses/introduction-to-power-bi',
                type: 'video',
              },
              {
                title: 'Data Analytics Career Path - Codecademy',
                url: 'https://www.codecademy.com/learn/paths/data-analyst',
                type: 'video',
              },
              {
                title: 'SQL for Data Analysis - DataCamp',
                url: 'https://www.datacamp.com/tracks/sql-for-business-analysts',
                type: 'video',
              },
            ],
          },
        ],
      },
      {
        id: '2.4',
        title: 'Cybersecurity',
        description: 'Bảo mật và an toàn thông tin',
        category: 'Security',
        completed: false,
        difficulty: 'Advanced',
        subItems: [
          {
            id: '2.4.1',
            title: 'Application Security',
            description:
              'OWASP Top 10, secure coding practices, penetration testing',
            category: 'AppSec',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 50,
            resources: [
              {
                title: 'OWASP Top 10 - Official Guide',
                url: 'https://owasp.org/www-project-top-ten/',
                type: 'documentation',
              },
              {
                title: 'Web Security Academy - PortSwigger',
                url: 'https://portswigger.net/web-security',
                type: 'video',
              },
              {
                title: 'Secure Coding - Microsoft Learn',
                url: 'https://learn.microsoft.com/en-us/training/paths/secure-develop-on-azure/',
                type: 'documentation',
              },
              {
                title: 'Penetration Testing - TryHackMe',
                url: 'https://tryhackme.com/paths',
                type: 'video',
              },
              {
                title: 'Application Security - Boot.dev',
                url: 'https://boot.dev/learn/learn-web-security',
                type: 'video',
              },
            ],
          },
          {
            id: '2.4.2',
            title: 'Cryptography',
            description: 'Encryption algorithms, digital signatures, PKI',
            category: 'Crypto',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 60,
            resources: [
              {
                title: 'Cryptography I - Stanford University',
                url: 'https://www.coursera.org/learn/crypto',
                type: 'video',
              },
              {
                title: 'Practical Cryptography for Developers',
                url: 'https://cryptobook.nakov.com/',
                type: 'documentation',
              },
              {
                title: 'Real-World Cryptography',
                url: 'https://www.manning.com/books/real-world-cryptography',
                type: 'book',
              },
              {
                title: 'Cryptography Engineering Course - Boot.dev',
                url: 'https://boot.dev/learn/cryptography',
                type: 'video',
              },
              {
                title: 'Web Crypto API - MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
                type: 'documentation',
              },
            ],
          },
          {
            id: '2.4.3',
            title: 'Network Security',
            description: 'Firewalls, IDS/IPS, VPN, security protocols',
            category: 'NetSec',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 55,
            resources: [
              {
                title: 'Practical Networking - NetworkChuck',
                url: 'https://www.youtube.com/c/NetworkChuck',
                type: 'video',
              },
              {
                title: 'Network Security - Stanford',
                url: 'https://cs155.stanford.edu/',
                type: 'documentation',
              },
              {
                title: 'CompTIA Security+ Course - Professor Messer',
                url: 'https://www.professormesser.com/security-plus/sy0-601/sy0-601-video/sy0-601-comptia-security-plus/',
                type: 'video',
              },
              {
                title: 'Network Security Essentials - Boot.dev',
                url: 'https://boot.dev/learn/network-security',
                type: 'video',
              },
              {
                title: 'OWASP Network Security Testing Guide',
                url: 'https://owasp.org/www-project-web-security-testing-guide/',
                type: 'documentation',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Giai đoạn 3: Đổi mới và chuyên sâu xu hướng',
    description: 'Khám phá và làm chủ các công nghệ mới',
    category: 'Innovation',
    completed: false,
    difficulty: 'Advanced',
    subItems: [
      {
        id: '3.1',
        title: 'Artificial Intelligence',
        description: 'Phát triển các ứng dụng AI và ML',
        category: 'AI',
        completed: false,
        difficulty: 'Advanced',
        subItems: [
          {
            id: '3.1.1',
            title: 'Machine Learning',
            description:
              'Supervised/Unsupervised learning, Neural Networks, Deep Learning frameworks',
            category: 'ML',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 80,
            resources: [
              {
                title: 'Machine Learning - Coursera (Andrew Ng)',
                url: 'https://www.coursera.org/learn/machine-learning',
                type: 'video',
              },
              {
                title: 'Deep Learning Specialization',
                url: 'https://www.coursera.org/specializations/deep-learning',
                type: 'video',
              },
              {
                title: 'Fast.ai - Practical Deep Learning',
                url: 'https://www.fast.ai/',
                type: 'video',
              },
              {
                title: 'TensorFlow Documentation',
                url: 'https://www.tensorflow.org/learn',
                type: 'documentation',
              },
              {
                title: 'PyTorch Tutorials',
                url: 'https://pytorch.org/tutorials/',
                type: 'documentation',
              },
              {
                title:
                  'Hands-On Machine Learning with Scikit-Learn and TensorFlow',
                url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
                type: 'book',
              },
              {
                title: 'Machine Learning Scientist - DataCamp',
                url: 'https://www.datacamp.com/tracks/machine-learning-scientist-with-python',
                type: 'video',
              },
              {
                title: 'Deep Learning Specialization - DataCamp',
                url: 'https://www.datacamp.com/tracks/deep-learning-in-python',
                type: 'video',
              },
              {
                title: 'Machine Learning with Python - freeCodeCamp',
                url: 'https://www.freecodecamp.org/learn/machine-learning-with-python/',
                type: 'video',
              },
              {
                title: 'AI/ML Path - Codecademy',
                url: 'https://www.codecademy.com/learn/paths/machine-learning-ai',
                type: 'video',
              },
            ],
          },
          {
            id: '3.1.2',
            title: 'Natural Language Processing',
            description:
              'Text processing, sentiment analysis, chatbots, language models',
            category: 'NLP',
            completed: false,
            difficulty: 'Advanced',
            resources: [
              {
                title: 'NLP Fundamentals - DataCamp',
                url: 'https://www.datacamp.com/courses/natural-language-processing-fundamentals',
                type: 'video',
              },
              {
                title: 'Advanced NLP with spaCy - DataCamp',
                url: 'https://www.datacamp.com/courses/advanced-nlp-with-spacy',
                type: 'video',
              },
              {
                title: 'NLP with Python - Codecademy',
                url: 'https://www.codecademy.com/learn/natural-language-processing',
                type: 'video',
              },
            ],
          },
          {
            id: '3.1.3',
            title: 'Computer Vision',
            description:
              'Image processing, object detection, facial recognition',
            category: 'Vision',
            completed: false,
            difficulty: 'Advanced',
            resources: [
              {
                title: 'Image Processing with Python - DataCamp',
                url: 'https://www.datacamp.com/courses/image-processing-in-python',
                type: 'video',
              },
              {
                title: 'Computer Vision Fundamentals - DataCamp',
                url: 'https://www.datacamp.com/courses/deep-learning-for-computer-vision',
                type: 'video',
              },
              {
                title: 'TensorFlow for Computer Vision - freeCodeCamp',
                url: 'https://www.freecodecamp.org/news/tensorflow-for-computer-vision/',
                type: 'video',
              },
            ],
          },
        ],
      },
      {
        id: '3.2',
        title: 'Blockchain',
        description: 'Phát triển ứng dụng phi tập trung',
        category: 'Blockchain',
        completed: false,
        difficulty: 'Advanced',
        subItems: [
          {
            id: '3.2.1',
            title: 'Smart Contracts',
            description:
              'Solidity, smart contract security, testing and deployment',
            category: 'Contracts',
            completed: false,
            difficulty: 'Advanced',
            resources: [
              {
                title: 'Ethereum Development Course - freeCodeCamp',
                url: 'https://www.freecodecamp.org/news/learn-solidity-blockchain-and-smart-contracts-in-a-free/',
                type: 'video',
              },
              {
                title: 'CryptoZombies - Learn to Code Blockchain DApps',
                url: 'https://cryptozombies.io/',
                type: 'video',
              },
              {
                title: 'Solidity Documentation',
                url: 'https://docs.soliditylang.org/',
                type: 'documentation',
              },
              {
                title: 'Web3 University',
                url: 'https://www.web3.university/',
                type: 'documentation',
              },
              {
                title: 'Chainlink Documentation',
                url: 'https://docs.chain.link/getting-started/conceptual-overview',
                type: 'documentation',
              },
            ],
          },
          {
            id: '3.2.2',
            title: 'DApps',
            description: 'Web3.js, decentralized storage, token standards',
            category: 'DApps',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 50,
            resources: [
              {
                title: 'Full Stack Web3 Development - freeCodeCamp',
                url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
                type: 'video',
              },
              {
                title: "Ethereum and Solidity: Complete Developer's Guide",
                url: 'https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/',
                type: 'video',
              },
              {
                title: 'Web3.js Documentation',
                url: 'https://web3js.readthedocs.io/',
                type: 'documentation',
              },
              {
                title: 'IPFS Documentation',
                url: 'https://docs.ipfs.tech/',
                type: 'documentation',
              },
              {
                title: 'Buildspace - Learn Web3 Development',
                url: 'https://buildspace.so/',
                type: 'video',
              },
            ],
          },
          {
            id: '3.2.3',
            title: 'DeFi',
            description:
              'Decentralized finance protocols, yield farming, liquidity pools',
            category: 'DeFi',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 60,
            resources: [
              {
                title: 'DeFi Developer Road Map',
                url: 'https://github.com/OffcierCia/DeFi-Developer-Road-Map',
                type: 'documentation',
              },
              {
                title: 'Uniswap Documentation',
                url: 'https://docs.uniswap.org/',
                type: 'documentation',
              },
              {
                title: 'DeFi MOOC - Berkeley',
                url: 'https://defi-learning.org/',
                type: 'video',
              },
              {
                title: 'Aave Documentation',
                url: 'https://docs.aave.com/portal/',
                type: 'documentation',
              },
              {
                title: 'How to DeFi - CoinGecko',
                url: 'https://landing.coingecko.com/how-to-defi/',
                type: 'book',
              },
            ],
          },
        ],
      },
      {
        id: '3.3',
        title: 'IoT và Cloud',
        description: 'Kết hợp IoT với điện toán đám mây',
        category: 'IoT',
        completed: false,
        difficulty: 'Advanced',
        subItems: [
          {
            id: '3.3.1',
            title: 'IoT Development',
            description: 'Sensor programming, embedded systems, IoT protocols',
            category: 'IoT Dev',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 45,
            resources: [
              {
                title: 'Introduction to IoT - Microsoft Learn',
                url: 'https://learn.microsoft.com/en-us/training/paths/introduction-to-azure-iot/',
                type: 'documentation',
              },
              {
                title: 'IoT Engineering - Coursera',
                url: 'https://www.coursera.org/specializations/iot',
                type: 'video',
              },
              {
                title: 'Raspberry Pi Projects',
                url: 'https://projects.raspberrypi.org/',
                type: 'documentation',
              },
              {
                title: 'Arduino Project Hub',
                url: 'https://create.arduino.cc/projecthub',
                type: 'documentation',
              },
              {
                title: 'ESP32 Programming - Random Nerd Tutorials',
                url: 'https://randomnerdtutorials.com/esp32-tutorials-projects/',
                type: 'documentation',
              },
            ],
          },
          {
            id: '3.3.2',
            title: 'Cloud Integration',
            description: 'AWS IoT, Azure IoT Hub, Google Cloud IoT',
            category: 'Cloud',
            completed: false,
            difficulty: 'Advanced',
            resources: [
              {
                title: 'AWS Cloud Practitioner - freeCodeCamp',
                url: 'https://www.freecodecamp.org/news/aws-certified-cloud-practitioner-training-2019-free-video-course/',
                type: 'video',
              },
              {
                title: 'Azure Fundamentals Learning Path',
                url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/',
                type: 'documentation',
              },
              {
                title: 'Google Cloud Skills Boost',
                url: 'https://www.cloudskillsboost.google/',
                type: 'video',
              },
              {
                title: 'Cloud Architecture Patterns',
                url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/',
                type: 'documentation',
              },
              {
                title: 'Serverless Stack (SST)',
                url: 'https://sst.dev/guide.html',
                type: 'documentation',
              },
            ],
          },
          {
            id: '3.3.3',
            title: 'Edge Computing',
            description:
              'Edge processing, real-time analytics, distributed systems',
            category: 'Edge',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 45,
            resources: [
              {
                title: 'Edge Computing - Microsoft Learn',
                url: 'https://learn.microsoft.com/en-us/azure/architecture/solution-ideas/articles/hybrid-edge-computing',
                type: 'documentation',
              },
              {
                title: 'AWS Edge Computing Guide',
                url: 'https://aws.amazon.com/edge/',
                type: 'documentation',
              },
              {
                title: 'Edge Computing Patterns - IBM',
                url: 'https://www.ibm.com/cloud/architecture/architectures/edge-computing',
                type: 'documentation',
              },
              {
                title: 'Distributed Systems - MIT',
                url: 'https://pdos.csail.mit.edu/6.824/',
                type: 'video',
              },
              {
                title: 'Real-Time Analytics with Apache Kafka',
                url: 'https://www.confluent.io/blog/real-time-analytics-with-kafka/',
                type: 'documentation',
              },
            ],
          },
        ],
      },
      {
        id: '3.4',
        title: 'Game Development',
        description: 'Phát triển trò chơi điện tử',
        category: 'Gaming',
        completed: false,
        difficulty: 'Advanced',
        subItems: [
          {
            id: '3.4.1',
            title: 'Game Engines',
            description: 'Unity, Unreal Engine, game architecture patterns',
            category: 'Engines',
            completed: false,
            difficulty: 'Advanced',
            resources: [
              {
                title: 'Unity Learn Premium',
                url: 'https://learn.unity.com/',
                type: 'video',
              },
              {
                title: 'Unreal Engine 5 Documentation',
                url: 'https://docs.unrealengine.com/5.0/en-US/',
                type: 'documentation',
              },
              {
                title: 'Game Programming Patterns',
                url: 'https://gameprogrammingpatterns.com/',
                type: 'book',
              },
              {
                title: 'Godot Engine Tutorials',
                url: 'https://docs.godotengine.org/en/stable/getting_started/step_by_step/',
                type: 'documentation',
              },
              {
                title: 'Game Development with Rust',
                url: 'https://www.youtube.com/watch?v=qqm8VDOYf6U',
                type: 'video',
              },
            ],
          },
          {
            id: '3.4.2',
            title: 'Game Physics',
            description:
              'Physics engines, collision detection, particle systems',
            category: 'Physics',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 50,
            resources: [
              {
                title: 'Game Physics Tutorial - Three.js Journey',
                url: 'https://threejs-journey.com/lessons/physics',
                type: 'video',
              },
              {
                title: 'Physics for Game Developers',
                url: 'https://gamephysicsbook.com/',
                type: 'book',
              },
              {
                title: 'Matter.js Physics Engine',
                url: 'https://brm.io/matter-js/',
                type: 'documentation',
              },
              {
                title: 'Game Physics Engine Development',
                url: 'https://www.amazon.com/Game-Physics-Engine-Development-Commercial-Grade/dp/0123819768',
                type: 'book',
              },
              {
                title: 'Physics Simulation - The Coding Train',
                url: 'https://www.youtube.com/playlist?list=PLRqwX-V7Uu6akvoNKE4GAxf6ZeBYoJ4uh',
                type: 'video',
              },
            ],
          },
          {
            id: '3.4.3',
            title: 'Game AI',
            description: 'Pathfinding, behavior trees, decision making',
            category: 'Game AI',
            completed: false,
            difficulty: 'Advanced',
            estimatedTime: 55,
            resources: [
              {
                title: 'Artificial Intelligence for Games',
                url: 'https://www.gameaipro.com/',
                type: 'book',
              },
              {
                title: 'Game AI Pro',
                url: 'http://www.gameaipro.com/',
                type: 'documentation',
              },
              {
                title: 'Unity AI Programming',
                url: 'https://learn.unity.com/course/artificial-intelligence-for-beginners',
                type: 'video',
              },
              {
                title: 'A* Pathfinding Project',
                url: 'https://arongranberg.com/astar/',
                type: 'documentation',
              },
              {
                title: 'Behavior Trees in Game Development',
                url: 'https://www.gamedeveloper.com/programming/behavior-trees-for-ai-how-they-work',
                type: 'documentation',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Giai đoạn 4: Trở thành "Thánh nhân"',
    description: 'Đạt đến trình độ chuyên gia và chia sẻ kiến thức',
    category: 'Mastery',
    completed: false,
    difficulty: 'Expert',
    subItems: [
      {
        id: '4.1',
        title: 'Sáng tạo hệ thống',
        description: 'Phát triển các hệ thống đột phá',
        category: 'Innovation',
        completed: false,
        difficulty: 'Expert',
        subItems: [
          {
            id: '4.1.1',
            title: 'AI & Blockchain',
            description:
              'Kết hợp AI với Blockchain cho hệ thống tài chính thông minh',
            category: 'Hybrid',
            completed: false,
            difficulty: 'Expert',
            estimatedTime: 60,
            resources: [
              {
                title: 'AI in Blockchain - MIT Digital Currency Initiative',
                url: 'https://dci.mit.edu/research-artificial-intelligence',
                type: 'documentation',
              },
              {
                title: 'Machine Learning for Blockchain - Coursera',
                url: 'https://www.coursera.org/learn/blockchain-specialization',
                type: 'video',
              },
              {
                title: 'Ocean Protocol Documentation',
                url: 'https://docs.oceanprotocol.com/',
                type: 'documentation',
              },
              {
                title: 'AI-Powered Smart Contracts - ChainLink',
                url: 'https://chain.link/education-hub/ai-blockchain',
                type: 'documentation',
              },
              {
                title: 'Fetch.ai Academy',
                url: 'https://fetch.ai/academy',
                type: 'video',
              },
            ],
          },
          {
            id: '4.1.2',
            title: 'Game-as-a-Service',
            description: 'Nền tảng game đám mây, multiplayer infrastructure',
            category: 'GaaS',
            completed: false,
            difficulty: 'Expert',
            estimatedTime: 55,
            resources: [
              {
                title: 'AWS Game Tech',
                url: 'https://aws.amazon.com/gametech/',
                type: 'documentation',
              },
              {
                title: 'Unity Gaming Services',
                url: 'https://unity.com/solutions/gaming-services',
                type: 'documentation',
              },
              {
                title: 'Photon Engine Documentation',
                url: 'https://doc.photonengine.com/',
                type: 'documentation',
              },
              {
                title: 'Game Development on Azure',
                url: 'https://learn.microsoft.com/en-us/gaming/',
                type: 'documentation',
              },
              {
                title: 'Multiplayer Game Development - Udemy',
                url: 'https://www.udemy.com/course/multiplayer-game-development-in-unity-with-photon/',
                type: 'video',
              },
            ],
          },
          {
            id: '4.1.3',
            title: 'Innovation Projects',
            description: 'Phát triển sản phẩm mới, R&D, proof of concepts',
            category: 'R&D',
            completed: false,
            difficulty: 'Expert',
            estimatedTime: 50,
            resources: [
              {
                title: 'Design Thinking - Stanford d.school',
                url: 'https://dschool.stanford.edu/resources',
                type: 'documentation',
              },
              {
                title: 'Product Development - Harvard Business Review',
                url: 'https://hbr.org/topic/innovation',
                type: 'documentation',
              },
              {
                title: 'Research Methods - Coursera',
                url: 'https://www.coursera.org/learn/research-methods',
                type: 'video',
              },
              {
                title: 'Proof of Concept Development - IBM',
                url: 'https://www.ibm.com/garage/method/practices/think/poc-guide',
                type: 'documentation',
              },
              {
                title: 'Innovation Management - MIT OpenCourseWare',
                url: 'https://ocw.mit.edu/courses/15-351-managing-innovation-and-entrepreneurship-spring-2008/',
                type: 'video',
              },
            ],
          },
        ],
      },
      {
        id: '4.2',
        title: 'Chia sẻ kiến thức',
        description: 'Đóng góp cho cộng đồng',
        category: 'Knowledge Sharing',
        completed: false,
        difficulty: 'Expert',
        subItems: [
          {
            id: '4.2.1',
            title: 'Content Creation',
            description: 'Viết blog, sách kỹ thuật, video tutorials',
            category: 'Content',
            completed: false,
            difficulty: 'Expert',
            estimatedTime: 40,
            resources: [
              {
                title: 'Technical Writing Courses - Google',
                url: 'https://developers.google.com/tech-writing',
                type: 'documentation',
              },
              {
                title: 'Writing for Software Developers',
                url: 'https://philipkiely.com/wfsd/',
                type: 'book',
              },
              {
                title: 'Creating Technical Videos - egghead.io',
                url: 'https://egghead.io/courses/record-badass-screencasts-for-egghead-io',
                type: 'video',
              },
              {
                title: 'Technical Blogging - Pragmatic Programmers',
                url: 'https://pragprog.com/titles/actb2/technical-blogging-second-edition/',
                type: 'book',
              },
              {
                title: 'Developer Advocacy - Microsoft',
                url: 'https://learn.microsoft.com/en-us/azure/developer/developer-advocacy/',
                type: 'documentation',
              },
            ],
          },
          {
            id: '4.2.2',
            title: 'Community Building',
            description: 'Tổ chức workshop, meetup, conference speaking',
            category: 'Community',
            completed: false,
            difficulty: 'Expert',
            estimatedTime: 40,
            resources: [
              {
                title: 'Developer Relations - Google',
                url: 'https://developers.google.com/community/experts',
                type: 'documentation',
              },
              {
                title: 'Public Speaking - Toastmasters',
                url: 'https://www.toastmasters.org/resources',
                type: 'documentation',
              },
              {
                title: 'Conference Speaking - Speaking.io',
                url: 'https://speaking.io/',
                type: 'documentation',
              },
              {
                title: 'Community Management - CMX Hub',
                url: 'https://cmxhub.com/academy/',
                type: 'video',
              },
              {
                title: 'Tech Event Organization Guide',
                url: 'https://www.eventbrite.com/blog/tech-event-planning-guide-ds00/',
                type: 'documentation',
              },
            ],
          },
          {
            id: '4.2.3',
            title: 'Mentorship',
            description:
              'Hướng dẫn developer mới, code review, career coaching',
            category: 'Mentoring',
            completed: false,
            difficulty: 'Expert',
            estimatedTime: 35,
            resources: [
              {
                title: 'Code Review Best Practices - Google',
                url: 'https://google.github.io/eng-practices/review/',
                type: 'documentation',
              },
              {
                title: 'Technical Mentorship Guide - GitLab',
                url: 'https://about.gitlab.com/handbook/engineering/mentorship/',
                type: 'documentation',
              },
              {
                title: 'Career Coaching for Developers',
                url: 'https://www.pluralsight.com/courses/career-and-professional-development',
                type: 'video',
              },
              {
                title: 'Mentoring in Software Craftsmanship',
                url: 'https://www.oreilly.com/library/view/apprenticeship-patterns/9780596806842/',
                type: 'book',
              },
              {
                title: 'Code Review Guidelines - Microsoft',
                url: 'https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-request-review-guidelines',
                type: 'documentation',
              },
            ],
          },
        ],
      },
      {
        id: '4.3',
        title: 'Công nghệ tương lai',
        description: 'Nghiên cứu công nghệ tiên tiến',
        category: 'Future Tech',
        completed: false,
        difficulty: 'Expert',
        subItems: [
          {
            id: '4.3.1',
            title: 'Quantum Computing',
            description: 'Quantum algorithms, Qiskit, quantum machine learning',
            category: 'Quantum',
            completed: false,
            difficulty: 'Expert',
            estimatedTime: 60,
            resources: [
              {
                title: 'Qiskit Textbook',
                url: 'https://qiskit.org/textbook/preface.html',
                type: 'documentation',
              },
              {
                title: 'Introduction to Quantum Computing - MIT OpenCourseWare',
                url: 'https://ocw.mit.edu/courses/nuclear-engineering/22-51-quantum-theory-of-radiation-interactions-fall-2012/',
                type: 'video',
              },
              {
                title: 'Quantum Computing - IBM Learning',
                url: 'https://www.ibm.com/quantum/learn',
                type: 'documentation',
              },
              {
                title: 'Microsoft Quantum Development Kit',
                url: 'https://learn.microsoft.com/en-us/azure/quantum/',
                type: 'documentation',
              },
              {
                title: 'Quantum Machine Learning - PennyLane',
                url: 'https://pennylane.ai/qml/',
                type: 'documentation',
              },
            ],
          },
          {
            id: '4.3.2',
            title: 'Metaverse',
            description: 'VR/AR development, spatial computing, 3D worlds',
            category: 'Metaverse',
            completed: false,
            difficulty: 'Expert',
            estimatedTime: 50,
            resources: [
              {
                title: 'Meta Quest Development',
                url: 'https://developer.oculus.com/documentation/',
                type: 'documentation',
              },
              {
                title: 'Unity XR Development',
                url: 'https://learn.unity.com/course/introduction-to-xr-vr-ar-and-mr-foundations',
                type: 'video',
              },
              {
                title: 'Unreal Engine VR Development',
                url: 'https://www.unrealengine.com/en-US/vr',
                type: 'documentation',
              },
              {
                title: 'WebXR Device API',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
                type: 'documentation',
              },
              {
                title: 'Spatial Computing - Apple Vision Pro',
                url: 'https://developer.apple.com/visionos/',
                type: 'documentation',
              },
            ],
          },
          {
            id: '4.3.3',
            title: 'Emerging Tech',
            description:
              'Brain-computer interfaces, 6G, future computing paradigms',
            category: 'Emerging',
            completed: false,
            difficulty: 'Expert',
            estimatedTime: 45,
            resources: [
              {
                title: 'MIT Technology Review',
                url: 'https://www.technologyreview.com/',
                type: 'documentation',
              },
              {
                title: 'Future Computing - IEEE',
                url: 'https://www.computer.org/publications/tech-news/trends',
                type: 'documentation',
              },
              {
                title: 'Neuralink Technical Overview',
                url: 'https://neuralink.com/science/',
                type: 'documentation',
              },
              {
                title: '6G Research - IEEE Future Networks',
                url: 'https://futurenetworks.ieee.org/roadmap',
                type: 'documentation',
              },
              {
                title: 'Nature - Computer Science',
                url: 'https://www.nature.com/subjects/computer-science',
                type: 'documentation',
              },
            ],
          },
        ],
      },
    ],
  },
];
