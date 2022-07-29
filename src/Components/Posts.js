import React, { useState } from 'react'
import "./Posts.css"
import { FaCaretDown} from "react-icons/fa";
import { BsPeopleFill ,BsShareFill,BsThreeDots} from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { CgFolder } from "react-icons/cg";
import { BiCalendarEvent,BiPencil } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import tree from "../images/tree.png";
import door from "../images/door.png";
import car_img from "../images/car.png";
import img1 from  "../images/img1.png";
import img2 from  "../images/img2.png";
import img3 from  "../images/img3.png";
import img4 from  "../images/img4.png";
const Posts = () => {
     const [threeDot, setThreeDot] = useState(false)
     const [threeDot2, setThreeDot2] = useState(false)
     const [threeDot3, setThreeDot3] = useState(false)
     const [threeDot4, setThreeDot4] = useState(false)
     const showDots = ()=>{
          if(threeDot===false){
               setThreeDot(true)
          }
          else{
               setThreeDot(false)
          }
     }
     const showDots2 = ()=>{
          if(threeDot2===false){
               setThreeDot2(true)
          }
          else{
               setThreeDot2(false)
          }
     }
     const showDots3 = ()=>{
          if(threeDot3===false){
               setThreeDot3(true)
          }
          else{
               setThreeDot3(false)
          }
     }
     const showDots4 = ()=>{
          if(threeDot4===false){
               setThreeDot4(true)
          }
          else{
               setThreeDot4(false)
          }
     }
  return (
    <section id="display_post">
         <div className="container">
             <div className='post_route d-flex justify-content-between align-items-center'>
                       <div className='route_left'>
                           <ul className='d-flex justify-content-between align-items-center'>
                               <li>All Posts(32)</li>
                               <li>Article</li>         
                               <li>Event</li>         
                               <li>Education</li>         
                               <li>Job</li>         
                            </ul>                    
                       </div>
                       <div className='route_right_btn'>
                             <button className='border-0 post_btn'>Write A Post &nbsp;<FaCaretDown/></button>
                             <button className='border-0 post_btn_two'><BsPeopleFill/>&nbsp;&nbsp;Join Group</button>
                       </div>
              </div>
            <div className='d-flex justify-content-between'>
            <div className='post_one'>
                    <div className='post_one_items'>
                          <img className='post_one_img' src={tree} alt="tree" />
                          <div className='post_one_content'>
                               <div className='post_one_heading'>
                               <span>✍️ Article</span>
                                   <div className='d-flex justify-content-between'>
                                    <h4>What if famous brands had regular fonts? Meet<br/>RegulaBrands!</h4>  
                                   <div className='threeDotsArea'>
                                   <span onClick={showDots} className={threeDot?"bg-light py-2 px-3":"bg-white py-2 px-3"}><BsThreeDots/></span>
                                     {threeDot&&<div className='threeDotOptions'>
                                         <ul>
                                             <li>Edit</li>
                                             <li>report</li>
                                             <li>option 3</li>
                                         </ul>
                                      </div>}                        
                                   </div>
                                   </div>                               
                                 <p>
                                   I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                                 </p>
                               </div>
                                 <div className='post_one_review'>
                                        <div className='review_left d-flex justify-content-center align-items-center'>
                                              <img src={img2} alt="people_png" />
                                              <span>Sarthak Kamra</span>
                                        </div>
                                        <div className='review_right d-flex justify-content-center align-items-center'>
                                             <AiOutlineEye/>
                                             <span>1.4k views</span>
                                             <div className='share_icon'>
                                             <BsShareFill/>
                                             </div>
                                        </div>
                                 </div>
                          </div>
                    </div>
              </div>
              <div className='filter_area'>
                      <div className='d-flex justify-content-between align-items-center filter_text'>
                         <div className='filter_name'>
                              <MdOutlineLocationOn/>
                              <span>Noida, India</span>
                         </div>
                         <div>
                         <BiPencil/>
                         </div>
                      </div>
                      <div>
                         <p><RiErrorWarningFill/>&nbsp;Your location will help us serve better<br/> and extend a personalised experience.</p>
                      </div>
              </div>
            </div>
              <div className='post_one'>
                    <div className='post_one_items'>
                          <img className='post_one_img' src={door} alt="tree" />
                          <div className='post_one_content'>
                               <div className='post_one_heading'>
                               <span>🔬️ Education</span>
                                   <div className='d-flex justify-content-between'>
                                    <h4>Tax Benefits for Investment under National Pension<br/> Scheme launched by Government</h4>  
                                   <div className='threeDotsArea'>
                                   <span onClick={showDots2} className={threeDot2?"bg-light py-2 px-3":"bg-white py-2 px-3"}><BsThreeDots/></span>
                                     {threeDot2&&<div className='threeDotOptions'>
                                         <ul>
                                             <li>Edit</li>
                                             <li>report</li>
                                             <li>option 3</li>
                                         </ul>
                                      </div>}                        
                                   </div>
                                   </div>                               
                                 <p>
                                   I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                                 </p>
                               </div>
                                 <div className='post_one_review'>
                                        <div className='review_left d-flex justify-content-center align-items-center'>
                                              <img src={img4} alt="people_png" />
                                              <span>Sarah West</span>
                                        </div>
                                        <div className='review_right d-flex justify-content-center align-items-center'>
                                             <AiOutlineEye/>
                                             <span>1.4k views</span>
                                             <div className='share_icon'>
                                             <BsShareFill/>
                                             </div>
                                        </div>
                                 </div>
                          </div>
                    </div>
              </div>
              <div className='post_one'>
                    <div className='post_one_items'>
                          <img className='post_one_img' src={car_img} alt="nature_img" />
                          <div className='post_one_content'>
                               <div className='post_one_heading'>
                               <span>🗓️ Meetup</span>
                                   <div className='d-flex justify-content-between'>
                                    <h4>Finance & Investment Elite Social Mixer @Lujiazui</h4>  
                                   <div className='threeDotsArea'>
                                   <span onClick={showDots3} className={threeDot3?"bg-light py-2 px-3":"bg-white py-2 px-3"}><BsThreeDots/></span>
                                     {threeDot3&&<div className='threeDotOptions'>
                                         <ul>
                                             <li>Edit</li>
                                             <li>report</li>
                                             <li>option 3</li>
                                         </ul>
                                      </div>}                        
                                   </div>
                                   </div>                               
                                <div className='meetUp d-flex align-items-center'>
                                  <div className='d-flex justify-content-center align-items-center'>
                                    <BiCalendarEvent/>
                                    &nbsp;
                                     <span>Fri, 12 Oct, 2018</span>
                                  </div>
                                  <div className='d-flex justify-content-center align-items-center'>
                                    <MdOutlineLocationOn/>
                                     <span>Ahmedabad, India</span>
                                  </div>
                                </div>
                                <div className='visit_now'>
                                   <button>Visit Website</button>
                                  </div>
                               </div>
                                 <div className='post_one_review'>
                                        <div className='review_left d-flex justify-content-center align-items-center'>
                                              <img src={img3} alt="people_png" />
                                              <span>Ronal Jones</span>
                                        </div>
                                        <div className='review_right d-flex justify-content-center align-items-center'>
                                             <AiOutlineEye/>
                                             <span>1.4k views</span>
                                             <div className='share_icon'>
                                             <BsShareFill/>
                                             </div>
                                        </div>
                                 </div>
                          </div>
                    </div>
              </div>
              <div className='post_one create_space'>
                    <div className='post_one_items'>
                          <div className='post_one_content'>
                               <div className='post_one_heading'>
                               <p id="job_space">💼️ Job</p>
                                   <div className='d-flex justify-content-between'>
                                    <h4>Software Developer</h4>  
                                   <div className='threeDotsArea'>
                                   <span onClick={showDots4} className={threeDot4?"bg-light py-2 px-3":"bg-white py-2 px-3"}><BsThreeDots/></span>
                                     {threeDot4&&<div className='threeDotOptions'>
                                         <ul>
                                             <li>Edit</li>
                                             <li>report</li>
                                             <li>option 3</li>
                                         </ul>
                                      </div>}                        
                                   </div>
                                   </div>                               
                                <div className='meetUp d-flex align-items-center'>
                                  <div className='d-flex justify-content-center align-items-center'>
                                    <CgFolder/>
                                    &nbsp;
                                     <span>Innovaccer Analytics Private Ltd.</span>
                                  </div>
                                  <div className='d-flex justify-content-center align-items-center'>
                                    <MdOutlineLocationOn/>
                                     <span>Noida, India</span>
                                  </div>
                                </div>
                                <div className='visit_now'>
                                   <button id='applyJob'>Apply on Timesjobs</button>
                                  </div>
                               </div>
                                 <div className='post_one_review'>
                                        <div className='review_left d-flex justify-content-center align-items-center'>
                                              <img src={img1} alt="people_png" />
                                              <span>Joseph Gray</span>
                                        </div>
                                        <div className='review_right d-flex justify-content-center align-items-center'>
                                             <AiOutlineEye/>
                                             <span>1.4k views</span>
                                             <div className='share_icon'>
                                             <BsShareFill/>
                                             </div>
                                        </div>
                                 </div>                          
                          </div>
                    </div>
              </div>
         </div>
    </section>
  )
}

export default Posts