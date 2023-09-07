import React from 'react'
import { Stack, ImageList, ImageListItem } from '@mui/material'
import fa1 from '../../media/fa1.jpeg'
import fa2 from '../../media/fa2.jpeg'
import fa3 from '../../media/fa3.jpeg'
import fa4 from '../../media/fa4.jpeg'
import fa5 from '../../media/fa5.jpeg'
import fa6 from '../../media/fa6.jpeg'

import ba1 from '../../media/ba1.png'
import ba2 from '../../media/ba2.png'
import ba3 from '../../media/ba3.png'

import ir1 from '../../media/ir1.png'
import ir2 from '../../media/ir2.jpeg'
import ir3 from '../../media/ir3.jpeg'

import sn1 from '../../media/sn1.jpeg'
import sn2 from '../../media/sn2.jpeg'

const itemData = [
    {img : fa1},{img : fa2} , {img : fa3} , {img : fa4} , {img :fa5}, {img :fa6},
    {img : ba1},{img : ba2} , {img : ba3} , {img : ir1} , {img :ir2} , {img :ir3} , {img : sn1},{img : sn2}    
]

const MultipleImage = () => {
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

export default MultipleImage