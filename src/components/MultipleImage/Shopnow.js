import React from 'react'
import { Stack, ImageList, ImageListItem } from '@mui/material'


import sn1 from '../../media/sn1.jpeg'
import sn2 from '../../media/sn2.jpeg'




const itemData = [

    {img : sn1},{img : sn2}    
]

const Shopnow = () => {
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

export default Shopnow