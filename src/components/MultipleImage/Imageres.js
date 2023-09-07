import React from 'react'
import { Stack, ImageList, ImageListItem } from '@mui/material'


import ir1 from '../../media/ir1.png'
import ir2 from '../../media/ir2.jpeg'
import ir3 from '../../media/ir3.jpeg'
import ir4 from '../../media/ir4.png'
import ir5 from '../../media/ir5.png'
import ir6 from '../../media/ir6.png'
import ir7 from '../../media/ir7.png'



const itemData = [

    {img : ir1},{img : ir2} , {img : ir3} ,{img :ir4},{img : ir5} , {img : ir6} ,{img :ir7}    
]

const Imageres = () => {
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

export default Imageres