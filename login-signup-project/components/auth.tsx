// type specify 
export interface User{
    name:string;
    email:string;
    password:string;
}

//initial data
export const User_Data: User[]=[
    { name: 'John Doe', email: 'user@example.com', password: 'password123' },
    { name: 'Henry Diaz', email: 'hello@example.com', password: 'password123' },
]

//login function
export const loginUser=(email:string,passward:string)=>{
    const trimmedEmail=email.trim().toLowerCase();
    const trimmedPassward=passward.trim().toLowerCase();

    const findUser=User_Data.find(
        (user)=>user.email.trim().toLowerCase()=== trimmedEmail &&  user.password.trim().toLocaleLowerCase()===trimmedPassward
    )
    if(findUser){
        return{
            success:true,
            message: `Welcome Back, ${findUser.name}!`,
            user: findUser
        }
    }
    return{
        success:false,
        message:`Invalid email or password`
    }
}

//Signup function
export const regUser=(name:string,email:string,password:string)=>{
    const trimmedName=name.trim()
    const trimmedPawword=password.trim()
    const trimmedEmail=email.trim().toLowerCase()

    const userExist=User_Data.find(
        (user)=>user.email.trim().toLowerCase()===trimmedEmail
    )
    if(userExist){
        return{
            success:false,
            message:`User with this email already exists`
        }
    }

    const newUser={name:trimmedName,email:trimmedEmail,password:trimmedPawword}
    User_Data.push(newUser)

    return{
        success:true,
        message:`Account created successfully`,
        user:newUser
    }
}