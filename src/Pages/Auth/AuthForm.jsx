

const AuthForm = ({type}) => {
  
  return (
    
   <>


   <div>
     {type === "signin" ? "Sign In " : "Sign Up"}
     {type==="signin" &&(
       <div>
      jitesh sign
     </div>

     )}
    

   </div>
   </>
  )
}

export default AuthForm
