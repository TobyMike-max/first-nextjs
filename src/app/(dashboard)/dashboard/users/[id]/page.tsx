import React from 'react'

const UserDetails = async ({ params }: { params: Promise<{id: string }>}) => {
    const { id } = await params;
  return (
    <div>
      <p>Showing Details for {id}</p>
    </div>
  )
}

export default UserDetails