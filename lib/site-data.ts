export const site = {
  name: 'Andre Taylor Plumbing',
  phoneDisplay: '(650) 394-6321',
  phoneHref: 'tel:+16503946321',
  baseUrl: 'https://andretaylorplumbing.com',
  areas: ['san-jose', 'sunnyvale']
};

export type Service = {
  slug: string;
  name: string;
  h1: string;
  short: string;
  notices: string[];
  causes: string[];
  process: string[];
  when: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    h1: 'Drain Cleaning Services',
    short: 'Clear slow and blocked drains quickly with professional line cleaning.',
    notices: ['Water drains slowly', 'Standing water in sinks or tubs', 'Gurgling sounds from pipes', 'Odors coming from drains'],
    causes: ['Buildup from grease or soap', 'Hair and debris in lines', 'Tree roots entering pipes', 'Older pipes with internal wear'],
    process: ['Inspection of affected lines', 'Clearing of blockage', 'Flow test', 'Service notes saved'],
    when: ['Water backs up', 'Multiple drains slow', 'Drain stops'],
    faq: [
      { q: 'How soon can you clear a blocked drain?', a: 'Most drain calls are scheduled same day when available.' },
      { q: 'Will you inspect the line first?', a: 'Yes, we inspect before and after clearing to confirm flow.' },
      { q: 'Can recurring clogs be prevented?', a: 'Yes, regular cleaning and targeted repairs help stop repeat backups.' }
    ]
  },
  {
    slug: 'leak-detection-repair',
    name: 'Leak Detection and Repair',
    h1: 'Leak Detection and Repair',
    short: 'Find and repair hidden leaks before they become major damage.',
    notices: ['Higher water bill', 'Damp areas', 'Running water sound', 'Low pressure'],
    causes: ['Pipe wear', 'Connection failure', 'Ground movement', 'Hidden leaks'],
    process: ['Targeted system inspection', 'Leak location confirmation', 'Repair of damaged section', 'Pressure and function check'],
    when: ['Water use spikes unexpectedly', 'Moisture appears on walls or floors', 'You hear water with fixtures off'],
    faq: [
      { q: 'Can hidden leaks be found without major wall cuts?', a: 'Yes, we use non-invasive methods first to locate likely points.' },
      { q: 'Do you repair leaks during the same visit?', a: 'In many cases yes, depending on access and materials needed.' },
      { q: 'Is low pressure always a leak?', a: 'Not always, but leaks are a common cause that should be checked.' }
    ]
  },
  {
    slug: 'water-heater',
    name: 'Water Heater',
    h1: 'Water Heater Service',
    short: 'Restore dependable hot water with service, repair, and replacement guidance.',
    notices: ['No hot water', 'Temperature change', 'Rust color', 'Noise'],
    causes: ['Heating element wear', 'Sediment buildup', 'Thermostat issues', 'Tank or valve deterioration'],
    process: ['Safety and system check', 'Component testing', 'Repair or replacement recommendation', 'Performance verification'],
    when: ['Hot water runs out quickly', 'Temperature is inconsistent', 'Unit makes unusual sounds'],
    faq: [
      { q: 'Can you service both tank and tankless systems?', a: 'Yes, technicians handle both common residential setups.' },
      { q: 'Should rusty water be checked immediately?', a: 'Yes, it can signal corrosion and should be inspected soon.' },
      { q: 'How do I know if replacement is better than repair?', a: 'We compare age, condition, and repair cost before recommending next steps.' }
    ]
  },
  {
    slug: 'sewer-main-line',
    name: 'Sewer and Main Line',
    h1: 'Sewer and Main Line Service',
    short: 'Address backups and line issues with focused sewer and main line service.',
    notices: ['Multiple drains slow', 'Backups', 'Odor', 'Wet ground'],
    causes: ['Root intrusion', 'Line damage', 'Heavy buildup', 'Aging pipe materials'],
    process: ['Line assessment', 'Blockage or defect correction', 'Flow restoration test', 'Documentation and next-step plan'],
    when: ['Sewage backs up indoors', 'Several fixtures are affected at once', 'Persistent sewer odor appears'],
    faq: [
      { q: 'Are repeated backups a main line warning?', a: 'Yes, repeated whole-home backups often indicate main line trouble.' },
      { q: 'Can roots be removed from sewer lines?', a: 'Yes, root intrusion can often be cleared and then monitored.' },
      { q: 'Do you provide repair options?', a: 'Yes, we explain practical options based on line condition and access.' }
    ]
  },
  {
    slug: 'fixture-faucet-repair',
    name: 'Fixture and Faucet Repair',
    h1: 'Fixture and Faucet Repair',
    short: 'Fix drips, pressure issues, and loose fixtures for reliable daily use.',
    notices: ['Dripping faucet', 'Low pressure', 'Loose fixtures', 'Water under sink'],
    causes: ['Worn cartridges', 'Seal failure', 'Corroded connectors', 'Improper installation'],
    process: ['Fixture inspection', 'Parts replacement or adjustment', 'Leak and pressure test', 'Cleanup and service notes'],
    when: ['Drips continue after tightening', 'Leak appears under sink', 'Fixture feels unstable'],
    faq: [
      { q: 'Can a small drip really waste water?', a: 'Yes, ongoing drips can add noticeable waste over time.' },
      { q: 'Do you bring common replacement parts?', a: 'Yes, technicians carry many frequent repair parts.' },
      { q: 'Should low pressure be repaired quickly?', a: 'Yes, it can indicate clogs, leaks, or failing fixture components.' }
    ]
  },
  {
    slug: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    h1: 'Emergency Plumbing Service',
    short: 'Rapid response plumbing help for flooding, burst pipes, and urgent failures.',
    notices: ['Flooding', 'Burst pipe', 'Backup', 'No water'],
    causes: ['Pipe rupture', 'Severe blockage', 'Valve failure', 'Unexpected system breakdown'],
    process: ['Immediate risk assessment', 'Water control and isolation', 'Urgent repair action', 'Stabilization and follow-up plan'],
    when: ['Active water damage starts', 'A pipe bursts', 'Critical fixtures stop working'],
    faq: [
      { q: 'What should I do first during an emergency?', a: 'Shut off water if possible and call immediately for guidance.' },
      { q: 'Are emergency visits available after hours?', a: 'Urgent calls are prioritized as quickly as scheduling allows.' },
      { q: 'Can temporary fixes be done to prevent damage?', a: 'Yes, immediate stabilization can reduce damage before full repair.' }
    ]
  }
];

export const cities = [
  { slug: 'san-jose', name: 'San Jose' },
  { slug: 'sunnyvale', name: 'Sunnyvale' }
];

export const faqItems = [
  'How fast can a plumber get here',
  'What counts as an emergency',
  'What should I do before arrival',
  'Do you provide an estimate',
  'How do I book service',
  'Can I request a time',
  'Do I need to be home',
  'What happens after booking',
  'How long does service take',
  'Will I receive a summary',
  'Why does my drain keep clogging',
  'Why did my water bill increase',
  'Why is my water not hot',
  'Why is my faucet dripping',
  'What are signs of a main line issue',
  'Do you service my area',
  'Can I call instead of booking'
].map((q) => ({ q, a: 'Yes—our team keeps it simple, explains next steps, and confirms scheduling clearly.' }));
