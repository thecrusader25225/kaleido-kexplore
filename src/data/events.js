const img = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

export const events = [
  {
    id: 'future-builders',
    title: 'Future Builders Summit',
    category: 'Technology',
    date: '2026-11-21',
    time: '09:30 AM',
    endTime: '05:00 PM',
    venue: 'KIIT Convention Centre',
    location: 'Bhubaneswar, India',
    image: img('photo-1517245386807-bb43f82c33c4'),
    description: 'A day for the people shaping what comes next.',
    fullDescription: 'A high-energy gathering of engineers, founders, designers, and curious minds exploring the technologies changing how we live and work. Expect practical sessions, honest conversations, and ideas you can take back to your team.',
    organizer: 'Kaleido Community',
    price: 'Free',
    seats: 180,
    highlights: [
      'Keynotes from builders',
      'Hands-on product sessions',
      'Founder networking',
      'Community showcase'
    ],
    agenda: [
      ['09:30 AM', 'Doors open & coffee'],
      ['10:30 AM', 'The next decade of building'],
      ['12:00 PM', 'Breakout sessions'],
      ['02:00 PM', 'Live product demos'],
      ['04:00 PM', 'Networking & close']
    ],
    featured: true
  },
  {
    id: 'indie-after-dark',
    title: 'Indie After Dark',
    category: 'Music',
    date: '2026-11-28',
    time: '06:00 PM',
    endTime: '10:30 PM',
    venue: 'The Open Stage',
    location: 'Bhubaneswar, India',
    image: img('photo-1506157786151-b8491531f063'),
    description: 'An intimate night of new sounds and independent artists.',
    fullDescription: 'Discover the next wave of independent music in a thoughtfully curated live showcase. Four emerging acts, one intimate room, and a night built around the joy of finding your new favourite sound.',
    organizer: 'Afterglow Sessions',
    price: '₹299',
    seats: 120,
    highlights: [
      'Four live performances',
      'Independent artist merch',
      'Food and beverage stalls',
      'Limited-capacity venue'
    ],
    agenda: [
      ['06:00 PM', 'Doors & warm-up set'],
      ['07:00 PM', 'Opening act'],
      ['08:00 PM', 'Featured performances'],
      ['10:00 PM', 'Final set']
    ],
    featured: true
  },
  {
    id: 'design-in-motion',
    title: 'Design in Motion',
    category: 'Workshops',
    date: '2026-12-05',
    time: '10:00 AM',
    endTime: '04:00 PM',
    venue: 'Innovation Lab, KIIT',
    location: 'Bhubaneswar, India',
    image: img('photo-1558655146-d09347e92766'),
    description: 'A hands-on workshop for curious visual thinkers.',
    fullDescription: 'Move from inspiration to execution in a practical design workshop covering visual systems, prototyping, and critique. Bring a laptop and a problem you want to solve.',
    organizer: 'Kaleido Design Circle',
    price: '₹199',
    seats: 45,
    highlights: [
      'Guided design exercises',
      'Figma prototyping',
      'Portfolio feedback',
      'Take-home resources'
    ],
    agenda: [
      ['10:00 AM', 'Visual thinking'],
      ['11:30 AM', 'Design systems'],
      ['01:00 PM', 'Lunch break'],
      ['02:00 PM', 'Prototype sprint'],
      ['03:30 PM', 'Show and tell']
    ]
  },
  {
    id: 'founder-room',
    title: 'The Founder Room',
    category: 'Business',
    date: '2026-12-12',
    time: '11:00 AM',
    endTime: '02:00 PM',
    venue: 'Startup Hub',
    location: 'Bhubaneswar, India',
    image: img('photo-1521737711867-e3b97375f902'),
    description: 'Real conversations about starting from zero.',
    fullDescription: 'A candid afternoon with early-stage founders discussing validation, hiring, capital, and the messy realities behind building a company. Small group format keeps the conversation useful and direct.',
    organizer: 'Build Odisha',
    price: 'Free',
    seats: 60,
    highlights: [
      'Founder roundtable',
      'Audience Q&A',
      'Peer introductions',
      'Practical startup lessons'
    ],
    agenda: [
      ['11:00 AM', 'Welcome'],
      ['11:15 AM', 'Founder stories'],
      ['12:15 PM', 'Open Q&A'],
      ['01:00 PM', 'Introductions']
    ],
    featured: true
  },
  {
    id: 'city-run-club',
    title: 'City Run Club: Sunrise 5K',
    category: 'Sports',
    date: '2026-11-15',
    time: '06:00 AM',
    endTime: '08:00 AM',
    venue: 'Ekamra Kanan Gate',
    location: 'Bhubaneswar, India',
    image: img('photo-1552674605-db6ffd4facb5'),
    description: 'Start your weekend with good miles and better company.',
    fullDescription: 'A relaxed community 5K for every pace. Whether you are building a running habit or chasing a personal best, join the crew for a safe, social morning route.',
    organizer: 'City Run Club',
    price: 'Free',
    seats: 100,
    highlights: [
      'Beginner-friendly pace groups',
      'Water stations',
      'Post-run refreshments',
      'Community photographs'
    ],
    agenda: [
      ['06:00 AM', 'Warm-up'],
      ['06:20 AM', '5K start'],
      ['07:20 AM', 'Cool down'],
      ['07:40 AM', 'Refreshments']
    ]
  },
  {
    id: 'frames-of-us',
    title: 'Frames of Us',
    category: 'Art & Culture',
    date: '2026-12-19',
    time: '04:00 PM',
    endTime: '08:00 PM',
    venue: 'Gallery 21',
    location: 'Bhubaneswar, India',
    image: img('photo-1579783902614-a3fb3927b6a5'),
    description: 'A group exhibition on identity, memory, and place.',
    fullDescription: 'An open-hearted group exhibition bringing together photographers, illustrators, and mixed-media artists. Explore personal stories through a collection of contemporary visual work.',
    organizer: 'Gallery 21',
    price: 'Free',
    seats: 150,
    highlights: [
      'Works by 18 artists',
      'Artist walk-through',
      'Live sketch corner',
      'Community discussion'
    ],
    agenda: [
      ['04:00 PM', 'Gallery opens'],
      ['05:00 PM', 'Artist walk-through'],
      ['06:30 PM', 'Open discussion']
    ]
  },
  {
    id: 'cloud-native-day',
    title: 'Cloud Native Day',
    category: 'Technology',
    date: '2027-01-09',
    time: '09:00 AM',
    endTime: '05:30 PM',
    venue: 'KIIT Auditorium',
    location: 'Bhubaneswar, India',
    image: img('photo-1451187580459-43490279c0fa'),
    description: 'Containers, platforms, and the people operating them.',
    fullDescription: 'A community-led day of talks and practical demonstrations around Kubernetes, platform engineering, observability, and cloud-native infrastructure.',
    organizer: 'Cloud Native Odisha',
    price: '₹149',
    seats: 220,
    highlights: [
      'Kubernetes deep dives',
      'Platform engineering talks',
      'Live demos',
      'Community networking'
    ],
    agenda: [
      ['09:00 AM', 'Registration'],
      ['10:00 AM', 'Keynote'],
      ['11:30 AM', 'Technical talks'],
      ['02:00 PM', 'Live labs'],
      ['04:30 PM', 'Community panel']
    ],
    featured: true
  },
  {
    id: 'coffee-and-code',
    title: 'Coffee & Code',
    category: 'Technology',
    date: '2026-11-19',
    time: '05:00 PM',
    endTime: '07:30 PM',
    venue: 'Brew & Co.',
    location: 'Bhubaneswar, India',
    image: img('photo-1498050108023-c5249f4df085'),
    description: 'Bring a side project. Leave with momentum.',
    fullDescription: 'An informal evening for developers to share what they are building, pair on tricky problems, and meet people working across the local tech scene. All experience levels welcome.',
    organizer: 'Kaleido Tech',
    price: 'Free',
    seats: 35,
    highlights: [
      'Lightning project demos',
      'Pair-programming corner',
      'Beginner-friendly',
      'Coffee included'
    ],
    agenda: [
      ['05:00 PM', 'Arrivals'],
      ['05:30 PM', 'Lightning demos'],
      ['06:15 PM', 'Build together'],
      ['07:15 PM', 'Wrap-up']
    ]
  },
  {
    id: 'makers-market',
    title: 'The Makers Market',
    category: 'Art & Culture',
    date: '2027-01-16',
    time: '11:00 AM',
    endTime: '07:00 PM',
    venue: 'Janpath Courtyard',
    location: 'Bhubaneswar, India',
    image: img('photo-1531058020387-3be344556be6'),
    description: 'Meet the makers behind the things you love.',
    fullDescription: 'A weekend market celebrating independent makers, small labels, handmade objects, prints, ceramics, and thoughtful design. Come browse, meet creators, and support local work.',
    organizer: 'Made Here Collective',
    price: 'Free',
    seats: 300,
    highlights: [
      '30+ local makers',
      'Handmade goods',
      'Live demonstrations',
      'Food pop-ups'
    ],
    agenda: [
      ['11:00 AM', 'Market opens'],
      ['01:00 PM', 'Maker demos'],
      ['04:00 PM', 'Creative workshop'],
      ['07:00 PM', 'Market closes']
    ]
  },
  {
    id: 'pitch-perfect',
    title: 'Pitch Perfect: Demo Night',
    category: 'Business',
    date: '2027-01-23',
    time: '05:30 PM',
    endTime: '08:30 PM',
    venue: 'KIIT TBI',
    location: 'Bhubaneswar, India',
    image: img('photo-1559223607-a43c990c692c'),
    description: 'Early ideas. Sharp pitches. Useful feedback.',
    fullDescription: 'Watch emerging teams pitch early products to a panel of operators and mentors. The evening is designed for constructive feedback, thoughtful questions, and meaningful connections.',
    organizer: 'KIIT TBI Community',
    price: 'Free',
    seats: 90,
    highlights: [
      'Six startup pitches',
      'Expert feedback panel',
      'Audience questions',
      'Networking session'
    ],
    agenda: [
      ['05:30 PM', 'Welcome'],
      ['06:00 PM', 'Startup pitches'],
      ['07:30 PM', 'Panel feedback'],
      ['08:00 PM', 'Networking']
    ]
  },
  {
    id: 'move-with-intent',
    title: 'Move With Intent',
    category: 'Sports',
    date: '2027-02-06',
    time: '07:00 AM',
    endTime: '09:00 AM',
    venue: 'Forest Park',
    location: 'Bhubaneswar, India',
    image: img('photo-1517836357463-d25dfeac3438'),
    description: 'A community movement session for every body.',
    fullDescription: 'A guided outdoor movement session combining mobility, bodyweight strength, and mindful cooldown. No gym experience needed; just bring water and comfortable shoes.',
    organizer: 'Good Ground',
    price: '₹99',
    seats: 50,
    highlights: [
      'Mobility and movement',
      'All levels welcome',
      'Outdoor session',
      'Guided cooldown'
    ],
    agenda: [
      ['07:00 AM', 'Check-in'],
      ['07:15 AM', 'Mobility'],
      ['07:45 AM', 'Movement circuit'],
      ['08:30 AM', 'Cooldown']
    ]
  },
  {
    id: 'stories-on-stage',
    title: 'Stories on Stage',
    category: 'Art & Culture',
    date: '2027-02-13',
    time: '06:30 PM',
    endTime: '09:00 PM',
    venue: 'The Reading Room',
    location: 'Bhubaneswar, India',
    image: img('photo-1503095396549-807759245b35'),
    description: 'An evening of true stories, told live.',
    fullDescription: 'Six storytellers take the stage with personal stories around the theme of beginnings. Expect humour, vulnerability, and the kind of moments that stay with you.',
    organizer: 'The Listening Project',
    price: '₹149',
    seats: 75,
    highlights: [
      'Six live storytellers',
      'Audience open mic',
      'Intimate venue',
      'Post-show conversations'
    ],
    agenda: [
      ['06:30 PM', 'Doors open'],
      ['07:00 PM', 'First half'],
      ['08:00 PM', 'Interval'],
      ['08:15 PM', 'Second half']
    ]
  }
]

export const categories = [
  'All',
  'Technology',
  'Music',
  'Business',
  'Workshops',
  'Sports',
  'Art & Culture'
]
export const formatDate = (date, options = {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
}) => new Date(`${date}T12:00:00`).toLocaleDateString('en-IN', options)
