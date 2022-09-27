import "./input.css"
import { FiSearch } from 'react-icons/fi'

const Input = ({text, submit, func}) => {
  return (
    <form className="input" onSubmit={submit}>
        <input type={"text"} placeholder="Zəhmət olmasa şəhər (ölkə) qeyd edin" className="input_value" onChange={text}/>
        <span className="input_icon" onClick={func}>
            <FiSearch />
        </span>
    </form>
  )
}

export default Input