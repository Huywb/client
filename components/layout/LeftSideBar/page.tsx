import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.webp'
import Menu from '@/components/menu/page'
import { SignedIn, SignOutButton, UserButton } from '@clerk/nextjs'
import logout from '../../../public/logout.svg'

const LeftSiderBar = () => {
  return (
    <Box   paddingX={4} paddingY={2}>
      <Stack gap={2} direction='row' alignItems='center' justifyContent='center' sx={{cursor:'pointer'}}>
        <Image src={logo} alt='logo' width={40} height={40}></Image>
        <Typography fontSize={30} fontWeight='bold'>VSocial</Typography>
      </Stack>
      <Stack alignItems='center' justifyContent='center' pt={4}>
        <Image src={logo} alt='logo' width={50} height={50} className='rounded-full'></Image>
        <Typography pt={1} fontWeight='bold' fontSize={20}>Huy</Typography>
      </Stack>
      <Box gap={2} flexDirection='row' display='flex' justifyContent='space-between' pt={2}>
        <Stack alignItems='center'>
          <Typography fontWeight='bold'>1</Typography>
          <Typography>Posts</Typography>
        </Stack>
        <Stack alignItems='center'>
          <Typography fontWeight='bold'>1</Typography>
          <Typography>Followers</Typography>
        </Stack>
        <Stack alignItems='center'>
          <Typography fontWeight='bold'>1</Typography>
          <Typography>Followings</Typography>
        </Stack>
      </Box>
      <Stack sx={{borderTop:'2px solid white'}} marginY={2}>
        <Menu></Menu>
      </Stack>
      <Stack sx={{borderTop:'2px solid white'}} >
        <Stack  direction='row' marginX={4} marginY={3} gap={2}>
          <UserButton></UserButton>
          <Typography fontWeight='bold' fontSize={18}>Manage Account</Typography>
        </Stack>
        <SignedIn>
          <SignOutButton>
            <Stack marginX={4} direction='row' alignItems='center' gap={2} sx={{cursor:'pointer'}}>
              <Image src={logout} alt='logout' width={30} height={30}></Image>
              <Typography fontSize={20} fontWeight='bold'>Log out</Typography>
            </Stack>
          </SignOutButton>
        </SignedIn>
      </Stack>
    </Box>
  )
}

export default LeftSiderBar