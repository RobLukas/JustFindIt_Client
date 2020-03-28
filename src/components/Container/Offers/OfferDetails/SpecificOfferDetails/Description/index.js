import React from 'react'

const Description = ({ htmlBody }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlBody }} />
}

export default Description
