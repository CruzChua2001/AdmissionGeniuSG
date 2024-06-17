"use client"

import { Lusitana } from "next/font/google";
import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion";

import data from '../public/data/university.json'
import appSettings from "../appsettings.json"

const lusitana = Lusitana({subsets: ["latin"], weight: "400"})

const TypingAnimation = keyframes`
  from { width: 0 }
  to { width: 100% }
`

const BlinkingAnimation = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`

const TypeWriter = styled.p`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  max-width: 350px;
  animation: 
    ${TypingAnimation} 6s steps(65, end),
    ${BlinkingAnimation} .75s step-end infinite;
`

export default function Home() {
  const localUni = data.LOCAL_UNI;
  const image_url = appSettings.S3_BUCKET_IMAGES_URL_DEV;

  return (
    <main className={`text-center ${lusitana.className} mt-52`}>
      <h1 className="text-3xl">
        Explore Your Path: 
        <TypeWriter> Six Paths, One Destination</TypeWriter>
      </h1>

      <div className="mt-20 lg:w-3/4 w-11/12 mx-auto text-md grid lg:grid-cols-3 xl:grid-cols-6 grid-cols-2 gap-3">
        {localUni.map((item, index) => (
          <div key={index}>
            <a href="#">
              <motion.div
                initial={{ scale: 0, rotate: 20 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }}
              >
                <div className="bg-white mx-auto w-10/12 rounded flex justify-center" style={{ height: "150px" }}>
                  <img src={image_url + item.Logo} className="my-auto" />
                </div>
              </motion.div>
              {item.Title}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
