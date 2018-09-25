import React from 'react'

export const leftArrow = (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 8 8 12 12 16"></polyline>
    <line x1="16" y1="12" x2="8" y2="12"></line>
  </svg>
)

export const rightArrow = (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 16 16 12 12 8"></polyline>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
)