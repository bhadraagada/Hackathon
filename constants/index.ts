// constants/index.ts
export const stages = [
  {
    id: '001',
    step: 'Ordered',
    status: 'Completed',
    date: '2024-08-28',
    authority: 'Warehouse A',
    contact: 'Contact: +91-1234567890',
    items: [
      { id: 'item-001', name: 'Rice', quantity: '10 kg', status: 'Ready for Dispatch' },
      { id: 'item-002', name: 'Wheat', quantity: '5 kg', status: 'Ready for Dispatch' },
    ],
  },
  {
    id: '002',
    step: 'Verified',
    status: 'Completed',
    date: '2024-08-29',
    authority: 'Verification Center B',
    contact: 'Contact: +91-0987654321',
    items: [
      { id: 'item-001', name: 'Rice', quantity: '10 kg', status: 'Verified' },
      { id: 'item-002', name: 'Wheat', quantity: '5 kg', status: 'Verified' },
    ],
  },
  {
    id: '003',
    step: 'Dispatched',
    status: 'In Progress',
    date: '2024-08-30',
    authority: 'Dispatch Hub C',
    expected: 'Expected Delivery: 2024-09-01',
    contact: 'Contact: +91-1122334455',
    items: [
      { id: 'item-001', name: 'Rice', quantity: '10 kg', status: 'In Transit' },
      { id: 'item-002', name: 'Wheat', quantity: '5 kg', status: 'In Transit' },
    ],
  },
  {
    id: '004',
    step: 'Delivered',
    status: 'Pending',
    date: '',
    authority: '',
    expected: 'Pending Delivery',
    contact: '',
    items: [
      { id: 'item-001', name: 'Rice', quantity: '10 kg', status: 'Pending' },
      { id: 'item-002', name: 'Wheat', quantity: '5 kg', status: 'Pending' },
    ],
  },
  {
    id: '005',
    step: 'Delivered',
    status: 'Completed',
    date: '2024-09-02',
    authority: 'Delivery Point D',
    contact: 'Contact: +91-2233445566',
    items: [
      { id: 'item-003', name: 'Oil', quantity: '2 L', status: 'Delivered' },
      { id: 'item-004', name: 'Sugar', quantity: '3 kg', status: 'Delivered' },
    ],
  },
  {
    id: '006',
    step: 'In Transit',
    status: 'In Progress',
    date: '2024-09-01',
    authority: 'Transit Center E',
    expected: 'Expected Delivery: 2024-09-03',
    contact: 'Contact: +91-6677889900',
    items: [
      { id: 'item-005', name: 'Salt', quantity: '1 kg', status: 'In Transit' },
      { id: 'item-006', name: 'Lentils', quantity: '4 kg', status: 'In Transit' },
    ],
  },
  {
    id: '007',
    step: 'Ordered',
    status: 'Completed',
    date: '2024-09-02',
    authority: 'Warehouse F',
    contact: 'Contact: +91-9988776655',
    items: [
      { id: 'item-007', name: 'Milk Powder', quantity: '500 g', status: 'Ready for Dispatch' },
      { id: 'item-008', name: 'Tea', quantity: '1 kg', status: 'Ready for Dispatch' },
    ],
  },
  {
    id: '008',
    step: 'Verified',
    status: 'Completed',
    date: '2024-09-03',
    authority: 'Verification Center G',
    contact: 'Contact: +91-8877665544',
    items: [
      { id: 'item-007', name: 'Milk Powder', quantity: '500 g', status: 'Verified' },
      { id: 'item-008', name: 'Tea', quantity: '1 kg', status: 'Verified' },
    ],
  },
  {
    id: '009',
    step: 'Dispatched',
    status: 'In Progress',
    date: '2024-09-04',
    authority: 'Dispatch Hub H',
    expected: 'Expected Delivery: 2024-09-06',
    contact: 'Contact: +91-7766554433',
    items: [
      { id: 'item-007', name: 'Milk Powder', quantity: '500 g', status: 'In Transit' },
      { id: 'item-008', name: 'Tea', quantity: '1 kg', status: 'In Transit' },
    ],
  },
  {
    id: '010',
    step: 'Delivered',
    status: 'Completed',
    date: '2024-09-05',
    authority: 'Delivery Point I',
    contact: 'Contact: +91-6655443322',
    items: [
      { id: 'item-009', name: 'Soap', quantity: '2 bars', status: 'Delivered' },
      { id: 'item-010', name: 'Detergent', quantity: '1 kg', status: 'Delivered' },
    ],
  },
  {
    id: '011',
    step: 'Ordered',
    status: 'Completed',
    date: '2024-09-06',
    authority: 'Warehouse J',
    contact: 'Contact: +91-5544332211',
    items: [
      { id: 'item-011', name: 'Flour', quantity: '5 kg', status: 'Ready for Dispatch' },
      { id: 'item-012', name: 'Pulses', quantity: '2 kg', status: 'Ready for Dispatch' },
    ],
  },
  {
    id: '012',
    step: 'Verified',
    status: 'Completed',
    date: '2024-09-07',
    authority: 'Verification Center K',
    contact: 'Contact: +91-4433221100',
    items: [
      { id: 'item-011', name: 'Flour', quantity: '5 kg', status: 'Verified' },
      { id: 'item-012', name: 'Pulses', quantity: '2 kg', status: 'Verified' },
    ],
  },
  {
    id: '013',
    step: 'Dispatched',
    status: 'In Progress',
    date: '2024-09-08',
    authority: 'Dispatch Hub L',
    expected: 'Expected Delivery: 2024-09-10',
    contact: 'Contact: +91-3322110099',
    items: [
      { id: 'item-011', name: 'Flour', quantity: '5 kg', status: 'In Transit' },
      { id: 'item-012', name: 'Pulses', quantity: '2 kg', status: 'In Transit' },
    ],
  },
  {
    id: '014',
    step: 'Delivered',
    status: 'Completed',
    date: '2024-09-09',
    authority: 'Delivery Point M',
    contact: 'Contact: +91-2211009988',
    items: [
      { id: 'item-013', name: 'Biscuits', quantity: '1 kg', status: 'Delivered' },
      { id: 'item-014', name: 'Spices', quantity: '500 g', status: 'Delivered' },
    ],
  },
  {
    id: '015',
    step: 'Ordered',
    status: 'Completed',
    date: '2024-09-10',
    authority: 'Warehouse N',
    contact: 'Contact: +91-1100998877',
    items: [
      { id: 'item-015', name: 'Toothpaste', quantity: '2 tubes', status: 'Ready for Dispatch' },
      { id: 'item-016', name: 'Toothbrush', quantity: '4 pcs', status: 'Ready for Dispatch' },
    ],
  },
];

export const features = [
  {
    title: 'Blockchain Security',
    description: 'Ensure transparency and security in public distribution through immutable blockchain records.',
  },
  {
    title: 'Real-Time Tracking',
    description: 'Monitor the distribution process in real-time to prevent leaks and ensure resources reach the right beneficiaries.',
  },
  {
    title: 'Smart Contracts',
    description: 'Automate the release of resources based on predefined criteria, minimizing human intervention and errors.',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Easy-to-use platform for both administrators and beneficiaries, ensuring accessibility for all users.',
  },
  {
    title: 'Scalability',
    description: 'Designed to handle large-scale distribution programs, adaptable to various regions and requirements.',
  },
  {
    title: 'Data Analytics',
    description: 'Leverage detailed analytics to optimize resource allocation, predict needs, and improve overall efficiency.',
  },
  {
    title: 'Multi-Channel Notifications',
    description: 'Keep stakeholders informed via SMS, email, or app notifications to enhance communication and transparency.',
  },
  {
    title: 'Customizable Reports',
    description: 'Generate tailored reports for different stakeholders, providing insights into distribution performance and impact.',
  },
  {
    title: 'Advanced Security Protocols',
    description: 'Implement cutting-edge security measures to protect sensitive data and ensure compliance with industry standards.',
  },
];
