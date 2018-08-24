import React from 'react'

const References = ({ links = [] }) => (
  <span>
    {links.map((link, i) => (
      <a
        target='_blank'
        style={{fontSize: '0.8rem'}}
        href={link}
      >
        [🔗{links.length > 1 && ` ${i + 1}`}]&nbsp;
      </a>
    ))}
  </span>
)

export default References
