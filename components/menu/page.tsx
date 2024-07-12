'use client'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { MenuList } from '@/containts/Menu'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {    
    const pathName = usePathname()
  return (
    <Box pt={2} gap={1} display='flex' flexDirection='column' paddingX={4}>
        {MenuList.map((item,index)=>(
            <Stack key={index} sx={{borderRadius:'10px',cursor:'pointer',width:'full',height:'full',padding:'10px'}} bgcolor={`${pathName === item.route? '#6e43a3' : ''} `} >
                <Link href={item.route? item.route: '/'} className='flex flex-row gap-6 justify-start items-start'>
                    <Image src={item.image} alt={item.label} width={30} height={30}></Image>
                    <Typography fontSize={20}>{item.label}</Typography>
                </Link>
            </Stack>
        ))}
    </Box>
)
}

export default Menu