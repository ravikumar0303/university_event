import React from 'react'
import Header from '../Components/header'
import Navbar from '../Components/Navbar'
import AboutUs from '../assets/AboutUs.jpg'
import { Box,Typography } from '@mui/material'
import Footer from '../Components/footer'

function About() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <Box sx={{width:'auto',display:'flex',justifyContent:'space-evenly'}}>
    <img src={AboutUs} alt="AboutUs" style={{ height:'17rem',flexBasis:'32%',marginTop:'5rem'}}/>
    <Typography variant='h4' align='center' sx={{fontFamily: "NewRocker",
  fontWeight: '400',
  fontStyle: 'normal',flexBasis:'55%',mt:5}}>About Us<br />
    <Typography sx={{mt:2,mb:9,textAlign:'justify'}}>Explicabo hic excepturi pariatur nihil reprehenderit quae, architecto aperiam deserunt ducimus consequuntur autem voluptatibus et reiciendis! Voluptatibus accusantium dolore itaque laboriosam, excepturi modi in quaerat deserunt est ducimus voluptates, nemo ratione, sit magnam tenetur recusandae facilis velit quae non? Reiciendis aliquid fugit eligendi vel labore atque, voluptatem, consectetur repellendus ad temporibus ratione repellat voluptates corrupti enim. Natus voluptas illum temporibus distinctio at officiis sit exercitationem ducimus nesciunt dignissimos. Voluptas, rem? Velit voluptatibus accusantium aspernatur, nulla perspiciatis soluta quia cupiditate excepturi dicta in quidem asperiores ullam itaque ducimus corrupti nam nesciunt quis distinctio aut. Tenetur obcaecati iste delectus error voluptates voluptatibus accusamus asperiores reiciendis, enim quam aperiam quo consequatur beatae, exercitationem modi nostrum cumque soluta nam ut necessitatibus perferendis eligendi porro rem. Tenetur repellendus consectetur dignissimos ducimus nostrum sed, possimus, voluptates illum nulla similique odit vero dolorum voluptatem quis atque ex et culpa fugiat animi porro quod minima ipsa hic! Ex quia distinctio atque officiis incidunt provident repudiandae consequatur nam, labore error deserunt dolores pariatur doloribus sit quod velit laudantium veritatis repellendus odio, eos soluta fugit qui exercitationem quas. Reiciendis a voluptatibus fuga nihil dolores dignissimos exercitationem quae esse laudantium vero quos deleniti saepe unde ut culpa, blanditiis obcaecati id. Aliquid expedita vitae autem a in voluptatibus nostrum placeat aut, rerum veritatis qui suscipit distinctio, beatae doloribus quia nihil consequatur, sunt saepe libero dolore esse? Quam, quis provident. Rerum consectetur ex illum laudantium delectus totam incidunt, adipisci cupiditate voluptatum minima, iusto recusandae eum. Aut est quia asperiores placeat consectetur! Eius minus ullam sit. Inventore delectus ullam assumenda accusamus harum architecto aspernatur natus culpa.</Typography>
    </Typography>
    </Box>
    <Footer/>
    </div>
  )
}

export default About