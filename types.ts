
import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProductBundle {
  id: number;
  quantity: number;
  discount: number;
  originalPrice: number;
  pricePerUnit: number;
  tag?: string;
  tagColor?: string;
  isPopular?: boolean;
}
