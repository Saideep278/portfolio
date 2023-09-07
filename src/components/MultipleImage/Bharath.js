import React from 'react'
import { Stack, ImageList, ImageListItem } from '@mui/material'


import ba1 from '../../media/ba1.png'
import ba2 from '../../media/ba2.png'
import ba3 from '../../media/ba3.png'
import ba4 from '../../media/ba4.png'
import ba5 from '../../media/ba5.png'
import ba6 from '../../media/ba6.png'
import ba7 from '../../media/ba7.png'



const itemData = [

    {img : ba1},{img : ba2} , {img : ba3} ,{img :ba4},{img : ba5} , {img : ba6} ,{img :ba7}    
]

const Bharath = () => {
    return (
        <Stack spacing={4}>
            <ImageList sx={{ width: 350, height: 250 }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item. img}?w=1648h=1648fit=crop&auto-format&dpr=2`} 
                            loading='lazy'
                        />
                    </ImageListItem>
                ))} 
            </ImageList>
        </Stack>
    )
}

export default Bharath