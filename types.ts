import React from 'react';

export interface BankService {
  id: string;
  name: string;
  logo: string;
  tags: string[];
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}