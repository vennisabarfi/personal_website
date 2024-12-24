
import { useState} from "react";
import { useForm } from "react-hook-form"
import {Toaster, toast} from 'sonner'
// import { useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import "./Form.css"

export default function Form(){


 

     // handle multiple submissions
     const [isSubmitted, setIsSubmitted] = useState(false);
 
     // initialize react-hook-form
     const {register, handleSubmit, formState: {errors}} = useForm();
     
     // handle onsubmit
     const onSubmit = async function(data, e){
         e.preventDefault();
         // prevent multiple submissions
         if (isSubmitted) return;
         try{
           setIsSubmitted(true)
             const response = await axios.post('https://formsubmit.co/el/nomope', data,  {headers: {
               'Content-Type': 'application/json',
             },
         });
         
         toast('Feedback has been sent!')
 
         // 3 second delay and then navigate to home page
        //  setTimeout(function(){
        //    navigate("/")
        //  }, 2000);
 
             console.log('Form submitted successfully:', response.data);
             
           
             console.log("Sent!")
 
           
 
            
         }catch(error){
           // add toast for error
           toast.error("Error submitting form")
             console.error('Error submitting form:', error);
         }
 
       
     }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>

     
        <div className="feedback-form">
            
        <div className="name-fields">
        <div className="field">
        <Label className="mb-2" htmlFor="full-name">Full Name</Label>
        {errors.full_name && <span className="form-error">This field is required</span>}
        <Input className="w-[200px]" type="text" id="full-name" placeholder="Eg. Jane Doe" {...register("full_name",
                                                                                            {required: "This Field is required" },)}/>
        
        </div>

        <div className="field">
        <Label className="mb-2" htmlFor="email">Email</Label>
        {errors.email && <span className="form-error">{errors.email.message}</span>}
        <Input
  className="w-[200px]"
  type="email"
  id="email"
  placeholder="example@gmail.com"
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  })}
/>
        
        </div>
        

        </div>

        <div className="feedback-box">
      <Label htmlFor="feedback-area">Message</Label>
      {errors.feedback && <span className="form-error">This field is required</span>}
      <Textarea placeholder="Hi Vennisa, I want to build a website for my business and would love to connect . . ." id="feedback-area" {...register("feedback",{required: "Feedback field cannot be empty"})}/>
      <Toaster className="toaster" position="top-center"/>
      <Button type="submit">
        Send message</Button>
     </div>
       
        </div>
        
        </form>
        
       
        </> 
    );

}