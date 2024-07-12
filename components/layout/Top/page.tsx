import { Box, Button, IconButton, Stack, TextField } from '@mui/material'
import React from 'react'
import search from '../../../public/search.svg'
import Image from 'next/image'
import Link from 'next/link'

const Top = () => {
  return (
    <Box py={2}>
      <Stack direction='row' justifyContent='space-between'>
        <Stack  width='100%' direction='row' >
            <TextField
              label="Search"
              variant="outlined"
              sx={{width:'70%',
                
               
                // Root class for the input field
                "& .MuiOutlinedInput-root": {
                  background: '#75787d',
                  color: "white",
                  height:'100%',
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius:'none',
                    borderTopRightRadius:'none',
                  },
                  '& .MuiOutlinedInput':{
                    borderRadius:'none',
                    borderTopRightRadius:'none',
                  }
                },
                "&  .Mui-focused":{
                  border: 'transparent'
                }
                ,
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: "white",
                },
              }}
            />
            <IconButton  sx={{bgcolor:'#75787d',borderRadius:'0px',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
            <Image src={search} alt='search' className='cursor-pointer &:hover' width={40} height={40}></Image>
            </IconButton>
        </Stack>
        <Stack width='30%' >
            <Button sx={{fontWeight:'bold',height:'100%',borderRadius:'15px',background: "linear-gradient(90deg, rgba(131,58,180,1) 32%, rgba(253,29,29,1) 100%, rgba(252,176,69,1) 100%)"}} variant='contained'><Link href='create-post'>Create A Post</Link></Button>
        </Stack>
        </Stack>
    </Box>
  )
}

export default Top