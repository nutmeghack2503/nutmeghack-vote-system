import { Project } from './types';

export const sampleProjects: Project[] = [
    { 
        id: 1, 
        title: 'たこ焼き屋さん', 
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfIDA7LuZY2Qew5jEBkX5TZExsZbSzkxCJv9mGdh15zbR4VhTWLUhz5S6pLD0vuLZzz2mry5awpTjZijGXWupxflMjthj-hcusb6ZsZiLs2Xbc-eeio9LXv8FpbvTiHMrBgl1wkbXOLFW1IPvHdZupG8Lz2QyVRjCeIbLVqX3IAE8TtpRBbYB-1i2bWCq7pWdgawwgVbVBH61lDd03GAC5evzjODWr1_7suR5obdJw91fz4Zo4-V3Ec_Kb4TrLZQEEUoRRh_BVQkw', 
        category: 'food',
        rating: 4.5,
        evaluations: 25
    },
    // 他のプロジェクトを追加
];

export const unevaluatedProjects: Project[] = sampleProjects.filter(p => !p.rating);