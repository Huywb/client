import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.webp'
import add from '../../../public/add.svg'

const RightSiderBar = () => {
  return (
    <Box padding={2} marginRight={2} >
      <Stack gap={2}>
        <Typography fontSize={26} fontWeight='bold'>Following</Typography>
        <Box gap={4} display='flex' flexDirection='column'>
          <Stack direction='row' gap={4} >
            <Image className='rounded-full' src={logo} alt='logo' width={50} height={30}></Image>
            <Stack width='50%' overflow='hidden'>
              <Typography>Huy</Typography>
              <Typography>@Huy123</Typography>
            </Stack>
            <Image src={add} alt='add' width={30} height={30}></Image>
          </Stack>
          <Stack direction='row' gap={4}>
            <Image className='rounded-full' src={logo} alt='logo' width={50} height={30}></Image>
            <Stack width='130px' overflow='hidden'>
              <Typography>Huy312323123121</Typography>
              <Typography>@Huy123</Typography>
            </Stack>
            <Image src={add} alt='add' width={30} height={30}></Image>
          </Stack>
          <Stack direction='row' gap={4}>
            <Image className='rounded-full' src={logo} alt='logo' width={50} height={30}></Image>
            <Stack width='130px' overflow='hidden'>
              <Typography>Huy</Typography>
              <Typography>@Huy123</Typography>
            </Stack>
            <Image src={add} alt='add' width={30} height={30}></Image>
          </Stack>
        </Box>
      </Stack>
      <Stack mt={4}>
        <Typography fontSize={26} fontWeight='bold'>Suggested People</Typography>
      </Stack>
    </Box>
  )
}

export default RightSiderBar