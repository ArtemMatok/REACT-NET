import { Container, Title } from '@/Shared/Components/index'
import React from 'react'

type Props = {}

const CheckOut = (props: Props) => {
  return (
   <Container className='mt-10'>
      <Title text='Making Order' className='font-extrabold mb-8 text-[36px]'></Title>
   </Container>
  )
}

export default CheckOut