import React, { useState } from 'react'
import { motion, useCycle } from "framer-motion";
import { Box, Button, Card, Container } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';

const NavMenu = () => {

    const [open, setOpen] = useState(false)

    const sideBar = {
      open: {
        clipPath: `circle(1000px at 50px 50px)`,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2
        }
      },
      closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40
        }
      }
    }

    const Path = props => (
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 18%)"
          strokeLinecap="round"

          {...props}
        />
      );
      


  return (
    <div>
        <Container size='100vw' onClick={()=>setOpen(!open)} sx={{backgroundColor:'blue', height:'30vh'}}>
            <motion.div
            variants={sideBar}
            animate={open ? "open" : "closed"}
            layout
            >
                <Card sx={{width:300, height:500}}>
                <Box ml={13} mt={13}>
                <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                    transition={{
                        duration: 0.1,
                        ease:'easeInOut',
                      }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.5 }}
                />
                <Path
                    variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                    
                    }}
                    transition={{
                        duration: 0.1,
                        ease:'easeInOut',
                      }}
                />
                </svg>
                </Box>
                </Card>
            </motion.div>
        </Container>
    </div>
  )
}

export default NavMenu