
interface PropsInput {
  type: string,
  placeholder: string
}

const Input = ({type, placeholder}: PropsInput) => {
  return(
    <input type={type} placeholder={placeholder}/>
  )
}

export default Input