
import { useState} from "react";
import { useForm } from "react-hook-form"
import {Toaster, toast} from 'sonner'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import "./Form.css"
import { apiKey } from "@/About/Constants";
// import 'dotenv/config'

export default function Form(){

     // handle multiple submissions
     const [isSubmitted, setIsSubmitted] = useState(false);
 
     const [form, setForm] = useState({})

     // initialize react-hook-form
     const {register, handleSubmit, formState: {errors}} = useForm();

  
     
     
    
     

     // handle onsubmit
     const onSubmit = async function(data, e){
         e.preventDefault();
         const formData = new FormData(e.target);

         formData.append("access_key", apiKey);
         // prevent multiple submissions

         if (isSubmitted) return;
         try{
           setIsSubmitted(true)
             const response = await axios.post('https://api.web3forms.com/submit', formData,  {headers: {
               'Content-Type': 'application/json',
             },
         });
         
        
      
        //  3 second delay and then navigate to home page
         setTimeout(function(){
            toast('Message has been sent!')
            e.target.reset();
         }, 500);

        //  setTimeout(function(){
        //     
        //  }, 20000);

         setTimeout(function(){
            const current_page = window.location.href;
            window.location.assign(current_page);
         }, 1000);

         // when form has submitted
         
        
            
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
        <form onSubmit={handleSubmit(onSubmit)} >

     
        <div className="feedback-form">
            
        <div className="name-fields">
        <div className="field">
        <Label className="mb-2" htmlFor="full-name">Full Name</Label>
        {errors.full_name && <span className="form-error">This field is required</span>}
        <Input onChange={(e) => setForm({...form, name: e.target.value})} className="input" type="text" id="full-name" placeholder="Eg. Jane Doe" {...register("full_name",
                                                                                            {required: "This Field is required" },)}/>
        
        </div>

        <div className="field">
        <Label className="mb-2" htmlFor="email">Email</Label>
        {errors.email && <span className="form-error">{errors.email.message}</span>}
        <Input
  className="input"
  type="email"
  id="email"
  onChange={(e) => setForm({...form, name: e.target.value})}
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
      <Textarea onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Hi Vennisa, I want to build a website for my business and would love to connect . . ." id="feedback-area" {...register("feedback",{required: "Feedback field cannot be empty"})}/>
      <Toaster className="toaster" position="top-center"/>
      <Button type="submit" >
        Send message</Button>
      <p className="text-sm text-muted-foreground">
        Thanks for connecting!
      </p>
     </div>
       
        </div>
        
        </form>
        
       
        </> 
    );

}