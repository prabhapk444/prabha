import { Project } from "../types";
const BASE_IMAGE_PATH = '/images';

export const projects: Project[] = [
  {
    title: "Shelby's Music",
    description: "A modern music streaming platform with advanced playlist management.",
    image: `${BASE_IMAGE_PATH}/spotify.webp`, 
    technologies: ['Next.js', 'TypeScript', 'Supabase'],
    imageMedium: undefined,
    imageSmall: undefined
  },
  {
    title: 'Nursery Plant Management',
    description: 'Complete solution for managing nursery inventory and sales.',
    image: `${BASE_IMAGE_PATH}/nursery.webp`, 
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    imageMedium: undefined,
    imageSmall: undefined
  },
  {
    title: 'Ayurveda Products Platform',
    description: 'E-commerce platform for Ayurvedic products.',
    image: `${BASE_IMAGE_PATH}/ayur.webp`, 
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    imageMedium: undefined,
    imageSmall: undefined
  },
  {
    title: 'Hari Chitra Crackers',
    description: 'Online fireworks store with inventory management.',
    image: `${BASE_IMAGE_PATH}/crackers.webp`, 
    technologies: ['PHP', 'MySQL', 'jQuery'],
    link: 'https://harichitracrackers.com',
    imageMedium: undefined,
    imageSmall: undefined
  },
  {
    title: 'Inventory Management for Stores',
    description: 'A robust inventory management system for retail stores, featuring real-time updates and analytics.',
    image: `${BASE_IMAGE_PATH}/inventory.webp`, 
    technologies: ['React', 'TypeScript', 'SQL'],
    imageMedium: undefined,
    imageSmall: undefined
  },
];
