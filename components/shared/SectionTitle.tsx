import React from 'react'

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <div>
    <h2 className="sectionHeadings text-neutral-300">{title}</h2>
  </div>
  )
}
