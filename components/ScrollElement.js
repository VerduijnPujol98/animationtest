import { Container } from '@mantine/core'
import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react'

const ScrollElement = () => {
    const ref = useRef(null)
    const { scrollXProgress } = useScroll({ container: ref });
  return (
    <div>
        <Container size='100vw' sx={{backgroundColor:'red', height:'30vh'}}>
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <motion.circle
            cx="50"
            cy="50 "
            r="30"
            pathLength="1"
            strokeWidth="10"
            stroke="#444"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
            />
        </svg>

        <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
        </Container>
    </div>
  )
}

export default ScrollElement