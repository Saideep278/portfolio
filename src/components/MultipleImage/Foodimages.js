import React from 'react'
import { Stack, ImageList, ImageListItem } from '@mui/material'
import fa1 from '../../media/fa1.jpeg'
import fa2 from '../../media/fa2.jpeg'
import fa3 from '../../media/fa3.jpeg'
import fa4 from '../../media/fa4.jpeg'
import fa5 from '../../media/fa5.jpeg'
import fa6 from '../../media/fa6.jpeg'



const itemData = [
    {img : fa1},{img : fa2} , {img : fa3} , {img : fa4} , {img :fa5}, {img :fa6},    
]

const FoodImages = () => {
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

export default FoodImages